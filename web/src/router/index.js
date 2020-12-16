import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const _import_=file=>()=>import('@/views/' + file + '.vue')
const routes = [
    {
        path: '/',
        name: 'Home',
        component: _import_('LayOut'),
        meta:{keepalive:true},
        redirect:'/',
        children:[
            {
                path:'/',
                meta:{keepalive:true},
                component: _import_('About'),
            },
            {
                path: 'press-release',
                name:'PressView',
                component: _import_('PressView'),

            },
            {
                path: 'careers',
                component: _import_('CaressView'),
            },
            {
                path: 'overview',
                name:'about',
                component: _import_('AboutVerview'),
            },
            {
                path: 'contact',
                component: _import_('AboutContact'),
            }
        ]
    },
    {
        path: '/featured-insights',
        redirect:'FeaturedIns',
        component: _import_('LayOut'),
        children:[
            {
                path: '/',
                name:'FeaturedIns',
                meta:{keepalive:true},
                component: _import_('FeaturedIns'),

            },
        ]
    },
    {
        path: '/featured-list',
        component: _import_('LayOut'),
        redirect:'featuredList',
        children:[
            {
                path: '/:tit',
                name:'featuredList',
                meta:{keepalive:true},
                component: _import_('FeaturedList'),

            },
        ]
    },


]

const router = new VueRouter({
  routes
})

export default router
