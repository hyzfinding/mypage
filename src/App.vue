<template>
  <div id="app">
    <navBar></navBar>
    <bgPage></bgPage>
    <transition name="fade">
        <router-view></router-view>
    </transition>
    <musicComponent></musicComponent>
  </div>
</template>

<script>
import navBar from '@/components/commons/nav'
import bgPage from '@/components/commons/bgPage'
import musicComponent from '@/components/commons/musicComponent'
export default {
  name: 'app',
  components:{
    'navBar':navBar,
    'bgPage':bgPage,
    'musicComponent':musicComponent
  }
}
</script>

<style>
#app{
  position: fixed;
  width: 100%;
}
*{
  margin: 0;
  padding: 0;
}
html{
  font-size: 62.5%;
  height: 100%;
  font-family: Microsoft Yahei, Segoe UI,Segoe,Tahoma,Arial,Verdana,sans-serif;
}
a{
  text-decoration: none;
}
.fade-enter{
  opacity: 0;
  transform: translateY(50px);
}
.fade-enter-active{
  transition: all 1s ease;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition: all 1s ease;
}
.fade-leave-to{
  opacity: 0;
  transform: translateY(50px);
}
</style>
