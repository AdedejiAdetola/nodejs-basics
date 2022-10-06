const http = require('http');
const fs = require('fs');
const routes = require('./routes')

const server = http.createServer(routes);

server.listen(8000); //my server is at localhost 8000, I send the http request (to access a website) to my server at localhost 8000