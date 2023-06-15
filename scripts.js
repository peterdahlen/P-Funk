$('.filter-button').click(function() {
  var filter = $(this).data('filter');
      console.log(filter);
  if (filter === 'all') {
      $('.filter').show();
      
  } else {
      $('.filter').hide();
      $('.filter.' + filter).show();
  }

  $('.filter-button').removeClass('active');
  $(this).addClass('active');
});

// Show or hide the button based on scroll position
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
  $('#scrollToTopBtn').fadeIn();
  } else {
  $('#scrollToTopBtn').fadeOut();
  }
});

// Scroll to top when the button is clicked
$('#scrollToTopBtn').click(function() {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
});
