$(document).ready(function() {
	/////-----------------home----------////////

	////////slideshow
	var swiper = new Swiper('.sw-slideshow', {
		pagination: {
			el: '.pagi-slideshow',
			dynamicBullets: true,
			clickable: true,
		},
		navigation: {
			nextEl: '.next-slideshow',
			prevEl: '.prev-slideshow',
		},
		effect: 'fade',
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		speed: 600,
		parallax: true,
		lazy: true,
	});

	/////////brands
	var swiper = new Swiper('.sw-seat-tai', {
		slidesPerView: 5,
		slidesPerGroup: 5,
		loop: false,
		autoPlay: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		loopFillGroupWithBlank: true,
	});
	// --------------bus
	var swiper = new Swiper('.sw-bus', {
		slidesPerView: 5,
		slidesPerGroup: 5,
		loop: false,
		autoPlay: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		loopFillGroupWithBlank: true,
		observer: true,
		observeParents: true,
	});
	///////blogs
	// ----------thaco tai
	var swiper = new Swiper('.sw-blogs', {
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 30,
		navigation: {
			nextEl: '.next-blogs',
			prevEl: '.prev-blogs',
		},
		pagination: {
			el: '.pagi-blogs',
			type: 'bullets',
		},
	});
	// ------------thaco bus
	var swiper = new Swiper('.sw-blogs-bus', {
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 30,
		navigation: {
			nextEl: '.next-blogs-bus',
			prevEl: '.prev-blogs-bus',
		},
		pagination: {
			el: '.pagi-blogs-bus',
			type: 'bullets',
		},
		observer: true,
		observeParents: true,
	});
	// ------------nội bộ
	var swiper = new Swiper('.sw-blogs-private', {
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 30,
		navigation: {
			nextEl: '.next-blogs-private',
			prevEl: '.prev-blogs-private',
		},
		pagination: {
			el: '.pagi-blogs-private',
			type: 'bullets',
		},
		observer: true,
		observeParents: true,
	});


	// ----------------blogs----------------////////////
	// giới thiệu thaco tai
	var swiper = new Swiper('.sw-intro-tai', {
		navigation: {
			nextEl: '.next-control-tai',
			prevEl: '.prev-control-tai',
		},
	});

	// giới thiệu thaco bus
	var swiper = new Swiper('.sw-intro-bus', {
		navigation: {
			nextEl: '.next-control-bus',
			prevEl: '.prev-control-bus',
		},
		observer: true,
		observeParents: true,
	});

	//--------------- product -----------------////////////////
	// ngoại thất
	var galleryThumbs = new Swiper('.th-exterior', {
		spaceBetween: 30,
		slidesPerView: 3,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop = new Swiper('.top-exterior', {
		spaceBetween: 30,
		navigation: {
			nextEl: '.n-exterior',
			prevEl: '.p-exterior',
		},
		pagination: {
			el: '.pg-exterior',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});
	  // nội thất
	  var galleryThumbs = new Swiper('.th-furniture', {
		spaceBetween: 30,
		slidesPerView: 3,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop = new Swiper('.top-furniture', {
		spaceBetween: 30,
		navigation: {
			nextEl: '.n-furniture',
			prevEl: '.p-furniture',
		},
		pagination: {
			el: '.pg-furniture',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});
	// khung gầm
	var galleryThumbs = new Swiper('.th-container', {
		spaceBetween: 30,
		slidesPerView: 3,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop = new Swiper('.top-container', {
		spaceBetween: 30,
		navigation: {
			nextEl: '.n-container',
			prevEl: '.p-container',
		},
		pagination: {
			el: '.pg-container',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});
});
