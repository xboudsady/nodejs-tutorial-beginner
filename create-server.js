// Bring in module that will allow us to create server
var http = require('http');

// We create a variable to store our server, and create one by using the .createServer() method
// Whenever we send a request to the server, this function fires which takes 2 parameters, a request and response
var server = http.createServer(function (req, res) {
    // Logs out the url route request in the console, 
    console.log('request was made: ' + req.url);
    // We can get the reponse header from the server
    // When reponse is good (200), then return the content of this type
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })

    // End response by calling the .end() and pass in a response to the browser
    res.end('Hey Ninjas');
});

// We need to have node.js listen to a port, we'll use 3000, and the ip of the local host
server.listen(3000, '127.0.0.1');

// We'll want to log in a message to indicate server is running, and listening on port
console.log('yo dawgs, now listening to port 3000');


// Go into browser, and use localhost:3000, or 127.0.0.1:3000 to see response