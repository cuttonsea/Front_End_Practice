$(document).ready(function(){

	$('#menu li').mouseenter(function(){
		$('#sub').stop().slideDown();
		$('header #menu li span').css('opacity','1');
	});
	$('#sub').mouseleave(function(){
		$(this).stop().slideUp();
		$('header #menu li span').css('opacity','0');
	});

	$('#banner_btn li').first().addClass('on');
	
	$('#banner_btn li').click(function(){
		$('#banner_btn li').removeClass('on');
		$(this).addClass('on');

		var i = $(this).index();
		$('#banner_image').animate({right:1920*i});
	});

	$('#fade #fade_image li').first().show();
	$('#fade #fade_btn li').first().addClass('red');
	$('#fade #fade_btn li').click(function(){
		$('#fade #fade_btn li').removeClass('red');
		$(this).addClass('red');

		var j = $(this).index();
		$('#fade #fade_image li').fadeOut();
		$('#fade #fade_image li').eq(j).fadeIn();
	});

	$('#tab #tab_con > div').first().show();
	$('#tab #tab_btn li').first().addClass('selected');
	$('#tab #tab_btn li').click(function(){
		$('#tab #tab_btn li').removeClass('selected');
		$(this).addClass('selected');

		var k = $(this).index();
		$('#tab #tab_con > div').fadeOut();
		$('#tab #tab_con > div').eq(k).fadeIn();
	})

	$('#modal_bg').fadeIn(2000);
	$('#modal').fadeIn(2000);

	$('#modal > a').click(function(){
		$('#modal').stop().fadeOut();
		$('#modal_bg').stop().fadeOut();
	})
});//