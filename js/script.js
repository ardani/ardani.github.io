(function($){
 "use strict";

  $(window).on('scroll', function(){
    navScroll();
  });
  //jquery inview
  $('.hidding').on('inview', function(event, visible) {
    var effect = $(this).attr('data-animated');
    $(this).addClass(effect);
    $(this).addClass('visible');
  });


winHeight();

$(document).ready(function() {
  $("#owl-folio").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      pagination: false,
      navigation: true,
      navigationText:["<i class='fa fa-angle-left fa-2x'></i>", "<i class='fa fa-angle-right fa-2x'></i>"],
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

  });

  $('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }

  });
//  animate modal

});
// =================== function ========================
function winHeight(){
  var wHeight = $(window).height();
  $('.wide-screen').height(wHeight);
}
function navScroll(){

  // navbar on scroll
  var top = $(window).scrollTop();
  if (top > 0) {
    //$('.navbar-default').addClass('navbar-bg');
  }
  else{
    //$('.navbar-default').removeClass('navbar-bg');
  }

}
})(jQuery);

