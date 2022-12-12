$( document ).ready(function() {

  var myClass

  $('.navigation-container span').on('click', function(){
    var myClass = $(this).attr("class");
    //console.log(myClass);
    $('.navigation-container span').removeClass('active');
    $(this).addClass('active');
    $('#blog-posts').removeClass().addClass(myClass);
  })


  if( window.matchMedia("(min-width: 990px)").matches ){
    $(".featured-container").prepend( $('article.featured') );
  }


});