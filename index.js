import fs from 'node:fs';
import http from 'node:http';

const port = 3000;
const host = 'localhost';

// function read and send the file
const readAndSendFile = (contentType, path, res) => {
  // Set the type
  res.writeHead(200, { 'Content-Type': contentType });

  // const html = `<!DOCTYPE html>
  // <html lang="en">
  //   <head>
  //     <meta charset="UTF-8" />
  //     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //     <title>Web Server</title>
  //     <style>
  //       h1 {color: red}
  //     </style>
  //   </head>

  //   <body>
  //     <h1>Web Server</h1>
  //   </body>
  // </html>`;
  // res.end(html);

  // Read the file
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
    // Type - set plain -> gives
    if (url === '/index.css') {
      return readAndSendFile('text/css', './public/index.css', res);
    }

    // http://localhost:3000/memes and http://localhost:3000/memes/index.htm should return the webpage in the index.htm file
    if (url === '/memes' || url === '/memes/index.htm') {
      return readAndSendFile('text/html', './public/memes/index.htm', res);
    }

    // http://localhost:3000/1.jpg should display the 1.jpg image
    if (url === '/1.jpg') {
      return readAndSendFile('image/jpeg', './public/memes/1.jpg', res);
    }

    // Not found
    // http://localhost:3000/non-existent-file.txt should return a 404 status code and a message about the file not being found
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('');
  })
  .listen(port, function () {
    console.log(`Server start at ${host}:${port}`);
  });
