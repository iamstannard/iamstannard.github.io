var creative = {};

/**
 * Window onload handler.
 */

function preInit() {
    setupDom();
    if (Enabler.isInitialized()) {
        init();
    } else {
        Enabler.addEventListener(
            studio.events.StudioEvent.INIT,
            init
        );
    }
}

/**
 * Initializes the ad components
 */

function setupDom() {
    creative.dom = {};
    creative.dom.mainContainer = document.getElementById('main-container');
    //    creative.dom.expandedExit = document.getElementById('expanded-exit');
    creative.dom.expandedContent = document.getElementById('expanded-content');
    creative.dom.expandMain = document.getElementById('expand-main');
    creative.dom.collapsedContent = document.getElementById('collapsed-content');
    creative.dom.collapseButton = document.getElementById('collapseButton');
    creative.dom.expandButton = document.getElementById('expandButton');
    //    creative.dom.closeButton = document.getElementById('close-button');
}

/**
 * Ad initialisation
 */

function init() {
    Enabler.setExpandingPixelOffsets(0, 0, 970, 500);
    Enabler.setStartExpanded(false);

    addListeners();

    // Polite loading
    if (Enabler.isVisible()) {
        politeLoadImages();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, politeLoadImages);
    }
}

/**
 * Adds appropriate listeners at initialization time
 */

function addListeners() {
    Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, expandStartHandler);
    Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, expandFinishHandler);
    Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, collapseStartHandler);
    Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, collapseFinishHandler);
    creative.dom.expandButton.addEventListener('click', onExpandHandler, false);
    creative.dom.collapseButton.addEventListener('click', onCollapseClickHandler, false);
    //creative.dom.expandedExit.addEventListener('click', exitClickHandler);
    creative.dom.expandMain.addEventListener('click', onExpandHandler);
    //    creative.dom.closeButton.addEventListener('click', closeClickHandler);
}

/**
 *  Shows the ad.
 */

function show() {
    console.log("show ad");
    creative.dom.expandedContent.style.display = 'none';
    //    creative.dom.expandedExit.style.display = 'none';
    creative.dom.collapseButton.style.display = 'none';
    creative.dom.collapsedContent.style.display = 'block';
    creative.dom.expandMain.style.display = 'block';
    creative.dom.expandButton.style.display = 'block';
    //    creative.dom.closeButton.style.display = 'block';
    startAnim();
}

// ---------------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------------

function expandStartHandler() {
    // Show expand over the top
    creative.dom.expandedContent.style.display = 'block';
    //creative.dom.expandedExit.style.display = 'block';
    creative.dom.collapseButton.style.display = 'block';
    creative.dom.mainContainer.style.width = '970px';
    creative.dom.mainContainer.style.height = '500px';
    creative.dom.collapsedContent.style.display = 'none';
    creative.dom.expandMain.style.display = 'none';
    creative.dom.expandButton.style.display = 'none';
    Enabler.finishExpand();
}

function expandFinishHandler() {
    creative.isExpanded = true;
    startExpandedAnim();
}

function collapseStartHandler() {
    // Perform collapse animation.
    creative.dom.expandedContent.style.display = 'none';
    //    creative.dom.expandedExit.style.display = 'none';
    creative.dom.collapseButton.style.display = 'none';
    creative.dom.mainContainer.style.width = '970px';
    creative.dom.mainContainer.style.height = '250px';
    creative.dom.collapsedContent.style.display = 'block';
    creative.dom.expandMain.style.display = 'block';
    creative.dom.expandButton.style.display = 'block';
    // When animation finished must call
    Enabler.finishCollapse();
}

function collapseFinishHandler() {
    creative.isExpanded = false;
}

function onCollapseClickHandler() {
    Enabler.reportManualClose();
    Enabler.requestCollapse();
    Enabler.stopTimer('Panel Expansion');
}

function onExpandHandler() {
    Enabler.requestExpand();
    Enabler.startTimer('Panel Expansion');
}

