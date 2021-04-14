const http = require('http');
const fs = require('fs')
const fetch = require('node-fetch');


const server = http.createServer(function(req, res){

     fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => { 
     const data =JSON.stringify(json)

     fs.writeFile('result/post1.json',data, function(){
        console.log('file written successfully')
    });
})

res.writeHead(200);
res.end(
    " Hello world"
);

});


server.listen(8080, 'localhost');

console.log('server is running');

