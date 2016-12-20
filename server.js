/**
 * Author：liRenhao
 * Create Date：2016/12/20
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 模拟后台服务
 */
import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", req.get("origin"));
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.post('/login', function (req, res) {
    const {username, password} = req.body
    if (username == 'lrh' && password == '111')
        res.json({token: "111"})
    else
        res.json({error: "密码错误"})
})

// TODO 添加后台服务

app.listen(3000, function () {
    console.log('server start!')
})