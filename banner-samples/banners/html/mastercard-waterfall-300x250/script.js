(function () {

    var videoComposite = document.getElementById('videoComposite'),
        videoBackup = document.getElementById('videoBackup'),
        videoPlayer = document.getElementById('videoPlayer'),
        overlayDiv = document.getElementById('overlayDiv'),
        copy1 = document.getElementById('copy1'),
        product = document.getElementById('product'),
        copy2 = document.getElementById('copy2'),
        logo = document.getElementById('logo'),
        promoCode = document.getElementById('promoCode'),
        copy3 = document.getElementById('copy3'),
        mcLogo = document.getElementById('mcLogo'),
        cta = document.getElementById('cta'),
        disclaimerEnd = document.getElementById('disclaimerEnd'),
        blackOverlay = document.getElementById('blackOverlay');

    var bannerDuration = 30,
        animTypeIn = Cubic.easeOut,
        animTypeOut = Cubic.easeOut,
        animTimeIn = 1,
        animTimeOut = 1,
        panTime = 6,
        fadeTime = 2,
        endFrameOverlayAlpha = 0.6,
        staggerOffset = 1.25;

    // TweenMax.defaultOverwrite = "all";

    if (Modernizr.video) {
        videoSupported();
    } else {
        videoNotSupported();
    }

    function videoSupported() {
        console.log('Video supported');

        videoPlayer.src = 'video/waterfall-anthro-300x250.mp4';
        videoPlayer.loop = true;

        videoPlayer.addEventListener('loadstart', function () {
            console.log('Load video');
        });

        videoPlayer.addEventListener('loadeddata', function () {

            console.log('Video loaded');
            console.log('Play video');

            videoPlayer.play();

            setTimeout(function () {
                console.log(bannerDuration + ' secs elapsed');
                videoPlayer.pause();
            }, bannerDuration * 1000);

            frame1();

        });

    }

    function videoNotSupported() {
        console.log('Video not supported');
        frame1();
    }

    function nextFrame(nextFrameFunction, nextFrameDelay) {
        setTimeout(nextFrameFunction, nextFrameDelay);
    }


    function frame1() {
        console.log('frame 1');

        TweenMax.to(blackOverlay, fadeTime, {
            autoAlpha: 0,
            ease: animTypeOut
        });

        TweenMax.from(overlayDiv, fadeTime, {
            delay: fadeTime,
            autoAlpha: 0,
            ease: animTypeIn,
            onComplete: nextFrame,
            onCompleteParams: [frame2, 2250]
        });

    }

    function frame2() {
        console.log('frame 2');

        TweenMax.to([videoComposite, overlayDiv], panTime, {
            y: -140,
            ease: Cubic.easeInOut,
            onComplete: nextFrame,
            onCompleteParams: [frame3, 2000]
        });

    }

    function frame3() {
        console.log('frame 3');

        TweenMax.to(blackOverlay, animTimeIn, {
            autoAlpha: endFrameOverlayAlpha,
            ease: animTypeIn,
            onComplete: nextFrame,
            onCompleteParams: [frame4, 5000]
        });

        TweenMax.staggerFrom([[copy2, logo], promoCode], animTimeIn, {
            delay: animTimeIn * 0.75,
            autoAlpha: 0,
            ease: animTimeIn
        }, staggerOffset);
    }

    function frame4() {
        console.log('frame 4');

        TweenMax.to([[copy2, logo], promoCode], animTimeOut, {
            autoAlpha: 0,
            ease: animTypeOut
        });

        TweenMax.staggerFrom([[copy3, mcLogo], [cta, disclaimerEnd]], fadeTime, {
            delay: animTimeIn,
            autoAlpha: 0,
            ease: animTypeIn
        }, staggerOffset);

    }

})();