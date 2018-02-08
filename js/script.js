$( document ).ready(function() {

  $( ".header-cross" ).hide();
  $( ".kebab-menu" ).hide();
  $( ".header-kebab" ).click(function() {
    $( ".kebab-menu" ).slideToggle( "middle", function() {
      $( ".header-kebab" ).hide();
      $( ".header-cross" ).show();
    });
  });

  $( ".header-cross" ).click(function() {
    $( ".kebab-menu" ).slideToggle( "middle", function() {
      $( ".header-cross" ).hide();
      $( ".header-kebab" ).show();
    });
  });

});
