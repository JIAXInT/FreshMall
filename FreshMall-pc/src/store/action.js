/**
 * 商城Vuex-actions
 */
export default {
    saveUserName(context, username) {
        context.commit('saveUserName', username);
    },
    saveCartCount(context, count) {
        context.commit('saveCartCount', count);
    },
    // 添加购物车
    cartData(context, item) {
        // =========  context.commit('需要触发的Mutation函数',要传的参数)
        context.commit('cartData', item)
    },
    getTotalPrice(context, item) {
        context.commit('getTotalPrice', item)
    },
    // 添加收货地址
    addAddress(context, item) {
        context.commit('addAddress', item)
    },
    deleteItem(context, index) {
        context.commit('deleteItem', index)
    }
}