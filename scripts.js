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

// Dropdown
$(".btn-all-artist").hide();
$(".btn-all-year").hide();

$(".menu-artists").hide();
$(".btn-dropdown-artist").click(function(){
  $(".menu-artists").fadeToggle("fast");
  $(".btn-all-artist").fadeToggle("fast");
});

$(".menu-years").hide();
$(".btn-dropdown-year").click(function(){
  $(".menu-years").fadeToggle("fast");
  $(".btn-all-year").fadeToggle("fast");
});


btn-dropdown-artist