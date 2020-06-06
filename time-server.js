'use strict';
const net = require('net');
const port = process.argv[2];

function zeroFill(item) {
    if (item < 10) 
        return '0' + item;
    else 
        return item;
}

const server = net.createServer(socket => {
    //build date string
    let date = new Date();
    let fullYear = date.getFullYear();
    let month = zeroFill(date.getMonth() + 1);
    let day = zeroFill(date.getDate());
    let hours = zeroFill(date.getHours());
    let mins  = zeroFill(date.getMinutes());
    
    let result = `${fullYear}-${month}-${day} ${hours}:${mins}\n`;

    socket.end(result);
});

server.listen(port);