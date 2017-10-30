<template>
  <div id="index" :class="isMobile?bigTop:smallTop">
    <div class="content_wrapper">
    	<div class="content_top">
    		<div class="content_title">
    			<span>“景如其名，美不胜收”</span>
    		</div>
    		<div class="content_time">
    			<span>2017.10.30</span>
    		</div>
    	</div>
    	<div class="cotent_text">
    		<span>这张照片是在优胜美地国家公园的灵感点附近拍摄的，在那里，探险家们可以在小径上发现各种有趣的场景。在优胜美地国家公园，有许多景观可以在灵感点观赏到。该地区是伊尔酋长岩和半圆顶这样的标志性岩层的所在地，它以丰富的瀑布而闻名。这里曾经生活着许多当地土著，也算是个保存完整的古迹了！。</span>
    	</div>
    	<div :class="[content_tips,isMobile?big_bottom:small_bottom]">
    	  <div class="full_page_wrapper" v-if="this.isMobile">
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
import suitScreenApi from "../../assets/js/suitScreen.js"
export default {
  name: 'index',
  data(){
  	return {
  		'isFull':1,
      isMobile:null,
      bigTop:'bigTop',
      smallTop:'smallTop',
      big_bottom:'big_bottom',
      small_bottom:'small_bottom',
      content_tips:'content_tips'

  	}
  },
  created:function(){
    this.isMobile = suitScreenApi.isMobile();
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
/*@import '/static/css/iconfont.css'*/
#index{
	position: fixed;
	height: 60%;
	left: 5%;
	/*transition: all 1.6s;*/
	width: 90%;
	color: #fff;
}
.bigTop{
   top:40%;
}
.smallTop{
  top: 24%;
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
  text-indent: 3rem;
}
.content_tips{
	width: 100%;
	height: 4rem;
	line-height: 4rem;
	position: absolute;
  
}
.big_bottom{
  bottom: 5.4rem;
}
.small_bottom{
  bottom: -8rem;
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
