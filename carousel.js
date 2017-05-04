$(document).ready(function(){


	$( "#arrow_next" ).on( "click", function() {
		      carousel.nextSlide();
		});

	$( "#arrow_prev" ).on( "click", function() {
	      carousel.prevSlide();
	});

});

	const carousel = {
		
		count: 0,
		slides: 3,

		nextSlide: function() {
			if (carousel.count === (carousel.slides - 1)) {
				carousel.count = 0;
			}
			else {
				carousel.count++;
			}

			$( ".effect" ).css('transform', 'translateX(' + (-100 * carousel.count) + '%)');
			console.log("NextSlide");
			return carousel.count;
		},

		prevSlide: function() {
			if (carousel.count === 0) {
				carousel.count = (carousel.slides - 1);
			}
			else {
				carousel.count--;
			}

			$( ".effect" ).css('transform', 'translateX(' + (-100 * carousel.count) + '%)');
			console.log("PreviousSlide");
			return carousel.count;
		},

	};

