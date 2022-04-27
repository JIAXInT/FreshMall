import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { NavBar, Tabbar, TabbarItem, Form, Field, Search, Swipe, Tag, ContactCard, SubmitBar, AddressEdit, Button, List, AddressList, SwipeItem, SwipeCell, TreeSelect, CountDown, Image as VanImage, Card, Sku, Checkbox, CheckboxGroup, GoodsAction, GoodsActionIcon, GoodsActionButton, Toast, Grid, GridItem, Lazyload, Cell, CellGroup, Icon } from 'vant'
require('./mock/api')

Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Search)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(TreeSelect)
Vue.use(VanImage)
Vue.use(Card)
Vue.use(Sku)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(GoodsAction)
Vue.use(GoodsActionButton)
Vue.use(GoodsActionIcon)
Vue.use(Toast)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Lazyload)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Icon)
Vue.use(CountDown)
Vue.use(Button)
Vue.use(SwipeCell)
Vue.use(AddressList)
Vue.use(AddressEdit)
Vue.use(List)
Vue.use(SubmitBar)
Vue.use(ContactCard)
Vue.use(Tag)
Vue.use(Form)
Vue.use(Field)

Vue.use(VueAxios, axios)
axios.defaults.baseURL = '/api'
axios.interceptors.response.use(res => {
    return res.data
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')