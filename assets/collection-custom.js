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
  
    if((width <= 1200) && (width > 1024)){
        $('ul#product-grid').removeClass('grid--4-col-desktop');
        $('ul#product-grid').addClass('grid--3-col-desktop');
    }
  
  
  	if((width <= 1024) && (width > 989)){
        $('ul#product-grid').removeClass('grid--4-col-desktop');
        $('ul#product-grid').addClass('grid--2-col-desktop');
    }
    
     
      $('div#columns').click( function(){

        $(this).toggleClass('large small');
        
        if( (width >= 1201  ) ){
			$('ul#product-grid').toggleClass('grid--4-col-desktop grid--3-col-desktop');
		}
        
        if((width <= 1200) && (width > 1023)){
        	$('ul#product-grid').toggleClass('grid--3-col-desktop grid--2-col-desktop');
        }
        
        if((width <= 1024) && (width > 990)){
        	$('ul#product-grid').toggleClass('grid--3-col-desktop grid--2-col-desktop');
        }


      } );
  
  
    
  
  
  
  
  
});