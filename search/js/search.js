$(document).ready(function () {
    $('.btn-filter').off('click').on('click', function (e) {
        e.preventDefault();
        var off = $('.setting').css('display')
        if (off == 'flex') {
            $('.setting').css('display', 'none');
        } else $('.setting').css('display', 'flex');
        $('.sub2-container').css('display', 'none');
        $('.sub1-container').css('display','block');
    });

    $('.comp').click(function () {
        $('.setting').css('display', 'none');
        $('.sub1-container').css('display', 'none');
        $('.sub2-container').css('display','block');
    });

    $('.head').click(function () {
        var on = $(this).parent().children("ul").css('display');
        if (on == 'none') {
            $(this).parent().children("ul").css('display', 'block');
        } else $(this).parent().children("ul").css('display', 'none');
    });


    $.each($('li'), function () {
        if ($(this).children("input").is(':checked')) {
            $(this).css('background', 'lightblue');
        }
    });

    $('.account').click(function () {
        $('.account').css('background','white');
        $(this).css('background','lightblue');
    });

    $('.li-check li').on('click', function () {
        if ($(this).children("input").is(':checked')) {
            $(this).css('background', 'lightblue');
        }else { $(this).css('background', 'white');}
    });

    $('menu-li').click(function () {
        $(this).css('background','lightblue');
    });

});