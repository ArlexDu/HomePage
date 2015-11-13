var infor=new Image();
var context;
var canvas;
window.onload=function(){
   
   canvas=document.getElementById("information_chapter");
   context=canvas.getContext("2d");

   canvas.height=document.documentElement.clientHeight;
   canvas.width=document.documentElement.clientWidth;
   
   infor.src="src/button.jpg";
   loop();
}

function loop(){
   window.requestAnimationFrame(loop);
   drawinformation();
}

function drawinformation(){
    context.drawImage(infor,0,0,canvas.width,canvas.height);
    console.log("infor");
}