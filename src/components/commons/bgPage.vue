<template>
  <div id="bgPage">
    <div class="content_wrapper">
      <div class="bg" 
      :style="{backgroundImage:'url('+bgUrl+')'}"></div>

      <div class="bg_mark"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'bgPage',
  data(){
    return {
      bgUrl:''
    }
  },
  created:function(){
    axios.get('http://localhost:1337/')
    .then(reponse=>{
      this.bgUrl='http://www.bing.com'+reponse.data.slice(reponse.data.indexOf('url>')+4,reponse.data.indexOf('/url>')-1);
      
    })
    .catch(error=>{
     // console.log( error );
      alert( "网络错误，不能访问！" );
    })
  },
}
</script>

<style>
.bg{
  width: 100%;
  min-width: 1000px;
  height: 0;
  padding-top: 60%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  
}
.bg_mark{
  width: 100%;
  height: 100%; 
    position: fixed;
    top: 0;
    background: rgba(0,0,0,.4); 
}
</style>
