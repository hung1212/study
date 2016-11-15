var boxValue;
var boxDiv
var zhi
var a = 55
var bc = []

function rander() {
	var box = document.querySelector(".box")

	for(var i = 0; i < 10; i++) {
		var iValue = i * 45;
		for(var j = 0; j < 10; j++) {
			var jValue = j * 45;
			box.innerHTML += "<div style='position:absolute;left:" + jValue + "px;" + "top:" + iValue + "px" +
				"'class='boxDiv' index =" + i + j + ">" + "</div>"
		}
	}
	boxDiv = document.querySelectorAll(".box .boxDiv")

	boxDiv[55].classList.add("top")
}
window.onload = function() {
	rander()
	barrier()

	document.body.addEventListener('keydown', ondown)
	
}

//不能通过的障碍物
function barrier() {
	bc.push(boxDiv[77], boxDiv[78], boxDiv[67], boxDiv[68], boxDiv[66] , boxDiv[32] , boxDiv[33])
	for(var i = 0; i < bc.length; i++) {
		bc[i].classList.add("bc")
	}

}

function ondown(e) {

	switch(e.keyCode) {
		case 37: //左键盘

			//	debugger

			
			var nextIndex = a -1
			if(nextIndex < 0) {
				nextIndex += 100
			}
			var classList = Array.prototype.slice.call(boxDiv[nextIndex].classList)
			if(classList.indexOf("bc") > -1){
				boxDiv[a].classList = "left"
				return
			}
			boxDiv[a].className = "boxDiv"
			boxDiv[nextIndex].className = "left"
			a = nextIndex
			break

		case 38: //上键盘
			var nextIndex = a -10
			if(nextIndex == -1) {
				nextIndex += 91
			}
			if(nextIndex < 0) {
				nextIndex += 101
			}
			var classList = Array.prototype.slice.call(boxDiv[nextIndex].classList)
			if(classList.indexOf("bc") > -1){
				boxDiv[a].className = "top"
				return
			}
			
			boxDiv[a].className = "boxDiv"
			boxDiv[nextIndex].className = "top"
			a = nextIndex
			break

		case 39: //右键盘
			var nextIndex = a + 1
			if(nextIndex > 99) {
				nextIndex -= 100
			}
			var classList = Array.prototype.slice.call(boxDiv[nextIndex].classList)
			if(classList.indexOf('bc') > -1){
				boxDiv[a].className = "right"
				return
			}
			boxDiv[a].className = "boxDiv"
			
			boxDiv[nextIndex].className = "right"
			a = nextIndex
			break

		case 40: //下键盘
			var nextIndex = a + 10
			if(nextIndex == 100) {
				nextIndex -= 81
			}
			if(nextIndex > 99) {
				nextIndex -= 101
			}

			var classList = Array.prototype.slice.call(boxDiv[nextIndex].classList)
			if(classList.indexOf('bc') > -1) {
				boxDiv[a].className = "bottom"
				return
			}
			
			boxDiv[a].className = "boxDiv"
			a = nextIndex
			boxDiv[a].className = "bottom"
			break

	}
}