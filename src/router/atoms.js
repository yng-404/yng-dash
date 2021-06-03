export default [
    {
        path: 'bars',
        name: 'atomBars',
        component: () => import(/* webpackChunkName: "molecules" */ '../views/designs/atoms/AtomBars'),
    },
    {
        path: 'cards',
        name: 'atomCards',
        component: () => import(/* webpackChunkName: "molecules" */ '../views/designs/atoms/AtomCards'),
    },
    {
        path: 'buttons',
        name: 'atomButtons',
        component: () => import(/* webpackChunkName: "molecules" */ '../views/designs/atoms/AtomButtons'),
    },
    {
        path: 'inputs',
        name: 'atomInputs',
        component: () => import(/* webpackChunkName: "inputs" */ '../views/designs/atoms/AtomInputs'),
    },
    {
        path: 'blockquotes',
        name: 'atomBlockQuotes',
        component: () => import(/* webpackChunkName: "BlockQuotes" */ '../views/designs/atoms/AtomBlockQuotes'),
    },
    {
        path: 'badges',
        name: 'atomBadges',
        component: () => import(/* webpackChunkName: "atomBadges" */ '../views/designs/atoms/AtomBadges'),
    },
    {
        path: 'tooltips',
        name: 'atomTooltips',
        component: () => import(/* webpackChunkName: "atomTooltips" */ '../views/designs/atoms/AtomTooltips'),
    },
    {
        path: 'progress',
        name: 'atomProgress',
        component: () => import(/* webpackChunkName: "atomProgress" */ '../views/designs/atoms/AtomProgress'),
    },
    {
        path: 'toggles',
        name: 'atomToggles',
        component: () => import(/* webpackChunkName: "atomToggles" */ '../views/designs/atoms/AtomToggles'),
    },
]