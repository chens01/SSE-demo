# demo说明

这是一个基于nodejs的SSE的示例代码

## 文件目录说明
├─client
│  └─ index.html  客户端代码，建立SSE链接获取并更新三种消息的数量         
└─server
        http-server.js  Http服务端代码，接受并刷新数量
        server.js       服务端入口，用于启动两个服务，提供通讯能力
        sse-server.js   SSE服务端代码，建立SSE推送

## 使用说明
运行服务端，打开server文件，执行下面的命令：
```js
node server.js
```
server.js会启动两个子进程，启动http和sse两个服务器，并为两个子进程提供通讯能力。
服务启动后，打开client\index.html建立sse链接。

### 更新数量
访问一下地址：
- http://localhost:3002/message
- http://localhost:3002/collect
- http://localhost:3002/like
分别增加消息、收藏、点赞的数量


