$(document).ready(function () {
    $('input.checkbox').click(function () {
        if ($('input.checkbox').is(':checked')) {
            $('.change-pass').css('display', 'block');
        }else{
            $('.change-pass').css('display', 'none');
        }
    });
    $('.block-reorder .block-title strong').click(function () {
        if($('.block-reorder .block-content').css('display')=='block'){
            $('.block-reorder .block-content').css('display','none');
        }else{$('.block-reorder .block-content').css('display','block');}
    })
});