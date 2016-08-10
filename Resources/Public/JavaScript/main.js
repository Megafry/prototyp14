$(document).ready(function(){	

	$('.single-item').slick({
		dots: true,
		infinite: true,
		speed: 1000,
		autoplay: true,
		slidesToShow: 1,
		autoplaySpeed: 2000,
		adaptiveHeight: false

	});

	
	$('input[type=file]').change( function(){
    	var filename = $(this).val().split('\\').pop();
    	$(this).next().attr("date-fileName",filename);
    });
	

});

