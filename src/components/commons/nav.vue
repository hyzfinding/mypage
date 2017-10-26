<template>
  <div id="nav">
    <div class="nav_wrapper">
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
  </div>
</template>

<script>
export default {
  name: 'nav',
  data(){
    return {
      clickState:0,
      selected_a:'selected_a',
      not_selected_a:'not_selected_a'
    }
  },
  methods:{
    changeStyle:function(e){
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
  ul li{
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
</style>
