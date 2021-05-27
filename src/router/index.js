import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: 'dashboard',
        component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/index.vue'),
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/Dashboard.vue'),
            },
            {
                path: 'tables',
                name: 'tables',
                component: () => import(/* webpackChunkName: "about" */ '../views/table/index.vue'),
            }
        ]
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
