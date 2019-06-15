/*Слайдер в попапе c заголовками*/
$(document).ready(function() {
  $('.title-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    fade: false,
    arrows: false,
    draggable: false,
    touchMove: false,
    swipe: false
  });
});

/*Слайдер в попапе c видео*/
$(document).ready(function() {
  $('.content-slider').slick({
    asNavFor: '.slider',
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: false,
    arrows: false,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>',
    responsive: [
    {
      breakpoint: 9999,
      settings: {
        asNavFor: '.slider',
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        fade: false,
        arrows: true,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>',
      }
    },
    {
      breakpoint: 768,
      settings: {
        asNavFor: '.slider',
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        fade: false,
        arrows: false
      }
    }
  ]
  });
});

$(function() {
  var videos = $(".content-slider__item");

  $('#content-slider').on('afterChange', function() {
    videos.children('iframe').remove();
    videos.removeClass('content-slider__item--active');
  });


  videos.on("click", function() {
    var that = $(this);

    setTimeout(function() {
      var YTid = that.data('item');
      that.addClass("content-slider__item--active").prepend('<iframe class="content-slider__video" src="http://www.youtube.com/embed/' + YTid + '?autoplay=1"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    }, 100);
  });

});

/*Слайдер в попапе c описаниями*/
$(document).ready(function() {
  $('.description-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    fade: false,
    arrows: false,
    draggable: false,
    touchMove: false,
    swipe: false
  });
});
