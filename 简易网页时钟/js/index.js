



window.onload = function(){
	
	var time = setInterval(function(){
		var myDate = new Date()
		var h = myDate.getHours()
		var m = myDate.getMinutes()
		var s = myDate.getSeconds()
		
		
		document.querySelector(".clock").innerHTML = "<span>"+ h +"</span>" + "点" +
		"<span>"+ m +"</span>" + "分" + "<span>"+ s +"</span>" + "秒"
	} , 1000)
	
}