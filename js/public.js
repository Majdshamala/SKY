

$(function () {

    $('body').on('click', function (e) {
        //did not click a popover toggle or popover
        if ($(e.target).data('tole') !== 'popover'
            && $(e.target).parents('.popover.in').length === 0) {
            $('[data-tole="popover"]').popover('hide');
        }
    });

    $('.profileOption').click(function () {
        $('.languageIcon').popover('hide');
        $('.searchHeader').popover('hide');

    });
    $('.searchHeader').click(function () {

        $('.profileOption').popover('hide');
        $('.languageIcon').popover('hide');


    });
    $('.languageIcon').click(function () {

        $('.profileOption').popover('hide');
        $('.searchHeader').popover('hide');

    });
    $('.profileOption').popover({
        html: true,
        content: function () {
            return $('#profileOption').html();
        }
    });
    $('.searchHeader').popover({
        html: true,
        content: function () {
            return $('#searchHeader').html();
        }
    });
    $('.languageIcon').popover({
        html: true,
        content: function () {
            return $('#languageIcon').html();
        }
    });

    $(window).scroll(function () {

        //$("body").click(function () {

        //    alert($(window).scrollTop());

        //});

        var windowpos = $(window).scrollTop();

        if (windowpos >= 1080) {

            $(".offer .row > div").addClass("fadeIn");
            $(".offer .row > div").removeClass("fadeOut");

        }
        if (windowpos >= 2300) {

            $(".services .row > div").addClass("bounceIn");
            $(".services .row > div").removeClass("bounceOut");

        }
        if (windowpos >= 2400) {

            windowpos = windowpos / 20;

            windowpos = windowpos - 60;

            if (windowpos >= 0) {

                $(".iphone1").css("transform", "translate3d(0px, " + windowpos + "px, 0px)");

            }
        }

        else if (windowpos <= 2000) {


            $(".iphone1").css("transform", "translate3d(0px, 0px, 0px)");

        }



    });
});