import Vue from 'vue'
import Router from 'vue-router'
//import Panel from '@/components/Panel'
import Login from '@/components/Login'
import Main from '@/components/MainPage'

Vue.use(Router)


export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main
    }
  ]
})
