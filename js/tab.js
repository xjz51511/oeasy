$(function(){
	var index=0;//li的初始值
	
	$(".tab ul li").mouseover(
		function(){
			console.info($(this).index());//获取当前li的值
			$(this).stop().animate({
				width:400
			},500).siblings("li").stop().animate({
				width:100
			},500);
			
			$(".t_center").eq(index).css("display","block");
			$(".p2").eq(index).css("display","block");
			$(".t_top img").eq(index).addClass("t_opacity")
		});
		
	$(".tab ul li").mouseout(function(){
		$(this).stop().animate({
				width:400
			},500);
			$(".t_center").css("display","none");
			$(".p2").css("display","none");
	});
		
});
