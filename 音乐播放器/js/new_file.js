//    var audios = ['http://www.runoob.com/try/demo_source/horse.mp3', '音乐歌单/故乡的原风景 - 宗次郎.mp3', "音乐歌单/当我遇上你 - 纯音乐.mp3", "音乐歌单/命运 - 钢琴曲.mp3", "音乐歌单/卡农钢琴曲（Variations on the Canon） - 我的野蛮女友.mp3", "音乐歌单/钢琴曲 梁祝 - 群星.mp3"];
//var audios = ['第一首歌', '第二首歌', '第三首歌', '第四首歌']
//var audiosOb = ['第一首歌':'http://www.runoob.com/try/demo_source/horse.mp3',
//				'第二首歌':'//www.runoob.com/try/demo_source/horse.mp3', 
//				'第三首歌':'//www.runoob.com/try/demo_source/horse.mp3', 
//				'第四首歌':'//www.runoob.com/try/demo_source/horse.mp3'
//				]
var audios = [{
	name: '我的中国心',
	path: 'http://www.runoob.com/try/demo_source/horse.mp3',
	singer: "张三",
	img: ['img1', 'img2']
}, {
	name: '我的中国心1',
	path: 'http://www.runoob.com/try/demo_source/horse.mp3'
}, {
	name: '我的中国心2',
	path: 'http://www.runoob.com/try/demo_source/horse.mp3'
}, {
	name: '我的中国心2',
	path: 'http://www.runoob.com/try/demo_source/horse.mp3'
}, {
	name: '我的中国心3',
	path: 'http://www.runoob.com/try/demo_source/horse.mp3'
}, ]
var j = 0;
var boxgdP
var arr;
var se
var mosi = 1
var randomV = [];

var audioslg
var tj
var k

var remove1
var remove2
var a
var boxgd

function render() {

	document.querySelector(".boxgd").innerHTML = ''

	audioslg = audios.length
	
	//给html文本循环添加p标签的歌单
	for(var i = 0; i < audioslg; i++) {
		document.querySelector(".boxgd").innerHTML += "<div id ='sc' index='" + i + "'>" +
			"<input type = 'checkbox' name = 'shanchu' value = " + i + ">" +
			"<p>" + audios[i].name + "</input></p>" +
			"<button id='scyy' class = 'buttonsc'>" + "删除音乐" + "</button>" +
			"</div>"
	}

	//tab切换点击播放的歌单
	function djgd() {

		for(var i = 0; i < audios.length; i++) {
			boxgdP[i].addEventListener('click', function() {
				console.log('点击了')
				if(document.querySelector(".boxgd p.cur")) {
					document.querySelector(".boxgd p.cur").classList.remove("cur");
				}
				this.classList.add("cur");

				j = parseInt(this.parentNode.getAttribute("index"))

				play(j)
			})
		}
	}

	//点击删除音乐
	function dysc() {
		remove1 = document.querySelectorAll("#sc")
		remove2 = document.querySelectorAll("#scyy")
		for(var i = 0; i < audios.length; i++) {
			remove2[i].addEventListener("click", function() {
				console.log("点击了")
				k = parseInt(this.parentNode.getAttribute("index"))

				audios.splice(k, 1)

				render()
			})

		}
	}

	//拿出p标签的集合歌单
	boxgdP = document.querySelectorAll(".boxgd p")

	djgd()

	dysc()
}

function play(index) {
	arr.setAttribute("src", audios[index].path);
	arr.play()
	gd()
}

