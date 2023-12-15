const http = require('http');
const process = require('process');

const header = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type':'text/event-stream',
  'Cache-Control':'no-cache',
  'Connection':'keep-alive'
};

http.createServer((req, res) => {
  res.writeHead(200, header);
  // 监听父进程
  process.on('message', function({event, data})  {
    const id = `${+new Date()}${Math.random() * 10000}`;
    res.write(`id:${id}\nevent:${event}\ndata:${JSON.stringify(data)}\n\n`);
  });
  
  // 当客户端关闭连接时，关闭队列
  req.on('close', () => {
    res.end();
  });

}).listen(3001, () => {
  console.log('SSE Server running');
});
