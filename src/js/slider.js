$(document).ready(function() {
    $('#teamSlider').slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      // prevArrow: "<img src='../src/images/arrow-left.svg' class='slick-prev' alt='1'>",
      // nextArrow: "<img src='../src/images/arrow-right.svg' class='slick-next' alt='1'>",
    });
  });