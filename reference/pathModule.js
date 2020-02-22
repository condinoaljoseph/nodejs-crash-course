const path = require('path');

// return base file name
console.log(path.basename(__filename));

// return the dirname
console.log(path.dirname(__filename));

// return the extension name
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename).ext);

// join path
console.log(path.join(__dirname, 'test', 'hello.js'));
