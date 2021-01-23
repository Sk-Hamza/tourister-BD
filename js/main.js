(function($){
	'use strict'
	$('.menu-list ul li').on('click',function(){
		$(this).children('.submenu').slideToggle();
	});

		$('.menu-part-1').on('click',function(){
		$('.menu-part-2').slideToggle();
	});
		


// Initialize material-scrolltop (minimal) 

  $('body').materialScrollTop();



//Water Ripples
$('.banner').ripples();


//wow Animate

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animate__animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();


//  Paralex Js





// this is called automatically:
if(Parallax.AUTOINIT) {
  $('[data-parallax]').parallax();
}
// if you don't previously set  
Parallax.AUTOINIT = false;

Parallax.DEFAULTS = {
  src: null,
  speed: .2,
  bleed: 0,
  zIndex: -100,
  posX: 'center',
  posY: 'center',
  overScrollFix: false,
  excludeAgents: /(iPod|iPhone|iPad|Android)/,
  aspectRatio: null,
  // jquery selectors
  sliderSelector: '>.parallax-slider',
  mirrorSelector: 'body',
  // callback functions:
  afterRefresh: null,
  afterRender: null,
  afterSetup: null,
  afterDestroy: null,
};

}) (jQuery);