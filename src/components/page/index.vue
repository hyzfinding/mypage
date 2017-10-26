<template>
  <div id="index">
    <div class="content_wrapper">
    	<div class="content_top">
    		<div class="content_title">
    			<span>“巨大的天然动物园”</span>
    		</div>
    		<div class="content_time">
    			<span>2017.10.24</span>
    		</div>
    	</div>
    	<div class="cotent_text">
    		<span>尽管有很多观点表明，在吉婆岛的吉婆镇多多少少有一些人类活动，但大多数生物多样性的天堂仍未得到开发。岛上的三分之一，以及海湾的一部分被保留成为吉婆国家公园。吉婆岛包含了各种各样的环境，从红树林沼泽到岩溶悬崖。这些悬崖是岛上很少见到的，同时这也是濒临绝种的灵长类动物，金头叶猴的家园。</span>
    	</div>
    	<div class="content_tips">
    	  <div class="full_page_wrapper">
    	  	<div class="full_page_border">
    	  		<i v-if="isFull" class="icon iconfont icon-quanping" @click="requestFullScreen" title="全屏显示"></i>
    	  		<i v-else class="icon iconfont icon-tuichuquanping" @click="exitFullscreen" title="退出全屏"></i>
    	  	</div>
    	  </div>
    	  <div class="tips">
    		<span @click="requestFullScreen">每日一图由 bing 提供丨Copyright©huyuze.org</span>
    	  </div>
    	 
        </div>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'index',
  data(){
  	return {
  		'isFull':1
  	}
  },

  methods:{
  	//全屏效果
  	requestFullScreen: function() {
        var de = document.documentElement;
        if (de.requestFullscreen) {
          de.requestFullscreen();
        } else if (de.mozRequestFullScreen) {
          de.mozRequestFullScreen();
        } else if (de.webkitRequestFullScreen) {
          de.webkitRequestFullScreen();
        }
        this.isFull = 0;
    },
    exitFullscreen:function () {
        var de = document;
        if (de.exitFullscreen) {
           de.exitFullscreen();
        } else if (de.mozCancelFullScreen) {
           de.mozCancelFullScreen();
        } else if (de.webkitCancelFullScreen) {
           de.webkitCancelFullScreen();
        }
        this.isFull = 1;
    }
  }
}
</script>

<style>
#index{
	position: fixed;
	height: 60%;
	top: 40%;
	left: 5%;
	/*transition: all 1.6s;*/
	width: 90%;
	color: #fff;
}
.content_top{
	width: 100%;
	display: table;
}
.content_title,
.content_time{
   float: left;
   height: 3rem;
}
.content_title{
	font-size: 3rem;
	line-height: 3rem;
}
.content_time{
	line-height: 3.8rem;
	padding-left: 3rem;
	font-size: 1.4rem;
}
.cotent_text{
	line-height: 3rem;
	padding-top: 5rem;
	font-size: 1.4rem;
}
.content_tips{
	width: 100%;
	height: 4rem;
	line-height: 4rem;
	position: absolute;
    bottom: 5.4rem;
}
.tips{
	float: right;
	font-size: 1.2rem;
}
.full_page_wrapper{
	width: 100%;
	height: 4rem;
}
.full_page_border{
	float: right;
	width: 3.2rem;
	height: 3.2rem;
	border-radius: 50%;
    /*border: .2rem solid #fff;*/
}
/*.full_page_border:hover{
	background: #fff;
}*/
#index .iconfont{
	font-size: 3rem;
	color: #fff;
	margin: 0 auto;
	cursor: pointer;
	transition: all .4s;
}
#index .iconfont:hover{
	font-size: 4rem;
}
</style>
