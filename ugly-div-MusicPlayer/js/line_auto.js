function drawLine_auto(){
	var canvas = document.getElementById("canvas"); 
	var m=document.getElementById('music');  
//简单地检测当前浏览器是否支持Canvas对象，以免在一些不支持html5的浏览器中提示语法错误   
if(canvas.getContext){     
    //获取对应的CanvasRenderingContext2D对象(画笔)   
    var ctx = canvas.getContext("2d");   
       
    //注意，Canvas的坐标系是：Canvas画布的左上角为原点(0,0)，向右为横坐标，向下为纵坐标，单位是像素(px)。   
      
    //开始一个新的绘制路径  
    ctx.beginPath();
	//设置线的宽度
	ctx.lineWidth=20;   
	//划线颜色
	ctx.strokeStyle = "#EEBD44";  //#EEBD44
    //定义直线的起点坐标为(x0,y0)   
    ctx.moveTo(36, 80);   
    //定义直线的终点坐标为(x1,y1)   
    ctx.lineTo(36+(240-36)*m.currentTime/m.duration, 80);   
    //沿着坐标点顺序的路径绘制直线   
    ctx.stroke();   
    //关闭当前的绘制路径
	if(m.currentTime>=m.duration-1){
	 ctx.clearRect(36,70,240,90);
	 drawLine_static(36,80,240,80);
	}
	 
}   
}
setInterval("drawLine_auto()",1000);