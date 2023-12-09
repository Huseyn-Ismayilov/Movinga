$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	if (scroll >= 60) {
		$(".site_header").addClass("scroll_down");
	} else {
		$(".site_header").removeClass("scroll_down");
	}
});



$('.toggle, .mobile_menu .close_btn').click(function () {
	$('.mobile_menu').toggleClass('opened');
	$('.nav_menu').toggleClass('opened');
	$('.toggle').toggleClass('opened')

});

$('.mobile_menu .menu .dropdown .nav_link').click(function (e) {
	$(this).next().toggleClass('opened');
	return false;
});
$('.mobile_menu .menu .back_btn').click(function (e) {
	$(this).parent().removeClass('opened');
});

// end


$(document).click(function (event) {
	if (!$(event.target).closest(".site_header .toggle, .mobile_menu .inner").length) {
		$("body").find(".mobile_menu .inner").parent().removeClass("opened");
		$('.site_header .toggle').removeClass('opened');
	}
});




// var swiper = new Swiper(".content_slider .slider", {
// 	slidesPerView: 1,
// 	spaceBetween: 30,
// 	pagination: {
// 		el: ".content_slider .swiper-pagination",
// 		clickable: true,
// 	},
// 	navigation: {
// 		nextEl: ".content_slider .next_arrow ",
// 		prevEl: ".content_slider .prev_arrow",
// 	},
// });


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
	$(activeTab).fadeIn();
	return false;
});

$('.top_header .language_select .trigger').click(function(){
	$(this).parent().toggleClass('active')
})