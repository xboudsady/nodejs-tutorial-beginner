# NodeJS

## Creating & Removing Directories

To remove a file use the fs module

```javascript
var fs = require("fs");

fs.unlink("myFile.txt");
```

### Using Synchronous Method

This is blocking method, which means that will need to finish the process before moving on to the next line of code.

**Creating** a directory

```javascript
var fs = require("fs");

fs.mkdirSync("stuff");
```

**Deleting** a directory

```javascript
var fs = require("fs");

fs.rmdirSync("stuff");
```

To delete a directory with a file, we need to remove the file first before deleting the directory.

```javascript
var fs = require("fs");

fs.unlink("./stuff/writeMe.txt", function() {
  fs.rmdir("stuff");
});
```

### Using Asynchronous Method

This is a non-blocking method, which means next line will execute will the initall call is still being process.
Which means we need to have a **callback function** once this initial request has been completed; as a second parameter.

- Here we create the directory first
- Then read the file in the directory using async method, with a callback function to write file
- Write the file to a folder called 'stuff' with the file, passing in the data that was read

```javascript
var fs = require("fs");

fs.mkdir("stuff", function() {
  fs.readFile("readMe.md", "utf8", function(err, data) {
    fs.writeFile("./stuff/writeMe.txt", data);
  });
});
```
