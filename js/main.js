// $(document).ready(function() {
// 	/////////////////menu-sidebar
// 	// var menu = $('.nav-main-menu > li.nav-item > a.nav-link');
// 	// $(".nav-main-menu > li > a[href*=#]").click(function() {
// 	//   if ($(this).parent().hasClass("active")) {
// 	//     $(this).parent().removeClass("active");
// 	//     $(this).parent().children('.has-child-menu').removeClass('active');
// 	//     $('.main,.main-footer').removeClass('change');
// 	//   } else {
// 	//     $(this).toggleClass("active");
// 	//     $(this).next(".has-child-menu").toggleClass('active');
// 	//     $(this).parent(".has-child-menu").toggleClass('active');
// 	//     $(this).parent().removeClass('active');
// 	//     $('.main,.main-footer').toggleClass('change');
// 	//   }
// 	// });

// 	///////////////////zoom -images
// 	function mountZoomImage(image, width, height, target) {
// 		target.prepend('<div class="zoom"><div class="zoom_image"></div></div>');
// 		$('div.zoom_image').css({
// 			width: width,
// 			height: height,
// 			'background-image': 'url(' + image + ')',
// 		});
// 	}

// 	function unmountZoomImage() {
// 		$('div.zoom').remove();
// 	}

// 	function zoomImage(zoom) {
// 		$('div.zoom_image').css({
// 			transform: 'scale(' + zoom + ')',
// 			'margin-top': '50px',
// 		});
// 	}

// 	function panZoomImage(x, y, target) {
// 		var transformX = (x / (target.width() - 100)) * 100 + '%';
// 		var transformY = (y / (target.height() - 50)) * 100 + '%';

// 		target.css({ 'transform-origin': transformX + ' ' + transformY });
// 	}

// 	$('div.standard').mousemove(function(event) {
// 		var $zoomTarget = $('div.zoom_image');
// 		var x = event.pageX - $(this).offset().left;
// 		var y = event.pageY - $(this).offset().top;
// 		panZoomImage(x, y, $zoomTarget);
// 	});

// 	$('div.standard').mouseover(function() {
// 		var $zoomParent = $('div.copy');
// 		var image = $(this)
// 			.find('img')
// 			.attr('src');
// 		var imageWidth = $(this)
// 			.find('img')
// 			.width();
// 		var imageHeight = $(this)
// 			.find('img')
// 			.height();
// 		var zoomAmount = $(this).attr('data-zoom');

// 		$(this).css({ cursor: 'zoom-in' });
// 		mountZoomImage(image, imageWidth, imageHeight, $zoomParent);
// 		zoomImage(zoomAmount);
// 	});

// 	$('div.standard').mouseout(function() {
// 		unmountZoomImage();
// 	});

// 	///////////////nav sticky
// 	var menu = $('.menu-product').offset().top;
// 	$(function() {
// 		$(window).scroll(function() {
// 			var winTop = $(window).scrollTop();
// 			if (winTop > menu) {
// 				$('.menu-product').addClass('is-fixed');
// 			} else {
// 				$('.menu-product').removeClass('is-fixed');
// 			}
// 		});
// 	});
// 	//////////////////smooth scroll
// 	$(function() {
// 		$('.nav-menu-product > li > a').click(function() {
// 			if (
// 				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
// 				location.hostname == this.hostname
// 			) {
// 				var target = $(this.hash);
// 				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
// 				if (target.length) {
// 					$('html,body').animate(
// 						{
// 							scrollTop: target.offset().top,
// 						},
// 						1000
// 					);
// 					$('.nav-menu-product > li > a').removeClass('active');
// 					$(this).addClass('active');
// 					return false;
// 				}
// 			}
// 		});
// 		$(window).scroll(function() {
// 			$('body').each(function() {
// 				if (ScrollView($(this))) {
// 					var id = $(this).attr('id');
// 					$('.nav-menu-product > li > a').removeClass('active');
// 					$(".nav-menu-product > li > a[href='#" + id + "']").addClass('active');
// 				}
// 			});
// 		});
// 		function ScrollView(element) {
// 			var win = $(window);
// 			var winTop = win.scrollTop();
// 			var winBottom = winTop + win.height();
// 			var elementTop = element.offset().top;
// 			var elementBottom = elementTop + element.height();

// 			if (elementBottom <= winBottom && elementTop >= winTop) {
// 				return true;
// 			}
// 			return false;
// 		}
// 	});

// 	//////////////////////////
// 	$(function() {
// 		var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
// 		$('.nav-link').each(function() {
// 			if (this.href === path) {
// 				$(this).addClass('active');
// 			}
// 		});
// 	});
// });

/////////////////

// var getUrlParameter = function getUrlParameter(sParam) {
//   var sPageURL = window.location.search.substring(1),
//       sURLVariables = sPageURL.split('&'),
//       sParameterName,

//   for (let i = 0; i < sURLVariables.length; i++) {
//       sParameterName = sURLVariables[i].split('=');

//       if (sParameterName[0] === sParam) {
//           return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
//       }
//   }
// };

// function GetURLParameter(sParam)
// {
//     var sPageURL = window.location.search.substring(1);
//     var sURLVariables = sPageURL.split('&');
//     for (var i = 0; i < sURLVariables.length; i++)
//     {
//         var sParameterName = sURLVariables[i].split('=');

//         if (sParameterName[0] == sParam)

//      {

//             return sParameterName[1];

//         }

//     }
// }​

