function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

$(function () {

    $(".camera > div").hover(function () {


        $(".camera .clickHere").addClass("rollIn");
        $(".camera .clickHere").removeClass("rollOut");



    });


    $(".profileDash a img").addClass("fadeInUp");
    $(".profileDash a img").removeClass("fadeOutUp");


    $('.camera > div > p:first-child').counterUp({
        delay: 10,
        time: 1000
    });


    $('.camera > div > div > div p').counterUp({
        delay: 10,
        time: 1300
    });


    $(".clickHere").click(function () {

        $(".cameraInfo > .cameraInfo").addClass("flipInY");
        $(".cameraInfo > .cameraInfo").removeClass("flipOutY");

    });

    $(".closeDiv").click(function () {

        $(".cameraInfo > .cameraInfo").addClass("flipOutY");
        $(".cameraInfo > .cameraInfo").removeClass("flipInY");

    });

    $('.allCameraContent').slimScroll({
        height: '460px'
    });

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

  
});