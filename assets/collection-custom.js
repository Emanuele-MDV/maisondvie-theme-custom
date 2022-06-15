document.addEventListener("DOMContentLoaded", function(){ 
  var banner = $('section#banner_section'); $('aside').prepend( banner );  
});




$( document ).ready(function() {
    
  var imgWidth = $('img#collection_img').outerWidth() + "px";
  //console.log( imgWidth );
  //$('.collection-hero__image-container.media.gradient').css('min-height',imgWidth);
  
  $('.readmore').click(function(){
  
  	$(this).toggleClass('readmore readless');
  });
  
  
  
	var width = $(window).width();

    
     
      $('div#columns').click( function(){

          if (width >= 1200  ) {

            $(this).toggleClass('large small');
            $('ul#product-grid').toggleClass('grid--4-col-desktop grid--3-col-desktop');

          }


      } );
  
  
  
  
  
});