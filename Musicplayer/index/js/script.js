

function Play(){
	var m=document.getElementById('music');
	if(m.paused){
		m.play();
	}
	else {
		m.pause();
	}

}

function Stop(){
	var m=document.getElementById('music');
	m.pause();
	m.currentTime=0;
}

function play_chang_css(){
	var m=document.getElementById('music');
	var p=document.getElementById('play_button');
	if(!m.paused){
		p.className="pause_css";
	}
	else{
		p.className="play_css";
	}
}


function music_Buffer(){ 
var m=document.getElementById('music');
	 // 获取已缓冲部分的 TimeRanges 对象

var timeRanges = m.buffered;
 // 获取以缓存的时间

var timeBuffered = timeRanges.end(timeRanges.length - 1);
 // 获取缓存进度，值为0到1
var bufferPercent = timeBuffered / m.duration; 

var p=document.getElementById('music_Buffer');
p.value=bufferPercent*100;
}
setInterval("music_Buffer();Time();play_chang_css()",10);



function Time(){
	var m=document.getElementById('music');
	var t=document.getElementById('time');

	var x=m.duration-m.currentTime;
	var t_string=parseInt((x/60)/10)+""+parseInt((x/60)%10)+":"
				+parseInt((x%60)/10)+""+parseInt((x%60)%10);
	t.innerHTML=t_string;
}

var n=0,run_lrc;
window.onload=function(){

	Next();//init audio


var d = document.getElementById('drag_button');
var m=document.getElementById('music');
var a=document.getElementById('all');
d.addEventListener("mousedown", function(ed) {


    var flag=true;
    var x=m.currentTime;
	a.addEventListener("mousemove",function(em){
		if(flag&&em.clientX-18-362>=0&&em.clientX-18-362<=800){
		d.style.left=em.clientX-18+"px";
		m.currentTime=(em.clientX-18-362)/800*m.duration;
		}
	});


	a.addEventListener("mouseup",function(){
		flag=false;
	});
	

});





var next_one=document.getElementById('next_one');
	next_one.addEventListener("click", function() {
		Next();
	});

var previous_track=document.getElementById('previous_track');
	previous_track.addEventListener("click", function() {
		Previous();
	});



}

function Next(){
var m=document.getElementById('music');
var p=document.getElementById('musicplayer');
		var sr=[];
		sr[0]="index/music/红日 - 李克勤.mp3";
		sr[1]="index/music/The Greatest - Sia.mp3";
		m.src=sr[n];
		var image_src="index/image/music_image/"+sr[n].substring(12,sr[n].length-3)+"jpg";
		p.style.backgroundImage="url('"+image_src+"')";
		p.style.backgroundRepeat="no-repeat";
		p.style.backgroundSize="cover";
		m.play();
		var cache=run_lrc;
		var fun="Lrc("+n+")";
		run_lrc=setInterval(fun,10);
		n++;
		clearInterval(cache);
		if(n>=sr.length){
			n=0;
		}
	}

function Previous(){
var p=document.getElementById('musicplayer');
var m=document.getElementById('music');
		var sr=[];
		sr[0]="index/music/红日 - 李克勤.mp3";
		sr[1]="index/music/The Greatest - Sia.mp3";
		m.src=sr[n];
		var image_src="index/image/music_image/"+sr[n].substring(12,sr[n].length-3)+"jpg";
		p.style.backgroundImage="url('"+image_src+"')";

		m.play();
		var cache=run_lrc;
		var fun="Lrc("+n+")";
		run_lrc=setInterval(fun,10);
		n--;
		clearInterval(cache);
		if(n<0){
			n=sr.length-1;
		}
	}


	function Progress(){
		var m=document.getElementById('music');
		var p=document.getElementById('progress');
		var d=document.getElementById('drag_button');
		
		p.value=m.currentTime/m.duration*100;
		d.style.left=(p.value/100*800+362).toString()+"px";
	}
	setInterval("Progress()",10);