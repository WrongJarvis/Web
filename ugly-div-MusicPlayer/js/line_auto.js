function drawLine_auto(){
	var canvas = document.getElementById("canvas"); 
	var m=document.getElementById('music');  
//�򵥵ؼ�⵱ǰ������Ƿ�֧��Canvas����������һЩ��֧��html5�����������ʾ�﷨����   
if(canvas.getContext){     
    //��ȡ��Ӧ��CanvasRenderingContext2D����(����)   
    var ctx = canvas.getContext("2d");   
       
    //ע�⣬Canvas������ϵ�ǣ�Canvas���������Ͻ�Ϊԭ��(0,0)������Ϊ�����꣬����Ϊ�����꣬��λ������(px)��   
      
    //��ʼһ���µĻ���·��  
    ctx.beginPath();
	//�����ߵĿ��
	ctx.lineWidth=20;   
	//������ɫ
	ctx.strokeStyle = "#EEBD44";  //#EEBD44
    //����ֱ�ߵ��������Ϊ(x0,y0)   
    ctx.moveTo(36, 80);   
    //����ֱ�ߵ��յ�����Ϊ(x1,y1)   
    ctx.lineTo(36+(240-36)*m.currentTime/m.duration, 80);   
    //���������˳���·������ֱ��   
    ctx.stroke();   
    //�رյ�ǰ�Ļ���·��
	if(m.currentTime>=m.duration-1){
	 ctx.clearRect(36,70,240,90);
	 drawLine_static(36,80,240,80);
	}
	 
}   
}
setInterval("drawLine_auto()",1000);