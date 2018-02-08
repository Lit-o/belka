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
  var timer;
  $(window).on('resize', function(){
    if ( timer ) clearTimeout(timer);
    timer = setTimeout(function(){
      togglePromotionsSlider();
    }, 100);
  });

  togglePromotionsSlider();

  function togglePromotionsSlider (){
    $('#slider').slick({
      mobileFirst: true,
      infinite: true,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 1279,
          settings: 'unslick'
        },
      ]
    });
  }

});


