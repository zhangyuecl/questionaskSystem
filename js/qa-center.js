$(function(){
	$('.my-question').on('tap',function(){
		$('.my-active').css({'transform':'translateX(0%)'});
		$('.slider').css({'transform':'translateX(0%)'});
	});
	$('.my-qa').on('tap',function(){
		$('.my-active').css({'transform':'translateX(100%)'});
		$('.slider').css({'transform':'translateX(-50%)'});
	});
	$(window).scroll(function(){
		//change-div距离浏览器的高度
		var top=document.getElementsByClassName('change-div')[0].offsetTop-document.body.scrollTop;
		//头部的高度
		var headerheight=$('.head-fixed').height();
		//change-div的高度
		var changeheight=$('.change-div').height();
		if(top<headerheight){
			$('.change-div').css({'position':'fixed','top':'4rem','z-index':'10'});
		}
		//列表容器的高度
		var slidertop=document.getElementsByClassName('slider')[0].offsetTop-document.body.scrollTop;
		if(headerheight+changeheight<slidertop){
			$('.change-div').css({'position':'relative','top':'0','z-index':'1'})
		}
	});
	$('body').goTop();
})
