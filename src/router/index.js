import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/components/page/index'
import myState from '@/components/page/myState'
import music from '@/components/page/music'
import about from '@/components/page/about'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    },
    {
      path: '/myState',
      component: myState
    },
    {
      path: '/music',
      component: music
    },
    {
      path: '/about',
      component: about
    }
  ]
})
