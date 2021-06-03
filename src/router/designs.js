import moleculeChild from './molecules'
import atomChild from './atoms'

export default [
    {
        path: 'atoms',
        name: 'atoms',
        redirect: '/designs/atoms/buttons',
        component: () => import(/* webpackChunkName: "atoms" */ '../views/designs/atoms/'),
        children: atomChild
    },
    {
        path: 'molecules',
        name: 'molecules',
        redirect: '/designs/molecules/widgets',
        component: () => import(/* webpackChunkName: "molecules" */ '../views/designs/molecules/'),
        children: moleculeChild
    },
    {
        path: 'organisms',
        name: 'organisms',
        component: () => import(/* webpackChunkName: "organisms" */ '../views/designs/Organisms'),
    },
    // {
    //     path: 'templates',
    //     name: 'templates',
    //     component: () => import(/* webpackChunkName: "templates" */ '../views/designs/templates'),
    // },
    // {
    //     path: 'pages',
    //     name: 'pages',
    //     component: () => import(/* webpackChunkName: "pages" */ '../views/designs/pages'),
    // },
]