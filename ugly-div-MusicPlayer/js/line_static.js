  function drawLine_static(x0,y0,x1,y1){
//��ȡCanvas����(����)   
var canvas = document.getElementById("canvas");   
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
	ctx.strokeStyle = "#7D7D7D";  //#EEBD44
    //����ֱ�ߵ��������Ϊ(x0,y0)   
    ctx.moveTo(x0, y0);   
    //����ֱ�ߵ��յ�����Ϊ(x1,y1)   
    ctx.lineTo(x1, y1);   
    //���������˳���·������ֱ��   
    ctx.stroke();   
    //�رյ�ǰ�Ļ���·��   
    ctx.closePath();   
}   
}

