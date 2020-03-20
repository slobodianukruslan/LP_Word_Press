$(document).ready(function(){

	$(window).scroll(function() {
		if ($(this).scrollTop() > 400) {
			effectFirst();
		}
		if ($(this).scrollTop() > 2200) {
			effectSecond();
		}		
	});

	function effectFirst() {
		$(".border_1").css("width","70%");
	}
	function effectSecond() {
		$(".border_2").css("width","70%");
	}

	new WOW().init();
});