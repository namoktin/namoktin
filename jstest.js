var di = document.querySelectorAll('.head-slice');
var doj = document.querySelectorAll('.content-tab');
var gi = document.querySelector('.slice');
var hhi = document.querySelector('.head-slice.active');
console.log([di[1]]);
gi.style.left = hhi.offsetLeft+'px';
gi.style.width = hhi.offsetWidth+'px';
di.forEach((a,b)=>{
	a.onclick = function () {
		document.querySelector('.head-slice.active').classList.remove('active');
		this.classList.add('active');
		gi.style.left = document.querySelector('.head-slice.active').offsetLeft +'px';
		gi.style.width = document.querySelector('.head-slice.active').offsetWidth+'px';
		if (b==0){
		    gi.style.opacity=1;
		}else if(b==1){
			gi.style.opacity=0.75;
		}else if(b==2){
			gi.style.opacity=0.5;
		}else{
			gi.style.opacity =0.25;
		}
		document.querySelector('.content-tab.active').classList.remove('active');
		doj[b].classList.add('active');
	}
})