
//Bauen eines Webservers, um mit node js zu arbeiten

const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(json => console.log(json))




