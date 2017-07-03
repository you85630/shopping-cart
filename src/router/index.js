import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Hello = resolve => require(['components/pages/Hello'], resolve)
const Page1 = resolve => require(['components/pages/page1'], resolve)
const Page2 = resolve => require(['components/pages/page2'], resolve)
const Page3 = resolve => require(['components/pages/page3'], resolve)

const Commodity = resolve => require(['components/common/commodity'], resolve)
const Shopping = resolve => require(['components/common/shopping'], resolve)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Hello
  }, {
    path: '/page1',
    name: 'Page1',
    component: Page1,
    children: [{
      path: '/page1',
      redirect: 'list'
    }, {
      path: '/page1/list',
      name: 'list',
      component: Commodity
    }, {
      path: '/page1/shopping',
      name: 'shopping',
      component: Shopping
    }]
  }, {
    path: '/page2',
    name: 'Page2',
    component: Page2
  }, {
    path: '/page3',
    name: 'Page3',
    component: Page3
  }]
})
