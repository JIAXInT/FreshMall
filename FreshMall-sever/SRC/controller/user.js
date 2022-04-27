const User = require('../model/user')
async function register(userId, password) {
    const res = await User.findOne({ userId })
    console.log("有这个人了吗？", res)
    if (res == null) {
        const newUser = await User.create({
            userId,
            password
        })
        return newUser
    } else {
        return false
    }

}
async function login(userId, password) {
    const user = await User.findOne({
        userId,
        password
    })
    if (user != null) {
        //登录成功
        return true
    }
    //登录失败
    return false
}
async function updatePassword(userId, password, newPassword) {
    const res = await User.updateOne({
        userId: userId,
        password: password,
    }, { $set: { password: newPassword } })
    if (res != null) {
        console.log("新信息：", res)
        return res
    }
    return res
}
module.exports = {
    register,
    login,
    updatePassword
}