function exitClickHandler() {
    Enabler.requestCollapse();
    Enabler.stopTimer('Panel Expansion');
    switch (selectedJourney) {
    case 1:
        Enabler.exit('Alpine Lakes Exit');
        break;
    case 2:
        Enabler.exit('Top of the South Exit');
        break;
    case 3:
        Enabler.exit('TranzAlpine Exit');
        break;
    case 4:
        Enabler.exit('Cycling and Heritage Exit');
        break;
    case 5:
        Enabler.exit('Southern Scenic Exit');
        break;
    default:
        Enabler.exit('Exit');
    }
}

function closeClickHandler() {
    console.log('closeClickHandler');
}

/**
 *  Main onload handler
 */

window.addEventListener('load', preInit);

// ---------------------------------------------------------------------------------
// LOAD IMAGES
// ---------------------------------------------------------------------------------

function politeLoadImages() {
    console.log("politeLoadImages");
    // Call the function 
    politeLoadDemImages(images, function () {
        console.log("politeLoadDemImages");
        // Do whatever you need to do when all images are loaded and assigned to their img tags....
        console.log("allDemImagesBeLoadedYo");
        show();
    });
}

// Object with img ids and urls
var images = {
    "bg1": "images/collapsed/bg1.jpg",
    "bg2": "images/collapsed/bg2.jpg",
    "headline1": "images/collapsed/headline1.png",
    "headline2": "images/collapsed/headline2.png",
    "bookmarkBase": "images/collapsed/bookmarkBase.png",
    "map": "images/collapsed/map.png",
    "location1": "images/collapsed/location1.png",
    "location2": "images/collapsed/location2.png",
    "pnzSmall": "images/collapsed/pnzSmall.png",
    "expandButton": "images/collapsed/btnExpand.png",

    "bg1Expanded": "images/expanded/bg.jpg",
    "pnzLarge": "images/expanded/pnzLarge.png",
    "mapLarge": "images/expanded/mapLarge.png",
    "btnCTA": "images/expanded/btnCTA.png",

    "trail1": "images/expanded/trail1.png",
    "trail2": "images/expanded/trail2.png",
    "trail3": "images/expanded/trail3.png",
    "trail4": "images/expanded/trail4.png",
    "trail5": "images/expanded/trail5.png",

    "icons1": "images/expanded/icons1.png",
    "icons2": "images/expanded/icons2.png",
    "icons3": "images/expanded/icons3.png",
    "icons4": "images/expanded/icons4.png",
    "icons5": "images/expanded/icons5.png",

    "journeyTitle1": "images/expanded/journeyTitle1.png",
    "journeyTitle2": "images/expanded/journeyTitle2.png",
    "journeyTitle3": "images/expanded/journeyTitle3.png",
    "journeyTitle4": "images/expanded/journeyTitle4.png",
    "journeyTitle5": "images/expanded/journeyTitle5.png",

    "copy1": "images/expanded/journeyCopy1.png",
    "copy2": "images/expanded/journeyCopy2.png",
    "copy3": "images/expanded/journeyCopy3.png",
    "copy4": "images/expanded/journeyCopy4.png",
    "copy5": "images/expanded/journeyCopy5.png",

    "gallery1": "images/expanded/galleryImages1.png",
    "gallery2": "images/expanded/galleryImages2.png",
    "gallery3": "images/expanded/galleryImages3.png",
    "gallery4": "images/expanded/galleryImages4.png",
    "gallery5": "images/expanded/galleryImages5.png",

    "chooseJourney": "images/expanded/chooseYourJourney.png",

    "thumbnailImg1": "images/expanded/thumbsSelected.png",
    "thumbnailImg2": "images/expanded/thumbs.png",
    "thumbnailImg3": "images/expanded/thumbs.png",
    "thumbnailImg4": "images/expanded/thumbs.png",
    "thumbnailImg5": "images/expanded/thumbs.png",

    "collapseButton": "images/expanded/btnCollapseText.png"
}

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

