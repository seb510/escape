$(document).ready(function() {

    /*** Burger menu***/
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
        $('.menu__list a').click(function() {
            if ($('.menu-burger__header').hasClass('menu-burger__header')) {
                $('.menu-burger__header').removeClass('open-menu');
                $('.nav').removeClass("open-menu");
                $('body').removeClass('fixed-page');
            }
        })
    });

    /*** Header fixed top***/
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top < 20) $(".header__nav").removeClass('fixed');
        else $(".header__nav").addClass('fixed');
    });

    /*** Scroll to section***/

    $(".menu__list a").click(function() {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 70;
        $('html, body').animate({ scrollTop: destination }, 600);
        return false;
    });
});