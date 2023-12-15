const http = require('http');
const process = require('process');

const counts = {
    message: 0,
    like: 0,
    collect: 0
};

function sendEvent(event, data) {
    process.send({event, data})
}

const server = http.createServer();

server.listen(3002, function() {
    console.log('HTTP Server running');
});

server.on('request', function(req, res) {
    const urls = req.url.split('?');

    switch(urls[0]) {
        case '/message': 
            counts.message++;
            sendEvent('MessageCount', {count: counts.message});
            break;
        case '/like':
            counts.like++;
           sendEvent('LikeCount', {count: counts.like});
            break;
        case '/collect':
            counts.collect++;
            sendEvent('CollectCount', {count: counts.collect});
            break;
    }

    res.setHeader('Content-Type', 'application/text');
    res.statusCode=200;
    res.end('success');
});