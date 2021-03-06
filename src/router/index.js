import Vue from 'vue'
import Router from 'vue-router'

import GoodsList from '@/views/GoodsList'
import Cart from '@/views/Cart'
import Address from '@/views/Address'
import OrderConfirm from '@/views/OrderConfirm'
import OrderSuccess from '@/views/OrderSuccess'
import OrderPay from '@/views/OrderPay'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodsList',  //添加了name属性则是命名路由，命名路由的使用, 在router-link 中to 属性就可以使用对象了
      component:GoodsList
    },
    {
      path: '/cart',
      name: 'Cart',
      component:Cart
    },
    {
      path: '/goods',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/address',
      name: 'Address',
      component:Address
    },
    {
      path: '/orderConfirm',
      name: 'OrderConfirm',
      component:OrderConfirm
    },
    {
      path: '/orderSuccess',
      name: 'OrderSuccess',
      component:OrderSuccess
    },
    {
      path: '/orderPay',
      name: 'OrderPay',
      component:OrderPay
    }
  ]
})
