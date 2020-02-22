const fs = require('fs');
const path = require('path');

// create a folder test inside our directory
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//   if (err) throw err;
//   console.log('Folder created...');
// });

// write file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', err => {
  if (err) throw err;

  // append File

  fs.appendFile(
    path.join(__dirname, '/test', 'hello.txt'),
    'I love Node js',
    err => {
      if (err) throw err;
      console.log('File written to...');
    }
  );
});

// readfile
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// rename file
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloworld.txt'),
  err => {
    if (err) throw err;
    console.log('file renamed');
  }
);
