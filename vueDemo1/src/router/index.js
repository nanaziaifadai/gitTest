import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import parent from '@/components/parent'
import slotParent from '@/components/slot/parent'
import myRouter from  '@/components/myRouter'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/parent',
      name: 'parent',
      component: parent
    },
    {
      path:'/slot/parent',
      name:'slotParent',
      component:slotParent
    },{
      path:'/myRouter',
      name:'myRouter',
      component:myRouter
    }
  ]
})
