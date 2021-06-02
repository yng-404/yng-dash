import { createRouter, createWebHistory } from 'vue-router'
import designsRoute from './designs'

const routes = [
    {
        path: '/',
        redirect: 'dashboard',
        component: () => import(/* webpackChunkName: "main-dashboard" */ '../views'),
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard'),
            },
            {
                path: 'tables',
                name: 'tables',
                component: () => import(/* webpackChunkName: "table" */ '../views/table'),
            },
            {
                path: 'cards',
                name: 'cards',
                component: () => import(/* webpackChunkName: "cards" */ '../views/card'),
            },
            {
                path: 'icons',
                name: 'icons',
                component: () => import(/* webpackChunkName: "icons" */ '../views/icon'),
            },
            {
                path: 'payments',
                name: 'payments',
                component: () => import(/* webpackChunkName: "payments" */ '../views/payment'),
            },
            {
                path: 'support',
                name: 'support',
                component: () => import(/* webpackChunkName: "support" */ '../views/support'),
            },
            {
                path: 'configuration',
                name: 'configuration',
                component: () => import(/* webpackChunkName: "configuration" */ '../views/configuration'),
            },
            {
                path: 'designs',
                name: 'designs',
                component: () => import(/* webpackChunkName: "designs" */ '../views/designs'),
                children: designsRoute
            }
        ]
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
