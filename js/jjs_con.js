/*
* @Author: admin
* @Date:   2018-11-28 10:49:08
* @Last Modified by:   admin
* @Last Modified time: 2018-11-29 00:22:12
*/
var js_mleft=0;
$('.js_piclb2 ul li').click(function(){
	console.log($(this).index());
	js_mleft=-$(this).index()*100;
	console.log(js_mleft);
	$('.js_piclb ul').css('margin-left', js_mleft+'%');
	$('.js_piclb2 ul li').css('borderColor', '#fff');
	$(this).css('borderColor', '#000');
})
setInterval(function(){
	$('.js_yincbot').stop().show(200);
	$('.js_yincbot').css('opacity', '1');
},1500)
$(window).scroll(function(){
	$('.js_yincbot').stop();
	$('.js_yincbot').animate({"opacity":"0"}, 50);
		
	
});
