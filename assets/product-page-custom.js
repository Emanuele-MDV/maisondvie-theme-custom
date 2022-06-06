

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  console.log('is mobile');
} else {
  
  $('.custom-tabs .grid__item').prepend('summary');
}