$(document).ready(function(){


	var start = setInterval(function() {carousel.nextSlide();},10000);

	$( "#arrow-next" ).on( "click", function() {
		    carousel.nextSlide();
		});

	$( "#arrow-prev" ).on( "click", function() {
	    carousel.prevSlide();
	});

	$( ".ball-0" ).on( "click", function() {
		carousel.destroyIndicator();
		carousel.count = 0;
	    carousel.moveSlide();
	});

	$( ".ball-1" ).on( "click", function() {
		carousel.destroyIndicator();
		carousel.count = 1;
	    carousel.moveSlide();
	});

	$( ".ball-2" ).on( "click", function() {
		carousel.destroyIndicator();
		carousel.count = 2;
	    carousel.moveSlide();
	});

});

	const carousel = {
		
		count: 0,
		slides: 3,

		nextSlide: function() {

			carousel.destroyIndicator();

			if (carousel.count === (carousel.slides - 1)) {
				carousel.count = 0;
			}
			else {
				carousel.count++;
			}

			carousel.moveSlide();
			return carousel.count;
		},

		prevSlide: function() {

			carousel.destroyIndicator();

			if (carousel.count === 0) {
				carousel.count = (carousel.slides - 1);
			}

			else {
				carousel.count--;
			}

			carousel.moveSlide();
			return carousel.count;
		},

		moveSlide: function() {
			$( ".effect" ).css('transform', 'translateX(' + (-100 * carousel.count) + '%)');
			carousel.createIndicator();
		},

		destroyIndicator: function() {
			$( ".ball-" + carousel.count ).removeClass("active");
		},

		createIndicator: function() {
			$( ".ball-" + carousel.count ).addClass("active");
		},
	};

