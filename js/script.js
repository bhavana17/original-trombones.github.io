$(function(){
  var regExp = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;
  $('[type="email"]').on('keyup', function() {
    $('.message').hide();
    regExp.test( $(this).val() ) ? $('.message.success').show() : $('.message.error').show();
  });
})(jQuery);

  alert("The paragraph was clicked.");
