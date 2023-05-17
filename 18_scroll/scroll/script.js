$(document).ready(function(){

	$('header ul li').first().addClass('on');
	$('#btn li').first().addClass('dot');

	$('header ul li').click(function(){
		// $('header ul li').removeClass('on');
		// $(this).addClass('on');
		var i=$(this).index();

		/*높이가 일정한 경우 980px
		var h=i*980;
		$('html').stop().animate({
			scrollTop:h
		});*/

		//높이가 일정하지 않은 경우
		var h=$('#contents>div').eq(i).offset();
		$('html').stop().animate({
			scrollTop:h.top
		});

		// $('#btn li').removeClass('dot');
		// $('#btn li').eq(i).addClass('dot');
	});

	$('#btn li').click(function(){
		var n=$(this).index();
		$('header ul li').eq(n).trigger('click');
	});

	$(window).scroll(function(){
		var sc=$(this).scrollTop();

		/*if(sc>980){
			$('header ul li').removeClass('on');
			$('header ul li').eq(1).addClass('on');
			$('#btn li').removeClass('dot');
			$('#btn li').eq(1).addClass('dot');
		}*/

		$('#contents>div').each(function(){
			var p=$(this).index();
			if($(this).offset().top<=sc){
				$('header ul li').removeClass('on');
				$('header ul li').eq(p).addClass('on');
				$('#btn li').removeClass('dot');
				$('#btn li').eq(p).addClass('dot');
			}
		});
	});

	//side 메뉴
	$('#side h2 span').first().click(function(){
		$('#side').stop().animate({
			left:0
		});
		$(this).hide();
	});
	$('#side h2 span').last().click(function(){
		$('#side').stop().animate({
			left:'-200px'
		});
		$('#side h2 span').first().show();
	});

	//로그인
	$('#side .btn_login').click(function(){
		$('#modal_bg').fadeIn();
		$('#modal_login').fadeIn();
	});
	$('#modal_bg').click(function(){
		$(this).fadeOut();
		$('#modal_login').fadeOut();
		$('#side h2 span').last().trigger('click');
	});
});