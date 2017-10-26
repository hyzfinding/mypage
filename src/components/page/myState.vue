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
  </div>
</template>

<script>
export default {
  name: 'myState',
  data(){
    return {
      messages:[
         { messageTime:'10.24',messageContent:'我有一头小毛驴我从来也不骑',messageImg:'/static/xiaomaolv.jpg',messagePlace:'北京' },
         { messageTime:'10.20',messageContent:'味道可以的!!!',messageImg:'/static/food.jpg',messagePlace:'北京' },
         { messageTime:'10.14',messageContent:'一二三，一起唱~~~',messageImg:'/static/sing.jpg',messagePlace:'北京' }
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
