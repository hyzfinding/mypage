<template>
  <div id="music">
    <audio src="" preload></audio>
    <div class="cover_bg"></div>
    <div class="album_cover" v-show="isMobile">
    	<img src="../../../static/img/csbg.jpg">
    </div>
    <div :class="isMobile?music_plate_container:mobile_music_plate_container">
    	<div :class="isMobile?music_plate_wrapper:mobile_music_plate_wrapper">
    		<div :class="isMobile?music_plate:mobile_music_plate">正在播放</div>
    		<div :class="isMobile?music_plate:mobile_music_plate">我的收藏</div>
    		<div :class="isMobile?music_plate:mobile_music_plate">排行榜</div>
    		<div :class="isMobile?music_plate:mobile_music_plate">搜索</div>
    	</div>
    </div>
    <div class="music_list_wrapper" :class="isMobile?pc_music_list_wrapper:mobile_music_list_wrapper">
    	<div class="music_list_title">
    		<div :class="isMobile?music_name:mobile_music_name">歌曲</div>
    		<div :class='isMobile?music_singer:mobile_music_singer'>歌手</div>
    		<div class="music_album" v-show="isMobile">专辑</div>
    		<div class="music_time">时长</div>
    	</div>
    	<div class="music_list" v-for="musicInfo in musicInfos" >
    		<div :class="isMobile?music_name:mobile_music_name"><span class="wave"></span><span class="index">{{musicInfo.id}}</span>{{musicInfo.musicName}}</div>
    		<div :class='isMobile?music_singer:mobile_music_singer'>{{musicInfo.singerName}}</div>
    		<div class="music_album" v-show="isMobile">专辑</div>
    		<div class="music_time">{{musicInfo.totalTime}}</div>
    		<div class="selectMusic" @click.self="chooseMusic($event)">{{musicInfo.musicUrl}}</div><div class="notShow">{{musicInfo.id}}</div>
    		
    	</div>
    </div>
    <div :class="isMobile?music_control_wrapper:mobile_music_control_wrapper">
       <div :class="isMobile?music_control_button:mobile_music_control_button">
         <div class="music_last">
         	 <i class="icon iconfont icon-xiayiqu101"></i>
         </div>
         <div class="music_switch">
           <i class="icon iconfont icon-yinlebofangxianxing" @click="startMusic" v-if="musicState=='pause'"></i>
           <i class="icon iconfont icon-yinlezanting" @click="pauseMusic" v-else-if="musicState=='play'||musicState=='dragMove'"></i>
         </div>
         <div class="music_next">
         	<i class="icon iconfont icon-xiayiqu"></i>
         </div>
       </div>
       <div :class="isMobile?music_progress_control:mobile_music_progress_control">
       	<div :class="isMobile?music_progress_title:mobile_music_progress_title">
       		<div class="control_music_name">
       			{{musicName?musicName:'阳光明媚的早晨我迟到了'}}
       		</div>
       		<div class="control_music_time">
       			<span class="music_current_time" v-model="currentTime">{{currentTime}}</span>
       			<span class='music_total_time'>/{{defaultTotalTime}}</span>
       		</div>
       	</div>
       	<div class="music_progress_bar">
       		<div class="music_progress_total" @click="clickMusicProgress($event)">
       			<div class="music_progress_tota_bar"></div>
       		</div>
       		<div class="music_progress_bar_play" @click="clickMusicProgress($event)">
       		  <div class="music_progress_button"></div>
       		</div>
       	</div>
       </div>
     </div>
  </div>
</template>

