/*
* @Author: admin
* @Date:   2018-10-16 19:32:32
* @Last Modified by:   admin
* @Last Modified time: 2018-10-22 19:03:02
*/
$('.hjb-col').mouseenter(function(event) {
	/* Act on the event */
	$(this).css({'background':'rgba(0,0,0,0.2)'})
});
$('.hjb-col').mouseleave(function(event) {
	/* Act on the event */
	$(this).css({'background':'transparent'})
});
$('.hjb-item-img').mouseenter(function(event) {
	/* Act on the event */
	$(this).stop().css;
	$(this).children('img').eq(0).stop().animate({'width':'110%','height':'110%','left':'-5%','top':'-5%'}, 500)
});
$('.hjb-item-img').mouseleave(function(event) {
	/* Act on the event */
	$(this).children('img').eq(0).stop().animate({'width':'100%','height':'100%','left':'0px','top':'0px'}, 500)
});
var ss=0;
$('.hjb-btn').click(function(event) {
	/* Act on the event */
	ss++;
	if(ss>=2){ss=2};
	$('.hjb-show').eq(ss).show();
	$(this).children('span').html('3'*(ss+2)+'/12')
});