const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // build file path
  let filepath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  // extension name
  let extname = path.extname(filepath);

  // initialize content type
  let contentType = 'text/html';

  switch (extname) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // readfile
  fs.readFile(filepath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // page not found
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, data) => {
          if (err) throw err;
          res.writeHead(200, { 'Content-type': 'text/html' });
          res.end(data, 'utf8');
        });
      } else {
        // some server error
        res.writeHead(500);
        res.end(`Server error: ${error.code}`);
      }
    } else {
      // success response
      res.writeHead(200, { 'Content-type': contentType });
      res.end(data, 'utf8');
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
