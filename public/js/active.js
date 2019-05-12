/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/active.js":
/*!********************************!*\
  !*** ./resources/js/active.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  'use strict';

  var browserWindow = $(window); // :: 1.0 Preloader Active Code

  browserWindow.on('load', function () {
    $('.preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  }); // :: 2.0 Nav Active Code

  if ($.fn.classyNav) {
    $('#musicaNav').classyNav();
  } // :: 3.0 Sliders Active Code


  if ($.fn.owlCarousel) {
    var welcomeSlide = $('.hero-slides');
    var featured_shows = $('.featured-shows-slides');
    var music_player = $('.music-player-slides');
    var discography = $('.discography-slides');
    welcomeSlide.owlCarousel({
      items: 1,
      margin: 0,
      loop: true,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 7000,
      smartSpeed: 1000,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut'
    });
    welcomeSlide.on('translate.owl.carousel', function () {
      var slideLayer = $("[data-animation]");
      slideLayer.each(function () {
        var anim_name = $(this).data('animation');
        $(this).removeClass('animated ' + anim_name).css('opacity', '0');
      });
    });
    welcomeSlide.on('translated.owl.carousel', function () {
      var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
      slideLayer.each(function () {
        var anim_name = $(this).data('animation');
        $(this).addClass('animated ' + anim_name).css('opacity', '1');
      });
    });
    $("[data-delay]").each(function () {
      var anim_del = $(this).data('delay');
      $(this).css('animation-delay', anim_del);
    });
    $("[data-duration]").each(function () {
      var anim_dur = $(this).data('duration');
      $(this).css('animation-duration', anim_dur);
    });
    featured_shows.owlCarousel({
      items: 3,
      margin: 30,
      loop: true,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 600,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });
    music_player.owlCarousel({
      items: 3,
      margin: 45,
      loop: true,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 750,
      responsive: {
        0: {
          items: 1
        },
        992: {
          items: 2
        },
        1200: {
          items: 3
        }
      }
    });
    discography.owlCarousel({
      items: 6,
      margin: 30,
      loop: true,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 600,
      responsive: {
        0: {
          items: 2
        },
        768: {
          items: 4
        },
        992: {
          items: 6
        }
      }
    });
  } // :: 4.0 ScrollUp Active Code


  if ($.fn.scrollUp) {
    browserWindow.scrollUp({
      scrollSpeed: 1500,
      scrollText: '<i class="fa fa-angle-up"></i>'
    });
  } // :: 5.0 CounterUp Active Code


  if ($.fn.counterUp) {
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  } // :: 6.0 Sticky Active Code


  if ($.fn.sticky) {
    $(".musica-main-menu").sticky({
      topSpacing: 0
    });
  } // :: 7.0 Progress Bar Active Code


  if ($.fn.circleProgress) {
    $('#circle').circleProgress({
      size: 160,
      emptyFill: "rgba(0, 0, 0, .0)",
      fill: '#cc1573',
      thickness: '4',
      reverse: true
    });
    $('#circle2').circleProgress({
      size: 160,
      emptyFill: "rgba(0, 0, 0, .0)",
      fill: '#cc1573',
      thickness: '4',
      reverse: true
    });
    $('#circle3').circleProgress({
      size: 160,
      emptyFill: "rgba(0, 0, 0, .0)",
      fill: '#cc1573',
      thickness: '4',
      reverse: true
    });
    $('#circle4').circleProgress({
      size: 160,
      emptyFill: "rgba(0, 0, 0, .0)",
      fill: '#cc1573',
      thickness: '4',
      reverse: true
    });
  } // :: 8.0 audioPlayer Active Code


  if ($.fn.audioPlayer) {
    $('audio').audioPlayer();
  } // :: 9.0 Tooltip Active Code


  if ($.fn.tooltip) {
    $('[data-toggle="tooltip"]').tooltip();
  } // :: 10.0 niceScroll Active Code


  if ($.fn.niceScroll) {
    $(".album-all-songs").niceScroll({
      background: "#fff"
    });
  } // :: 11.0 ScrollDown Active Code


  $("#scrollDown").on('click', function () {
    $('html, body').animate({
      scrollTop: $("#about").offset().top - 85
    }, 1500);
  }); // :: 12.0 prevent default a click

  $('a[href="#"]').on('click', function ($) {
    $.preventDefault();
  }); // :: 13.0 wow Active Code

  if (browserWindow.width() > 767) {
    new WOW().init();
  }
})(jQuery);

/***/ }),

/***/ 1:
/*!**************************************!*\
  !*** multi ./resources/js/active.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\laragon\www\samplestore\resources\js\active.js */"./resources/js/active.js");


/***/ })

/******/ });