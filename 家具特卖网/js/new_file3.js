$(function(){
	$(".head-home").hover(function(){
		$(this).find(".head-bottom-right").show()
	},function(){
		$(this).find(".head-bottom-right").hide()
	})
	
	$(".box4 .box4-bootm .box4-bottom .seniority_1").hover(function(){
		$(".seniority-hb_01").hide()
		$(".box4 .box4-bootm .box4-bottom .seniority_1 .div1").removeClass("cur")
		$(".box4 .box4-bootm .box4-bottom .seniority_1 .div1 .sp").removeClass("cur")
		$(this).find(".seniority-hb_01").show()
		$(this).find(".div1").addClass("cur")
		$(this).find(".div1 .sp").addClass("cur")
	},function(){
//		$(this).find(".seniority-hb").hide()
//		$(this).find(".div1").removeClass("cur")
	})
	
	$(".box4 .box4-bootm .box4-bottom .seniority_2").hover(function(){
		$(".seniority-hb_02").hide()
		$(".box4 .box4-bootm .box4-bottom .seniority_2 .div1").removeClass("cur")
		$(".box4 .box4-bootm .box4-bottom .seniority_2 .div1 .sp").removeClass("cur")
		$(this).find(".seniority-hb_02").show()
		$(this).find(".div1").addClass("cur")
		$(this).find(".div1 .sp").addClass("cur")
	},function(){
//		$(this).find(".seniority-hb").hide()
//		$(this).find(".div1").removeClass("cur")
	})
})

