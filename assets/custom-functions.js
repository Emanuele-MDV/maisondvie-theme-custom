$( document ).ready(function() {

  componentDidMount() {
    this.prev = window.scrollY;
    window.addEventListener('scroll', e => this.handleNavigation(e));
  }
  
  handleNavigation = (e) => {
    const window = e.currentTarget;
  
    if (this.prev > window.scrollY) {
        console.log("scrolling up");
    } else if (this.prev < window.scrollY) {
        console.log("scrolling down");
    }
    this.prev = window.scrollY;
  };
    
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
  
    
    
  } 


});