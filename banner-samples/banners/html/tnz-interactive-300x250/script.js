// ---------------------------------------------------------------------------------
// LOAD IMAGES
// ---------------------------------------------------------------------------------

function politeLoadImages() {
    console.log("politeLoadImages");
    // Call the function 
    politeLoadDemImages(images, function () {
        console.log("politeLoadDemImages");
        // Do whatever you need to do when all images are loaded and assigned to their img tags....
        console.log("allImagesLoaded");
        initBanner();
    });
}

// Object with img ids and urls
var images = {
    'bgimage1Left': 'images/image-1-left.png',
    'bgimage1Right': 'images/image-1-right.png',
    'bgimage2a': 'images/image-2a.png',
    'bgimage2b': 'images/image-2b.png',
    'bgimage3a': 'images/image-3a.png',
    'bgimage3b': 'images/image-3b.png',
    'bgimage3c': 'images/image-3c.png',
    'bgimage3d': 'images/image-3d.png',
    'journeybg1': 'images/journey1bg.png',
    'journeybg2': 'images/journey2bg.png',
    'journeybg3': 'images/journey3bg.png',
    'journeybg4': 'images/journey4bg.png',
    'journeybg5': 'images/journey5bg.png',
    'journeybg6': 'images/journey6bg.png',
    'journeybg7': 'images/journey7bg.png',
    'journeybg8': 'images/journey8bg.png',
    'headline1': 'images/headline1.png',
    'text-choose': 'images/text-choose.png',
    'arrows': 'images/arrows.png',
    // bookmark elements 
    'bookmark-base': 'images/bookmark-base.png',
    'map': 'images/map.svg',
    'text-south-island': 'images/south-island.png',
    'pnz-small': 'images/pnz-small.png',
    // selected journey elements 
    'title1': 'images/title-1.png',
    'title2': 'images/title-2.png',
    'title3': 'images/title-3.png',
    'title4': 'images/title-4.png',
    'title5': 'images/title-5.png',
    'text-rollover': 'images/text-rollover.png',
    //'map-large': 'images/map.svg',
    'thumbs': 'images/thumbs.png',
    'cta-small': 'images/cta-small.png',
    // end frame elements 
    'edadj': 'images/edadj.png',
    'cta-large': 'images/cta-large.png',
    'pnz-large': 'images/pnz-large.png'
};

function politeLoadDemImages(images, onComplete) {

    // Vars to keep track of load count
    var loadCount = 0;
    var imagesToLoad = 0;
    // Determine how many images are to be loaded
    for (var id in images) {
        imagesToLoad++;
    }

    console.log("imagesToLoad : " + imagesToLoad);

    // Iterate through the images to be loaded and load the url to an image object
    for (var id in images) {
        var preloadImgTag = new Image();
        // The on load handler for each image object
        preloadImgTag.onload = function () {
                // Increment the load count
                loadCount++;
                if (loadCount === imagesToLoad) {
                    for (var id in images) {
                        // assign image to their associated img id src
                        document.getElementById(id).setAttribute("src", images[id]);
                    }
                    // Call the on complete call back if theres one to call
                    if (onComplete) onComplete();
                }
            }
            // Initiate the load by setting the src on each image object
        preloadImgTag.src = images[id];
    }
}

// ---------------------------------------------------------------------------------
// ANIMATION
// ---------------------------------------------------------------------------------

var bgImagesContainer = document.getElementById('bgimages-container');

var bgImage1Left = document.getElementById('bgimage1Left');
var bgImage1Right = document.getElementById('bgimage1Right');
var bgImage2a = document.getElementById('bgimage2a');
var bgImage2b = document.getElementById('bgimage2b');
var bgImage3a = document.getElementById('bgimage3a');
var bgImage3b = document.getElementById('bgimage3b');
var bgImage3c = document.getElementById('bgimage3c');
var bgImage3d = document.getElementById('bgimage3d');
var journeybg1 = document.getElementById('journeybg1');
var journeybg2 = document.getElementById('journeybg2');
var journeybg3 = document.getElementById('journeybg3');
var journeybg4 = document.getElementById('journeybg4');
var journeybg5 = document.getElementById('journeybg5');
var journeybg6 = document.getElementById('journeybg6');
var journeybg7 = document.getElementById('journeybg7');
var journeybg8 = document.getElementById('journeybg8');

var headline1 = document.getElementById('headline1');
var textChoose = document.getElementById('text-choose');
var arrows = document.getElementById('arrows');

