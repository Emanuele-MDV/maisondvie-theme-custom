const body = document.body;
const triggerMenu = document.querySelector(".shopify-section section-header .trigger-menu");
const nav = document.querySelector(".shopify-section section-header nav");
const menu = document.querySelector(".shopify-section section-header .menu-container");
const lottieWrapper = document.querySelector(".lottie-wrapper");
const lottiePlayer = document.querySelector("lottie-player");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

triggerMenu.addEventListener("click", () => {
  body.classList.toggle("menu-open");
});

lottieWrapper.addEventListener("click", (e) => {
  e.preventDefault();
  triggerMenu.click();
  body.classList.toggle("menu-open-with-lottie");
});

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
    lottiePlayer.play();
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollDown)
  ) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
    lottiePlayer.stop();
  }
  lastScroll = currentScroll;
});



$( document ).ready(function() {
  
    
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