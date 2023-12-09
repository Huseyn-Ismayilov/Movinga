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



function makeTimer() {

	var endTime = new Date("6 December 2023 9:56:00 GMT+04:00");
	endTime = (Date.parse(endTime) / 1000);

	var now = new Date();
	now = (Date.parse(now) / 1000);

	var timeLeft = endTime - now;

	var days = Math.floor(timeLeft / 86400);
	var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
	var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
	var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

	if (days < "10") { days = "0" + days; }
	if (hours < "10") { hours = "0" + hours; }
	if (minutes < "10") { minutes = "0" + minutes; }
	if (seconds < "10") { seconds = "0" + seconds; }

	$("#days > div").html(days + "<span>Days</span>");
	$("#hours > div").html(hours + "<span>Hours</span>");
	$("#minutes > div").html(minutes + "<span>Minutes</span>");
	$("#seconds > div").html(seconds + "<span>Seconds</span>");

}

setInterval(function () { makeTimer(); }, 1000);


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