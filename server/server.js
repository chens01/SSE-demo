const childProcess = require('child_process')

// 创建子进程
const httpServer = childProcess.fork('http-server.js'); 
const sseServer = childProcess.fork('sse-server.js'); 
  
// 监听http服务，更新数量
httpServer.on('message', data => { 
    sseServer.send(data);
});

