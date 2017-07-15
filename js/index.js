


var oTime = document.querySelector("#time span");
var oStartBtn = document.querySelector("#startGame");
var randNum;

var score = 0;

oStartBtn.addEventListener('click',function(){
	
	oStartBtn.style.display = "none";
	var num = 20;
	var username = prompt("请输入您的用户名：");
	var endGame = function(){
		var endImg = document.createElement("div");
		endImg.id = "endDiv";
		endImg.innerHTML = '<img src="img/pop_score_bg.png" />'+
								'<h3>'+username+'的分数是'+score+'</h3><h2 id="again">再来一次</h2>';
		console.log(endImg.innerHTML);		
		document.body.appendChild(endImg);
		document.querySelector("#again").onclick = function(){
			location.reload();
		}
				
	}
	
	var time = 1000;
	var clearTime = setInterval(function(){
		for(var i = 0;i < 12;i ++){
			document.querySelector("#ds" + i + " img").src = "img/vendor_people00.png";
		}
		oTime.innerHTML = num + "s";
		num--;
		if(num < 10){
			time = 100;
			if(num < 0){
				clearInterval(clearTime);
				endGame();
			}
		}
		randNum = parseInt(Math.random() * 12);
		document.querySelector("#ds" + randNum + " img").src = "img/vendor_hole01.png";
	},time);
	
	//添加打地鼠的方法
	document.querySelector(".mice").addEventListener('click',function(event){
		var isClick = false;
		if(event.path[1].id == ("ds" + randNum) && !isClick){
			score += 100;
			console.log(score);
			document.querySelector("#ds" + randNum + " img").src = "img/vendor_hole02.png";
			isClick = true;
		}
	});
	
})