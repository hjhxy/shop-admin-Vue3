import {
    createRouter,
    createWebHashHistory,
} from "vue-router";


const routes = [{
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: () => import('@/views/Home/index.vue')
    }, {
        path: '/login',
        component: () => import('@/views/Login/index.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/404/index.vue')
    },
];


const router = createRouter({
    routes,
    history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
    next();
})

export default router;