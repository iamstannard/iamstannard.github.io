var fadeTime = 2; 
var animTimeIn = 1; 
var animTimeOut = 1; 
var delayOffset = 0.2; 
var animTypeIn = Cubic.easeOut;
var animTypeOut = Cubic.easeOut;
var mapMarkerAnimTime = 2; 
var mapMarkerAnimType = Elastic.easeOut.config(1, 0.25);
var animOffsetDist = 30;
var imageScaleTime = 6;
var imageStartScale = 1.2;
var imageScaleAnimType = Cubic.easeInOut;
var bookmarkBaseAlpha = 0.75;

function getCSS(element, property) {
	var elem = document.getElementById(element);
	var css = null;
	if(elem.currentStyle) {
		css = elem.currentStyle[property];
	} else if(window.getComputedStyle) {
		css = document.defaultView.getComputedStyle(elem, null).
		getPropertyValue(property);
	}
	return css;
}

var bannerWidth = parseInt(getCSS('bannerContainer', 'width'));
var bannerHeight = parseInt(getCSS('bannerContainer', 'height'));

var bgImageWidth = parseInt(getCSS('bgimage1', 'width'));
var bgImageHeight = parseInt(getCSS('bgimage1', 'height'));

console.log('bannerWidth : '+bannerWidth+' | bannerHeight : '+bannerHeight);
console.log('bgImageWidth : '+bgImageWidth+' | bgImageHeight : '+bgImageHeight);

var bgimage1 = document.getElementById('bgimage1');
var bgimage2 = document.getElementById('bgimage2');
var bookmarkBase = document.getElementById('bookmark-base');
var headline1 = document.getElementById('headline1');
var headline2 = document.getElementById('headline2');
var headline3 = document.getElementById('headline3');
var map = document.getElementById('map');
var mapmarker1 = document.getElementById('mapmarker1');
var mapmarker2 = document.getElementById('mapmarker2');
var location1 = document.getElementById('location1');
var location2 = document.getElementById('location2');
var bookmarkDivider = document.getElementById('bookmark-divider');
var pnzSmall = document.getElementById('pnz-small');
var partnerLogo = document.getElementById('partner-logo');
var offer = document.getElementById('offer');
var price = document.getElementById('price');
var btnCTA = document.getElementById('btn-cta');
var pnzLarge = document.getElementById('pnz-large');
var terms = document.getElementById('terms');
var blackOverlay = document.getElementById('black-overlay');

var bookmarkAssets = [
						map,
						mapmarker1,
						mapmarker2,
						location1,
						location2,
						bookmarkDivider,
						pnzSmall
					];

function initBanner(){
	console.log('initBanner');
	addEventListeners();
	animateBanner();
}

function animateBanner(){
	console.log('animateBanner');
	frame1();
}

function bgExitHandler(event) {
	console.log('bgExitHandler');
	Enabler.exit('Exit');
}

function addEventListeners () {
	console.log('addEventListeners');
	document.getElementById('bgexit').addEventListener('click', bgExitHandler, false);
	document.getElementById('btn-cta').addEventListener('click', bgExitHandler, false);
}

function frame1(){
	console.log('frame1');

	bgimage1.style.visibility = 'visible';
	bookmarkBase.style.visibility = 'visible';
	headline1.style.visibility = 'visible';
	map.style.visibility = 'visible';
	mapmarker1.style.visibility = 'visible';
	location1.style.visibility = 'visible';
	bookmarkDivider.style.visibility = 'visible';
	pnzSmall.style.visibility = 'visible';

	TweenMax.to(blackOverlay, fadeTime, {autoAlpha:0, ease:animTypeIn});

	TweenMax.to(bgimage1, imageScaleTime, {scale:1/imageStartScale, ease:imageScaleAnimType});

	TweenMax.from(headline1, animTimeIn, {delay:fadeTime, y:'-='+animOffsetDist, alpha:0, ease:animTypeIn});
	TweenMax.from([bookmarkBase,bookmarkAssets], animTimeIn, {delay:fadeTime, y:'+='+animOffsetDist, alpha:0, ease:animTypeIn});
	TweenMax.from(mapmarker1, mapMarkerAnimTime, {delay:fadeTime+animTimeIn, scale:0, ease:mapMarkerAnimType});

	TweenMax.delayedCall(6, frame2);

}

