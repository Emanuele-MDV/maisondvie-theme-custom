// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);



function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If scrolled down and past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
        if(window.scrollY==0){
          $('header').removeClass('nav-down');
        }
    }
  
    lastScrollTop = st;
}




$( document ).ready(function() {

  $('main').css('padding-top',navbarHeight);
  
    
  // MENU MOBILE NAVIGATION
  
  if (window.matchMedia("(max-width: 990px)").matches) {

    var buttonClose = '<div class="hamburger close"><span></span><span></span></div>';

    $('header#shopify-section-header').prepend(buttonClose);

    $('.hamburger').on('click', function(){
      $(this).toggleClass('close open')
      $('nav#mainNavigation').toggleClass('close open')
      $('body').toggleClass('fixed')
    });
    
    $(".has-childlink > a").removeAttr("href");
    $(".has-grandchildlink > a").removeAttr("href");
  
    $('.has-childlink').each(function(){
      
      $( '.has-childlink a').on('click', function(){
        //console.log('Click!');
        $( this ).siblings('ul').addClass('open');
      });
      
    });
  
    $('.has-grandchildlink').each(function(){
      
      $( '.has-grandchildlink a').on('click', function(){
        //console.log('Click!');
        $( this ).siblings('ul').addClass('open');
      });
      
    });
  
    $( "li.back" ).on('click', function(){
      $( this ).parent('ul').removeClass('open');
    })
  
    $('header').prepend( $('a.header__icon--wishilst') );
    
  } 

  // MENU DESKTOP NAVIGATION

  // if (window.matchMedia("(min-width: 991px)").matches) {
  //   var windoWidth = $(window).width();
  //   console.log(windoWidth);
  // }

  /* Footer menus */

  $('footer-menu-container').each(function(){
    $(this).find('strong').on('click', function(){
      $(this).parent().toggleClass('active')
    })
  })


});


