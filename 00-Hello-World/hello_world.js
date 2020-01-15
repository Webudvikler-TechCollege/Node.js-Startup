const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html;Charset=utf8'});
    res.end('Davs davs - så virker det');
});

server.listen(4000, () => {
    console.log("Server is running...");
});