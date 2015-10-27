function initBanner() {
    console.log('initBanner');
    loadScript("libs/TweenMax.min.js", startAnim);
    addEventListeners();
}

// function lo load external js library

function loadScript(url, callback) {
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState) { // ie
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" ||
                script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else { // others
        script.onload = function () {
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

function addEventListeners() {
    console.log('addEventListeners');
    document.getElementById('bgexit').addEventListener('click', bgExitHandler, false);
}

function bgExitHandler(event) {
    console.log('bgExitHandler');
    Enabler.exit('Exit');
}

// Get elements

var frame1 = document.getElementById( "frame1" );
var frame2 = document.getElementById( "frame2" );
var frame3 = document.getElementById( "frame3" );
var frame4 = document.getElementById( "frame4" );
var endFrame = document.getElementById( "end-frame" );

var frontBushes = document.getElementsByClassName( "bush-front" );
var backBushes = document.getElementsByClassName( "bush-back" );
var copy1 = document.getElementById( "copy1" );
var copy2 = document.getElementById( "copy2" );
var copy3 = document.getElementById( "copy3" );
var copy4 = document.getElementById( "copy4" );
var cta1 = document.getElementById( "interaction-cta1" );
var cta2 = document.getElementById( "interaction-cta2" );
var cta3 = document.getElementById( "interaction-cta3" );
var leaf1 = document.getElementById( "frame1-leaf" );
var leaf2 = document.getElementById( "frame2-leaf" );
var leaf3 = document.getElementById( "frame3-leaf" );
var logo = document.getElementById( "logo" );
var lockup = document.getElementById( "lockup" );
var ctaButton = document.getElementById( "ctaButton" );
var currentFrame = 0;

function startAnim() {
    
    leaf1.addEventListener('click', onLeafClick, false);
    leaf2.addEventListener('click', onLeafClick, false);
    leaf3.addEventListener('click', onLeafClick, false);

    document.getElementById("bannerContainer").style.display = "block";
   
    showLeaves();
    showFrame1();
}

var isInteractedWith = false;
function onLeafClick(){

    isInteractedWith = true; 

    var funcName = "hideFrame" + currentFrame;
    window[funcName]();

    currentFrame++;

}

function showAnimal( animal ) {

    var FRAME_LENGTH = 1.5;
    if( isInteractedWith ) FRAME_LENGTH = 3;

    hideLeaves();

    var animalToShow = document.getElementById( animal );
    animalToShow.style.display = "block";

    TweenMax.set( animalToShow, { alpha:0 } );
    TweenMax.to( animalToShow, 0.5, { alpha:1 } );
    TweenMax.to( animalToShow, 2, { scaleX:1.1, scaleY:1.1 } );
    TweenMax.to( animalToShow, 1, { delay: FRAME_LENGTH, alpha:0, onStart:function(){

         switch ( animal ) {

            case "elephant" :
                showLeaves();
            break;

            case "seal" :
                showLeaves();
            break;

            case "gondola" :
                retractLeaves();
                document.getElementById("bannerContainer").className = "greenBg";
            break;
        }

    }, onComplete:function(){

        switch ( animal ) {

            case "elephant" :
                showFrame2();
            break;

            case "seal" :
                showFrame3();
            break;

            case "gondola" :
                showFrame4();
            break;
        }
    }});
}

function shakeLeaf( leaf ) {
    TweenMax.to( leaf, 0.05, { rotation: "+="+-10, yoyo:true, repeat:5 } );
    TweenMax.to( leaf, 0.05, { delay: 3.5, rotation: "+="+-10, yoyo:true, repeat:5 } );
}

function showFrame1(){ 

    currentFrame = 1;

    var FRAME_LENGTH = 7;

    frame1.style.display = "block";
    TweenMax.from( copy1, 0.5,  { delay: 0.2, alpha: 0, y: 20, ease:Quad.easeOut }  );
    TweenMax.from( copy2, 0.5,  { delay: 0.4, alpha: 0, y: 20, ease:Quad.easeOut }  );
    TweenMax.from( cta1, 0.5,   { delay: 0.5, alpha: 0, ease:Quad.easeOut }  );
    TweenMax.from( leaf1, 0.5,   { delay: 0.8, alpha: 0, ease:Quad.easeOut, onComplete:shakeLeaf, onCompleteParams:[leaf1] }  );
    
    // Cue next frame
    setTimeout( function(){

        if( currentFrame === 1 ) {
            hideFrame1();
        }
        
    }, FRAME_LENGTH*1000 );
}

function hideFrame1(){
    TweenMax.to( frame1, 0.5,  { alpha: 0, ease:Quad.easeOut, onComplete: showAnimal, onCompleteParams:["elephant"] }  );    
}

function showFrame2(){

    currentFrame = 2;

    var FRAME_LENGTH = 4;
    if( isInteractedWith ) FRAME_LENGTH = 6;

    frame1.style.display = "none";
    frame2.style.display = "block";
    TweenMax.from( cta2, 0.5,  { delay: 0.4, alpha: 0, ease:Quad.easeOut }  );
    TweenMax.from( leaf2, 0.5,   { delay: 0.5, alpha: 0, ease:Quad.easeOut, onComplete:shakeLeaf, onCompleteParams:[leaf2] }  );

    // Cue next frame
    setTimeout( function(){

        if( currentFrame === 2 ) {
            hideFrame2();
        }
        
    }, FRAME_LENGTH*1000 );
}

function hideFrame2(){
    TweenMax.to( frame2, 0.5,  { alpha: 0, ease:Quad.easeOut, onComplete: showAnimal, onCompleteParams:["seal"] }  );
}

function showFrame3(){

    currentFrame = 3;

    var FRAME_LENGTH = 4;
    if( isInteractedWith ) FRAME_LENGTH = 6;

    frame2.style.display = "none";
    frame3.style.display = "block";
    TweenMax.from( cta3, 0.5,  { delay: 0.4, alpha: 0, ease:Quad.easeOut }  );
    TweenMax.from( leaf3, 0.5,   { delay: 0.5, alpha: 0, ease:Quad.easeOut, onComplete:shakeLeaf, onCompleteParams:[leaf3] }  );

    // Cue next frame
     setTimeout( function(){

        if( currentFrame === 3 ) {
            hideFrame3();
        }
        
    }, FRAME_LENGTH*1000 );
}

function hideFrame3(){
    TweenMax.to( frame3, 0.5,  { alpha: 0, ease:Quad.easeOut, onComplete: showAnimal, onCompleteParams:["gondola"] }  );  
}

function showFrame4(){

    currentFrame = 4;

    var FRAME_LENGTH = 4;

    frame3.style.display = "none";
    frame4.style.display = "block";

    TweenMax.from( copy3, 0.5,  { delay: 0.2, alpha: 0, y: 20, ease:Quad.easeOut }  );
    TweenMax.from( copy4, 0.5,  { delay: 0.4, alpha: 0, y: 20, ease:Quad.easeOut }  );
    TweenMax.to( frame4, 0.5,  { delay: FRAME_LENGTH, alpha: 0, ease:Quad.easeOut, onComplete: showEndFrame }  );    
}

function showEndFrame(){

    currentFrame = 5;

    frame4.style.display = "none";
    endFrame.style.display = "block";
    TweenMax.from( logo, 0.5,  { delay: 0.2, alpha: 0, y: 20, ease:Quad.easeOut }  );
    TweenMax.from( lockup, 0.5,  { delay: 0.4, alpha: 0, y: 20, ease:Quad.easeOut }  );
    TweenMax.from( ctaButton, 0.5,  { delay: 0.4, alpha: 0, y: 20, ease:Quad.easeOut }  );

    removeLeaves();
}

function showLeaves(){
    addClassName( "back", "visible" );
    setTimeout( function(){  addClassName( "front", "visible" );  }, 50 );
}

function hideLeaves(){
    addClassName( "back", "hidden" );
    setTimeout( function(){  addClassName( "front", "hidden" );  }, 50 );
}

function retractLeaves(){
    addClassName( "back", "retracted" );
    setTimeout( function(){  addClassName( "front", "retracted" );  }, 50 );
}

function removeLeaves(){
    addClassName( "back", "removed" );
    setTimeout( function(){  addClassName( "front", "removed" );  }, 50 );
}

function addClassName( group, classname) {

    var leaves = document.getElementsByClassName( "bush-"+group );
    for( var i = 0; i < leaves.length; i++ ) {
        leaves[ i ].className = "bush-"+group + " " + classname;
    }
}



initBanner();

//window.onload = function() {
//    initBanner();
//};