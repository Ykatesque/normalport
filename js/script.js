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






});
