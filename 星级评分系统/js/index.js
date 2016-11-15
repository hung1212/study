//$(function(){
//	$("li").hover(function(){
//		$(this).find("a").addClass("on")
//	},function(){
//		
//	})
//})

var liIndex;
var liClick;
window.onload = function(){
	
	var Setli = document.querySelectorAll("a")
	var Setp = document.querySelectorAll("p")
	
	
	$("li").hover(function(){
		$("li").find("a").removeClass("on")
		$("p").css("display" , "none")
		liIndex = $(this).index()
		for(var i = 0 ; i <= liIndex ; i++){
			Setli[i].classList.add("on")
		}
		
		Setp[liIndex].style.display = "block"
//		$(this).find("a").addClass("on")
	},function(){
		$("p").hide()
		$("li").find("a").removeClass("on")
		
		for(var i = 0 ; i <= liClick ; i++){
			Setli[i].classList.add("on")
		}
	})
	
	var SetStrong = document.querySelectorAll(".display")
	$("li").click(function(){
		liClick = liIndex;
		for(var i = 0 ; i <= liClick ; i++){
			Setli[i].classList.add("on")
		}
		$(".display").css("display" , "none")
		SetStrong[liIndex].style.display = "block"
	})
}