// SET ANIMATION VARS

var firstPlay = false;
var fadeTime = 2;
var animTimeIn = 1;
var animTimeOut = 1;
var staggerOffset = 0.25;
var animTypeIn = Cubic.easeOut;
var animTypeOut = Cubic.easeOut;
var mapMarkerAnimTime = 2;
var mapMarkerAnimType = Elastic.easeOut.config(1, 0.25);
var animOffsetDist = 30;
var imagePanTime = 6;
var imagePanAnimType = Cubic.easeInOut;

// GET COLLAPSED ELEMENTS

var bg1 = document.getElementById('bg1');
var bg2 = document.getElementById('bg2');
var headline1 = document.getElementById('headline1');
var headline2 = document.getElementById('headline2');
var bookmarkBase = document.getElementById('bookmarkBase');
var map = document.getElementById('map');
var location1 = document.getElementById('location1');
var location2 = document.getElementById('location2');
var mapMarker1 = document.getElementById('mapMarker1');
var mapMarker2 = document.getElementById('mapMarker2');
var bookmarkDivider = document.getElementById('bookmarkDivider');
var pnzSmall = document.getElementById('pnzSmall');
var expandButton = document.getElementById('expandButton');
//var closeButton = document.getElementById('close-button');

// ANIMATE COLLAPSED STATE

function startAnim() {
    console.log('startAnim');

    //TweenMax.from(closeButton, fadeTime/2, {delay:0, autoAlpha:0, ease:animTypeIn});

    TweenMax.from(bg1, fadeTime, {
        delay: 0,
        autoAlpha: 0,
        ease: animTypeIn
    });
    TweenMax.to(bg1, imagePanTime, {
        delay: 0,
        y: -50,
        ease: imagePanAnimType
    });

    TweenMax.from([bookmarkBase, map, location1, bookmarkDivider, pnzSmall], animTimeIn, {
        delay: 1,
        autoAlpha: 0,
        y: -animOffsetDist,
        ease: animTypeIn
    });
    TweenMax.from(headline1, animTimeIn, {
        delay: 1,
        autoAlpha: 0,
        y: animOffsetDist,
        ease: animTypeIn
    });
    TweenMax.from(mapMarker1, mapMarkerAnimTime, {
        delay: 2,
        autoAlpha: 0,
        scale: 0,
        ease: mapMarkerAnimType
    });

    TweenMax.from(expandButton, animTimeIn, {
        delay: 2,
        autoAlpha: 0,
        y: animOffsetDist,
        ease: animTypeIn
    });

    TweenMax.delayedCall(6, frame2);
}

function frame2() {
    console.log('frame2');

    TweenMax.from(bg2, fadeTime, {
        delay: 0,
        autoAlpha: 0,
        ease: animTypeIn
    });
    TweenMax.to(bg2, imagePanTime, {
        delay: 0,
        y: -50,
        ease: imagePanAnimType
    });

    TweenMax.to([mapMarker1, location1, headline1], animTimeOut, {
        delay: 0,
        autoAlpha: 0,
        ease: animTimeOut
    });

    TweenMax.from(location2, animTimeIn, {
        delay: 0.5,
        autoAlpha: 0,
        ease: animTypeIn
    });
    TweenMax.from(mapMarker2, mapMarkerAnimTime, {
        delay: 0.5,
        autoAlpha: 0,
        scale: 0,
        ease: mapMarkerAnimType
    });
    TweenMax.from(headline2, animTimeIn, {
        delay: 0.5,
        autoAlpha: 0,
        y: animOffsetDist,
        ease: animTypeIn
    });
}

// GET EXPANDED ELEMENTS

var bg1Expanded = document.getElementById('bg1Expanded');

var pnzLarge = document.getElementById('pnzLarge');
var mapLarge = document.getElementById('mapLarge');
var btnCTA = document.getElementById('btnCTA');
var collapseButton = document.getElementById('collapseButton');

