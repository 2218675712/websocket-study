const express = require('express');

const app = express();
//socket.io官方文档要求添加
const server = require('http').createServer(app);
// 设置跨域
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});
var userId=0
io.on('connection',(socket)=>{
    var user = ++userId;//当前连接到的用户的编号
    //socket就是连接到服务器的那个客户端
    //接收客户端消息
    //监听客户端的一个事件,事件名称自己定义
    socket.on('msg-from-client',function(data){
        io.emit('msg-from-server',user+"------>"+data)
    })
    //向客户端分发消息
    io.emit('msg-from-server',user+'------上线了')
})

//socket.io官方文档要求开启端口监听使用server
server.listen(7777);