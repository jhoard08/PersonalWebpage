// Smooth scroll for hero arrow
$(document).ready(function () {
  $('.hero-scroll').on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    var offset = $('#global-nav').outerHeight() || 70;
    $('html, body').animate({
      scrollTop: $(target).offset().top - offset
    }, 600);
  });
});
