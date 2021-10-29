/**
* Template Name: Arsha - v2.3.1
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function ($) {
  "use strict";

  
  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(1).fadeOut('fast', function () {
        $(this).remove();
      });
    }
  });

  var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 350,
      modifier: 1,
      slideShadows: true
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination"
    }
  });


/*
* My adaptation of:
*   Flux 3D Carousel
*   Author: Dean Coulter
*   Licensed under the MIT license
*   Version 0.1
*
*   - Changed from figure element cards to any html.
*   - Removed use of id, to allow multiple carousels.
*   - Blocking of events on cards in the background.
*   - Dimming of cards in the background.
*   - Fixed continuous rotation.
*   - Added functionality for multiple carousels.
*   - Adding clickable arrow icon buttons on the sides.
*/
function cardCarousel3d(carousels){
  var rotateHandler = function(evt) {
    var carousel = this.parentElement;
    if(carousel.classList.contains('card-carousel') === false){
      var carousel = carousel.parentElement;
    }
    var rotate_int = parseInt(carousel.dataset.rotateInt || 0);
    if(this.classList.contains('counterclockwise')){
      rotate_int += 1;
    } else if(this.classList.contains('clockwise')){
      rotate_int -= 1;
    }
    carousel.dataset.rotateInt = rotate_int;
    animate_slider(carousel);
  }
  for(var i = 0; i < carousels.length; i++) {
    var carousel = carousels[i];
    var inner = carousel.querySelector('.inner-carousel');
    var cards = carousel.querySelectorAll('.inner-carousel > div');
    var size = cards.length;
    var panelSize = inner.clientWidth;
    var translateZ = Math.round( ( panelSize / 2 ) / Math.tan( Math.PI / size ) ) * 1.7;
    inner.style.transform = "rotateY(0deg) translateZ(-" + translateZ + "px)";
    var btnLeft = carousel.querySelector('.button-spin.counterclockwise');
    if(btnLeft !== null) {
      btnLeft.addEventListener("click", rotateHandler, false);
    }
    var btnRight = carousel.querySelector('.button-spin.clockwise');
    if(btnRight !== null) {
      btnRight.addEventListener("click", rotateHandler, false);  
    }
    animate_slider(carousel);
  }
  
  function animate_slider(carousel){
    var rotate_int = parseInt(carousel.dataset.rotateInt || 0);
    var inner = carousel.querySelector('.inner-carousel');
    var cards = carousel.querySelectorAll('.inner-carousel > div');
    var size = cards.length;
    var panelSize = inner.clientWidth;
    var translateZ = Math.round( ( panelSize / 2 ) / Math.tan( Math.PI / size ) ) * 1.7;
    var rotateY = 0;
    var ry =  360 / size;
    rotateY = ry * rotate_int;

    for(var i = 0; i < size; i++){
      var z = (rotate_int * ry) + (i * ry);
      var child = cards[i];
      child.style.transform = "rotateY(" + z + "deg) translateZ(" + translateZ + "px) rotateY(" + (-z).toString() + "deg)";
      child.classList.remove('clockwise');
      child.classList.remove('front');
      child.classList.remove('counterclockwise');
      child.removeEventListener("click", rotateHandler, false);
      var zz = z % 360;
      if(zz === 0) {
        child.classList.add('front');
      } else if (zz === ry || zz === -360 + ry) {
        child.classList.add('clockwise');
        child.addEventListener("click", rotateHandler, false);
      } else if (zz === 360 - ry || zz === 0 - ry) {
        child.classList.add('counterclockwise');
        child.addEventListener("click", rotateHandler, false);
      }
    }
  }
}

cardCarousel3d(document.querySelectorAll('.card-carousel'));





  $(document).ready(function () {
    var w = window.innerWidth;

    if (w > 767) {
      $('#menu-jk').scrollToFixed();
    } else {
      $('#menu-jk').scrollToFixed();
    }

  })




  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });



  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function () {
    aos_init();
  });

})(jQuery);



/**
 * Initiate glightbox 
 */
const glightbox = GLightbox({
  selector: '.glightbox'
});



/** Card Slider DoxERP Programe Features category page  **/
 


jQuery(document).ready(function($) {
"use strict";
$('#customers-testimonials').owlCarousel( {
    loop: true,
    center: true,
    items: 3,
    margin: 30,
    autoplay: true,
    dots:true,
    nav:true,
    navigation : true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
  });
});


/** Program Units Section **/
var mySwiper = new Swiper ('.program__units', {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination"
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 1
    }
  }
});
 

/** Test Slider Header One Section **/
 $(document).ready(function () {
  var swiper = new Swiper(".swiper-header", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    effect: 'creative',
    speed: 800,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      init: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("animate");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionEnd: function () {
        $(".swiper-progress-bar").eq(0).addClass("animate");
      }
    }
  });
  // $('.swiper-header').hover(function() {
  //   swiper.autoplay.stop();
  //   $('.swiper-progress-bar').removeClass('animate');
  // }, function(){
  //   swiper.autoplay.start();
  //   $('.swiper-progress-bar').addClass('animate');
  // });
});


// tabs

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function (el) {
  el.addEventListener("click", openTabs);
});


function openTabs(el) {
  var btnTarget = el.currentTarget;
  var country = btnTarget.dataset.country;

  tabContent.forEach(function (el) {
    el.classList.remove("active");
  });

  tabLinks.forEach(function (el) {
    el.classList.remove("active");
  });

  document.querySelector("#" + country).classList.add("active");

  btnTarget.classList.add("active");
}