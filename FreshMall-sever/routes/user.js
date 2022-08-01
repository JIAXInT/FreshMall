const router = require('koa-router')()
const loginCheck = require('../SRC/middleware/loginCheck')
const { register, login, updatePassword } = require('../SRC/controller/user')
router.prefix('/api/user')

router.post('/register', async function(ctx, next) {
    const { username, password } = ctx.request.body
    try {
        const res = await register(username, password)
        if (res) {
            ctx.body = {
                errno: "0000",
                message: "注册成功",
            }
        } else {
            ctx.body = {
                errno: "0002",
                message: "此用户名已被注册，请更换用户名重试",
            }
        }
    } catch (ex) {
        ctx.body = {
            errno: "0001",
            message: "失败" + ex
        }
    }
})

//登录接口
router.post('/login', async function(ctx, next) {
        const { username, password } = ctx.request.body
        console.log("前端传过来的参数：", username, password)
        try {
            const res = await login(username, password)
            if (res) {
                console.log("登录成功", res)
                ctx.session.userInfo = { username }
                ctx.body = {
                    errno: "0000",
                    message: "登录成功",
                    data: res
                }
            } else {
                ctx.body = {
                    errno: "0001",
                    message: "账号或密码错误!"
                }
            }

        } catch (ex) {
            ctx.body = {
                errno: "0001",
                message: "登录失败" + ex
            }
        }
    })
    // router.post('/update', loginCheck, async function(ctx, next) {
    //     const { username, password, newPassword } = ctx.request.body
    //     try {
    //         const res = await updatePassword(username, password, newPassword)
    //         if (res) {
    //             ctx.body = {
    //                 errno: "0000",
    //                 message: "密码更新成功",
    //                 data: res
    //             }
    //         } else {
    //             ctx.body = {
    //                 errno: "0001",
    //                 message: "密码更新失败",
    //             }
    //         }
    //     } catch (ex) {
    //         ctx.body = {
    //             errno: "0001",
    //             message: "更改失败" + ex
    //         }
    //     }
    // })
module.exports = router