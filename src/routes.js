import App from './App.vue';
import Details from './pages/Details.vue';

export default [
    {
        path: '/',
        name: 'App',
        component: App
    },
    // {
    //     path: '/login',
    //     name: 'Login',
    //     component: Login
    // },
    {
        path: '/produto/:id',
        name: 'Details',
        component: Details
    },
    {
        path: '/carrinho',
        name: 'Carrinho',
        component: App
    }
]