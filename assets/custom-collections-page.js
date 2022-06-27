console.log('All collections');

$('.page-width button').click(function(){
  	
  if( $(this).hasClass('active')){
  // Do nothing
  } else {
    //$('.page-width button').removeClass('active');
	$('.page-width button').toggleClass('active');
    
  }
});