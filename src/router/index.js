import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Page1 = resolve => require(['components/pages/page1'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Page1',
      component: Page1
    }
  ]
})
