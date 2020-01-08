const http = require('http');
const url = require('url');

const adr = 'http://localhost:8080/default.htm?year=2017&month=february';
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/plain');
    var q = url.parse(adr, true);
    console.log(request.url);
    console.log("Host: " + q.host);
    console.log("Path: " + q.path);
    console.log("Search: " + q.search);
    let txt = q.date + " " + q.year;
    response.end("Hello:" + txt);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });