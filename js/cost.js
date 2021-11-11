$(document).ready(function() {
	$('.cost__tab').on('click', function() {
		$('.cost__tab').removeClass('_active');
		$(this).addClass('_active');
		$('.cost-screen').removeClass('_active');
		$('.cost-screen').eq($(this).index()).addClass('_active');
		$('html, body').animate({
			scrollTop: $('.cost-screen').eq($(this).index()).offset().top - $('.header').outerHeight(),
		}, 500);
	});
});