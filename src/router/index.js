import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: 'dashboard',
        component: () => import(/* webpackChunkName: "main-dashboard" */ '../views/dashboard/index.vue'),
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard/Dashboard.vue'),
            },
            {
                path: 'tables',
                name: 'tables',
                component: () => import(/* webpackChunkName: "table" */ '../views/table/index.vue'),
            },
            {
                path: 'cards',
                name: 'cards',
                component: () => import(/* webpackChunkName: "cards" */ '../views/card/index.vue'),
            },
            {
                path: 'icons',
                name: 'icons',
                component: () => import(/* webpackChunkName: "icons" */ '../views/icon/index.vue'),
            },
            {
                path: 'payments',
                name: 'payments',
                component: () => import(/* webpackChunkName: "payments" */ '../views/payment/index.vue'),
            },
            {
                path: 'support',
                name: 'support',
                component: () => import(/* webpackChunkName: "support" */ '../views/support/index.vue'),
            },
            {
                path: 'configuration',
                name: 'configuration',
                component: () => import(/* webpackChunkName: "configuration" */ '../views/configuration/index.vue'),
            }
        ]
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
