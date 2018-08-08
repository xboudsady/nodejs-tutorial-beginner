var http = require('http');
// Call the 'fs' module to read files
var fs = require('fs');

// Creating a readable stream, pass in the file you want to read, third parameter 'utf8' will encode it to plain text
var myReadStream = fs.createReadStream(__dirname + '/loremText.txt', 'utf8');
// We create an output to write the stream
var myWriteSteam = fs.createWriteStream(__dirname + '/writeText.txt');

// on.() is an event. We pass in the data from our stream, and use a callback function to handle that data chunk
myReadStream.on('data', function (chunk) {
    console.log('new chunk received:');
    // We use the .write() to pass in the chunk
    myWriteSteam.write(chunk);
});













/*
var server = http.createServer(function(req, res) {
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');
*/