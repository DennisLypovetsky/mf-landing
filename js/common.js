$( document ).ready(function() {
	$('.header__nav-toggle').click(function(){
		$(this).toggleClass('active');
	})

	$('#lect__tabs').easytabs({
		animate: false,
	});
	$('#judges__tabs').easytabs({
		animate: false,
	});
	$('.thumb').easytabs({
		animate: false,
	});
	$('#schedule__tabs').easytabs({
		animate: false,
	});
	$('.schedule__cont__wrapper').easytabs({
		animate: false,
	});
});