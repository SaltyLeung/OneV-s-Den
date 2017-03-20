function init(){
    "use strict";
	var button=document.getElementById("createButton");
   var restartbutton=document.getElementById("restart");
    button.onclick=randomCreate;
    restartbutton.onclick=restart;
}
function randomCreate(){
	"use strict";
  var ranArea1=document.getElementById("random1");
  var ranArea2=document.getElementById("random2");
  var up=parseInt(document.getElementById("upLimit").value);
  var down=parseInt(document.getElementById("downLimit").value);
	//alert(up);
  alert("你按我干啥子！");
	
  ranArea1.innerHTML="";
  if(isNaN(up)||isNaN(down)){ranArea1.innerHTML="魂淡上下界都不给齐！";}
  else {ranArea2.innerHTML=Math.round(down+Math.random()*(up-down));}
  //var debug=document.getElementById("debug");
  //debug.innerHTML=up+down;
}
function restart(){
  "use strict";
	document.location.reload();
}
window.onload=init;
