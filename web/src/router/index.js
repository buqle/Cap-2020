import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const _import_=file=>()=>import('@/views/' + file + '.vue')
const routes = [
    {
        path: '/',
        name: 'Home',
        component: _import_('LayOut'),
        redirect:'/about',
        children:[
            {
                path:'/',
                component: _import_('About'),
            }
        ]
    },
]

const router = new VueRouter({
  routes
})

export default router
