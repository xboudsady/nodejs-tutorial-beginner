var http = require('http');
// Call the 'fs' module to read files
var fs = require('fs');



var server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);
    res.writeHead(200, {
        // Change content type to text/html to server up html pages
        'Content-Type': 'text/html'
    });
    // we pass in the '/index.html' to send a webpage out
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');

    // use .pipe() to pipe the readable steam to the client; this will send it to the browser
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');