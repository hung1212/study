
var minute = 1
var sedonds = 60
var timer
window.onload = function(){
	
	
	document.querySelector("input").addEventListener("click" , function(){
		if(!!document.querySelector("input.cancel")){
			document.querySelector("input.cancel").classList.remove("cancel")
			clearTimeout(timer)
		}else{
			document.querySelector("input").classList.add("cancel")
			clock()
		}
		
	})
}


function clock(){
	
		if(minute == 0 && sedonds == 0){
			clearTimeout(timer)
		}
	
		timer = setTimeout(function(){
				
	
		if(sedonds - 1 == 0 ){
			minute --
			sedonds = 60
		}else{
			sedonds -=1
		}
		
		
//		document.querySelector(".countdown_span").innerHTML = "<span>"+minute+"</span>" +"分钟" + "<span>" +sedonds +"<span>" + "秒"
		
		document.querySelector(".countdown_span .m").innerHTML = minute
		document.querySelector(".countdown_span .s").innerHTML = sedonds
		clock()
		
	} , 1000)
}




