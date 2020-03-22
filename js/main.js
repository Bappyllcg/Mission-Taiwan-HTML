$(window).load(function() {
	$(".windowLoder").delay(1750).fadeOut("slow");
});
$(window).scroll(function() {
	if ($(this).scrollTop() > 200){  
		$('header').addClass("sticky");
	}
	else{
		$('header').removeClass("sticky");
	}
});
$(document).ready(function () {
	/* Mobile Menu */
	$('.nav-btn').click(function () {
		$('.menu-area').addClass('open-menu');
	});
	$('.close-btn').click(function () {
		$('.menu-area').removeClass('open-menu');
	});
	
	/* FAQ Area */
	$(".single-faq").click(function () {
		if ($(this).hasClass("show")) {
			$('.faq-hidden-area').slideUp();
			$(this).removeClass('show').addClass('hide');
		} else if (!$(this).hasClass("active")) {
			$('.faq-hidden-area').slideUp();
			$('.single-faq').addClass('hide').removeClass('show');
			$(this).removeClass('hide').addClass('show');
			$(this).children('.faq-hidden-area').slideToggle();
		}
	});

	/* Article Area */
	$(".content").slice(0, 3).show();
	$("#loadMore").on("click", function (e) {
		e.preventDefault();
		$(".content:hidden").slice(0, 3).slideDown();
		if ($(".content:hidden").length == 0) {
			$("#loadMore").text("No Content").addClass("noContent");
		}
	});
	
	/* Carousel Area */
	initSlider();
	function initSlider() {
		$('.carousel-content').owlCarousel({
			items: 1,
			animateIn: 'fadeInDown',
			items: 1,
			dots: true,
			loop: true,
			autoplay: true,
			mouseDrag: false,
			nav: true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			onInitialized: startProgressBar,
			onTranslate: resetProgressBar,
			onTranslated: startProgressBar
		});
	}

	function startProgressBar() {
		// apply keyframe animation
		$(".slide-progress").css({
		  width: "100%",
		  transition: "width 4000ms"
		});
	  }
	  
	  function resetProgressBar() {
		$(".slide-progress").css({
		  width: 0,
		  transition: "width 0s"
		});
	}
});