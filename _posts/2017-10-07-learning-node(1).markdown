---
layout: post
title:  "Node Learning!(1) Node.js的组成部分"
date:   2017-10-07 14:47:39 +0800
tags: [Node Beginner]
---
### Node.js主要可分为三个组成部分：
1. **引入 required 模块：** 我们可以使用 require 指令来载入 Node.js 模块。
2. **创建服务器：** 服务器可以监听客户端的请求，类似于 Apache 、Nginx 等 HTTP 服务器。
3. **接收请求与响应请求：** 服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据。

### 创建服务器：
* 使用`require`指令来载入`http`模块，并将实例化的 HTTP 赋值给变量`http`。
{% highlight javascript %}
var http = require('http');
{% endhighlight %}
* 使用`http.createServer()`方法创建服务器，并使用`listen`方法绑定 8888 端口。
{% highlight javascript %}
http.createServer(function (request, response){}).listen(8888);
{% endhighlight %}
* 函数通过`request`,`response`参数来接收和响应数据。

### 实例如下：
{% highlight javascript %}
var http = require('http');

http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
{% endhighlight %}

---  

参考资料来源：
* [Node.js 创建第一个应用（菜鸟教程）](http://www.runoob.com/nodejs/nodejs-http-server.html)
