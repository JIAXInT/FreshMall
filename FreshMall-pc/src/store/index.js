import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
Vue.use(Vuex);

const state = {
    username: JSON.parse(localStorage.getItem("username")) || '', //登录用
    cartCount: 2, //购物车商品数量
    cartItem: JSON.parse(localStorage.getItem("cartItems")) || [], //要保存到本地的数据
    addressList: [{
        name: '小啊涛',
        phone: '17888886666',
        province: '四川',
        city: '成都',
        district: '都江堰市',
        address: '青城山镇 东软大道 成都东软学院'
    }],
    newAddressList: {},
    totalPrice: 0
}
export default new Vuex.Store({
    state,
    mutations,
    actions
});