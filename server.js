var http = require('http')
var fs = require('fs')

function handleRequest(request, response) {
    response.writeHead(200, {'Content type': 'text/html'})
    fs.readFile('./index.html', function(err, content) {
        if(err) {
            response.writeHead(404)
            response.write('File not found')
        }
        else {
            response.write(content)
        }
        response.end()
    })
}

http.createServer(handleRequest).listen(8000)
console.log('Server running at http://127.0.0.1:8000/');