'use strict';
const http = require('http');
const map = require('through2-map');
const port = process.argv[2];

let server = http.createServer((req, res) => {
    if(req.method == "POST"){
        req.pipe(map(chunk => {
            return chunk.toString().toUpperCase();
        })).pipe(res);
    }else{
        return res.end('Post method only');
    }
});

server.listen(port);