document.addEventListener("DOMContentLoaded", function(){ 
  var banner = $('section#banner_section'); $('aside').prepend( banner );  
});




$( document ).ready(function() {
    
  var imgWidth = $('img#collection_img').outerWidth() + "px";
  console.log( imgWidth );
  $('.collection-hero__image-container.media.gradient').css('min-height',imgWidth);
  
});