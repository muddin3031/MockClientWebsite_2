$(function(){
    $('.navbar-collapse collapse a').click(function(){
        speed=200;
        i = $(this).index();
        $('.page-current').animate({opacity: 0, marginTop:80},speed, function(){
            $(this).removeClass('current');
            $('.page-').eq(i).css('marginTop',30).animate({opacity:1,marginTop:50}).addClass('current');
        });
    });
});