$(document).ready(function() {

    /*** Burger menu***/
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.nav').toggleClass('open-menu');
        $('.body').toggleClass('fixed-page');

    });

    $('.menu__list a').click(function() {
        if ($('.menu-burger__header').hasClass('menu-burger__header')) {
            $('.menu-burger__header').removeClass('open-menu');
            $('.nav').removeClass("open-menu");
            $('.body').removeClass('fixed-page');
        }
    })

    //active link 
    const addRemoveActiveLink = () => {
        $(document).on('click', '.menu__list a', function() {
            $('.menu__list a').removeClass('active');
            $(this).addClass('active');
        });

    }

    /*** Header fixed top***/

    const addRemoveBackColor = () => {
        const headerNav = $('.header__nav');
        if ($(window).scrollTop() > 1) {
            headerNav.addClass("back-color");
        } else {
            headerNav.removeClass("back-color");
        }
    }

    /*** Scroll to section***/

    $(document).on('click', '.menu__list a, .offer__btn', function() {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 60;
        $('html, body').animate({ scrollTop: destination }, 600);
        return false;
    });

    /*** Slick slider***/

    const initSlider = () => {
        const teamBlock = $('.team__block');
        if (teamBlock) {

            teamBlock.slick({
                prevArrow: '<button type="button" class="team__btn team__btn-prev slick-prev"><i class="fas fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="team__btn team__btn-next slick-next"><i class="fas fa-arrow-right"></i></button>',
                autoplay: true,
                dots: true,
                slidesToShow: 3,
                responsive: [{
                        breakpoint: 768,
                        settings: {
                            arrows: false,

                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,

                            slidesToShow: 1
                        }
                    }
                ]
            });
        }
    }

    /** Button up**/

    const scrollToUp = () => {
        const btnUp = $('#btn-up');
        if ($(window).scrollTop() > 100) {
            btnUp.fadeIn();
        } else {
            btnUp.fadeOut();
        }
    }

    $(document).on('click', '#btn-up', function() {
        $('body, html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    //Progress bar

    function progressBar() {
        let scroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = scroll / height * 100;

        document.getElementById('progressBar').style.width = scrolled + '%';
    }


    //Close popup
    $('.close').on('click', function() {
        $("#bg_popup").fadeOut();
    });

    /*** Ajax request***/

    $('.form__btn').on('click', function(e) {
        e.preventDefault();
        let name = $('.form__input-name').val();
        email = $('.form__input-email').val();
        msg = $('.form__input-msg').val();

        $.ajax({
            url: 'mail.php',
            method: 'post',
            dataType: 'json',
            data: {
                name: name,
                email: email,
                msg: msg
            },
            success: function(responce) {
                let result = responce;

                if (result == '0') {
                    $('.form__input-name').addClass('error-input');
                    $('.form__input-email').addClass('error-input');
                    $('.form__input-msg').addClass('error-input');

                } else {
                    $('#message').html(result);
                    $(".error").remove();
                    $('.form__input-name, .form__input-email, .form__input-msg').removeClass('error-input');
                    $('.form__input-name, .form__input-email, .form__input-msg').val('');
                    $('.popup__title span').html(result.name);
                    $("#bg_popup").fadeIn();
                    setTimeout(function() {
                        $("#bg_popup").fadeOut();
                    }, 4000)

                }
            },
            error: function(jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                console.log(msg);
            },
        });

    })

    initSlider();
    scrollToUp();
    addRemoveActiveLink();
    addRemoveBackColor();
    progressBar()

    $(window).scroll(function() {
        scrollToUp();
        addRemoveBackColor();
        progressBar()
    });

});