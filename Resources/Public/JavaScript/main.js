
;(function($, window, document, undefined) {
 	

	$(function() {

		$('.main-slider').slick({
		dots: true,
		lazyLoad: 'ondemand',
		infinite: true,
		speed: 1000,
		autoplay: true,
		slidesToShow: 1,
		autoplaySpeed: 5000,
		adaptiveHeight: false

	});

		$('.clientsbox').slick({
		  slidesToShow: 3,
		  centerMode: true,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 4000,
		  speed: 500,
		  focusOnSelect: true,
		
		  arrows: false,
		   responsive: [
			    {
			      breakpoint: 767,
			      settings: {
			        
			       
			        slidesToShow: 1
			      }
			    }
		    ]
		});





	$('input[type=file]').change( function(){
		var filename = $(this).val().split('\\').pop();
		$(this).next().attr("date-fileName",filename);
	});

	/*
	$(".defaultForm select").selectize({
		create: true,
		sortField: 'text'
	});
	*/


	});

})(jQuery, window, document);


$(document).ready(function(){	


});



/* less*/

less.refresh(true);

less.watch();
	less.optimization = 0;
	jQuery(document).ready(function(){
		cache = null;
		less.watchTimer = setInterval(function () {
			if (less.watchMode) {
				console.log('Forcing Compile');
				less.refresh(true);
			}
		}, less.poll);
	});