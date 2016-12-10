function Stop(){
	var m=document.getElementById('music');
	var canvas = document.getElementById("canvas");
	var b= document.getElementById("play_button");
	var ctx = canvas.getContext("2d");
	if(!m.paused)
		{
		m.currentTime=0;
		m.pause();
		b.value="▶";
		ctx.clearRect(36,70,240,90);
	    drawLine_static(36,80,240,80);
		}
}