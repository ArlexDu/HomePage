
var height;
var width;
var margin
var canvas;
var canvas1;
var context;
var context1;
var buttonheight;
var buttonwidth;
var picx;
var picy;
var bgpic=new Image();
var infor=new Image();
var pic=new Image();
var moment=new Image();
var stringlen1;
var stringlen2;
var stringlen3;
var stringlen4;
var flag=0;
window.onload=function(){
   
   buttonwidth=document.body.clientWidth/6; 
   buttonheight=buttonwidth;  
   
   canvas=document.getElementById("button");
   context=canvas.getContext("2d");
   canvas.height=document.documentElement.clientHeight;
   canvas.width=buttonwidth*3;

   canvas1=document.getElementById("information_chapter");
   canvas1.height=document.documentElement.clientHeight;
   canvas1.width=buttonwidth*3;
   context1=canvas1.getContext("2d");

   console.log("height "+height);
   console.log("width "+buttonwidth);
   
   picx=canvas.width/3;
   picy=canvas.height/2;
   

   bgpic.src="src/button.jpg";
   infor.src="src/infor_back.jpg";
   pic.src="src/pic_back.jpg";
   moment.src="src/moment_back.jpg";
   gameloop();
  
   document.addEventListener("mousedown",mousedown,false);
}
// function getothertree(){
//   var can=document.getElementById("information");
//   var con=can.getContext("2d");

// }
function gameloop(){
  window.requestAnimationFrame(gameloop);
	drawbackground();
  drawothers();
  drawinformation();
}

function mousedown(e){

   if(e.offsetX||e.layerX){
    var vx=e.offsetX==undefined ? e.layerX:e.offsetX; 
    var vy=e.offsetY==undefined ? e.layerY:e.offsetY;
      //information
    if(vx>picx+buttonwidth/4*3+100&&vx<picx+buttonwidth/4*3+100+stringlen1+20&&vy>picy-10&&vy<picy+10){
      flag=1;
      //moments
    }else if(vx>picx+buttonwidth/4*3+110&&vx<picx+buttonwidth/4*3+100+stringlen2+20&&vy>picy+buttonheight-10&&vy<picy+buttonheight+10){
       flag=2;
     //picture
    }else if(vx>picx+buttonwidth/4*1-100-stringlen3&&vx<picx+buttonwidth/4*1-100+10&&vy>picy-10&&vy<picy+10){
      flag=3;
      //homepage
    }else if(vx>picx+buttonwidth/4*1-100-stringlen4&&vx<picx+buttonwidth/4*1-100+10&&vy>picy+buttonheight-10&&vy<picy+buttonheight+10){
      flag=4;
    }else{
      flag=0;
    }
    console.log(flag);
   }
}

function drawbackground(){
  context.drawImage(bgpic,picx,picy,buttonwidth,buttonheight);
	// console.log("draw");
}

function drawinformation(){
  // context1.save();
  if(flag==1){
    context1.drawImage(infor,927-canvas1.width,0,canvas1.width,canvas1.height,0,0,canvas1.width,canvas1.height);
    // console.log("infor");
  }else if(flag==2){
    context1.drawImage(moment,927-canvas1.width,0,canvas1.width,canvas1.height,0,0,canvas1.width,canvas1.height);
    // console.log("moment");
  }else if(flag==3){
    context1.drawImage(pic,927-canvas1.width,0,canvas1.width,canvas1.height,0,0,canvas1.width,canvas1.height);
    // console.log("pic");
  }else if(flag==4){
    context1.clearRect(0,0,canvas.width,canvas.height);
    // console.log("homepage");
  }else if(flag==0){
    // console.log("none");
  }
  // context1.restore();
    
}

function drawothers(){
  context.save();
  context.lineWidth=3.5;
  context.lineJoin="round";
  context.strokeStyle="#003f87";
  context.fillStyle="#0f43b0";
  context.font="20px Georgia";
  //infromation右上
  context.beginPath();
  context.moveTo(picx+buttonwidth/4*3+10,picy+buttonheight/4*1);
  context.lineTo(picx+buttonwidth/4*3+40,picy);
  context.lineTo(picx+buttonwidth/4*3+100,picy);
  context.stroke();
  stringlen1=context.measureText("Information").width;
  context.textBaseline="middle";
  context.fillText("Information",picx+buttonwidth/4*3+110,picy);
  //moment右下
  context.beginPath();
  context.moveTo(picx+buttonwidth/4*3+10,picy+buttonheight/4*3);
  context.lineTo(picx+buttonwidth/4*3+40,picy+buttonheight);
  context.lineTo(picx+buttonwidth/4*3+100,picy+buttonheight);
  context.stroke();
  stringlen2=context.measureText("Moments").width;
  context.textBaseline="middle";
  context.fillText("Moments",picx+buttonwidth/4*3+110,picy+buttonheight );
  //picture左上
  context.beginPath();
  context.moveTo(picx+buttonwidth/4*1,picy+buttonheight/4*1);
  context.lineTo(picx+buttonwidth/4*1-40,picy);
  context.lineTo(picx+buttonwidth/4*1-90,picy);
  context.stroke();
  context.textBaseline="middle";
  stringlen3=context.measureText("Pictures").width;
  context.fillText("Pictures",picx+buttonwidth/4*1-100-stringlen3,picy);
  //Homepage左下
  context.beginPath();
  context.moveTo(picx+buttonwidth/4*1,picy+buttonheight/4*3);
  context.lineTo(picx+buttonwidth/4*1-40,picy+buttonheight);
  context.lineTo(picx+buttonwidth/4*1-90,picy+buttonheight);
  context.stroke();
  context.textBaseline="middle";
  stringlen4=context.measureText("Homepage").width;
  context.fillText("Homepage",picx+buttonwidth/4*1-100-stringlen4,picy+buttonheight);
  context.restore();
}