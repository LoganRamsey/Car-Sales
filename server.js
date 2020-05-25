var http = require('http');
var fs = require('fs');

function handleRequest(request, response) {
    var filePath = '.' + request.url;
    if (filePath == './') {
        filePath = './index.html';
    }    
    
    fs.readFile(filePath, function(err, content) {
        if(err) {
            if(err.code == 'ENOENT') {
                response.writeHead(404)                
                response.end(err.code);            
            }
            else {
                response.writeHead(500);
                response.end(err.code);
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(content, 'utf-8');
        }
    });
}

http.createServer(handleRequest).listen(8000)
console.log('Server running at http://127.0.0.1:8000/');
