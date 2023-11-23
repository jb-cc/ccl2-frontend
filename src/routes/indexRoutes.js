// routes for the index (landing Page)

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: () => import('../components/Landing.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../components/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../components/Register.vue')
    },
    {
        path: '/logout',
        name: 'Logout',
        component: () => import('../components/Logout.vue')
    },
]

export default routes