var journeyDividerTop = document.getElementById('journeyDivider1');
var journeyDividerBottom = document.getElementById('journeyDivider2');
var chooseJourney = document.getElementById('chooseJourney');

var iconBases = document.getElementById('iconBases');

var trail1 = document.getElementById('trail1');
var icons1 = document.getElementById('icons1');
var journeyTitle1 = document.getElementById('journeyTitle1');
var copy1 = document.getElementById('copy1');
var gallery1 = document.getElementById('gallery1');

var trail2 = document.getElementById('trail2');
var icons2 = document.getElementById('icons2');
var journeyTitle2 = document.getElementById('journeyTitle2');
var copy2 = document.getElementById('copy2');
var gallery2 = document.getElementById('gallery2');

var trail3 = document.getElementById('trail3');
var icons3 = document.getElementById('icons3');
var journeyTitle3 = document.getElementById('journeyTitle3');
var copy3 = document.getElementById('copy3');
var gallery3 = document.getElementById('gallery3');

var trail4 = document.getElementById('trail4');
var icons4 = document.getElementById('icons4');
var journeyTitle4 = document.getElementById('journeyTitle4');
var copy4 = document.getElementById('copy4');
var gallery4 = document.getElementById('gallery4');

var trail5 = document.getElementById('trail5');
var icons5 = document.getElementById('icons5');
var journeyTitle5 = document.getElementById('journeyTitle5');
var copy5 = document.getElementById('copy5');
var gallery5 = document.getElementById('gallery5');

var thumbnail1 = document.getElementById('thumbnailImg1');
var thumbnail2 = document.getElementById('thumbnailImg2');
var thumbnail3 = document.getElementById('thumbnailImg3');
var thumbnail4 = document.getElementById('thumbnailImg4');
var thumbnail5 = document.getElementById('thumbnailImg5');

var thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4, thumbnail5];

var introAssets = [[journeyTitle1, journeyDividerTop],
               [copy1, gallery1, journeyDividerBottom],
               [chooseJourney, icons1, iconBases, trail1, thumbnails]];

var journey1Assets = [icons1, trail1, journeyTitle1, copy1, gallery1];
var journey2Assets = [icons2, trail2, journeyTitle2, copy2, gallery2];
var journey3Assets = [icons3, trail3, journeyTitle3, copy3, gallery3];
var journey4Assets = [icons4, trail4, journeyTitle4, copy4, gallery4];
var journey5Assets = [icons5, trail5, journeyTitle5, copy5, gallery5];

// ADD THUMBNAIL NAV LISTENERS

TweenMax.defaultOverwrite = "all";

var currentJourney = 1;
var selectedJourney = 1;

function addThumbnailListeners() {
    console.log('addThumbnailListeners');
    btnCTA.addEventListener('click', exitClickHandler);
    // thumbnail1.addEventListener('click', thumbnail1Click);
    thumbnail2.addEventListener('click', thumbnail2Click);
    thumbnail3.addEventListener('click', thumbnail3Click);
    thumbnail4.addEventListener('click', thumbnail4Click);
    thumbnail5.addEventListener('click', thumbnail5Click);
}

