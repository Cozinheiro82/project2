$(document).ready(function () {
  if (window.innerWidth <= 768) {
    $(".single-item").slick(); // Initialize single-item slider if needed
  } else {
    $(".slider.multiple-items").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
    });
  }

  // Reinitialize slider on window resize
  $(window).resize(function () {
    if (window.innerWidth <= 768) {
      $(".slider.multiple-items").slick("unslick"); // Destroy the multiple-items slider
      $(".single-item").slick(); // Initialize single-item slider if needed
    } else {
      $(".single-item").slick("unslick"); // Destroy the single-item slider
      $(".slider.multiple-items").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
      });
    }
  });
});
