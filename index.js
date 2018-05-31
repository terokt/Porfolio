$(document).ready(function() {
  const slider = $('#slider');

  slider.on('init', function(event, slick) {
    requestAnimationFrame(function() {
      slick.$slides[0].querySelector('video').play();
    });
  });

  slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    slick.$slides[currentSlide].querySelector('video').pause();
    slick.$slides[nextSlide].querySelector('video').play();
  });

  slider.slick({
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    swipe: false,
    touchMove: false,
    centerMode: !0,
    centerPadding: '100px'
    // variableWidth: true
  });
});
