var fadeTime = 4; 
var animTimeIn = 1; 
var animTimeOut = 1; 
var delayOffset = 0.2; 
var animTypeIn = Cubic.easeOut;
var animTypeOut = Cubic.easeOut;
var animOffsetDist = 20;

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

console.log('bannerWidth : '+bannerWidth+' | bannerHeight : '+bannerHeight);

var image = document.getElementById('image');
var silhouette = document.getElementById('silhouette');
var headline = document.getElementById('headline');
var copy = document.getElementById('copy');
var twpz = document.getElementById('twpz');
var ftw = document.getElementById('ftw');
var btn = document.getElementById('btn');
// var blackOverlay = document.getElementById('black-overlay');

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
}

function frame1(){
	
	console.log('frame1In');

	TweenMax.from(headline, 1, {delay:0.5, autoAlpha:0, y:animOffsetDist, ease:animTypeIn});

	TweenMax.delayedCall(3, frame2);

}

function frame2(){

	console.log('frame2');

// frame 1 assets out
TweenMax.to(headline, fadeTime/2, {autoAlpha:0, ease:animTypeOut});

// frame 2 assets in
image.style.visibility = 'visible';
silhouette.style.visibility = 'visible';
TweenMax.from(image, fadeTime, {autoAlpha:0, ease:animTypeIn});
TweenMax.to(silhouette, fadeTime*3, {autoAlpha:0, ease:animTypeIn});

TweenMax.delayedCall(9, frame3);

}

function frame3(){

	console.log('frame3');

// frame 2 assets out
TweenMax.to(image, fadeTime/2, {autoAlpha:0, ease:animTypeOut});

// frame 3 assets in
TweenMax.from(copy, 1, {delay:fadeTime/4, autoAlpha:0, y:animOffsetDist, ease:animTypeIn});

TweenMax.delayedCall(5, frame4);

}

function frame4(){

	console.log('frame4');

// frame 3 assets out
TweenMax.to(copy, 1, {autoAlpha:0, ease:animTypeOut});

// frame 4 assets in
TweenMax.from(twpz, 1, {delay:1, autoAlpha:0, y:animOffsetDist, ease:animTypeIn});
TweenMax.from(ftw, 1, {delay:1+0.25, autoAlpha:0, y:animOffsetDist, ease:animTypeIn});
TweenMax.from(btn, 1, {delay:1+0.5, autoAlpha:0, y:animOffsetDist, ease:animTypeIn});

}

initBanner();







