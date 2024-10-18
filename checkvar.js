var buttonon =document.querySelectorAll('.buyticket-show-buy');
var hien = document.querySelector('.modal');
var buttonoff = document.querySelectorAll('.close');
for (var i= 0; i<=buttonon.length -1 ; i++){
	buttonon[i].addEventListener('click' , function(a){
		hien.classList.add('on');
	})
}

for (var i= 0 ; i<=buttonoff.length-1; i++){
	buttonoff[i].addEventListener('click',function (a) {
		hien.classList.remove('on')
	})
}