var http = require("http");

function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started.");


//

var http = require('http');

http.createServer(function(request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // 发送响应数据 "Hello World"
    response.write('Hello World\n');
    response.end();
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');


//使用 npm 命令安装常用的 Node.js web框架模块 express:
//$ npm install express
//node server.js