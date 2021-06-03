export default [
    {
        path: 'widgets',
        name: 'moleculeWidgets',
        component: () => import(/* webpackChunkName: "atoms" */ '../views/designs/molecules/MoleculeWidgets'),
    },
    {
        path: 'inputs',
        name: 'moleculeInputs',
        component: () => import(/* webpackChunkName: "molecules" */ '../views/designs/molecules/MoleculeInputs'),
    },
    {
        path: 'buttons',
        name: 'moleculeButtons',
        component: () => import(/* webpackChunkName: "molecules" */ '../views/designs/molecules/MoleculeButtons'),
    },
    {
        path: 'bars',
        name: 'moleculeBars',
        component: () => import(/* webpackChunkName: "molecules" */ '../views/designs/molecules/MoleculeBars'),
    },
    {
        path: 'cards',
        name: 'moleculeCards',
        component: () => import(/* webpackChunkName: "molecules" */ '../views/designs/molecules/MoleculeCards'),
    },
]