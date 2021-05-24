var breakTime=5;
var sessionTime=20;
var i=1;
document.getElementById('screen').innerHTML="20:00";
document.getElementById('pause').style.display="none";
document.getElementById('reset').style.display="none";
document.getElementById('sessionplus').addEventListener("click",function(){
	sessionTime+=5;
	min+=5;
	
	document.getElementById('screen').innerHTML=sessionTime +":"+ "00";
	document.getElementById('sessiontime').innerHTML=sessionTime+" Min";
});


document.getElementById('sessionminus').addEventListener("click",function(){
	sessionTime-=5;
	min-=5;
	if(sessionTime>=0)
	{
	document.getElementById('screen').innerHTML=sessionTime +":"+ "00";
	document.getElementById('sessiontime').innerHTML=sessionTime+" Min";
}
});


document.getElementById('breakplus').addEventListener("click",function(){
	breakTime+=5;
	min+=5;
	
	document.getElementById('breaktime').innerHTML=breakTime+" Min";
});


document.getElementById('breakminus').addEventListener("click",function(){
	breakTime-=5;
	min-=5;
	if(breakTime>=0)
	{


	document.getElementById('breaktime').innerHTML=breakTime+" Min";
	}
});


var min;
var sec ,id;


document.getElementById('start').addEventListener("click",function(){

	min=sessionTime;
	sec=0;
	document.getElementById('pause').style.display="inline-block";
	document.getElementById('reset').style.display="inline-block";
	document.getElementById('start').style.display="none";


	if(i%2==0)
	{
		
			document.getElementById('screen').style.color="red";
		
	}
	else
	{
		document.getElementById('screen').style.color="green";
	}
	
	
	id=setInterval(function(){


		if(min<10)
		{
			document.getElementById('screen').innerHTML="0"+min+":"+sec;
		}
		else if(sec<10)
		{
			document.getElementById('screen').innerHTML=min+":"+"0"+sec;
		}
		else
		{
			document.getElementById('screen').innerHTML=min+":"+sec;
		}
	//	document.getElementById('screen').innerHTML=min+":"+sec;


		if(min==0 && sec==0)
		{
			i++;
			if(i%2==0)
			{
				document.getElementById('info1').innerHTML="Break Time!!!";
				document.getElementById('screen').style.color="red";
				min=breakTime;
				sec=0;
				
			}
			else
			{
				document.getElementById('info1').innerHTML="Session "+Math.floor(i/2+1);
				document.getElementById('screen').style.color="green";
				min=sessionTime;
				sec=0;

			}


		}
		
		if(sec==0)
		{
			sec=59;
			min-=1;
		}
		sec--;
		if(min<0)
		{
			min=0;		}
		

},1000);


});


document.getElementById('pause').addEventListener("click",function(){
	document.getElementById('start').style.display="inline-block";
	document.getElementById('pause').style.display="none";
	clearInterval(id);
});


document.getElementById('reset').addEventListener("click",function(){
	min=sessionTime;
	sec=0;
	document.getElementById('screen').innerHTML=sessionTime+":00";
	document.getElementById('screen').color="black";
	clearInterval(id);
});