import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home.vue'
import Index from './../views/Index.vue'
import Cart from './../views/Cart.vue'
import Order from './../views/Order.vue'
import My from './../views/My.vue'
import Detail from './../views/Detail.vue'
import List from './../views/List.vue'
import Address from './../views/Address.vue'
import AddressEdit from './../views/AddressEdit.vue'
import Login from './../views/Login.vue'
import Register from './../views/Register.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        redirect: '/home/index',
        children: [{
                path: '/home/index',
                name: 'index',
                component: Index
            },
            {
                path: '/home/list',
                name: 'list',
                component: List
            },
            {
                path: '/home/cart',
                name: 'cart',
                component: Cart
            },
            {
                path: '/home/my',
                name: 'my',
                component: My
            }
        ]
    }, {
        path: '/detail',
        name: 'detail',
        component: Detail
    }, {
        path: '/address',
        name: 'address',
        component: Address
    }, {
        path: '/addressedit',
        name: 'addressedit',
        component: AddressEdit
    }, {
        path: '/order',
        name: 'order',
        component: Order
    }, {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '**',
        redirect: '/home/index'
    }
]

const router = new VueRouter({
    routes
})

export default router