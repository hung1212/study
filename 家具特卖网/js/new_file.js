//var head;
//var headB;
//window.onload = function(){
//	head =document.querySelectorAll(".head-bottom-tab .head-radius")
//	headB = document.querySelector(".head .head-bottom")
//	for(var i = 0 ; i< head.length ; i++){
//		head[i].addEventListener("click" , function(){
////			if(i = 0){
////				HeadBackground(0)
////			}
////			if(i = 1){
////				HeadBackground(1)
////			}
////			if(i = 2){
////				HeadBackground(2)
////			}
//			HeadBackground(this.getAttribute("index"))
//		})
//	}
//}
//function HeadBackground(index){
//	var Br = [
//		"img/1111_01.jpg" ,
//		"img/1111_02.jpg" , 
//		"img/1111_03.jpg"
//	]
//
//	for(var i = 0 ; i<head.length ; i++){
//		head[i].classList.remove("cur")
//		if( i == index){
//			head[i].classList.add("cur")
//		}
//	}
//	
//	for(var i = 0 ; i < Br.length ; i++){
//		if(i == index){
////			headB.style = "background:url(" + Br[i] + ")"
//			headB.style.backgroundImage = "url(" + Br[i] +")"
//		}
//		
//	}
//	
//}
var maodianA = []

window.onload = function() {
	var scrollY;
	var top = document.querySelector(".fixed-right6")
	top.addEventListener('click', function() {
		pageScroll()
	})

	//	var fixedRight = document.querySelectorAll(".fixed .color")
	//	for(var i = 0 ; i<fixedRight.length ; i++){
	//		fixedRight[i].addEventListener("mouseover" ,function(){
	//			this.classList.add("cur")
	//		})
	//	}
	$('.fixed .color').hover(function() {
		$(this).addClass('cur')
	}, function() {
		$(this).removeClass('cur')

	})
//	var fixedHeight = $(".fixed").offset().top
	$(".fixed").css("height" , window.innerHeight)
	$(window).resize(function(){
	 
	})
	window.addEventListener('resize',function(){
		$(".fixed").css("height" , window.innerHeight)
	})
	//	maodianA = document.querySelectorAll(".top4 .maodian li")
	//	for(var i = 0 ; i < maodianA.length ; i++){
	//		this.addEventListener("mousemove" ,function(){
	//			maodianA[1].innerHTML = "秒杀专区"
	//		})
	//		this.addEventListener("click" , function(){
	//			
	//		})
	//	}
	$('.top4 .maodian li').hover(function() {
		var prefecture = $('.prefecture').eq($(this).index())
//		$(this).children(".div1").css("display" , "none")
//		$(this).children(".div2").css("display" , "block")
		$(this).addClass('hover')
	}, function() {
//		$(this).children(".div1").css("display" , "block")
//		$(this).children(".div2").css("display" , "none")

		$(this).removeClass('hover')
	}).click(function() {
		var prefecture = $('.prefecture').eq($(this).index())
//		$(this).children(".div2").css("display" , "block")
		$(".maodian li").removeClass("hover3")
//		setTimeout('$(this).addClass("hover3")' , 100)
		$(this).addClass("hover3")
		scrollY = window.scrollY
		
		
		setTimeout(a, 100)
		var a = $('html,body').animate({
			scrollTop: prefecture.offset().top - 50
		}) 
	})

	$(window).scroll(function() {
		var prefecture = $('.prefecture').eq($(this).index())
		var maodian = $(".maodian li")
		scrollY = window.scrollY
		if(scrollY > 600){
			$('.maodian').show()
		}else{
			$('.maodian').hide()
		}
		$('.maodian li').removeClass('hover2')
		if(scrollY < 900) {
			maodian.eq(0).addClass('hover2')			
		}else if(scrollY < 1800){
			maodian.eq(1).addClass('hover2')			
		}else if(scrollY < 2300){
			maodian.eq(2).addClass('hover2')			
		}else if(scrollY < 2800){
			maodian.eq(3).addClass('hover2')			
		}else if(scrollY < 3300){
			maodian.eq(4).addClass('hover2')			
		}else if(scrollY < 3800){
			maodian.eq(5).addClass('hover2')			
		}else if(scrollY < 4300){
			maodian.eq(6).addClass('hover2')
		}else if(scrollY < 4800){
			maodian.eq(7).addClass('hover2')			
		}else if(scrollY < 5200){
			maodian.eq(8).addClass('hover2')			
		}
	})
	
	
}

function pageScroll() {
	//	window.scrollBy(0, -10);
	//	scrolldelay = setTimeout('pageScroll()', 1);
	//	if(document.documentElement.scrollTop ==0 || document.body.scrollTop == 0){
	//		clearInterval(scrolldelay);
	//	}
	var timer
	timer = setInterval(function() {
		var osTop = document.body.scrollTop
		osTop = osTop + Math.floor(-osTop / 6)
			//			osTop = osTop > 0 ? Math.floor(osTop) : Math.ceil(osTop)
		if(osTop == 0) {
			clearInterval(timer)
		} else {
			document.body.scrollTop = osTop
		}
	}, 30)
}
$(function() {
	$(".head-bottom-background").unslider({
		//		speed: 1000,
		dots: true,
	})

	$(".recommend-top-n").unslider({
		dots: true
	})

	$(".sku-div2").unslider({
		dots: true,
	})
})