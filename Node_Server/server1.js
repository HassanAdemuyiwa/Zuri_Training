const http = require('http');

const server1 = http.createServer(function(req, res){
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end(
    " Hello world"
);

});


server1.listen(8080, 'localhost');

console.log('server is running');