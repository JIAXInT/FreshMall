const mongoose = require('../db/db')
const Schema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
}, { TimeRanges: true })
const User = mongoose.model('user', Schema)
module.exports = User //导出路由