"use strict";

//loader
$(window).on("load", function () {
  $(".loadPage,.loader").remove();
}); // 往下滑動才出現go to top圖標

$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    $(".goToTop").css("transition", "0.5s").removeClass('opacity-0').addClass('opacity-1');
  } else {
    $(".goToTop").css("transition", "0.5s").addClass('opacity-0').removeClass('opacity-1');
  }
}); // chat top圖標變色

$(window).scroll(function () {
  if ($(window).scrollTop() + $(window).height() >= $(document).height() - 280) {
    $(".goToTop").css("transition", "0.5s").removeClass("bg-primary").addClass("bg-tertiary").find('i').removeClass("text-white").addClass("text-primary");
    $(".LineMessage").css("transition", "0.5s").removeClass("bg-secondary").addClass("bg-primary");
  } else {
    $(".goToTop").css("transition", "0.5s").removeClass("bg-tertiary").addClass("bg-primary").find('i').removeClass("text-primary").addClass("text-white");
    $(".LineMessage").css("transition", "0.5s").removeClass("bg-primary").addClass("bg-secondary");
  }
}); //房間圖片輪播

var swiper = new Swiper(".roomSwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true
});
var swiper2 = new Swiper(".roomSwiper2", {
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    stopOnLastSlide: false,
    disableOnInteraction: true
  },
  thumbs: {
    swiper: swiper
  }
}); //AOS 效果

AOS.init({
  duration: 1000,
  // values from 0 to 3000, with step 50ms
  easing: 'ease',
  // default easing for AOS animations
  once: true // whether animation should happen only once - while scrolling down

}); //web font

(function (d) {
  var wf = d.createElement('script'),
      s = d.scripts[0];
  wf.async = true; //非同步方式載入.js

  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
  s.parentNode.insertBefore(wf, s);
})(document);

WebFont.load({
  google: {
    families: ['Noto Sans TC:100,400,700,900&display=swap']
  }
});
//# sourceMappingURL=all.js.map
