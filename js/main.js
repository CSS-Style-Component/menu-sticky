

$(document).ready(function(){
	
	
	// sticky navigation bar design
	// system 01
	/*var navOffset = $("nav").offset().top;
	
	$(window).scroll(function(){
		
		var scrollPos = $(window).scrollTop();
		
		if( scrollPos >= navOffset ){
			$("nav").addClass("fixed");
		}else{
			$("nav").removeClass("fixed");
		}
		
	});*/
	
	
	//system 02
	$(window).on('scroll', function(){

		var scroll = $(window).scrollTop();

		if( scroll < 1 ){
			$("nav").removeClass("fixed");

		}else{
			$("nav").addClass("fixed");

		}

	});
	
	
	
});