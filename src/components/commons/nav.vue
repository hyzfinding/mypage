<template>
  <div id="nav">
    <div class="nav_wrapper" v-if="this.isMobile">
      <ul class="nav_bar">
        <li @click.stop="changeStyle($event)" >
          <router-link  to="/" :class="clickState==0?selected_a:not_selected_a">
          <span>首页</span>
          
          </router-link>
        </li>
        <li @click.stop="changeStyle($event)">
          <router-link to="myState" :class="clickState==1?selected_a:not_selected_a">
             <span>动态</span>
          </router-link>
        </li>
        <li @click.stop="changeStyle($event)">
          <router-link to="music" :class="clickState==2?selected_a:not_selected_a">
            <span>音乐</span>
          </router-link>
        </li>
        <li @click.stop="changeStyle($event)">
          <router-link to="about" :class="clickState==3?selected_a:not_selected_a">
            <span>关于</span>
          </router-link>
        </li>
      </ul>
      <div class="nav_other">
        
      </div>
    </div> 
    <div class="mobile_nav_wrapper" v-else>
      <i class="icon iconfont icon-daohanglanmu" @click="showNavFn"></i>
      <transition name="bounce">
         <div class="mobile_nav" v-show="this.showNav">
        <ul>
          <li>
             <router-link  to="/">
                 <span @click="showNavFn($event)" :class="clickState==0?mobile_not_slected:mobile_slected">首页</span>
             </router-link>
          </li>
          <li>
             <router-link  to="myState">
                 <span @click="showNavFn($event)" :class="clickState==1?mobile_not_slected:mobile_slected">动态</span>
             </router-link>
          </li>
          <li>
             <router-link  to="music">
                 <span @click="showNavFn($event)" :class="clickState==2?mobile_not_slected:mobile_slected">音乐</span>
             </router-link>
          </li>
          <li>
             <router-link  to="about">
                 <span @click="showNavFn($event)" :class="clickState==3?mobile_not_slected:mobile_slected">关于</span>
             </router-link>
          </li>
        </ul>
      </div>
      </transition>
      
    </div>
  </div>
</template>

<script>
import suitScreenApi from "../../assets/js/suitScreen.js"
export default {
  name: 'nav',
  data(){
    return {
      clickState:0,
      selected_a:'selected_a',
      not_selected_a:'not_selected_a',
      mobile_slected:'mobile_slected',
      mobile_not_slected:'mobile_not_slected',
      //判断是否为移动端，默认为pc端
      isMobile:true,
      //移动端弹出nav
      showNav:false
    }
  },
  created:function(){
    this.isMobile = suitScreenApi.isMobile();
  },
  methods:{
    changeStyle:function(e){
      for(let num=0;num<document.getElementsByTagName('li').length;num++){
        if (e.target.textContent==document.getElementsByTagName('li')[num].textContent) {
           this.clickState=num;
        }
      }
      // console.log(isMobile.a);
    },
    showNavFn:function(e){
      this.showNav=!this.showNav;
       for(let num=0;num<document.getElementsByTagName('li').length;num++){
        if (e.target.textContent==document.getElementsByTagName('li')[num].textContent) {
           this.clickState=num;
        }
      }
    }
  }
}
</script>

<style>
  #nav{
    position: fixed;
    top: 0;
    left: 2%;
    width: 96%;
    height: 4rem;
    background: transparent;
    z-index: 2;
  }
  .nav_other,
  .nav_bar{
    height: 4rem;
    line-height: 4rem;
    font-size: 1.4rem;
  }
  .nav_wrapper ul li{
    list-style-type: none;
    float: left; 
    width: 25%;
  }
  .nav_bar{
    width: 20%;
    float: left;
  }
  .nav_other{
    width: 10rem;
    float: right;
  }
  a{
    line-height: 4rem;
    display: inline-block;
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .selected_a span{
    line-height: 40px;
    display: inline-block;
    height: 40px;
    border-bottom: 1px solid red;
    color: #ccc;
  }
  .not_selected_a{
     color: #fff;
     border-bottom: none;
  }
  #nav .iconfont{
     color: #fff;
     font-size: 3rem;
     cursor: pointer;
     position: absolute;
     top: 1.4rem;
     z-index: 200;
  }
  .mobile_nav{
    width: 102%;
    height: 100%;
    position: fixed;
    left: -2%;
    background-color: rgba( 0,0,0,.8 );
   /* opacity: 0;*/
    transition: all .3s;
  }
  .mobile_nav_wrapper ul{
    list-style-type: none;
    position: absolute;
    top: 30%;
    left: 44%;
  }
  .mobile_nav_wrapper li span{
    font-size: 1.8rem; 
  }
  .mobile_slected{
    color: #fff;
  }
  .mobile_not_slected{
    color: red;
  }

 .bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
 /*.bounce-enter{
   opacity: 0;
 }
 .bounce-enter-active{
   transition: all .5s ease;
 }
 .bounce-leave{
   opacity: 1;
 }
 .bounce-leave-active{
   transition: all .5s ease;
 }
 .bounce-leave-to{
   opacity: 0;
 }*/
</style>
