//Intro Elements Fade In Javascript
$(document).ready(function () {
	$('.fade1').fadeIn(2000).removeClass('hidden');
	$('.fade2').delay(2000).fadeIn(2000).removeClass('hidden');
	$('.fade3').delay(4000).fadeIn(2000).removeClass('hidden');
});


//Mobile Menu Javascript
$(document).ready(function () {
	$('.slideout-menu-toggle').on('click', function(event){
		event.preventDefault();
		// create menu variables
		var slideoutMenu = $('.slideout-menu');
		var slideoutMenuWidth = $('.slideout-menu').width();
		// toggle open class
		slideoutMenu.toggleClass("open");
		// slide menu
		if (slideoutMenu.hasClass("open")) {
			slideoutMenu.animate({
			left: "0px"
		});	
		} else {
			slideoutMenu.animate({
			left: -slideoutMenuWidth
			}, 250);	
			}
		});
	});