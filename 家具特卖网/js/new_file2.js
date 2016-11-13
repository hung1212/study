$(function(){
	$('.head-top2 .head-top2-right .Quantity p .subtract').click(function(e){
		var value = parseInt($(".head-top2 .head-top2-right .Quantity p .input2").val() )
		if(value - 1 >= 1){
			var a =parseInt($(".head-top2 .head-top2-right .Quantity p .input2").val() ) - 1
			$(".head-top2 .head-top2-right .Quantity p .input2").val(a)
		}
		e.preventDefault()
	})
	
	$('.head-top2 .head-top2-right .Quantity p .add').click(function(e){
		var value =parseInt($(".head-top2 .head-top2-right .Quantity p .input2").val() ) + 1
		$(".head-top2 .head-top2-right .Quantity p .input2").val(value)
		e.preventDefault()
	})
	
	$('.fixed .color').hover(function() {
		$(this).addClass('cur')
	}, function() {
		$(this).removeClass('cur')

	})
	
	$(".fixed").css("height" , window.innerHeight)
	$(window).resize(function(){
	 
	})
	window.addEventListener('resize',function(){
		$(".fixed").css("height" , window.innerHeight)
	})
	
	$(".head-top2 .head-top2-left .head-top2-left1 .img-bz-top").click(function(){
		var PpTop = parseInt($("#pp").css("top"))  - 77
		$("#pp").animate({top:PpTop + "px"})
	})
	$(".head-top2 .head-top2-left .head-top2-left1 .img-bz-bottom").click(function(){
		var PpTop = parseInt($("#pp").css("top"))  + 77
		$("#pp").animate({top:PpTop + "px"})
	})
	
	$(".like-right-top li").hover(function(){
		$(this).addClass("cur")
	},function(){
		$(this).removeClass("cur")
	})
	
	$(".like-right-top li").click(function(){
		var a = $(this).index()
		$(".like-right-top li").removeClass("cur2")
		$(this).addClass("cur2")
		$('.like-right-top3,.like-right-top4,.like-right-top5').hide()
		if(a == 0){
			$(".like-right-top3").show()
		}
		if(a == 1){
			$(".like-right-top4").css("display" , "block")
		}
		if(a == 2){
			$(".like-right-top5").css("display" , "block")
		}
	})
})
