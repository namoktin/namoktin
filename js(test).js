var te = document.querySelector('#heading-down');
var musi = document.querySelector('#bodyhead audio');
var im = document.querySelector('.imggg');
var nut = document.querySelector('.day');
var khungday= document.querySelector('#khungday');
var nextsong = document.querySelector('.ti-shift-right');
var partsong = document.querySelector('.ti-shift-left');
var quaylaidau = document.querySelector('.ti-reload');
var sothutu= 0;
var demo = false;
console.log([khungday]);
var app = {
	songs : [
	{
		name:'tăng 1 tỉ sức mạnh',
		singer:'namok',
		song:'./song/y2matecomDòngnhạcdângianđángnghenhấtSaochép.mp3',
		img:'./imgg/newyork.jpg'
	},
	{
		name:'wakeup_now',
		singer:'hhi',
		song:'./song/bang bang.mp3',
		img:'./imgg/map.jpg'
	},
	{
		name:'wakeup_now',
		singer:'hhi',
		song:'./song/bang bang.mp3',
		img:'./imgg/map.jpg'
	},
	{
		name:'wakeup_now',
		singer:'hhi',
		song:'./song/bang bang.mp3',
		img:'./imgg/map.jpg'
	},
	{
		name:'wakeup_now',
		singer:'hhi',
		song:'./song/bang bang.mp3',
		img:'./imgg/map.jpg'
	},
	{
		name:'wakeup_now',
		singer:'hhi',
		song:'./song/bang bang.mp3',
		img:'./imgg/map.jpg'
	},
	{
		name:'wakeup_now',
		singer:'hhi',
		song:'./song/bang bang.mp3',
		img:'./imgg/map.jpg'
	},
	{
		name:'cuuthayongnoi',
		singer:'giangchuong',
		song:'./song/minhyeunhautubaogio.mp3',
		img:'./imgg/map.jpg'
	}],
	checksong : function(){
		var khung ='';
		this.songs.forEach(si => {
			var hihi = `
			<div class="khungnhac-floot">
				<div class="anh-floot">
					<img src="${si.img}">
				</div>
				<div class="khungnhac-ten">
					<h1>${si.name}</h1>
					<div class="diii">${si.singer}</div>
				</div>
				<i class="ti-more"></i>
		    </div>
			`
			khung = khung +hihi;
		})
		document.querySelector('#floot').innerHTML = khung;
	},
	thunho: function(){
		var anh = document.querySelector('#dianhac');
		var solieuanh= anh.offsetWidth ;

		document.onscroll = () =>{
			var dotruot = document.documentElement.scrollTop;
			if (solieuanh-dotruot>=0) {
				anh.style.width = solieuanh-dotruot+'px';
			};
			var so = 1*anh.style.width.slice(0,anh.style.width.length-2);
			anh.style.opacity = so/solieuanh;
		}
	},
	bat:function () {
		var this1=this;
		var chuotxuong=false;
		khungday.onmousedown = ()=>{
			chuotxuong =true;
			console.log(true);
		}
		khungday.onmouseup= ()=>{
			chuotxuong=false;
			console.log(false);
		}
		var imgroute = im.animate([
				{transform:'rotate(360deg)'}
			],
			{
				duration:10000,
				iterations:Infinity
			});
		imgroute.pause();
		nut.onclick = function(){
			if (!demo) {
				musi.play();
				demo= true;
				imgroute.play();
				nut.classList.add('ti-control-pause');
			}else{
				musi.pause();
				demo = false;
				imgroute.pause();
				nut.classList.remove('ti-control-pause');
			}
		}
		musi.ontimeupdate = function(){
			if (!chuotxuong){
				khungday.value = 100*musi.currentTime/musi.duration;
			}
			if (musi.currentTime== musi.duration){
				this1.thaydoi(1);
				musi.play();
			}
		}
		khungday.onchange = function(){
			musi.currentTime = khungday.value*musi.duration/100;
			console.log(10);
		}
		nextsong.onclick = function() {
			this1.thaydoi(1);
			musi.play();
		}
		partsong.onclick = function () {
			this1.thaydoi(-1);
			musi.play();
		}
		quaylaidau.onclick = function (){
			imgroute.value = 0
			nut.classList.remove('ti-control-pause');
			demo = false;
			musi.pause();
			musi.currentTime = 0;
			imgroute.cancel();
		}
	},
	thaydoi:function (a) {
		if (sothutu+a==-1){
			sothutu=this.songs.length-1;
		}else if (sothutu+a == this.songs.length){
			sothutu=0;
		}else{
			sothutu = sothutu+a;
		}
		im.style.backgroundImage = `url('${this.songs[sothutu].img}')`;
		musi.src = this.songs[sothutu].song;
		te.textContent = this.songs[sothutu].name;
	},
	thaydoiso:function(a){
		im.style.backgroundImage = `url('${this.songs[a].img}')`;
		musi.src = this.songs[a].song;
		te.textContent = this.songs[a].name;
		sothutu =a;
	},
	chonsong:function(){
		var this1=this;
		var danhsachsong = document.querySelectorAll('.khungnhac-floot');
		danhsachsong.forEach((aii,bii) =>{
			this2=this1;
			aii.onclick = function(){
				this1.thaydoiso(bii);
			};
		})
	},
	danhso: function () {
		this.songs.forEach((ai,bi)=>{
			ai.id = bi;
		});
	},
	start : function(){
		im.style.backgroundImage = `url('${this.songs[0].img}')`;
		musi.src = this.songs[0].song;
		te.textContent = this.songs[0].name;
		this.danhso();
		this.checksong();
		this.thunho();
		this.bat();
		this.chonsong();
	}
}
app.start();
console.log(Math.floor(Math.random()*app.songs.length));
console.log([khungday]);