
$('.btn-menu').click(function(){
    $(this).toggleClass("click");
    $('.side-menu').toggleClass("show");
});

$('.btn-close').click(function(){
    $(this).toggleClass("click");
    $('.side-menu').toggleClass("show");
});

$('.sell-btn').click(function(){
    $('.sell-list_group').toggleClass("show");
    $('.side-menu_nav .first').toggleClass("rotate");
});

$('.rent-btn').click(function(){
    $('.rent-list_group').toggleClass("show");
    $('.side-menu_nav .second').toggleClass("rotate");
});

$('.side-menu_nav li').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});