function Play(){
	var m=document.getElementById('music');
	var b=document.getElementById('play_button');
	
	if(m.paused){
		m.play();
		b.value="||";
		}else{
		m.pause();
		b.value="▶";
		}
}