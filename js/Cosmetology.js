/*
* @Author: admin
* @Date:   2018-10-08 15:59:18
* @Last Modified by:   admin
* @Last Modified time: 2018-10-15 11:24:38
*/
var num=0;
$('.hjb-list li').click(function(){
     	$(this).children('img').attr('src','images/slider-pagerpink-active.png');
     	$(this).siblings('').children('img').attr('src','images/slider-pagerpink-normal.png');
     	num=$(this).index();
		$('.hjb-box').animate({'left':-num*$('.hjb-Sowing-map').width()+'px'},500)
})
$('.hjb-left').click(function(){
	console.log($('.hjb-Sowing-map').width())
		num--;
		if(num<0){
			num=4;
			$('.hjb-box').css({'left':-num*$('.hjb-Sowing-map').width()+'px'});
			num=3
		}
		$('.hjb-box').animate({'left':-num*$('.hjb-Sowing-map').width()+'px'},500)
		$('.hjb-list li').eq(num).children('').attr('src','images/slider-pagerpink-active.png');
     	$('.hjb-list li').eq(num).siblings('li').children('').attr('src','images/slider-pagerpink-normal.png');
     	console.log(num)
	})
	$('.hjb-right').click(function(){
		num++;
		if(num==4){
			$('.hjb-list li').eq(0).children('').attr('src','images/slider-pagerpink-active.png');
     		$('.hjb-list li').eq(0).siblings('li').children('').attr('src','images/slider-pagerpink-normal.png');
		}
		if(num>4){
			num=0;
			$('.hjb-box').css({'left':-num*$('.hjb-Sowing-map').width()+'px'},500)
			num=1;
		}
		$('.hjb-box').animate({'left':-num*$('.hjb-Sowing-map').width()+'px'},500);
		$('.hjb-list li').eq(num).children('').attr('src','images/slider-pagerpink-active.png');
     	$('.hjb-list li').eq(num).siblings('li').children('').attr('src','images/slider-pagerpink-normal.png');
	});
	$(window).resize(function(event) {
     		$('.hjb-box').css({'left':-num*$('.hjb-Sowing-map').width()+'px'});

	});
	$('.hjb-nav2 li').click(function(){
		$(this).children('').css({'color':'#c5497d','border-bottom':'3px'+' '+'solid'+' '+'#c5497d','padding':'5px'})
		$(this).siblings('').children('').css({'color':'#000','border-bottom':'none'})
	})
	$('.hjb-nav3-btn').click(function(){
		$(this).css({'background':'#000'})
	})
	$('.hjb-nav3-txt').click(function(){
		$(this).css({'background':'#fff'})
		$(this).css({'color':'#000'})
		$(this).css({'border':'1px'+' '+'solid'+' '+'#000'})
	})
	for(var i=0;i<$('.hjb-nav3-menu').children('').length;i++){
		$('.hjb-nav3-menu li').eq(i).click(function(){
			$('.hjb-nav3-txt').html($(this).children('').html());
			$(this).css({'background-color':'#f0f7fb'}).siblings('').css({'background-color':'#fff'})
		})
	}
	$('.hjb-past-box1').mouseenter(function(event) {
		/* Act on the event */
		$('.hjb-img1').children('img').stop().animate({'width':'285.6px','height':'360px'}, 500)
		$('.hjb-imgs').children('img').stop().animate({'width':'660px','height':'360px','margin-left':'-100px'}, 500)
	});
	$('.hjb-past-box1').mouseleave(function(event) {
		/* Act on the event */
		$('.hjb-img1').children('img').stop().animate({'width':'238px','height':'300px'}, 500)
		$('.hjb-imgs').children('img').stop().animate({'width':'550px','height':'300px','margin-left':'-50px'}, 500)
	});
	$('.hjb-past-box2').mouseenter(function(event) {
		/* Act on the event */
		$('.hjb-img2').children('img').stop().animate({'width':'1080px','height':'540px','margin-left':'-240px'}, 500)
	});
	$('.hjb-past-box2').mouseleave(function(event) {
		/* Act on the event */
		$('.hjb-img2').children('img').stop().animate({'width':'900px','height':'450px','margin-left':'-200px'}, 500)
	});
	$('.hjb-past-box3').mouseenter(function(event) {
		/* Act on the event */
		$('.hjb-img3').children('img').stop().animate({'width':'1080px','height':'540px','margin-left':'-280px'}, 500)
	});
	$('.hjb-past-box3').mouseleave(function(event) {
		/* Act on the event */
		$('.hjb-img3').children('img').stop().animate({'width':'900px','height':'450px','margin-left':'-200px'}, 500)
	});
	$('.hjb-past-box4').mouseenter(function(event) {
		/* Act on the event */
		$('.hjb-img4').children('img').stop().animate({'width':'1080px','height':'540px','margin-left':'-240px'}, 500)
	});
	$('.hjb-past-box4').mouseleave(function(event) {
		/* Act on the event */
		$('.hjb-img4').children('img').stop().animate({'width':'900px','height':'450px','margin-left':'-200px'}, 500)
	});
	var ss=0;
	$('.hjb-btn').click(function(event) {
		/* Act on the event */
		ss++;
		if(ss>=3){ss=3};
		$('.hjb-show').eq(ss).show();
		console.log(ss)
		$(this).children('span').html('4'*(ss+1)+'/16')
	});