//Start every Javascript document with doc.ready
$(document).ready(function () {
    $(window).scroll(function () {
        //If 
        if ($(window).scrollTop() > 970) {
            //select nav bar, add bootstrap sticky header class
            $('.navbar').addClass('fixed-top');
            $('.navbar').css({
                "backgroundColor": "rgba(0,0,0,0.5)"
            });
        }
        if ($(window).scrollTop() < 971) {
            //remove the navbar-fixed-top class
            $('.navbar').removeClass('fixed-top');
            $('.navbar').css({
                "backgroundColor": "rgba(0,0,0,0.4)"
            });
        }
    });
});
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
});
/**** ANIMATIONS *****/
/** Cover **/
$('.js-wp-1').waypoint(function () {
    //fade in 
    $('.js-wp-1').addClass('animated fadeIn')
}, {
    offset: '50%'
});
$('.js-wp-2').waypoint(function () {
    //fade in left
    $('.js-wp-2').addClass('animated fadeInLeft fadeIn')
}, {
    offset: '90%'
});
$('.js-wp-3').waypoint(function () {
    //fade in right
    $('.js-wp-3').addClass('animated fadeInRight fadeIn')
}, {
    offset: '90%'
});
/** Parallax **/
/** Expertise
 **/
$('.js-wp-4').waypoint(function () {
    //fade in 
    $('.js-wp-4').addClass('animated fadeIn')
}, {
    offset: '99%'
});
/** Projects **/