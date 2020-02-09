$(function() {

	var swiper = new Swiper('.swiper-container', {
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows : true,
		}
	});


	$('.wrapper .tab').on('click', function(event) {
		var id = $(this).attr('data-id');
		$('.wrapper').find('.tab-item').removeClass('active-tab').hide();
		$('.wrapper .tabs').find('.tab').removeClass('active');
		$(this).addClass('active');
		$('#'+id).addClass('active-tab').fadeIn();
		return false;
	});

	$(".header__menu-btn").on("click", function() {
		$(".header__menu-list").slideToggle();
	});

});