const { request, response } = require('express');
const express = require('express');
const app = express();
app.all('/server', (request, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    setTimeout(() => {
        response.send('hellow');

    }, 3000)

});

// 监听端口启动服务
app.listen(5500, () => {
    console.log('5500');
});

app.all('/jquery-server', (request, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    const data = { name: 'ccc' };
    response.send(JSON.stringify(data));



});
app.all('/axios-server', (request, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    const data = { name: 'ccc' };
    setTimeout(() => {
        console.log('收到');
        response.send(JSON.stringify(data));

    }, 1000)



});
app.all('/jasonp-server', (request, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    response.setHeader('Access-Control-Allow-Headers', '*');
    设置响应体
    const data = { name: 'ccc' };
    setTimeout(() => {
        response.send(JSON.stringify(data));

    }, 3000)




});