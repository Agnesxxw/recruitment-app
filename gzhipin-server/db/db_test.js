/*
使用 mongoose 操作 mongodb 的测试文件 
1. 连接数据库
1.1. 引入 mongoose
1.2. 连接指定数据库(URL 只有数据库是变化的) 1.3. 获取连接对象
1.4. 绑定连接完成的监听(用来提示连接成功)
2. 得到对应特定集合的 Model
2.1. 字义 Schema(描述文档结构)
2.2. 定义 Model(与集合对应, 可以操作集合)
3. 通过 Model 或其实例对集合数据进行 CRUD 操作
3.1. 通过 Model 实例的 save()添加数据
3.2. 通过 Model 的 find()/findOne()查询多个或一个数据 3.3. 通过 Model 的 findByIdAndUpdate()更新某个数据 3.4. 通过 Model 的 remove()删除匹配的数据
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
        username: 'Tom',
        password: md5('1234'),
        type: 'qiuzhi'
    })
    userModel.save(function(error, userDoc) {
        console.log('save()', error, userDoc)
    })
}
testSave()