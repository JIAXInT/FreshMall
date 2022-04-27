import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
Vue.use(Vuex)

const state = {
    username: '', // 登录用
    cartCount: 0, // 购物车商品数量
    cartItem: JSON.parse(localStorage.getItem('cartItems')) || [], // 要保存到本地的数据
    addressList: [{
            id: '1',
            name: '小啊涛',
            tel: '13000000000',
            address: '四川省 成都市 成都东软学院',
            isDefault: true
        },
        {
            id: '2',
            name: '龙傲天',
            tel: '1310000000',
            address: '四川省 成都市 高新区'
        }
    ],
    disabledList: [{
        id: '3',
        name: '张三',
        tel: '1320000000',
        address: '四川省 成都市 青羊区'
    }],
    newAddressList: {},
    totalPrice: 0
}
export default new Vuex.Store({
    state,
    mutations,
    actions
})