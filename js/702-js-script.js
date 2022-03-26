$('.five-inner-header').click(function() {
    $(this).closest('.five-inner').find('.five-inner-content').slideToggle(300);
    $(this).toggleClass('active');
});

var scrollPos = 0;
$(window).scroll(function() {
    var st = $(this).scrollTop();
    if (st > scrollPos) {
        $('.header').addClass('scroll');
    }
    if (st == 0) {
        $('.header').removeClass('scroll');
    }
    scrollPos = st;
});

$('.bars').click(function() {
    $('.mob-menu').slideToggle(300);
});

$(".menu-item").click(function() { 
    var dataScroll = $(this).attr('data-scroll');
    $('html, body').animate({
        scrollTop: $(dataScroll).offset().top  
    }, 500); 
});