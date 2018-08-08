var http = require('http');
var fs = require('fs');



var server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);
    res.writeHead(200, {
        // Change content type to application/json that what we're sending to the browser
        'Content-Type': 'application/json'
    });
    // We'll create an object we want to send back to the browser
    var myObj = {
        name: 'Ryu',
        job: 'Ninja',
        age: 29
    };
    // Sending data back to client, to to stringify
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');