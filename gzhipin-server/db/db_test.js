/*
使用 mongoose 操作 mongodb 的测试文件 
1. 连接数据库
    1.1. 引入 mongoose
    1.2. 连接指定数据库(URL 只有数据库是变化的) 
    1.3. 获取连接对象
    1.4. 绑定连接完成的监听(用来提示连接成功)
2. 得到对应特定集合的 Model
    2.1. 字义 Schema(描述文档结构)
    2.2. 定义 Model(与集合对应, 可以操作集合)
3. 通过 Model 或其实例对集合数据进行 CRUD 操作
    3.1. 通过 Model 实例的 save()添加数据
    3.2. 通过 Model 的 find()/findOne()查询多个或一个数据 
    3.3. 通过 Model 的 findByIdAndUpdate()更新某个数据 
    3.4. 通过 Model 的 remove()删除匹配的数据
*/

// 1. 连接数据库
const mongoose = require('mongoose')
const md5 = require('blueimp-md5')
mongoose.connect('mongodb://localhost:27017/gzhipin_test')// 最后一部分是数据库的名称
const conn = mongoose.connection
conn.on('connected', function(){
    console.log('database connected!')
})

// 2. 得到对应特定集合的 Model（操作集合数据）
const userSchema = mongoose.Schema({ // 文档指定的结构
    username: {type: String, required: true},
    password: {type: String, required: true},
    type: {type: String, required: true},
    header: {type: String}
})

const UserModel = mongoose.model('user', userSchema)// 集合名称为users

// 3. 通过 Model 或其实例对集合数据进行 CRUD 操作
function testSave(){
    const userModel = new UserModel({
        username: 'Bob',
        password: md5('342526'),
        type: 'laoban'
    })
    userModel.save(function(error, userDoc) {
        console.log('save()', error, userDoc)
    })
}
// testSave()

function testFind(){
    // 返回的是[], 没有匹配的就是一个空数组
    UserModel.find(function(error, users){
        console.log('find()', error, users)
    })
    // 返回的是文档对象，没有的话是null
    UserModel.findOne({_id: '5f8a5d924513603c72785f43'}, function(error, user){
        console.log('findOne()', error, user)
    })
}

// testFind()
function testUpdate(){
    UserModel.findByIdAndUpdate({
        _id: '5f8a5d924513603c72785f43'
    }, {
        username: 'Sherry'
    }, function(error, doc){ // 返回的doc是老得对象（更改前的）
        console.log('findByIdAndUpdate', error, doc)
    })
}
// testUpdate()
function testDelete(){
    UserModel.remove({_id:'5f8a5d924513603c72785f43'}, function(error, doc){ // {n: 1/0, ok: amount}
        console.log('delete()', error, doc)
    })
}
testRemotestDeleteve()

