$(document).ready(function() {
	function deliverySizing() {
		let size = $('.delivery-item').outerWidth();
		$('.delivery-item').css('height', size);
	}
	if ($(window).width() <= 600) {
		$('.delivery-item').attr('style', '');
		$(window).unbind('resize');
	} else {
		$(window).on('resize', deliverySizing);
		deliverySizing();
	}
});