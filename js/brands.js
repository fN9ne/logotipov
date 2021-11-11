$(document).ready(function() {
	function brandsSizing() {
		let size = $('.brand').outerWidth();
		$('.brand').css('height', size);
	}
	$(window).on('resize', brandsSizing);
	brandsSizing();
});