var bookmarkBase = document.getElementById('bookmark-base');
var map = document.getElementById('map');
var mapMarkerMain = document.getElementById('mapmarker-main');
var textSouthIsland = document.getElementById('text-south-island');
var bookmarkDivider = document.getElementById('bookmark-divider');
var pnzSmall = document.getElementById('pnz-small');

var titleContainer = document.getElementById('title-container');
var title1 = document.getElementById('title1');
var title2 = document.getElementById('title2');
var title3 = document.getElementById('title3');
var title4 = document.getElementById('title4');
var title5 = document.getElementById('title5');
var textRollover = document.getElementById('text-rollover');
//var mapLarge = document.getElementById('map-large');
var mapMarker1 = document.getElementById('mapmarker1');
var mapMarker2 = document.getElementById('mapmarker2');
var mapMarker3 = document.getElementById('mapmarker3');
var thumbsContainer = document.getElementById('thumbs-container');
var thumbs = document.getElementById('thumbs');
var ctaSmall = document.getElementById('cta-small');

var edadj = document.getElementById('edadj');
var ctaLarge = document.getElementById('cta-large');
var pnzLarge = document.getElementById('pnz-large');

var blackOverlay = document.getElementById('black-overlay');
var bgExit = document.getElementById('bgexit');

var hotspotLeft = document.getElementById('hotspot-left');
var hotspotRight = document.getElementById('hotspot-right');

var leftElements = [titleContainer, textRollover, thumbsContainer, map, mapMarker1, mapMarker2, mapMarker3];
var rightElements = [ctaSmall, bookmarkBase, textSouthIsland, bookmarkDivider, pnzSmall];

var fadeTime = 1;
var animTimeIn = 1;
var animTimeOut = 0.75;
var staggerOffset = 0.25;
var mapMarkerAnimTime = 1;
var animOffsetDist = 30;
var bookmarkBaseAlpha = 0.7;

var animTypeIn = Cubic.easeOut;
var animTypeOut = Cubic.easeOut;
var imageScaleAnimType = Cubic.easeInOut;
var mapMarkerAnimType = Elastic.easeOut.config(1, 0.25);

var clickNum = 0;
var journeySequence = "";
var journeyNumSelected = 0;

var autoPlayTimer;
var autoPlayDelay = 15000;

var showEndFrameTimer;
var showEndFrameDelay = 15000;
var showEndFrameDelayShort = 5000;

var lastChar = "";
var journeyBGStartX = 0;

function initBanner() {
    console.log('initBanner');
    //addEventListeners();
    animateBanner();
}

function addEventListeners() {
    console.log('addEventListeners');
    hotspotLeft.addEventListener('click', leftHandler, false);
    hotspotRight.addEventListener('click', rightHandler, false);
    startAutoPlayTimer();
}

function exitHandler(event) {
    console.log('exitHandler');
    Enabler.exit('Exit');
}

function journeyExitHandler(event) {
    console.log('journeyExitHandler');
    switch (journeyNumSelected) {
    case 0:
        Enabler.exit('Exit');
        break;
    case 1:
        Enabler.exit('Alpine Lakes Exit');
        break;
    case 2:
        Enabler.exit('TranzAlpine Exit');
        break;
    case 3:
        Enabler.exit('Southern Scenic Exit');
        break;
    case 4:
        Enabler.exit('Cycling and Heritage Exit');
        break;
    case 5:
        Enabler.exit('Top of the South Exit');
        break;
    }
}

function leftHandler(event) {
    console.log('leftHandler');
    clickNum += 1;
    journeySequence += "L";
    progressJourney();
}

function rightHandler(event) {
    console.log('rightHandler');
    clickNum += 1;
    journeySequence += "R";
    progressJourney();
}

function startAutoPlayTimer() {
    console.log('startAutoPlayTimer');
    autoPlayTimer = setTimeout(autoPlay, autoPlayDelay);
}

function stopAutoPlayTimer() {
    console.log('stopAutoPlayTimer');
    clearTimeout(autoPlayTimer);
}

function autoPlay() {
    console.log('autoPlay');
    arrowsCentre();
    stopAutoPlayTimer();
}

