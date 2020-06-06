'use strict';

const http = require('http');

const url = process.argv[2]

http.get(url, response => {
    let content = '';
    
    response.setEncoding('utf-8');
    
    response.on('data', data => {
        content += data;
    });

    response.on('error', err => console.log(err));

    response.on('end', () => {
        console.log(content.length);
        console.log(content);
    })
})