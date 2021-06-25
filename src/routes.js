import Homepage from './pages/Homepage.vue'
import Details from './pages/Details.vue';
import Car from './pages/car.vue';
import BuyPage from './pages/buyPage.vue';
import Login from './pages/login.vue';
import Cadastro from './pages/paginaDeCadastro.vue'
import PaginaMasculino from './pages/PaginaMasculino.vue'


export default [
    {
        path: '/',
        name: 'Homepage',
        component: Homepage
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
    },
    {
        path: '/masculino',
        name: 'Masculino',
        component: PaginaMasculino
    },
]