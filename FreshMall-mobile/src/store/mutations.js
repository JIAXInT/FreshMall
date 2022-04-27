/**
 * 商城Vuex-mutations
 */
export default {
    saveUserName(state, username) {
        state.username = username
    },
    saveCartCount(state, count) {
        state.cartCount = count
    },
    // 添加购物车
    cartData(state, item) { //   -----------这里的item就是actions,传过来的参数
        state.cartItem.push(item)

        localStorage.setItem('cartItems', JSON.stringify(state.cartItem))
    },
    getTotalPrice(state, item) {
        state.totalPrice = 0
        state.cartItem.map(res => {
            if (res.checked) {
                const price = parseFloat(res.total).toFixed(2)
                state.totalPrice += price * 100
            }
        })
    },
    deleteItem(state, index) {
        console.log(index)
        state.cartItem.splice(index, 1)
        localStorage.setItem('cartItems', JSON.stringify(state.cartItem))
    },
    addAddress(state, item) {
        state.addressList.push(item)
    }

}