window.onload = function() {

	render()

	//拿到audio标签的class
	arr = document.querySelector(".audio");

	//拿到.boxgd
	boxgd = document.querySelector(".boxgd")

	

	//调用gd函数
	gd();

	//拿到select框的值为:mySelect的Id
	se = document.querySelector("#mySelect")
		// 给selectb绑定change时间
	se.addEventListener("change", function() {
		mosi = parseInt(this.value)
		if(arr.pause) {
			arr.play()
		}
	})

	//初始播放的歌单
	arr.setAttribute("src", audios[0].path);

	//给audio标签添加结束事件
	arr.addEventListener('ended', function() {
		if(mosi === 1) {
			xys2()
		} else if(mosi === 2) {
			random()
		} else if(mosi === 3) {
			dq()
		} else if(mosi === 4) {
			lb()
		}
	})

	//获取添加音乐的class
	tj = document.querySelector(".buttontj")
	tj.addEventListener("click", function() {
		//获取要添加的歌名
		var tjgd = document.getElementById("tjinput1").value
		var lu = document.getElementById("tjinput2").value
		var gm = document.getElementById("tjinput3").value
		var mp3 = {
			name: tjgd,
			path: lu,
			singer: gm,

		}
		audios.push(mp3)
		render()
	})

	//给删除按钮添加点击事件
	document.querySelector(".buttonsc2").addEventListener("click", function() {
		fxk()
	})

	//	document.body.addEventListener("keydown" , function(e){
	//		 ondown(e)
	//	})

	//全选按钮点击事件
	document.querySelector(".buttonscx").addEventListener("click", function() {
		var name = document.querySelectorAll(".boxgd input[name='shanchu']")
		for(var i = 0; i < name.length; i++) {
			name[i].checked = true
		}
	})
	
	//全不选点击按钮事件
	document.querySelector(".buttonscbx").addEventListener("click" , function(){
		var name = document.querySelectorAll(".boxgd input[name='shanchu']")
		for(var i = 0 ; i < name.length ; i++){
			name[i].checked = false
		}
	})
}

//复选框删除音乐
function fxk() {

	var name = document.querySelectorAll(".boxgd input[name='shanchu']")
	var selected = []
	for(var i = 0; i < name.length; i++) {
		if(name[i].checked) {
			selected.push(parseInt(name[i].parentNode.getAttribute("index")))
		}
	}

	//			audios = audios.filter(function(item, i) {
	//				return selected.indexOf(i) === -1
	//			})
	var a = []
	for(var i = 0; i < audios.length; i++) {
		//		if(selected[i] !== i) {
		//			a.push(audios[i])
		//		}

		if(selected.indexOf(i) === -1) {
			a.push(audios[i])
		}
	}
	audios = a

	render()
}
//实现单曲播放
function dq() {
	arr.play();
}

//实现随机循环
function random() {
	randomV.push(j = Math.floor(Math.random() * audios.length))
	play(j)
}

//实现列表循环
function lb() {
	j++
	if(j >= audios.length) {
		j = 0;
	}
	play(j)
}

//改变歌单class样式 
function gd() {
	//删除歌单的class样式
	if(document.querySelector(".boxgd p.cur")) {
		document.querySelector(".boxgd p.cur").classList.remove("cur");
	}

	//添加播放歌单的class样式
	if(boxgdP[j]) {
		boxgdP[j].classList.add("cur")
	}
}

// 点击播放上一首歌
function xys1() {
	j--;
	if(mosi === 4 || mosi === 1 || mosi === 3) {
		if(j < 0) {
			j = audios.length - 1;
		}
	} else if(mosi === 2) {
		if(randomV.length <= 1) {
			random()
		} else {
			j = randomV[randomV.length - 2]
			randomV.pop()
		}
	}
	play(j)
}

//点击播放下一首歌
function xys2() {
	if(mosi === 4) {
		lb()
	} else if(mosi === 2) {
		random()
	} else {
		j++;
		if(j >= audios.length) {
			alert("没有下一首了！")
			j--;
		} else {
			play(j)
		}
	}
}

//获取键盘的值
function ondown(e) {
	var box = document.querySelector(".box")
	switch(e.keyCode) {
		case 37:
			box.classList.add("box-left");
			break;

		case 38:
			box.classList.add("box-top");
			break;

		case 39:
			box.classList.add("box-right");
			break;

		case 40:
			box.classList.add("box-bottom");
			break;

	}
}