function progressJourney() {
    console.log('progressJourney');
    console.log('clickNum : ' + clickNum);
    console.log('journeySequence : ' + journeySequence);

    if (clickNum == 1) {
        TweenMax.to(headline1, animTimeOut, {
            autoAlpha: 0,
            ease: animTypeOut
        });
        TweenMax.to(arrows, mapMarkerAnimTime * 2, {
            scale: 0,
            autoAlpha: 0,
            ease: mapMarkerAnimType,
            onComplete: killArrowTweens
        });
    }

    if (clickNum == 3) {
        lastChar = journeySequence.slice(-1);
        console.log("lastChar : " + lastChar);
        if (lastChar == "L") {
            journeyBGStartX = -300;
        } else if (lastChar == "R") {
            journeyBGStartX = 300;
        }
        TweenMax.to(textChoose, animTimeOut, {
            autoAlpha: 0,
            ease: animTypeOut
        });
        hotspotLeft.removeEventListener('click', leftHandler, false);
        hotspotRight.removeEventListener('click', rightHandler, false);
        hotspotLeft.style.visibility = 'hidden';
        hotspotRight.style.visibility = 'hidden';
    }

    switch (journeySequence) {

    case "L":
        bgImage2a.style.visibility = 'visible';
        TweenMax.to(bgImage2a, animTimeIn, {
            left: 0,
            ease: animTypeIn
        });
        break;

    case "R":
        bgImage2b.style.visibility = 'visible';
        TweenMax.to(bgImage2b, animTimeIn, {
            left: 0,
            ease: animTypeIn
        });
        break;

    case "LL":
        bgImage3a.style.visibility = 'visible';
        TweenMax.to(bgImage3a, animTimeIn, {
            left: 0,
            ease: animTypeIn
        });
        break;

    case "LR":
        bgImage3b.style.visibility = 'visible';
        TweenMax.to(bgImage3b, animTimeIn, {
            left: 0,
            ease: animTypeIn
        });
        break;

    case "RL":
        bgImage3c.style.visibility = 'visible';
        TweenMax.to(bgImage3c, animTimeIn, {
            left: 0,
            ease: animTypeIn
        });
        break;

    case "RR":
        bgImage3d.style.visibility = 'visible';
        TweenMax.to(bgImage3d, animTimeIn, {
            left: 0,
            ease: animTypeIn
        });
        break;

    case "LLL":
        console.log('Alpine Lakes');
        //bg
        journeybg1.style.visibility = 'visible';
        TweenMax.from(journeybg1, animTimeIn, {
            x: journeyBGStartX,
            ease: animTypeIn
        });
        alpineLakes();
        break;
    case "LLR":
        console.log('Tranzalpine');
        journeybg2.style.visibility = 'visible';
        TweenMax.from(journeybg2, animTimeIn, {
            x: journeyBGStartX,
            ease: animTypeIn
        });
        tranzAlpine();
        break;
    case "LRL":
        console.log('Tranzalpine');
        journeybg3.style.visibility = 'visible';
        TweenMax.from(journeybg3, animTimeIn, {
            x: journeyBGStartX,
            ease: animTypeIn
        });
        tranzAlpine();
        break;
    case "LRR":
        console.log('Southern Scenic');
        journeybg4.style.visibility = 'visible';
        TweenMax.from(journeybg4, animTimeIn, {
            x: journeyBGStartX,
            ease: animTypeIn
        });
        southernScenic();
        break;
    case "RLL":
        console.log('Cycling Heritage');
        journeybg5.style.visibility = 'visible';
        TweenMax.from(journeybg5, animTimeIn, {
            x: journeyBGStartX,
            ease: animTypeIn
        });
        cyclingHeritage();
        break;
    case "RLR":
        console.log('Top of the South');
        journeybg6.style.visibility = 'visible';
        TweenMax.from(journeybg6, animTimeIn, {
            x: journeyBGStartX,
            ease: animTypeIn
        });
        topOfTheSouth();
        break;
    case "RRL":
        console.log('Top of the South');
        journeybg7.style.visibility = 'visible';
        TweenMax.from(journeybg7, animTimeIn, {
            x: journeyBGStartX,
            ease: animTypeIn
        });
        topOfTheSouth();
        break;
    case "RRR":
        console.log('Southern Scenic');
        journeybg8.style.visibility = 'visible';
        TweenMax.from(journeybg8, animTimeIn, {
            x: journeyBGStartX,
            ease: animTypeIn
        });
        southernScenic();
        break;
    }
}

function setMapMarkers(mm1L, mm1T, mm2L, mm2T, mm3L, mm3T) {
    TweenMax.set(mapMarker1, {
        top: mm1T,
        left: mm1L
    });
    TweenMax.set(mapMarker2, {
        top: mm2T,
        left: mm2L
    });
    TweenMax.set(mapMarker3, {
        top: mm3T,
        left: mm3L
    });

}

function alpineLakes() {
    journeyNumSelected = 1;
    // mapMarkers
    setMapMarkers(134, 163, 126, 171, 114, 183);
    // thumbs
    TweenMax.set(thumbs, {
        left: 0
    });
    // title
    title1.style.visibility = 'visible';
    showJourneyFrame();
}

