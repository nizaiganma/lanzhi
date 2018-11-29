/*
* @Author: admin
* @Date:   2018-10-15 23:44:59
* @Last Modified by:   admin
* @Last Modified time: 2018-10-19 00:25:21
*/

//定时器获取屏幕宽度，让它响应
setInterval(function(){
	var winwid1=$(window).width();
	if(winwid1>999){
		$('.js_navul').css('display', 'block');
		// console.log(1);
	}else{
		// console.log(2);
		$('.js_navul').removeClass('js_navulhei');

	}
	if(winwid1>999){
		// $('.js_navul').addClass('js_navulhei');
		$('.js_nav').slideDown(500);
	}
	// 解决出现的bug
	if(winwid1<999&&js_xialai%2==0){
		$('.js_nav').slideUp(500);
	}

},100); 
$('.js_li1').mouseenter(function(){
	$('.js_liul1').stop().slideDown(800);
	$('.js_navul').addClass('js_navulhei');
	// 让搜索框收起
	$('.js_seadiv').stop().slideUp(500);
	$('.js_esearch2').removeClass('js_cuo2y');
	$('.js_cuo2').addClass('js_cuo2y');
	js_sea=0;
});
$('.js_li1').mouseleave(function(){
	$('.js_liul1').stop().slideUp(800);
});
$('.js_li2').mouseenter(function(){
	$('.js_liul2').stop().slideDown(800);
	$('.js_navul').addClass('js_navulhei');
	// 让搜索框收起
	$('.js_seadiv').stop().slideUp(500);
	$('.js_esearch2').removeClass('js_cuo2y');
	$('.js_cuo2').addClass('js_cuo2y');
	js_sea=0;
});
$('.js_li2').mouseleave(function(){
	$('.js_liul2').stop().slideUp(800);
});

var js_xialai=0;
// $('.js_xiala').click(function(){
// 	$('.js_xialai2').removeClass('js_xialai22');
// 	if(js_xialai%2==0){
// 		$('.js_xialai1').hide(800);
// 		$('.js_xialai2').show(800);
// 	}else{
// 		$('.js_xialai2').hide(800);
// 		$('.js_xialai1').show(800);
// 	}
// 	js_xialai++;
// });
$('.js_xialaul').click(function(){
	// if(js_xialai%2==0){
	// 	$('.js_xialaul li:nth-of-type(1)').removeClass('js_xialali1');
	// 	$('.js_xialaul li:nth-of-type(2)').removeClass('js_xialali2');
	// 	$('.js_xialaul li:nth-of-type(3)').removeClass('js_xialali3');
	// }
	$('.js_xialaul li:nth-of-type(1)').toggleClass('js_xialali1');
	$('.js_xialaul li:nth-of-type(2)').toggleClass('js_xialali2');
	$('.js_xialaul li:nth-of-type(3)').toggleClass('js_xialali3');
	// 
	var winwid2=$(window).width();
	if(winwid2<999){
		$('.js_navul').removeClass('js_navulhei');
	}
	if(js_xialai%2==0){
		$('.js_nav').slideDown(800);
	}else{
		$('.js_nav').slideUp(800);
	}
	js_xialai++;
	// 让里面下拉的+
	js_ppgsi2=0;
	$('.js_ppgsi23').addClass('js_ppgsi2');
	$('.js_liul2').stop().slideUp(800);
	$('.js_ppgsi12').css('background', '');
	js_ppgsi=0;
	$('.js_ppgsi22').addClass('js_ppgsi2');
	$('.js_liul1').stop().slideUp(800);
	$('.js_ppgsi11').css('background', '');
	// 让搜索框收起
	$('.js_seadiv').stop().slideUp(500);
	$('.js_esearch2').removeClass('js_cuo2y');
	$('.js_cuo2').addClass('js_cuo2y');
	js_sea=0;
});
var js_ppgsi=0;
var js_ppgsi2=0;
$('.js_ppgs1').click(function(){
	$('.js_navul').removeClass('js_navulhei');
	js_ppgsi2=0;
	$('.js_ppgsi23').addClass('js_ppgsi2');
	$('.js_liul2').stop().slideUp(800);
	$('.js_ppgsi12').css('background', '');
	if(js_ppgsi%2==0){
		$('.js_ppgsi11').css('background', '#2196ff');
		$('.js_ppgsi22').removeClass('js_ppgsi2');
		$('.js_liul1').stop().slideDown(800);
		// $(this).parent().css({'background': '#2196ff'}).children('.js_navullia').css('color', '#fff');

	}else{
		$('.js_ppgsi11').css('background', '');
		$('.js_ppgsi22').addClass('js_ppgsi2');
		$('.js_liul1').stop().slideUp(800);
		// $(this).parent().css({'background': ''}).children('.js_navullia').css('color', '');
	}
	js_ppgsi++;
});
$('.js_ppgs2').click(function(){
	$('.js_navul').removeClass('js_navulhei');
	js_ppgsi=0;
	$('.js_ppgsi22').addClass('js_ppgsi2');
	$('.js_liul1').stop().slideUp(800);
	$('.js_ppgsi11').css('background', '');
	if(js_ppgsi2%2==0){
		$('.js_ppgsi12').css('background', '#2196ff');
		$('.js_ppgsi23').removeClass('js_ppgsi2');
		$('.js_liul2').stop().slideDown(800);

	}else{
		$('.js_ppgsi12').css('background', '');
		$('.js_ppgsi23').addClass('js_ppgsi2');
		$('.js_liul2').stop().slideUp(800);
	}
	js_ppgsi2++;
});
// 搜索框
var js_sea=0;
$('.js_esearch2').click(function(){
	
	$('.js_esearch2').toggleClass('js_cuo2y');
	if(js_sea%2==0){
		$('.js_seadiv').stop().slideDown(500);
	}else{
		$('.js_seadiv').stop().slideUp(500);
	}
	// 滚动条消失
	 
    // $(document).unbind("scroll.unable");
 
	js_sea++;
	// 让下拉框收起
	var winwid=$(window).width();
	if(winwid<999){
		$('.js_nav').slideUp();
		js_xialai=0;
		$('.js_xialaul li:nth-of-type(1)').removeClass('js_xialali1');
		$('.js_xialaul li:nth-of-type(2)').removeClass('js_xialali2');
		$('.js_xialaul li:nth-of-type(3)').removeClass('js_xialali3');

		js_ppgsi2=0;
		$('.js_ppgsi23').addClass('js_ppgsi2');
		$('.js_liul2').stop().slideUp(800);
		$('.js_ppgsi12').css('background', '');
		js_ppgsi=0;
		$('.js_ppgsi22').addClass('js_ppgsi2');
		$('.js_liul1').stop().slideUp(800);
		$('.js_ppgsi11').css('background', '');	
	}
	
});
$('.js_search').focus(function(event) {
	// $('.js_search').attr('value', '');
	$(this).val('');
});
$('.js_search').blur(function(event) {
	// $(this).attr('value', '请输入一个关键字：');
	$(this).val('请输入一个关键字：');
});
$('.js_cuo').click(function(){
	// $(this).attr('value', '请输入一个关键字：');这里用不了
	$('.js_search').val('请输入一个关键字：');
});