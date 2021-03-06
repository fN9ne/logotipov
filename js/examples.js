$(document).ready(function() {
	let examplesSlider = new Swiper('.examples__slider', {
		slidesPerView: 2,
		loop: true,
		centeredSlides: true,
		breakpoints: {
			320: {
				slidesPerView: 1.2,
			},
			769: {
				slidesPerView: 1.5,
			},
			1240: {
				slidesPerView: 2,
			},
		},
	});
	$('.popup-picture__area').on('click', function() {
		$(this).closest('.popup').removeClass('_active');
		$('body').removeClass('_lock');
	});
	$('.examples-slide__zoom').on('click', function() {
		let src = $(this).closest('.swiper-slide').find('img').attr('src');
		$('body').addClass('_lock');
		$('.popup-picture').addClass('_active');
		$('.popup-picture').find('img').attr('src', src);
	});
});