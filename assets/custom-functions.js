// MENU

if (window.matchMedia("(max-width: 990px)").matches) {
  
  $(".has-childlink > a").removeAttr("href");

  $('.has-childlink').each(function(){
    
    $( '.has-childlink a').on('click', function(){
      //console.log('Click!');
      $( this ).siblings('ul').addClass('open');
    });
    
  });

  $(".has-grandchildlink > a").removeAttr("href");

  $( "li.back" ).on('click', function(){
    $( this ).parent('ul').removeClass('open');
  })

  
  
} 