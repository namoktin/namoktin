var element = document.querySelector.bind(document);
var elements = document.querySelectorAll.bind(document);
var dung = element('.dung');
var sai =element('.sai');
var loi= element('.loi');
var donghien =element('.hien');
var hi = element('.hi');
var caclenh = [];
caclenh.push(dung,sai,loi);
console.log(caclenh);
var lenh= {
  hien:function(){
    var giatri='';
      caclenh.forEach((a,b)=>{
        caclenh[b].onclick = ()=>{
          var ganvao = document.createElement('div');
          if (b==0){
            ganvao.classList.add('hien-dung','hiendi');
            giatri=`
          <div class="cricle-check"><i class="ti-check"></i></div>
          <div class="thongbao-hien">
            <div class="chutren">THÀNH CÔNG!</div>
            <div class="chuduoi">bạn đã đăng kí thành công</div>
          </div>
          <i class="ti-close hi"></i>
        `;
          }else if (b==1){
            ganvao.classList.add('hien-sai','hiendi');
            giatri=`
          <i class="ti-info-alt"></i>
          <div class="thongbao-hien">
            <div class="chutren">THẤT BẠI!</div>
            <div class="chuduoi">bạn đã đăng kí thất bại</div>
          </div>
          <i class="ti-close hi"></i>
        `;
          }else{
            ganvao.classList.add('hien-loi','hiendi');
            giatri=`
          <i class="ti-help-alt"></i>
            <div class="thongbao-hien">
            <div class="chutren">CÓ LỖI!</div>
            <div class="chuduoi">có lỗi xảy ra , vui lòng liên hệ quản trị viên</div>
          </div>
          <i class="ti-close hi"></i>
        `;
          }
          ganvao.style.animation = 'phiphai 0.3s ease,modi 0.2s 3s ease forwards';
          ganvao.innerHTML=giatri;
          donghien.appendChild(ganvao);
          var time = setTimeout(()=>{
            donghien.removeChild(ganvao);
          },3400)
          ganvao.querySelector('.hi').onclick= function(){
            donghien.removeChild(ganvao);
            clearTimeout(time);
          }
        }
      });
  },
  start:function(){
    this.hien();
  }
}
lenh.start();