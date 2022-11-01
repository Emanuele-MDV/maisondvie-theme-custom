// MENU

if (window.matchMedia("(max-width: 990px)").matches) {
  
  $("a.has-childlink").removeAttr("href");

  $('a.has-childlink').each(function(){
    $(this).click( function(){
      $( this ).children().addClass('open');
    });
  });
  
} 