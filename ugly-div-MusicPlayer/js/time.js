function Time(){
   var m=document.getElementById('music');
   var t=document.getElementById("time");
   var b=document.getElementById('play_button');
   t.innerHTML=parseInt((m.duration-m.currentTime)/60)+" : "+parseInt((m.duration-m.currentTime)%60);
   if(m.ended){
   b.value="▶";
   t.innerHTML=parseInt((m.duration)/60)+" : "+parseInt((m.duration)%60);
	   }

}
setInterval("Time()",1000);