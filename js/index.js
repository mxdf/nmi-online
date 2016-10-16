$(function() {
// 搜索框开始
	$('#inputMore').focus(function(event) {
		$('.insearch').addClass('active');
		$('.insearch .right').addClass('close');
		$(window).keydown(function(event) {
			if ($('#inputMore').val()=='搜索商家、分类、地点') {
				$('#inputMore').prop({
					'value': ''
				})
				$('#inputMore').css('color', '#303030');
			};
		});
		$(window).keyup(function(event) {
			if ($('#inputMore').val()=='') {
				$('#inputMore').prop({
					'value': '搜索商家、分类、地点'
				})
				$('#inputMore').css('color', '#A9A9A9');
			};
		});
		
	});
	$('.insearch .right').click(function(event) {
		$(this).removeClass('close');
		$('.insearch').removeClass('active');
	});
// 搜索框结束
// banner开始

	$('.closeIcon').click(function(event) {
		$('.bd').fadeOut();
	});
// banner结束
// 分类开始\


// 分类结束
// swiper
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });

// swiper










});