<script>
 import suitScreenApi from "../../assets/js/suitScreen.js"
 export default {
  name: 'music',
  data(){
  	return {
  		musicInfos:[
  			{musicName:'Counting Stars',musicUrl:'/static/media/Counting Stars.mp3',singerName:'OneRepublic',totalTime:'4.28',id:1,coverImg:'/static/img/csbg.jpg'},
  			{musicName:'Animals',musicUrl:'/static/media/Animals.mp3',singerName:'Nickelback',totalTime:'5.28',id:2,coverImg:'/static//img/animalsbg.jpg'},
  			{musicName:'好想你',musicUrl:'/static/media/miss you.mp3',singerName:'李雪莱',totalTime:'5.12',id:3,coverImg:'/static/img/miss you.jpg'},
  			{musicName:'琵琶语',musicUrl:'/static/media/pipayu.mp3',singerName:'林海',totalTime:'5.12',id:4,coverImg:'/static/img/miss you.jpg'}
  			,
  			{musicName:'我俩永隔一江水',musicUrl:'/static/media/river.mp3',singerName:'小娟&山谷里的居民',totalTime:'3.42',id:5,coverImg:'/static/img/river.jpg'}
  		],
      // musicInfos:[
      //   {musicName:'Counting Stars',musicUrl:'http://m10.music.126.net/20171030163413/2c529f67e921a417ca29201f63337bc5/ymusic/4a1b/6562/fc11/ca66b35ac15955116bfe6be599289144.mp3',singerName:'OneRepublic',totalTime:'4.28',id:1,coverImg:'https://thumbnail0.baidupcs.com/thumbnail/6754aadd73e8bfa9f69c251fd785c20f?fid=505128395-250528-605420445092583&time=1509076800&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-JRkQ%2F1thob%2F51tQyVO%2F2tL8u%2B3g%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=6946263756682162831&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video.jpg'},
      //   {musicName:'Animals',musicUrl:'http://m10.music.126.net/20171030163500/9fc17c3ee3b6c4bf17cbd8c0a0238da7/ymusic/ddf3/5076/8eed/43a79d9cd4dbe88adf64eaf1d1da7811.mp3',singerName:'Nickelback',totalTime:'5.28',id:2,coverImg:'https://thumbnail0.baidupcs.com/thumbnail/a8f0a550bb4984624ff36b9626461d33?fid=505128395-250528-849447867769379&time=1509076800&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-Uiqj80O3xJ42QtZxEWfrYRVCxyA%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=6946282168408957846&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video'},
      //   {musicName:'好想你',musicUrl:'http://m10.music.126.net/20171030162952/386f571856416ef78675c2325b21d214/ymusic/b64a/e538/f255/f893513fd39c0aef2e641e88241bf2dc.mp3',singerName:'李雪莱',totalTime:'5.12',id:3,coverImg:'https://thumbnail0.baidupcs.com/thumbnail/b46e54e100c148665f4c800e23577c47?fid=505128395-250528-1035482153625976&time=1509076800&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-Y7qYC%2FtXCilFpQj9gGtEuNxTadM%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=6946289642402050837&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video'},
      //   {musicName:'琵琶语',musicUrl:'../../../static/pipayu.mp3',singerName:'林海',totalTime:'5.12',id:4,coverImg:'https://thumbnail0.baidupcs.com/thumbnail/e12efe325b02d9030a373790409f7c0e?fid=505128395-250528-941056053593675&time=1509076800&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-BK370RW2T8y9zZk4N%2BUAa8nRzVw%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=6946303288827089836&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video'}
      //   ,
      //   {musicName:'我俩永隔一江水',musicUrl:'http://m10.music.126.net/20171030163237/b42611a4a59ae76306b8e43eda300cd5/ymusic/8db3/521a/3d3d/10c8f2f2823496c8d3d521bc2ed6d82c.mp3',singerName:'小娟&山谷里的居民',totalTime:'3.42',id:5,coverImg:'https://thumbnail0.baidupcs.com/thumbnail/eaef9fe17c92b6eac8980b93d66eaad3?fid=505128395-250528-963721606429900&time=1509076800&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-J961axaVLkhsxCStrHP64iS1w6c%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=6946925105720378409&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video'}
      // ],
  		lastSelectdMusicId:0,
  		selectdMusicId:0,
  		musicName:'',
  		musicState:'pause',
  		playProgress:0,
  		defaultTotalTime:'0.0',
  		currentTime:'0.0',
  		width:0,
  		interval:'',
      isMobile:null,
      //样式相关
      music_control_wrapper:'music_control_wrapper',
      mobile_music_control_wrapper:'mobile_music_control_wrapper',
      music_plate_container:'music_plate_container',
      mobile_music_plate_container:'mobile_music_plate_container',
      music_plate_wrapper:'music_plate_wrapper',
      mobile_music_plate_wrapper:'mobile_music_plate_wrapper',
      music_plate:'music_plate',
      mobile_music_plate:'mobile_music_plate',
      pc_music_list_wrapper:'pc_music_list_wrapper',
      mobile_music_list_wrapper:'mobile_music_list_wrapper',
      music_name:'music_name',
      mobile_music_name:'mobile_music_name',
      music_singer:'music_singer',
      mobile_music_singer:'mobile_music_singer',
      music_control_button:'music_control_button',
      mobile_music_control_button:'mobile_music_control_button',
      music_progress_control:'music_progress_control',
      mobile_music_progress_control:'mobile_music_progress_control',
      music_progress_title:'music_progress_title',
      mobile_music_progress_title:'mobile_music_progress_title'
  	}
  },
  created:function(){
    this.isMobile = suitScreenApi.isMobile();
  },
  methods:{
    startMusic:function(){
       //进入播放音乐阶段
      this.musicState='play'
      let audio=document.getElementsByTagName('audio')[0];
      audio.play();
      this.addProgress();
    
      for(let index=0;index<document.getElementsByClassName('wave').length;index++){
          document.getElementsByClassName('index')[index].style.display='block';
          document.getElementsByClassName('wave')[index].style.display='none';
      }
        document.getElementsByClassName('wave')[this.selectdMusicId-1].style.display='block';
          document.getElementsByClassName('index')[this.selectdMusicId-1].style.display='none';
    },
    addProgress:function(){
      let audio=document.getElementsByTagName('audio')[0];
      let appBar=document.getElementsByClassName('music_progress_bar_play')[0];
      this.interval=setInterval(function(){
        appBar.style.width=((audio.currentTime/audio.duration)*100)+'%';
        
        },100);
    },
    pauseMusic:function(){
    	 //进入暂停阶段
      this.musicState='pause';
      let audio=document.getElementsByTagName('audio')[0];
      audio.pause();
     //暂停正常增加进度条
      clearInterval(this.interval);
     
    },
    //点击进度条调增音乐播放进度
    clickMusicProgress:function(e){
    	let musicProgressTotal=document.getElementsByClassName('music_progress_total')[0];
    	let musicProgressTotalWidth = getComputedStyle(musicProgressTotal,false).width; 
    	let audio=document.getElementsByTagName('audio')[0];
    	//按照比例设置点击进度条后音乐的播放位置
    	audio.currentTime=(e.offsetX+18)*audio.duration/Number(musicProgressTotalWidth.slice(0,musicProgressTotalWidth.length-2));
    	this.startMusic();
    },
    //拖动进度条
    mouseDownDrag:function(e){
    	this.musicState='dragMove';
    },
    mouseMoveDrag:function(e){
    	let musicProgressTotal=document.getElementsByClassName('music_progress_total')[0];
    	let musicProgressTotalWidth = getComputedStyle(musicProgressTotal,false).width; 
    	let audio=document.getElementsByTagName('audio')[0];

    	let appBar=document.getElementsByClassName('music_progress_bar_play')[0];
    	if(e&&this.musicState=='dragMove'){
    		//暂停正常增加进度条
           clearInterval(this.interval);
    	    // console.log(e.offsetX)
    	    appBar.style.width=(e.offsetX+18)/Number(musicProgressTotalWidth.slice(0,musicProgressTotalWidth.length-2))*100+'%';
    	    
    	    this.playProgress=(e.offsetX+18)*audio.duration/Number(musicProgressTotalWidth.slice(0,musicProgressTotalWidth.length-2));
    	}  		
    },
    mouseUpDrag:function(){
    	if(this.musicState=='dragMove'){
           let audio=document.getElementsByTagName('audio')[0];
    	   audio.currentTime=this.playProgress;
    	   console.log(this.playProgress)
    	   // this.startMusic();
    	   this.musicState='play';
    	}
    },
    chooseMusic:function(e){
    	//console.log(typeof e.target.innerHTML)
    	  let audio=document.getElementsByTagName('audio')[0];
    	  audio.setAttribute('src',e.target.innerHTML);
    	  this.musicState='pause';
    	  this.lastSelectdMusicId=this.selectdMusicId;
    	  this.selectdMusicId=parseInt(e.target.nextSibling.innerHTML);
    	  this.musicName=this.musicInfos[this.selectdMusicId-1].musicName;
    	  this.defaultTotalTime=this.musicInfos[this.selectdMusicId-1].totalTime;
    	  document.getElementsByClassName('cover_bg')[0].style.backgroundImage='url("'+this.musicInfos[this.selectdMusicId-1].coverImg+'")';
    	  document.getElementsByTagName('img')[0].setAttribute('src',this.musicInfos[this.selectdMusicId-1].coverImg);
    	  // for(let a=0;a<document.getElementsByClassName('selectMusic').length;a++){
    	  // 	if(e.target == document.getElementsByClassName('selectMusic')[a]){
    	  // 		console.log('a');
    	  // 	}
    	  // }
    	  // console.log(e.target );
    	  // console.log(this.selectdMusicId);
    }
  }
}
</script>

