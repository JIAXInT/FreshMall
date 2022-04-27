const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017';
const dbName = 'fresh-mall';
mongoose.connect(`${url}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', err => {
    console.log('数据库连接失败' + err)
})
db.once('open', () => {
    console.log('数据库连接成功')
})
module.exports = mongoose