// $(document).ready(function() {
// 	$('.nav-main-menu li a').click(function() {
// 		$(this)
// 			.parent()
// 			.siblings()
// 			.find('.has-child-menu')
// 			.removeClass('active');
// 		if (
// 			$(this)
// 				.parent()
// 				.children('.has-child-menu')
// 		) {
// 			$(this)
// 				.parent()
// 				.children('.has-child-menu')
// 				.toggleClass('active');
// 			$(this)
// 				.prev()
// 				.parents()
// 				.children()
// 				.removeClass('active');
// 		}
// 		var checked = document.querySelectorAll('.has-child-menu');
// 		if (checked.hasClass('active')) {
// 			$('.main,.main-footer').addClass('change');
// 		} else {
// 			$('.main,.main-footer').removeClass('change');
// 		}
// 	});
// });

///////////////////checked input form
// var empty = true;
// var check =  $('.form-feedback input[type="text"]').each(function(){
//    if($(this).val()!=""){
//       empty =false;
//       return false;
//     }
//  });
//  var check = true;
//  var disBtn = $('.btn-submit').attr("disabled", true);
//  $('input#checkbox[checkbox]').click(function(){
//    check ? true : disBtn.attr("disabled", false);
//  })

$('.holder').fadeIn();
$(document).ready(function() {
	///////////////preloader
	$('.holder').remove();
	//// tab add current
	$('#tabseat li.nav-item').click(function() {
		if ($(this).hasClass('current')) {
		} else {
			$('#tabseat li.nav-item.current').removeClass('current');
			$(this).addClass('current');
		}
	});

	/////search
	$('.btn-search').click(function() {
		$('.search-content').toggleClass('show');
	});

	///////////////scrollTop
	$('.scroll-top').click(function() {
		$('html, body')
			.stop()
			.animate({ scrollTop: 0 }, 'slow', 'swing');
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(window).height() - 300) {
			$('.scroll-top').addClass('active');
		} else {
			$('.scroll-top').removeClass('active');
		}
	});
	$('.hot-ads').click(function() {
		$('.btn-close').trigger('click');
	});

	//////sticky social fixed
	var sticky = $('.stick-right').offset().top;
	$(window).on('scroll', function() {
		$(window).scrollTop() > 350 ? $('.stick-right').addClass('show') : $('.stick-right').removeClass('show');
	});

	////////////sidebar collapse
	$('.sidebar-dropdown > a').click(function() {
		$('.sidebar-submenu').slideUp(200);
		$('.sidebar-item').removeClass('active');

		$('.sidebar-mainmenuitem').removeClass('active');

		if (
			$(this)
				.parent()
				.hasClass('active')
		) {
			$('.sidebar-dropdown').removeClass('active');
			$(this)
				.parent()
				.removeClass('active');
		} else {
			$('.sidebar-dropdown').removeClass('active');
			$(this)
				.next('.sidebar-submenu')
				.slideDown(200);
			$(this)
				.parent()
				.addClass('active');
		}
	});

	///////////menu-product sticky fixed
	$(function() {
		var menu = $('.menu-product').offset().top;
		$(window).scroll(function() {
			var winTop = $(window).scrollTop();
			if (winTop > menu) {
				$('.menu-product').addClass('is-fixed');
			} else {
				$('.menu-product').removeClass('is-fixed');
			}
		});
	});
	///////////product-sticky scroll view
	$(function() {
		$('.nav-menu-product > li > a').click(function() {
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate(
						{
							scrollTop: target.offset().top,
						},
						1000
					);
					$('.nav-menu-product > li.nav-item > a.nav-link').removeClass('active');
					$(this).addClass('active');
					return false;
				}
			}
		});
		$(window).scroll(function() {
			$('body').each(function() {
				if (ScrollView($(this))) {
					var id = $(this).attr('id');
					$('.nav-menu-product > li.nav-item > a.nav-link').removeClass('active');
					$(".nav-menu-product > li.nav-item > a.nav-link[href='#" + id + "']").addClass('active');
				}
			});
		});
		function ScrollView(element) {
			var win = $(window);
			var winTop = win.scrollTop();
			var winBottom = winTop + win.height();
			var elementTop = element.offset().top;
			var elementBottom = elementTop + element.height();

			if (elementBottom <= winBottom && elementTop >= winTop) {
				return true;
			}
			return false;
		}
	});

	// scroll content sticky menu addClass active
	$(window)
		.scroll(function() {
			var scrollDistance = $(window).scrollTop();
			// Assign active class to nav links while scolling
			$('.block-content').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
					$('.nav-menu-product > li.nav-item a.nav-link.active').removeClass('active');
					$('.nav-menu-product > li.nav-item a.nav-link')
						.eq(i)
						.addClass('active');
				}
			});
		})
		.scroll();
	//////// add Class active link
	$(function() {
		var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
		$('.nav-link').each(function() {
			if (this.href === path) {
				$(this)
					.parent()
					.addClass('active');
			}
		});
	});

	////// fancybox
	$('[data-fancybox="images"]').fancybox({
		buttons: ['slideShow', 'share', 'zoom', 'fullScreen', 'close'],
		thumbs: {
			autoStart: true,
		},
	});

	////////triger button choose file
	$('.btn-smCV').click(function(){
		$('#file').trigger('click');
	})
});

// popup ads
$(window).on('load', function() {
	setTimeout(function() {
		$('.hot-ads').fadeIn('slow');
	}, 1000);
	///////////////close-btn popup
	$('.btn-close').click(function() {
		$('.hot-ads').fadeOut(800);
	});
});
