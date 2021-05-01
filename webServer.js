const express = require('express');
const app = express();

//开启静态资源服务器
app.use(express.static('./public'));

app.listen('8888')
