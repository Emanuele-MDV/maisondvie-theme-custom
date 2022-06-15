document.addEventListener("DOMContentLoaded", function(){ 
  var banner = $('section#banner_section'); $('aside').prepend( banner );  
});




$( document ).ready(function() {
    
  var imgWidth = $('img#collection_img').outerWidth() + "px";
  console.log( imgWidth );
  $('img#collection_img').css('height',imgWidth);
  
});