/*global document, $, console, alert, window*/

(function () {
    'use strict';

    $(document).ready(function () {
        
        // side menu
        // http://takien.github.io/jPushMenu/
        
        $('.toggle-menu').jPushMenu();

        // ----- smooth scroll to element -----

        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

        // screenshot/carousel
        // http://kenwheeler.github.io/slick/

        $('.screenshot-carousel').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            arrows: true,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        arrows: true
                    }
                }
            ]
        });

    });

}());