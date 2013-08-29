$(document).ready(function() {

//setting some variables
var menu = $('#menu');
var aboutlink = $('#about')
var portfoliolink = $('#portfolio');
var contactlink = $('#contact');

//sticky nav
var stickyNavTop = $('.nav').offset().top;
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
if (scrollTop > stickyNavTop) {
    $('.nav').addClass('sticky');

} else {
    $('.nav').removeClass('sticky');
}
};

stickyNav();

$(window).scroll(function() {
  stickyNav();
});


//needs some major refactoring, but laying out the ground work right now

var scrollPort = function(){
  event.preventDefault();
  $('body, html').animate({scrollTop: 800 + 300}, 'slow');
};

var scrollContact = function(){
  event.preventDefault();
  $('body, html').animate({scrollTop: ((820 * 2)+ 300)}, 'slow');
};


var scrollAbout = function(){
  event.preventDefault();
  $('body, html').animate({scrollTop: (300)}, 'slow');


};

portfoliolink.on('click', scrollPort);
contactlink.on('click', scrollContact);
aboutlink.on('click', scrollAbout);

// window.setInterval(function(){
//    window.setTimeout(function(){
//        $('.display-sweet-image-behind').css('background-image','url(intoxicating_by_lexiibabii01-d53vl31.jpg)');
//    },600);
//     $('.display-sweet-image-behind').css('background-image','url(tumblr_md05w7QDZV1qkovyeo1_500.png)');
// },300);

var scrollSpeed = 1;

    // set the default position
    var current = 0;

    // set the direction
    var direction = 'h';

    function bgscroll(){

        // 1 pixel row at a time
        current -= 1;

        // move the background with backgrond-position css properties
        $('.display-sweet-image-behind ').css("backgroundPosition", (direction == 'h') ? current+"px 0" : "0 " + current+"px");

    }

    //Calls the scrolling function repeatedly
     setInterval(bgscroll, scrollSpeed);



});
