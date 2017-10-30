<template>
  <div id="about" :class="isMobile?pc_about:mobile_about">
     <div >
       <ul>
       	 <li :class="isMobile?pc_li:mobile_li">
       	 	 <i class="icon iconfont icon-zuopin"></i>
       	 	 <div class="icon_title">作品信息</div>
       	 </li>
       	 <li :class="isMobile?pc_li:mobile_li">
       	   <i class="icon iconfont icon-xiaolian"></i>
       	 	 <div class="icon_title">每日一笑</div>
       	 </li>
       	 <li :class="isMobile?pc_li:mobile_li">
       	 	 <i class="icon iconfont icon-zuozhe"></i>
       	 	 <div class="icon_title">关于作者</div>
       	 </li>
       	 <li :class="isMobile?pc_li:mobile_li">
       	 	 <i class="icon iconfont icon-jianyiyijian2"></i>
       	 	 <div class="icon_title">意见建议</div>
       	 </li>
       	 <li :class="isMobile?pc_li:mobile_li">
       	 	 <i class="icon iconfont icon-lianxiwomen"></i>
       	 	 <div class="icon_title">联系我</div>
       	 </li>
       </ul>
     </div>
  </div>
</template>

<script>
import suitScreenApi from "../../assets/js/suitScreen.js"
export default {
  name: 'about',
  data(){
    return {
      isMobile:null,
      pc_li:'pc_li',
      mobile_li:'mobile_li',
      mobile_about:'mobile_about',
      pc_about:'pc_about'
    }
  },
  created:function(){
    this.isMobile = suitScreenApi.isMobile();
  }
}
</script>

<style>
#about{
  position: fixed;
  color: #fff;
  font-size: 2rem;
  width:  100%;
}
.pc_about{
  top: 20%;
}
.mobile_about{
  top: 12%;
}
.icon_container{
	width: 80%;
	position: absolute;
	left: 10%;
}
#about .iconfont{
	font-size: 3.4rem;
	padding: 1rem;
}
.icon_title{
	font-size: 1.4rem;
	padding-top: .8rem;
}
#about ul{
	width: 100%;
	text-align: center;
  list-style-type: none;
}
.pc_li{
	float: left; 
  width: 19%;
	cursor: pointer;
}
.mobile_li{
  width: 100%;
  height: 10rem;
  display: table;
  text-align: center;
}
</style>
