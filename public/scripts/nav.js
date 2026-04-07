$(window).resize(navScroll);
$(document).ready(navScroll);
$(window).scroll(navScroll);

function navScroll() {
  var scrollTop = $(window).scrollTop();

  if (scrollTop > 50) {
    $('#global-nav').addClass('scrolled');
  } else {
    $('#global-nav').removeClass('scrolled');
  }
}
