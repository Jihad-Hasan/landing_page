jQuery(function ($) {

    $(".faq-question").click(function (event) {
    event.currentTarget.nextElementSibling.classList.toggle("open")
    $(this).find('.faq-plus-l')[0].classList.toggle("remove");
    });

$(".hamburger-wrap").click(function(){
    $(".mobile-menu").toggleClass("add-mobile_menu");
    });

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $(".hero-bg-image").css({
        width: (100 + scroll/80) + "%"
        });   
    });

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $(".large-image").css({
        width: (90 + scroll/90) + "%"
        });   
    });

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $(".large-image._2").css({
        width: (50 + scroll/90) + "%"
        });   
    });

//card1

$("#card1").mouseover(function(){
    $("#c_text1").css("visibility", "visible");
    $("#c_icon1").css("visibility", "hidden");
    });
$("#card1").mouseout(function(){
    $("#c_text1").css("visibility", "hidden");
    $("#c_icon1").css("visibility", "visible");
    });

//card2

$("#card2").mouseover(function(){
    $("#c_text2").css("visibility", "visible");
    $("#c_icon2").css("visibility", "hidden");
    });
$("#card2").mouseout(function(){
    $("#c_text2").css("visibility", "hidden");
    $("#c_icon2").css("visibility", "visible");
    });

//card3

$("#card3").mouseover(function(){
    $("#c_text3").css("visibility", "visible");
    $("#c_icon3").css("visibility", "hidden");
    });
$("#card3").mouseout(function(){
    $("#c_text3").css("visibility", "hidden");
    $("#c_icon3").css("visibility", "visible");
    });

});


