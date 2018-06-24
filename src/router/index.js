import Vue from 'vue'
import Router from 'vue-router'
//引入各个组件
import Login from '@/components/Login'
import Index from '@/components/Index'
import Chat from '@/components/Chat'
import ProductList from '@/components/ProductList'
import ProductAdd from '@/components/ProductAdd'
import UserList from '@/components/UserList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect : '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/index',
      component: Index,
      children:[
        { path:'/',component:Chat },
        { path:'/chat',component:Chat },
        { path:'/productlist',component:ProductList },
        { path:'/productadd',component:ProductAdd },
        { path:'/userlist',component:UserList },
      ]
    }
  ]
})
