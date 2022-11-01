$( document ).ready(function() {
    
  // MENU MOBILE NAVIGATION
  
  if (window.matchMedia("(max-width: 990px)").matches) {

    var buttonClose = '<div class="hamburger close"><span></span><span></span></div>';

    $('header#shopify-section-header').prepend(buttonClose);

    $('.hamburger').on('click', function(){
      $(this).toggleClass('close open')
      $('nav#mainNavigation').toggleClass('close open')
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
  
    
    
  } 


});