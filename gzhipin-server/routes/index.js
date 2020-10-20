var express = require('express');
var router = express.Router();

const md5 = require('blueimp-md5')
const filter = {password: 0, __v: 0} // 查询时过滤出指定属性
const { UserModel } = require('../db/models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 注册路由
router.post('/register', function(req, res){
  // 读取参数
  const { username, password, type } = req.body
  // 处理，先判断用户是否存在（根据username查询），如果存在，返回错误的信息；如果不存在，保存
  UserModel.findOne({username}, function(err, user) {
    if (user){
      res.send({code: 1, msg: '此用户已存在'})
    } else {
      new UserModel({username, type, password: md5(password)}).save(function(err, user){
        // 生成cookie给浏览器保存
        res.cookie('userid', user._id, {maxAge: 1000 * 60 * 60 * 24 * 7}) // 持久化cookie，一天内都有效果
        // 返回响应数据(不携带密码)
        const data = {username, type, _id: user._id} 
        res.send({code: 0, data})
      })
    }
  })

  
})

// 登陆路由
router.post('/login', function(req, res){
  // 读取参数
  const { username, password } = req.body
  UserModel.findOne({username, password: md5(password)}, filter, function(err, user){
    if(user){
      res.cookie('userid', user._id, {maxAge: 1000 * 60 * 60 * 24 * 7})
      res.send({code: 0, data: user})
    }else{
      res.send({code: 1, msg: '用户名或密码不正确'})
    }
  })
})
module.exports = router;
