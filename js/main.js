$(function () {

    var header = $('#header'),
        introH = $('#intro').innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {

        if (scrollOffset >= introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }

    $("[data-scroll]").on('click', function (event) {

        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset,
        }, 600);
    });

    $("#nav__toggle").on("click", function (event) {
        event.preventDefault();

        $("#nav").slideToggle().toggleClass("active");
        $("#nav__toggle").toggleClass("active");
    });

    // $("[data-collapse]").on('click', function (event) {

    //     event.preventDefault();

    //     var $this = $(this),
    //         blockId = $this.data('collapse');

    //     $this.toggleClass("active");
    //     // $(blockId).slideToggle();

    //     // $("#nav").toggleClass("active");



    $('.accordion__header').click(function (event) {
        if ($('.accordion').hasClass('one')) {
            $('.accordion__header').not($(this)).removeClass('active');
            $('.accordion__content').not($(this).next()).slideUp(300);
        }

        $(this).toggleClass('active').next().slideToggle(300);
    });

    // });

    $('.reviews__items').slick({
        infinite: true,
        // fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // prevArrow: document.querySelectorAll('.reviews__btn--prev'),
        // nextArrow: document.querySelectorAll('.reviews__btn--next'),

    });

});