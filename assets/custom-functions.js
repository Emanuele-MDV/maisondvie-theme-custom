// MENU

if (window.matchMedia("(max-width: 990px)").matches) {
  
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