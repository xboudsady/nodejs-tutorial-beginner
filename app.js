var fs = require('fs');

// This is the method we use to read the file, 
// (Synchronous method) meaning it will fully read the file before moving on to next line of code
// var readMe = fs.readFileSync('readme.txt', 'utf8');

//fs.writeFileSync('writeMe.txt', readMe);

// Now we use asynchronous request, we need a callback function to when the process is complete,
// Non-blocking code
fs.readFile('readMe.txt', 'utf8', function (err, data) {
    fs.writeFile('writeMe.txt', data, (err) => {
        if (err) throw err;
        console.log('It is saved!');
    });
});



// Will log this code first
//console.log('test');
// code