export default [
    {
        path: 'atoms',
        name: 'atoms',
        component: () => import(/* webpackChunkName: "atoms" */ '../views/designs/atoms'),
    },
    {
        path: 'molecules',
        name: 'molecules',
        component: () => import(/* webpackChunkName: "molecules" */ '../views/designs/molecules'),
    },
    {
        path: 'organisms',
        name: 'organisms',
        component: () => import(/* webpackChunkName: "organisms" */ '../views/designs/organisms'),
    },
    {
        path: 'templates',
        name: 'templates',
        component: () => import(/* webpackChunkName: "templates" */ '../views/designs/templates'),
    },
    {
        path: 'pages',
        name: 'pages',
        component: () => import(/* webpackChunkName: "pages" */ '../views/designs/pages'),
    },
]