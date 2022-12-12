$( document ).ready(function() {

  var myClass

  $('.navigation-container span').on('click', function(){
    var myClass = $(this).attr("class");
    console.log(myClass);
    $('.navigation-container span').removeClass('active');
    $(this).addClass('active');
    $('#blog-posts').classList( myClass );
  })


});