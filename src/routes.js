import App from './App.vue';
import Details from './pages/Details.vue';
import Car from './pages/car.vue';
import BuyPage from './pages/buyPage.vue';
import Login from './pages/login.vue';
import Cadastro from './pages/paginaDeCadastro.vue'

export default [
    {
        path: '/',
        name: 'App',
        component: App
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/cadastro',
        name: 'Cadastro',
        component: Cadastro
    },
    {
        path: '/produto/:id',
        name: 'Details',
        component: Details
    },
    {
        path: '/carrinho',
        name: 'Carrinho',
        component: Car
    },
    {
        path: '/buyPage',
        name: 'Bought',
        component: BuyPage
    }
]