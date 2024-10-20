var button = document.querySelector('.buttonn');
var tat = document.querySelector('.tat');
var khungngoai = document.querySelector('.khungngoai');
button.onclick = ()=>{
	khungngoai.classList.remove('an');
}
tat.onclick = ()=>{
	khungngoai.style.animation = 'andi 0.7s ease forwards';
	setTimeout(()=>{
		khungngoai.classList.add('an');
		khungngoai.style.animation = 'hienra 1s ease';
	}
	,700);
}
