document.addEventListener("DOMContentLoaded", function(){
    //dom is fully loaded, but maybe waiting on images & css files
  
  //console.log('loading content');
  
  var banner = $('section#banner_section');
  
  $('aside').prepend( banner );
  
  
});