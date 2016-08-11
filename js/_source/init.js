(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('#closeModal').click(function(){
        $('#modal1').closeModal();
    });  

  }); // end of document ready
})(jQuery); // end of jQuery name space
