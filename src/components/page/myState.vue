<template>
  <div id="myState">
     <div class="stateContainer" v-for="(message,index) in messages"> 
     	 <h3>{{messages[index].messageTime}}</h3>
     	 <div class="stateTips">
     		 <p>{{messages[index].messagePlace}}</p>
       </div>
     	 <div class="stateText">
     		 <p>{{messages[index].messageContent}}</p>
       </div>
     	 <div class="statePic">
     		 <img :src="messages[index].messageImg">
     	 </div>
      </div>
      <!-- <div class="stateContainer"> 
       <h3>10.24</h3>
       <div class="stateTips">
         <p>北京</p>
       </div>
       <div class="stateText">
         <p>我有一头小毛驴我从来也不骑</p>
       </div>
       <div class="statePic">
         <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509083123749&di=8c0f537bd51eced8479acdb248dc8d93&imgtype=0&src=http%3A%2F%2Fcdn103.img.lizhi.fm%2Faudio_cover%2F2016%2F12%2F07%2F2572355548441681927_320x320.jpg">
       </div>
      </div>
      <div class="stateContainer"> 
       <h3>10.20</h3>
       <div class="stateTips">
         <p>北京</p>
       </div>
       <div class="stateText">
         <p>味道可以的!!!</p>
       </div>
       <div class="statePic">
         <img src="/static/img/food.jpg">
       </div>
      </div>
      <div class="stateContainer"> 
       <h3>10.14</h3>
       <div class="stateTips">
         <p>北京</p>
       </div>
       <div class="stateText">
         <p>一二三，一起唱~~~</p>
       </div>
       <div class="statePic">
         <img src="/static/img/sing.jpg">
       </div>
      </div> -->
  </div>
</template>

<script>
export default {
  name: 'myState',
  data(){
    return {
      // messages:[
      //    { messageTime:'10.24',messageContent:'我有一头小毛驴我从来也不骑',messageImg:'../../../static/img/xiaomaolv.jpg',messagePlace:'北京' },
      //    { messageTime:'10.20',messageContent:'味道可以的!!!',messageImg:'../../../static/img/food.jpg',messagePlace:'北京' },
      //    { messageTime:'10.14',messageContent:'一二三，一起唱~~~',messageImg:'/static/img/sing.jpg',messagePlace:'北京' }
      // ]
       messages:[
         { messageTime:'10.24',messageContent:'我有一头小毛驴我从来也不骑',messageImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509083123749&di=8c0f537bd51eced8479acdb248dc8d93&imgtype=0&src=http%3A%2F%2Fcdn103.img.lizhi.fm%2Faudio_cover%2F2016%2F12%2F07%2F2572355548441681927_320x320.jpg',messagePlace:'北京' },
         { messageTime:'10.20',messageContent:'味道可以的!!!',messageImg:'https://thumbnail0.baidupcs.com/thumbnail/135243d471bfde191492cbd0d868e2a1?fid=505128395-250528-1010073756963881&time=1509332400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-YH8%2BnM%2Bm1tOUHp1DfO6I%2Fx1kg4M%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=7015324960831487194&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video',messagePlace:'北京' },
         { messageTime:'10.14',messageContent:'一二三，一起唱~~~',messageImg:'https://thumbnail0.baidupcs.com/thumbnail/fab55d800f96a0aea8d5571255f56d98?fid=505128395-250528-567985812896866&time=1509332400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-Y8kVi%2BqnW03CKd4SRmqY5x8FNVM%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=7015333512743722885&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video',messagePlace:'北京' }
      ]
    }
  }
}
</script>

<style>

#myState{
  width: 86%;
  height: 84%;
  position: fixed;
  top: 10%;
  left: 7%;
  color: #fff;
  font-size: 2rem;
  overflow-y: auto;
}
h3{
	font-size: 4rem;
	padding-left: .4rem;
}
.stateContainer{
	width: 100%;
	margin: 0 auto 4rem auto;
}
p{
	line-height: 6rem;
}
.stateTips p{
	float: left;
	font-size: 1.4rem;
}
.stateTipsTime{
	padding-right: 2rem;
}
.stateText{
	width: 100%;
	display: table;
	font-size: 2rem;
	border-bottom: 1px solid hsla(0,0%,100%,.1);
	/*hsla(0,0%,100%,.1)*/
}
.statePic{
	padding: 2rem 0;
}
.statePic img{
	width: 10rem;
	height: auto;
	border-radius: .5rem;
}
/*滚动条样式*/
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
