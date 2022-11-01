// MENU

if (window.matchMedia("(max-width: 990px)").matches) {
  
  $(".has-childlink > a").removeAttr("href");

  $('.has-childlink').each(function(){
    
    $(this).on('click', function(){
      $( this ).children('ul').addClass('open');
    });
    
  });

  $( "li.back a" ).on('click', function(){
    $( this ).parent('ul').removeClass('open');
  })

  
  
} 