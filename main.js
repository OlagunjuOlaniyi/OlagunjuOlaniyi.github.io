!(function($) {
  "use strict";

// Menu list isotope and filter
  $(window).on('load', function() {
    var menuIsotope = $('.menu-container').isotope({
      itemSelector: '.element-item',
      layoutMode: 'fitRows'
    });

    $('#menu-filters button').on('click', function() {
      $("#menu-filters button").removeClass('filter-active');
      $(this).addClass('filter-active');

      menuIsotope.isotope({
        filter: $(this).data('filter')
      });
    });
  });

  // Initiate venobox lightbox
  $(document).ready(function() {
    $('.venobox').venobox();
  });

  //aos initialization
  $(document).ready(function() {
    AOS.init({
    	duration: 1200,
    });
  });


})(jQuery);

