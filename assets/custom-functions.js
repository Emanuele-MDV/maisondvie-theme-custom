// MENU

if (window.matchMedia("(max-width: 990px)").matches) {
  
  $(".has-childlink > a").removeAttr("href");

  $('a.has-childlink').each(function(){
    
    $(this).on('click', function(){
      $( this ).children('ul').addClass('open');
    });
    
  });
  
} 