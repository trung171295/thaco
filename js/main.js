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

	///////// toggle icon bar
	// $('.icon-bar').click(function() {
	// 	$('.icon-bar').toggleClass('active');
	// });
	//////////open menu mobile
	$(function() {
		$('#menu').mmenu({
			extensions: [
				"pagedim-black",
				"position-right"
			 ],
			 counters: true,
			 iconbar: {
				"add": true,
				"top": [
				   "<a href='#/'><i class='fa fa-home'></i></a>",
				   "<a href='#/'><i class='fa fa-user'></i></a>"
				],
				bottom: [
				   "<a href='#/'><i class='fa fa-twitter'></i></a>",
				   "<a href='#/'><i class='fa fa-facebook'></i></a>",
				   "<a href='#/'><i class='fa fa-linkedin'></i></a>"
				]
			 },
			 navbars: [
				{
				   "position": "top",
				   "content": [
					  "searchfield"
				   ]
				},
				{
				   "position": "top"
				},
				{
				   "position": "bottom",
				   "content": [
					  "<a class='fa fa-envelope' href='#/'></a>",
					  "<a class='fa fa-twitter' href='#/'></a>",
					  "<a class='fa fa-facebook' href='#/'></a>"
				   ]
				}
			 ]
		});
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
	$('.sd > a').click(function() {
		$('.sd-sub').slideUp(200);
		if (
			$(this)
				.parent()
				.hasClass('active')
		) {
			$('.sd').removeClass('active');
			$(this)
				.parent()
				.removeClass('active');
		} else {
			$('.sd').removeClass('active');
			$(this)
				.next('.sd-sub')
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
	$('[data-fancybox="gallery"]').fancybox({
		closeExisting: false,
		protect: true,
		preventCaptionOverlap: true
		,
		buttons: [
			"zoom",
			//"share",
			"slideShow",
			"fullScreen",
			"download",

			"close"
		],
		iframe: {
			// Iframe template
			tpl:
				''
		},
		clickContent: function (current, event) {
			return current.type === "image" ? "zoom" : false;
		},

		afterLoad: function (instance, current) {
			var pixelRatio = window.devicePixelRatio || 1;

			if (pixelRatio > 1.5) {
				current.width = current.width / pixelRatio;
				current.height = current.height / pixelRatio;
			}
		},
		mobile: {
			preventCaptionOverlap: true,
			idleTime: false,
			clickContent: function (current, event) {
				return current.type === "image" ? "toggleControls" : false;
			},
			clickSlide: function (current, event) {
				return current.type === "image" ? "toggleControls" : false;
			},
			dblclickContent: function (current, event) {
				return current.type === "image" ? "zoom" : false;
			},
			dblclickSlide: function (current, event) {
				return current.type === "image" ? "zoom" : false;
			}
		},
	});

	////////triger button choose file
	$('.btn-smCV').click(function() {
		$('#file').trigger('click');
	});
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