function switchJourneys() {

    console.log("addEventListener : " + currentJourney);

    switch (currentJourney) {
    case 1:
        thumbnail1.addEventListener('click', thumbnail1Click);
        TweenMax.to(journey1Assets, animTimeOut, {
            delay: 0,
            autoAlpha: 0,
            ease: animTypeOut
        });
        thumbnailImg1.src = "images/expanded/thumbs.png";
        break;
    case 2:
        thumbnail2.addEventListener('click', thumbnail2Click);
        TweenMax.to(journey2Assets, animTimeOut, {
            delay: 0,
            autoAlpha: 0,
            ease: animTypeOut
        });
        thumbnailImg2.src = "images/expanded/thumbs.png";
        break;
    case 3:
        thumbnail3.addEventListener('click', thumbnail3Click);
        TweenMax.to(journey3Assets, animTimeOut, {
            delay: 0,
            autoAlpha: 0,
            ease: animTypeOut
        });
        thumbnailImg3.src = "images/expanded/thumbs.png";
        break;
    case 4:
        thumbnail4.addEventListener('click', thumbnail4Click);
        TweenMax.to(journey4Assets, animTimeOut, {
            delay: 0,
            autoAlpha: 0,
            ease: animTypeOut
        });
        thumbnailImg4.src = "images/expanded/thumbs.png";
        break;
    case 5:
        thumbnail5.addEventListener('click', thumbnail5Click);
        TweenMax.to(journey5Assets, animTimeOut, {
            delay: 0,
            autoAlpha: 0,
            ease: animTypeOut
        });
        thumbnailImg5.src = "images/expanded/thumbs.png";
        break;
    }

    console.log("removeEventListener : " + selectedJourney);

    switch (selectedJourney) {
    case 1:
        thumbnail1.removeEventListener('click', thumbnail1Click);
        TweenMax.to(journey1Assets, fadeTime, {
            delay: 0,
            autoAlpha: 1,
            ease: animTypeIn
        });
        thumbnailImg1.src = "images/expanded/thumbsSelected.png";
        break;
    case 2:
        thumbnail2.removeEventListener('click', thumbnail2Click);
        TweenMax.to(journey2Assets, animTimeIn, {
            delay: 0,
            autoAlpha: 1,
            ease: animTypeIn
        });
        thumbnailImg2.src = "images/expanded/thumbsSelected.png";

        break;
    case 3:
        thumbnail3.removeEventListener('click', thumbnail3Click);
        TweenMax.to(journey3Assets, animTimeIn, {
            delay: 0,
            autoAlpha: 1,
            ease: animTypeIn
        });
        thumbnailImg3.src = "images/expanded/thumbsSelected.png";

        break;
    case 4:
        thumbnail4.removeEventListener('click', thumbnail4Click);
        TweenMax.to(journey4Assets, animTimeIn, {
            delay: 0,
            autoAlpha: 1,
            ease: animTypeIn
        });
        thumbnailImg4.src = "images/expanded/thumbsSelected.png";

        break;
    case 5:
        thumbnail5.removeEventListener('click', thumbnail5Click);
        TweenMax.to(journey5Assets, animTimeIn, {
            delay: 0,
            autoAlpha: 1,
            ease: animTypeIn
        });
        thumbnailImg5.src = "images/expanded/thumbsSelected.png";

        break;
    }

    currentJourney = selectedJourney;

}

function thumbnail1Click() {
    console.log('thumbnail1Click');
    selectedJourney = 1;
    switchJourneys();
}

function thumbnail2Click() {
    console.log('thumbnail2Click');
    selectedJourney = 2;
    switchJourneys();
}

function thumbnail3Click() {
    console.log('thumbnail3Click');
    selectedJourney = 3;
    switchJourneys();
}

function thumbnail4Click() {
    console.log('thumbnail4Click');
    selectedJourney = 4;
    switchJourneys();
}

function thumbnail5Click() {
    console.log('thumbnail5Click');
    selectedJourney = 5;
    switchJourneys();
}

// ANIMATE EXPANDED STATE

function startExpandedAnim() {
    if (!firstPlay) {
        console.log('startExpandedAnim');
        TweenMax.from(collapseButton, fadeTime / 2, {
            delay: 0,
            autoAlpha: 0,
            ease: animTypeIn
        });
        TweenMax.staggerFrom([bg1Expanded, pnzLarge, mapLarge, btnCTA], fadeTime, {
            delay: 0,
            autoAlpha: 0,
            ease: animTypeIn
        }, staggerOffset);
        TweenMax.staggerFrom(introAssets, fadeTime, {
            delay: 1,
            autoAlpha: 0,
            ease: animTypeIn
        }, staggerOffset, addThumbnailListeners);
        firstPlay = true;
    }
}