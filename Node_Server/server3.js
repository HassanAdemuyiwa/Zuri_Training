const http = require('http');

const server3 = http.createServer(function(req, res){
res.writeHead(200, {'Content-Type': 'application/json'});
res.end(`{
    'name': 'Hassan Ademuyiwa',
    'country': 'Nigeria',
    'hobby': null,
    'gender': 'male'
}`);

});


server3.listen(8080, 'localhost');

console.log('server is running');