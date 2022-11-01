// MENU

if (window.matchMedia("(max-width: 990px)").matches) {
  
  $(".has-childlink > a").removeAttr("href");

  $('.has-childlink').each(function(){
    
    $( '.has-childlink').on('click', function(){
      $( this ).find('ul').addClass('open');
    });
    
  });

  $( "li.back" ).on('click', function(){
    $( this ).parent('ul').removeClass('open');
  })

  
  
} 