function tranzAlpine() {
    journeyNumSelected = 2;
    // mapMarkers
    setMapMarkers(126, 153, 138, 136, 156, 154);
    // thumbs
    TweenMax.set(thumbs, {
        left: -120
    });
    // title
    title2.style.visibility = 'visible';
    showJourneyFrame();
}

function southernScenic() {
    journeyNumSelected = 3;
    // mapMarkers
    setMapMarkers(132, 196, 121, 205, 103, 178);
    // thumbs
    TweenMax.set(thumbs, {
        left: -240
    });
    // title
    title3.style.visibility = 'visible';
    showJourneyFrame();
}

function cyclingHeritage() {
    journeyNumSelected = 4;
    // mapMarkers
    setMapMarkers(132, 172, 132, 196, 109, 183);
    // thumbs
    TweenMax.set(thumbs, {
        left: -360
    });
    // title
    title4.style.visibility = 'visible';
    showJourneyFrame();
}

function topOfTheSouth() {
    journeyNumSelected = 5;
    // mapMarkers
    setMapMarkers(168, 138, 169, 122, 159, 113);
    // thumbs
    TweenMax.set(thumbs, {
        left: -480
    });
    // title
    title5.style.visibility = 'visible';
    showJourneyFrame();
}

function showJourneyFrame() {
    console.log('showJourneyFrame');

    TweenMax.to(blackOverlay, fadeTime, {
        autoAlpha: bookmarkBaseAlpha,
        ease: animTypeIn
    });

    TweenMax.to(mapMarkerMain, animTimeOut / 4, {
        autoAlpha: 0,
        ease: animTypeOut
    });

    TweenMax.to(map, animTimeOut, {
        x: -13,
        y: -181,
        width: 135,
        height: 211,
        ease: Cubic.easeInOut
    });

    TweenMax.staggerFrom([titleContainer, textRollover], animTimeIn, {
        delay: animTimeOut,
        autoAlpha: 0,
        x: -animOffsetDist,
        ease: animTypeIn
    }, staggerOffset);

    TweenMax.from(ctaSmall, animTimeIn, {
        delay: animTimeOut,
        x: animOffsetDist,
        autoAlpha: 0,
        ease: animTypeIn
    });

    TweenMax.staggerFrom([mapMarker1, mapMarker2, mapMarker3], mapMarkerAnimTime, {
        delay: animTimeOut,
        scale: 0,
        autoAlpha: 0,
        ease: mapMarkerAnimType
    }, staggerOffset, activateMapMarkers);

    ctaSmall.addEventListener('click', journeyExitHandler, false);


}

function activateMapMarkers() {
    console.log('activateMapMarkers');
    startEndFrameTimer();
    mapMarker1.addEventListener('mouseover', mm1OverHandler, false);
    mapMarker2.addEventListener('mouseover', mm2OverHandler, false);
    mapMarker3.addEventListener('mouseover', mm3OverHandler, false);
    mapMarker1.addEventListener('mouseout', mmOutHandler, false);
    mapMarker2.addEventListener('mouseout', mmOutHandler, false);
    mapMarker3.addEventListener('mouseout', mmOutHandler, false);
}

function startEndFrameTimer() {
    console.log('startEndFrameTimer');
    showEndFrameTimer = setTimeout(showEndFrame, showEndFrameDelay);
}

function stopEndFrameTimer() {
    console.log('stopEndFrameTimer');
    clearTimeout(showEndFrameTimer);
}

function showEndFrame() {
    console.log('showEndFrame');

    mapMarker1.removeEventListener('mouseover', mm1OverHandler);
    mapMarker2.removeEventListener('mouseover', mm2OverHandler);
    mapMarker3.removeEventListener('mouseover', mm3OverHandler);
    mapMarker1.removeEventListener('mouseout', mmOutHandler);
    mapMarker2.removeEventListener('mouseout', mmOutHandler);
    mapMarker3.removeEventListener('mouseout', mmOutHandler);

    ctaSmall.addEventListener('click', journeyExitHandler);

    bgExit.addEventListener('click', exitHandler, false);
    ctaLarge.addEventListener('click', exitHandler, false);

    stopEndFrameTimer();

    TweenMax.to(leftElements, animTimeOut, {
        x: "-=" + 300,
        ease: Cubic.easeIn
    });
    TweenMax.to(rightElements, animTimeOut, {
        x: "+=" + 300,
        ease: Cubic.easeIn,
        onComplete: endFrame
    });
}

