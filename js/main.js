$(function () {
	// menu opener hamburger
	$('.menu-hamb').click(function () {
		$('.menu-collapse').toggleClass('d-none');
		$('.menu').toggleClass('menu-opened');
	});

	// плавное перемещение страницы к нужному блоку
	$(".go_to").click(function (e) {
		e.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 1500);
	});
	
	$('.call-order__btn').click(function(e){
		e.preventDefault()
		$('#exampleModal').arcticmodal();
	});
	
});