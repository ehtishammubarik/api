var http = require('http');

require('dotenv').config();

http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello "+ process.env.USERNAME);
}).listen(8081);