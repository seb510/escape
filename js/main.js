$(document).ready(function() {

    /*** Burger menu***/
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.nav').toggleClass('open-menu');
        $('.body').toggleClass('fixed-page');
        $('.menu__list a').click(function() {
            if ($('.menu-burger__header').hasClass('menu-burger__header')) {
                $('.menu-burger__header').removeClass('open-menu');
                $('.nav').removeClass("open-menu");
                $('.body').removeClass('fixed-page');
            }
        })
    });

    /*** Header fixed top***/

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('.header__nav').addClass("back-color");
        } else {
            $('.header__nav').removeClass("back-color");
        }
    });

    /*** Scroll to section***/

    $(".menu__list a").click(function() {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 70;
        $('html, body').animate({ scrollTop: destination }, 600);
        return false;
    });


    $('.form__btn').on('click', function(e) {
        e.preventDefault();
        let name = $('.form__input-name').val();
        email = $('.form__input-email').val();
        msg = $('.form__input-msg').val();
        $.ajax({
            url: '/mail.php',
            method: 'post',
            dataType: 'html',
            data: {
                name: name,
                email: email,
                msg: msg
            },
            success: function(responce) {
                $('#message').html(responce);
                console.log(responce);
            }
        })
    })
});