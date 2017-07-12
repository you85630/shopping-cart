import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Page1 = resolve => require(['components/pages/page1'], resolve)
const Commodity = resolve => require(['components/common/commodity'], resolve)
const Shopping = resolve => require(['components/common/shopping'], resolve)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Page1,
    children: [{
      path: '/',
      redirect: 'list'
    }, {
      path: '/list',
      name: 'list',
      component: Commodity
    }, {
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    }]
  }]
})
