import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Content from '../views/content'
import GoodsManage from '../views/messages'
import Login from '../views/login'
import World from '../views/world'
import FormTpl from '../views/form'
import Tpl1 from '../views/tpl/tpl1'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
        { path: '/', component: Hello },
        { path: '/goods/content', component: Content },
        { path: '/goods/login', component: Login },
        { path: '/goods/world', component: World },
        { path: '/goods/form', component: FormTpl },
        { path: '/goods/tpl1', component: Tpl1 },
        { path: '/goods/messages', component: GoodsManage }
      ]
    }
  ]
})
export default router