function frame2(){

	console.log('frame2');

// frame 1 assets out
	TweenMax.to([headline1, location1, mapmarker1], animTimeOut, {autoAlpha:0, ease:animTypeOut});

// frame 2 assets in
	bgimage2.style.visibility = 'visible';
	headline2.style.visibility = 'visible';
	mapmarker2.style.visibility = 'visible';
	location2.style.visibility = 'visible';

    TweenMax.from(bgimage2, fadeTime, {alpha:0, ease:animTypeIn});
    TweenMax.to(bgimage2, imageScaleTime, {scale:1/imageStartScale, ease:imageScaleAnimType});

	TweenMax.from(headline2, animTimeIn, {delay:animTimeOut/2,y:'-='+animOffsetDist, alpha:0, ease:animTypeIn});
	TweenMax.from(location2, animTimeIn, {delay:animTimeOut/2,alpha:0, ease:animTypeIn});
	TweenMax.from(mapmarker2, mapMarkerAnimTime, {delay:animTimeOut/2,scale:0, ease:mapMarkerAnimType});

	TweenMax.delayedCall(4, frame3);

}

function frame3(){

	console.log('frame3');

// frame 2 assets out
	bgimage1.style.visibility = 'hidden';
	TweenMax.to(headline2, animTimeOut, {autoAlpha:0, ease:animTypeOut});


// frame 3 assets in
	headline3.style.visibility = 'visible';
	TweenMax.from(headline3, animTimeIn, {delay:animTimeOut/2, y:'-='+animOffsetDist, alpha:0, ease:animTypeIn});


	TweenMax.delayedCall(4, frame4);

}

function frame4(){

	console.log('frame4');

	// frame 3 assets out
	TweenMax.to([headline3, bookmarkAssets], animTimeOut, {autoAlpha:0, ease:animTypeOut});
	TweenMax.to(bookmarkBase, animTimeOut+animTimeIn, {x:-103, y: -192, alpha:bookmarkBaseAlpha, clip:'rect(0px 320px 270px 0px)', ease:Cubic.easeInOut});
	
	// frame 4 assets in
	partnerLogo.style.visibility = 'visible';
	offer.style.visibility = 'visible';
	price.style.visibility = 'visible';
	btnCTA.style.visibility = 'visible';
	pnzLarge.style.visibility = 'visible';
	terms.style.visibility = 'visible';

	TweenMax.from(partnerLogo, animTimeIn, {delay:animTimeOut+animTimeIn/6, y:'+='+animOffsetDist, alpha:0, ease:animTypeIn});
	TweenMax.from(offer, animTimeIn, {delay:animTimeOut+animTimeIn/5, y:'+='+animOffsetDist, alpha:0, ease:animTypeIn});
	TweenMax.from(price, animTimeIn, {delay:animTimeOut+animTimeIn/4, y:'+='+animOffsetDist, alpha:0, ease:animTypeIn});
	TweenMax.from(btnCTA, animTimeIn, {delay:animTimeOut+animTimeIn/3, y:'+='+animOffsetDist, alpha:0, ease:animTypeIn});
	TweenMax.from(pnzLarge, animTimeIn, {delay:animTimeOut+animTimeIn/2, y:'+='+animOffsetDist, alpha:0, ease:animTypeIn});
	TweenMax.from(terms, animTimeIn, {delay:animTimeOut+animTimeIn, alpha:0, ease:animTypeIn});
}

initBanner();







