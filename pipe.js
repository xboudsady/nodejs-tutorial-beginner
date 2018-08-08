var http = require('http');
// Call the 'fs' module to read files
var fs = require('fs');



var server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    // Creating a readable stream, pass in the file you want to read, third parameter 'utf8' will encode it to plain text
    var myReadStream = fs.createReadStream(__dirname + '/loremText.txt', 'utf8');

    // use .pipe() to pipe the readable steam to the client; this will send it to the browser
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');