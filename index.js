const http = require('http');

let server = http.createServer((req, res) => {

  console.log('URL:', req.url);
  console.log('URL:', req.method);

  res.end();

});

server.listen(3000, '127.0.0.1', () => {

  console.log("servidor rodando");

});