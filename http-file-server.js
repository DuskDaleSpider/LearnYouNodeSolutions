'use strict';
const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer((request, response) => {
    let readStream = fs.createReadStream(filePath);
    response.writeHead(200, {'Content-Type': 'text/plain'});

    readStream.pipe(response);
});

server.listen(port);
