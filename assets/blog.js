$( document ).ready(function() {

  var myClass

  $('.navigation-container span').on('click', function(){
    $('.navigation-container span').removeClass('active');
    $(this).addClass('active');
  })


});