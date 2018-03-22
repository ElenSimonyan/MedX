$(document).ready(function(){
    $('#nav-icon4').click(function(){
        $(this).toggleClass('open');
        $(this).siblings('ul').slideToggle();
    });
    $('.bxslider').bxSlider({
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        nextText: 'Onward →',
        prevText: '← Go back',
        pager:false
    });
    $('.fancybox').fancybox();
});