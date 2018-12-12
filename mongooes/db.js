const mongooes = require('mongoose')
mongooes.connect('mongodb://47.100.55.117:27017/jcdj')
const con = mongooes.connection;
con.on('error', console.error.bind(console, '连接数据库失败'));
const db = {}
const comments = mongooes.Schema({
    name: {
        type: String,
        default: 'hahaha'
    },
    age: {
        type: String,
        min: 18,
        index: true
    },
    pass: {
        type: String,
        default: '0'
    },
    code: {
        type: Number,
        default: 0
    },
    token: {
        type: String,
        default: '1111111111111'
    },
    bio: {
        type: String,
        match: /[a-z]/
    },
    date: {
        type: Date,
        default: Date.now
    },
    eat: {
        type: Object,
        default: function (params) {

        }
    },

    buff: Buffer
});



//登陆
db.info = async function (data, token) {

    let res = []
    let mtu = mongooes.model('test', comments)
    let info = new mtu({
        name: data.name,
        pass: data.pass,
        token: token

    })
    info.eat = function () {
        console.log("我就吃一个 " + this.name);
    }

    // con.once('open', () => {

    await info.save((err, info) => {

        if (err) return
        info.eat()
    })

    res = await mtu.find({
        token: token,
    })




    return res
}

module.exports = db;