
//*************************************

function JudgePCAndroid() {
   var userAgentInfo = navigator.userAgent;
	var Agents = ["iPhone",
      "iPad", "iPod"];  
   var flag = true;
   for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
         flag = false;
         break;
      }
   }
   return flag;
}

var IsPCAndroid = JudgePCAndroid();

window.alert = function(name){
	var iframe = document.createElement("IFRAME");
	iframe.style.display="none";
	iframe.setAttribute("src", 'data:text/plain,');
	document.documentElement.appendChild(iframe);
	window.frames[0].window.alert(name);
	iframe.parentNode.removeChild(iframe);
}

 function BtnClick(name){
	 
	 if(IsPCAndroid){
		 PCBtnClick(name);
		 return;
	 }
	
	if(name == "L1"){
		window.location.href="./video/VR_Fitting.mp4";
	}else if(name == "R1"){
		window.location.href="./video/铀矿寻踪.mp4";
	}else if(name == "L2"){
		window.location.href="./video/莫干山蚂蚁VR.mp4";
	}else if(name == "R2"){
		window.location.href="./video/TFG_VIP_Card.mp4";
	}else if(name == "L3"){
		window.location.href="./video/城市规划.mp4";
	}else if(name == "R3"){
		window.location.href="./video/利雅得地铁.mp4";
	}else if(name == "L4"){	
		window.location.href="./video/国王金融区.mp4";
	}else if(name == "R4"){	
		window.location.href="https://molion.tech/case2019/csd/";
	}else if(name == "L5"){	
		window.location.href="https://molion.tech/case2019/medxr/organlibrary/";	
	}else if(name == "R5"){	
         window.location.href="https://molion.tech/case2019/WebARTest1/";
	}
	
}

 function PCBtnClick(name){

	if(name == "L1"){
		window.location.href= "./video.html?url=video/VR_Fitting.mp4";
	}else if(name == "R1"){
		window.location.href="./video.html?url=video/铀矿寻踪.mp4";
	}else if(name == "L2"){
		window.location.href="./video.html?url=video/莫干山蚂蚁VR.mp4";
	}else if(name == "R2"){
		window.location.href="./video.html?url=video/TFG_VIP_Card.mp4";
	}else if(name == "L3"){
		window.location.href="./video.html?url=video/城市规划.mp4";
	}else if(name == "R3"){
		window.location.href="./video.html?url=video/利雅得地铁.mp4";
	}else if(name == "L4"){	
		window.location.href="./video.html?url=video/国王金融区.mp4";
	}else if(name == "R4"){
		window.location.href="https://molion.tech/case2019/csd/";
	}else if(name == "L5"){	
		window.location.href="https://molion.tech/case2019/medxr/organlibrary/";	
	}else if(name == "R5"){	
         window.location.href="https://molion.tech/case2019/WebARTest1/";
	}	
}


function PlayAni(){

var L1= document.getElementById('L1');
var R2= document.getElementById('R1');
var L2= document.getElementById('L2');
var R2= document.getElementById('R2');
var L3= document.getElementById('L3');
var R3= document.getElementById('R3');
var L4= document.getElementById('L4');
var R4= document.getElementById('R4');
var L5= document.getElementById('L5');

	setTimeout(function(){
		CardAni(L1,-180,"虚拟试衣");		
	},500);
	
	setTimeout(function(){
		CardAni(R1,-180,"铀矿寻踪");		
	},700);
	
	setTimeout(function(){
		CardAni(L2,-180,"莫干山");	
	},800);
	setTimeout(function(){
		CardAni(R2,-180,"阿联酋");	
	},1000);
	
	setTimeout(function(){
		CardAni(L3,-180,"美国华盛顿");	
	},1100);
	setTimeout(function(){
		CardAni(R3,-180,"沙特利雅得地铁");	
	},1300);
	
	setTimeout(function(){
		CardAni(L4,-180,"沙特国王金融区");	
	},1400);
	setTimeout(function(){
		CardAni(R4,-180,"免疫学集锦");	
	},1600);
   
    setTimeout(function(){
		CardAni(L5,-180,"3D医学模型");	
	},1700);
	
	 setTimeout(function(){
		CardAni(R5,-180,"vrtest");	
	},1900);
}

function CardAni(img,count,picname){

    if(count<0){
		count+=2;	
		img.style.transform= 'rotateY('+count+'deg)';	
		if(count == -90){
			img.src ="ui/"+picname+".png"
		}	
		setTimeout(function(){
				CardAni(img,count,picname);			
		},10);
	}
	
}

