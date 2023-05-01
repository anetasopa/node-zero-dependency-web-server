import fs from 'node:fs';
import http from 'node:http';

const port = 3000;
const host = 'localhost';

const readAndSendFile = (contentType, path, res) => {
  res.writeHead(200, { 'Content-Type': contentType });

  fs.readFile(path, (err, fileContent) => {
    res.end(fileContent);
  });
};

http
  .createServer(function (req, res) {
    const { url } = req;

    // http://localhost:3000 and http://localhost:3000/index.html should return the webpage in the index.html file
    if (url === '/' || url === '/index.html') {
      return readAndSendFile('text/html', './public/index.html', res);
    }

    // http://localhost:3000/index.css should return the text content of the file
    if (url === '/index.css') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });

      fs.readFile('./public/index.css', (err, fileContent) => {
        res.end(fileContent);
      });

      return;
    }

    // http://localhost:3000/memes and http://localhost:3000/memes/index.htm should return the webpage in the index.htm file
    if (url === '/memes' || url === '/memes/index.htm') {
      res.writeHead(200, { 'Content-Type': 'text/html' });

      fs.readFile('./public/memes/index.htm', (err, fileContent) => {
        res.end(fileContent);
      });

      return;
    }

    // http://localhost:3000/1.jpg should display the 1.jpg image
    if (url === '/1.jpg') {
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });

      fs.readFile('./public/memes/1.jpg', (err, fileContent) => {
        res.end(fileContent);
      });

      return;
    }

    // http://localhost:3000/non-existent-file.txt should return a 404 status code and a message about the file not being found
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('');
  })
  .listen(port, function () {
    console.log(`Server start at ${host}:${port}`);
  });
