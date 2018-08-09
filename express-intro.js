var express = require('express');

// Now we can use express and all its functions
var app = express();


// Get request to the root url, notice we dont need to specify 'Content-Type': 'text/html'
app.get('/', function (req, res) {
    res.send('this is the homepage');
});

app.get('/contact', function (req, res) {
    res.send('this is the contact page');
});

// Creating a server
app.listen(3000);