import fs from 'node:fs';
import http from 'node:http';

const folder = './public';
const port = 3000;

// import { html } from './public/memes/index.html';

// createServer(function (req, res) {
//   console.log(req.url);
//   res.write('Hello World!');
//   res.end();
// }).listen(3000, function () {
//   console.log('server start at port 3000');
// });

// http
//   .createServer(function (req, res) {
//     console.log(req.url);
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>Hello World!<h1>');
//     res.end();
//   })
//   .listen(3000, function () {
//     console.log('server start at port 3000');
//   });

// http
//   .createServer(function (req, res) {
//     fs.readFile(folder, function (err, data) {
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       const url = req.url;
//       if (url === '/index.html') {
//         res.write('<h1>hello</h1>');
//         res.end();
//       } else {
//         console.log(err);
//       }
//     });
//   })
//   .listen(port, function () {
//     console.log('server start at port 3000');
//   });

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const url = req.url;
    if (url === '/index.html') {
      res.write('<h1>index.html<h1>');
      res.end();
    } else {
      res.write('<h1>Hello World!<h1>');
      res.end();
    }
  })
  .listen(3000, function () {
    console.log('server start at port 3000');
  });
