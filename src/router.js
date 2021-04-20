import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'hash',

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            props: {
                default: false, isHome: true
            }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ '@/views/About'),
        },
        {
            path: '/skills',
            name: 'skills',
            component: () => import(/* webpackChunkName: "about" */ '@/views/Skills'),
        },
        {
            path: '/work',
            name: 'work',
            component: () => import(/* webpackChunkName: "about" */ '@/views/Work'),
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import(/* webpackChunkName: "about" */ '@/views/Projects'),
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import(/* webpackChunkName: "about" */ '@/views/Contact'),
            props: {
                default: false, isHome: false
            }
        },
    ],
});