$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll >= 800) {
		$(".sticky_header").addClass("scroll_down");
	} else {
		$(".sticky_header").removeClass("scroll_down");
	}
});

// Mobile menu
$('.site_header .toggle').click(function (e) {
	$('.mobile_menu').toggleClass('opened');
});


$(document).click(function (event) {
	if (!$(event.target).closest(".site_header .toggle, .mobile_menu .inner").length) {
		$("body").find(".mobile_menu .inner").parent().removeClass("opened");
		$('.site_header .toggle').removeClass('opened');
	}
});
// end


// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function () {
	$('#tabs-nav li').removeClass('active');
	$(this).addClass('active');
	$('.tab-content').hide();

	var activeTab = $(this).find('a').attr('href');
	$(activeTab).show()
	return false;
});
// End

// Language select
$('.language_select .trigger').click(function () {
	$(this).parent().toggleClass('active')
})


// var swiper = new Swiper(".our_plans .slider", {
// 	slidesPerView: 3,
// 	spaceBetween: 30,
// 	centeredSlides: true,

// });

if ($(window).width() < 576) {
	$('.site_header .contact_link .btn span').html('Jetzt anfragen')
}


var $owl = $('.owl-carousel');

$owl.children().each(function (index) {
	$(this).attr('data-position', index);
});


$owl.owlCarousel({
	center: true,
	startPosition: 1,
	smartSpeed: 100,

	responsive: {
		0: {
			items: 1.2
		},
		576: {
			items: 2
		},
		991: {
			touchDrag: false,
			mouseDrag: false,
		}
	},
	onInitialized: function (event) {
		var $centerSlide = $(event.target).find('.owl-item.center').first().find('.owl-item');
		var currentPosition = $centerSlide.attr('data-position');
		$owl.trigger('to.owl.carousel', [currentPosition, 0, true]);

		$centerSlide.addClass('center');
	}
});

$(document).on('click', '.owl-item>div', function () {
	var $speed = 200;
	$owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
});

// 

var owl = $('.reviews .slider');

owl.owlCarousel({
	items: 1,
	smartSpeed: 800,
	nav: false,
	dots: true,
});

// Custom navigation events
$('.slider .owl-prev').click(function () {
	owl.trigger('prev.owl.carousel');
});

$('.slider .owl-next').click(function () {
	owl.trigger('next.owl.carousel');
});



$('.hero .search_bar .form_wrap .btn, .popup .top .closeBtn').click(function () {
	$('.popup').toggleClass('active')
})

$(document).click(function (event) {
	if (!$(event.target).closest(".popup .inner, .hero .search_bar .form_wrap .btn").length) {
		$("body").find(".popup").removeClass("active");
	}
});