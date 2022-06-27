console.log('All collections');

$('.page-width button').click(function(){
  	
  if( $(this).hasClass('active')){
  
  } else {
    $('.page-width button').removeClass('active');
	$(this).toggleClass('active');
    
  }
});