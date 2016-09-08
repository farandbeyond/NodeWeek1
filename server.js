var http = require('http');

http.createServer(function(request,response){
		response.writeHead(200); //status okay
		response.end('First Node Page');
}).listen(3000);

console.log('Server running on port 3000');