function mm1OverHandler() {
    console.log('mm1OverHandler');

    stopEndFrameTimer();

    TweenMax.set(thumbs, {
        top: 0,
        autoAlpha: 0
    });

    TweenMax.fromTo(mapMarker1, mapMarkerAnimTime, {
        scale: 1.5,
        ease: mapMarkerAnimType
    }, {
        scale: 1,
        ease: mapMarkerAnimType
    });

    TweenMax.to(thumbs, animTimeIn / 2, {
        autoAlpha: 1,
        ease: animTypeIn
    });

}

function mm2OverHandler() {
    console.log('mm2OverHandler');

    stopEndFrameTimer();

    TweenMax.set(thumbs, {
        top: -120,
        autoAlpha: 0
    });

    TweenMax.fromTo(mapMarker2, mapMarkerAnimTime, {
        scale: 1.5,
        ease: mapMarkerAnimType
    }, {
        scale: 1,
        ease: mapMarkerAnimType
    });

    TweenMax.to(thumbs, animTimeIn / 2, {
        autoAlpha: 1,
        ease: animTypeIn
    });
}

function mm3OverHandler() {
    console.log('mm3OverHandler');

    stopEndFrameTimer();

    TweenMax.set(thumbs, {
        top: -240,
        autoAlpha: 0
    });

    TweenMax.fromTo(mapMarker3, mapMarkerAnimTime, {
        scale: 1.5,
        ease: mapMarkerAnimType
    }, {
        scale: 1,
        ease: mapMarkerAnimType
    });

    TweenMax.to(thumbs, animTimeIn / 2, {
        autoAlpha: 1,
        ease: animTypeIn
    });
}

function mmOutHandler() {
    console.log('mmOutHandler');

    showEndFrameDelay = showEndFrameDelayShort;
    startEndFrameTimer();

    TweenMax.to(thumbs, animTimeOut / 2, {
        autoAlpha: 0,
        ease: animTypeOut
    });

}

function animateBanner() {
    console.log('animateBanner');
    frame1();
}

function frame1() {
    console.log('frame1');

    bgImage1Left.style.visibility = 'visible';
    bgImage1Right.style.visibility = 'visible';

    TweenMax.to(blackOverlay, fadeTime, {
        autoAlpha: 0,
        ease: animTypeIn
    });

    TweenMax.from(bgImage1Left, animTimeIn*2, {
        x: -150,
        ease: animTypeIn
    });

    TweenMax.from(bgImage1Right, animTimeIn*2, {
        x: 150,
        ease: animTypeIn
    });

    TweenMax.from(headline1, animTimeIn, {
        delay: animTimeIn*2,
        y: '-=' + animOffsetDist,
        autoAlpha: 0,
        ease: animTypeIn
    });

    TweenMax.from([bookmarkBase, map, textSouthIsland, bookmarkDivider, pnzSmall], animTimeIn, {
        delay: animTimeIn*2,
        y: '+=' + animOffsetDist,
        autoAlpha: 0,
        ease: animTypeIn
    });

    TweenMax.from(mapMarkerMain, mapMarkerAnimTime * 1.5, {
        delay: animTimeIn*2,
        scale: 0,
        autoAlpha: 0,
        ease: mapMarkerAnimType
    });

    TweenMax.from(textChoose, animTimeIn, {
        delay: animTimeIn*2,
        y: '+=' + animOffsetDist,
        autoAlpha: 0,
        ease: animTypeIn,
        onComplete: addEventListeners
    });

    TweenMax.from(arrows, mapMarkerAnimTime * 2, {
        delay: animTimeIn*2,
        scale: 0,
        autoAlpha: 0,
        ease: mapMarkerAnimType,
        onComplete: arrowsLeft
    });

}

function arrowsLeft() {
    TweenMax.to(arrows, 1, {
        x: -5,
        ease: Cubic.easeInOut,
        onComplete: arrowsRight
    });
}

function arrowsRight() {
    TweenMax.to(arrows, 1, {
        x: 5,
        ease: Cubic.easeInOut,
        onComplete: arrowsLeft
    });
}

function arrowsCentre() {
    TweenMax.to(arrows, 1, {
        x: 0,
        ease: Cubic.easeInOut,
        onComplete: killArrowTweens
    });
}

function killArrowTweens() {
    console.log('killArrowTweens');
    TweenMax.killTweensOf(arrows);
}

function endFrame() {
    console.log('endFrame');
    TweenMax.staggerFrom([edadj, ctaLarge, pnzLarge], animTimeIn, {
        y: animOffsetDist,
        autoAlpha: 0,
        ease: animTypeIn
    }, staggerOffset);

}

politeLoadImages();