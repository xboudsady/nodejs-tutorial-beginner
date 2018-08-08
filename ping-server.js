const https = require('https');

let counter = 0;
let i = setInterval(function (request) {
    // do your thing
    https.get(
        'https://macrurmors.com',
        (res) => {
            if (res.statusCode === 200) {
                console.log("This site is up and running! Nice Job!");
            } else {
                console.log("This site may be down, returning status code: " + res.statusCode + ", try again in a few hours.");
            }
        });

    counter++;
    if (counter === 10) {
        clearInterval(i);
    }
}, 2000);