<style>
#music{
 /* transition: all 1.6s;*/
  position: fixed;
  top: 0; 
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 2rem;
  background: rgba(0,0,0,.4);
}
.music_control_wrapper{
	position: absolute;
	bottom: 3rem;
	left: 3%;
	width: 80%;
	height: 10rem;
}
.mobile_music_control_wrapper{
  position: absolute;
  bottom: 2rem;
  left: 3%;
  width: 94%;
  height: 24%;
}
.music_last,
.music_next,
.music_switch{
    float: left;
}
.music_last i,
.music_next i,
.music_switch i{
    color: #aaa;
    padding: 0 1rem;
}
.music_switch i{
	font-size: 5rem;
	line-height: 10rem;
  padding-left: 2rem;
}
.music_last i,
.music_next i{
	font-size: 3rem;
	line-height: 11rem
}
.music_switch i:hover{
	font-size: 5rem;
	color: #fff;
}
.music_last i:hover,
.music_next i:hover{
	font-size: 3rem;
	color: #fff;	
}
.music_progress_control{
	float: left;
	width: 70%;
	height: 100%;
	margin-left: 2rem;
}
.mobile_music_progress_control{
  position: absolute;
  width: 90%;
  height: 36%;
  bottom: 0;
  left: 5%;
}
.music_progress_bar{
	width: 100%;
	height: 100%;
	position: relative;
}
.music_progress_total{
    height: .6rem;
    width: 100%;
    position: absolute;
    bottom: 1.5rem;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    cursor: pointer;
}

