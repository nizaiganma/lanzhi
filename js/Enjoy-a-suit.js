/*
* @Author: admin
* @Date:   2018-10-15 14:15:20
* @Last Modified by:   admin
* @Last Modified time: 2018-10-16 18:51:00
*/
$(window).resize(function(event) {
	if($(window).width()<'640'){
		console.log($('.hjb-show-pc').src)
     	$('.hjb-show-pc').attr('src','images/IMG1496JIF645971146.gif'); 
	}else{
		$('.hjb-show-pc').attr('src','images/IMG1496mAV642151005.gif'); 
	}
});
$('.hjb-imgchange').click(function(){
	if($(this).attr('src')=='images/icon_wish.png'){
		$(this).attr('src','images/2018-10-15_144131.png');
	}else if($(this).attr('src')=='images/2018-10-15_144131.png'){
		$(this).attr('src','images/icon_wish.png');
	}
	console.log($(this).children('img').attr('src'))
})