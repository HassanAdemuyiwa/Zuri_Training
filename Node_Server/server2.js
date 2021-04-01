const http = require('http');

const server2 = http.createServer(function(req, res){
res.writeHead(200, {'Content-Type': 'text/html'});
res.end(`
 <html>
       <body>
           <h1> Hello World</h1>
           <p> Welcome to Zuri</p>
       </body>
   </html>

`);

});


server2.listen(8080, 'localhost');

console.log('server is running');