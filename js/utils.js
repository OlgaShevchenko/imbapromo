$(document).ready(function() {		
	
	$(".header__link, .header__link--mobile").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});	

	
});	