.music_progress_tota_bar,
.music_progress_bar_play{	
	height: .2rem;
	position: absolute;
	
}
.music_progress_tota_bar{
	width: 100%;
	background: hsla(0,0%,100%,.1);	
	cursor: pointer;
	position: absolute;
	top: .7rem;
}

.music_progress_bar_play{
	width: 0%;
	background-color: red;
	z-index: 100;
	bottom: 2rem;
	cursor: pointer;
}
.music_progress_button{
	width: .6rem;
	height: .6rem;
	/*margin-top: -0.2rem;*/
	background-color: red;
	position: absolute;
	top: -.2rem;
	right: 0;
	border-radius: 50%;
}
.music_progress_button:before{
	content: "";
	display: block;
	width: 2.4rem;
	height: 2.4rem;
	border-radius: 50%;
	background: radial-gradient(transparent 20%,hsla(0,0%,100%,.6) 50%,transparent 60%);
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
	outline: 0;
	position: absolute;
	left: -.9rem;
	bottom: -.9rem;
}
.music_progress_title{
	width: 70%;
	height: 2.2rem;
	position: absolute;
	top: 3rem;
	font-size: 1.6rem;
	color: hsla(0,0%,88%,.8);
}
.mobile_music_progress_title{
  width: 100%;
}
.music_name{
	float: left;
}
.music_time{
    float: right;
}
.music_plate_container{
  width: 80%;
  position: absolute;
  top: 10%;
  left: 3%;
}
.mobile_music_plate_container{
  width: 96%;
  position: absolute;
  top: 10%;
  left: 4%;
}
.music_plate_wrapper{
	width: 100%;
	display: table;
	padding: 1rem;
}
.mobile_music_plate_wrapper{
  width: 100%;
  display: table;
}
.music_plate{
	float: left;
	width: 8%;
	height: 3rem;
	line-height: 3rem;
	text-align: center;
	border:1px solid hsla(0,0%,100%,.3);
	border-radius: .2rem;
	margin-right: 1.4rem;
	font-size: 1.4rem;
	color: hsla(0,0%,88%,.8);
}
.mobile_music_plate{
  float: left;
  width: 22%;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  border:1px solid hsla(0,0%,100%,.3);
  border-radius: .2rem;
  margin-right: .5rem;
  font-size: 1.4rem;
  color: hsla(0,0%,88%,.8);
}
.music_plate:hover{
	border-color: #fff;
	cursor: pointer;
}
.music_list_wrapper{
	position: absolute;
	
	left: 3%;
	color: hsla(0,0%,88%,.8);
	font-size: 1.4rem;
	overflow-y:auto;
  overflow-x:hidden;  
}
.pc_music_list_wrapper{
  width: 70%;
  height: 50%;
  top: 24%;
}
.mobile_music_list_wrapper{
  width: 97%;
  height: 53%;
  top: 18%;
}
.music_list_title,
.music_list{
	width: 100%;
	height: 6rem;
	line-height: 6rem;
	border-bottom: .1rem solid hsla(0,0%,100%,.3);
	position: relative;
}
.music_list_title>div,
.music_list>div{
	float: left;
}
.music_list:hover{
	background-color: rgba(0,0,0,.2);
	cursor: pointer;
}
.music_name{
	width: 50%;
	padding-left: 3rem;
	position: relative;
}
.mobile_music_name{
  width: 40%;
  padding-left: 3rem;
  position: relative;
}
.control_music_name{
  width: 70%;
  float: left;
  font-size: 1.4rem;
}
.control_music_time{
  width: 28%;
  float: right;
  font-size: 1.4rem;
  text-align:right;
}
.wave,
.index{
	position: absolute;
	left: -1rem;
	width: 3rem;
	height: 6rem;
	text-align: center;	
}
.wave{
	background: url('../../../static/wave.gif') no-repeat center;
	display: none;
}
.music_singer{
    width: 23%;
}
.mobile_music_singer{
  width: 40%;
}
.music_album,
.music_time{
	width: 10%;
}
.mobile_music_control_button{
  width: 74%;
  margin: 0 auto;
}
.mobile_music_control_button>div{
  width: 33%;
  text-align: center;
}
.cover_bg{
	background: url('../../../static/img/csbg.jpg') no-repeat center;
	background-size: cover;
	width: 100%;
	height: 100%; 
	position: absolute;
	z-index: -9;
	filter: blur(16px);
	-webkit-backdrop-filter: blur(1rem);
	backdrop-filter: blur(1rem);
	-webkit-filter: blur(1.6rem);
	-moz-filter: blur(1.6rem);
    -ms-filter: blur(1.6rem);
    -o-filter: blur(1.6rem);
}
.album_cover{
	position: absolute;
	top: 10%;
	width: 16rem;
	height: 16rem;
	border-radius: .4rem;
    right: 10%;
}
.album_cover:after{
	content:'';
	width: 2rem;
	height: 94%;
	position: absolute;
	right: -1.4rem;
	background: url('../../../static/cd_block.png') no-repeat right center;
	background-size: cover;
}
.album_cover img{
	width: 100%;
	transition: all .5s;
}
.selectMusic{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	color: transparent;
}
.notShow{
	display: none;
}

::-webkit-scrollbar {  
  width: 14px;  
  height: 14px;  
}  
  
::-webkit-scrollbar-track,  
::-webkit-scrollbar-thumb {    
  border: 5px solid transparent;  
}  
  
::-webkit-scrollbar-track {  
  box-shadow: 1px 1px 5px rgba(0,0,0,.2) inset;  
}  
  
::-webkit-scrollbar-thumb {  
  min-height: 20px;  
  background-clip: content-box;  
  box-shadow: 0 0 0 5px rgba(255,255,255,.6) inset;  
}  
  
::-webkit-scrollbar-corner {  
  background: transparent;  
} 
</style>
