<template>
  <div id="about">
     <div class="icon_container">
       <ul>
       	 <li>
       	 	<i class="icon iconfont icon-zuopin"></i>
       	 	<div class="icon_title">作品信息</div>
       	 </li>
       	 <li>
       	 	<i class="icon iconfont icon-xiaolian"></i>
       	 	<div class="icon_title">每日一笑</div>
       	 </li>
       	 <li>
       	 	<i class="icon iconfont icon-zuozhe"></i>
       	 	<div class="icon_title">关于作者</div>
       	 </li>
       	 <li>
       	 	<i class="icon iconfont icon-jianyiyijian2"></i>
       	 	<div class="icon_title">意见建议</div>
       	 </li>
       	  <li>
       	 	<i class="icon iconfont icon-lianxiwomen"></i>
       	 	<div class="icon_title">联系我</div>
       	 </li>
       </ul>
     </div>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style>
#about{
  position: fixed;
  top: 20%;
  color: #fff;
  font-size: 2rem;
  width:  100%;
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
}
#about li{
	width: 19%;
	cursor: pointer;
}
</style>
