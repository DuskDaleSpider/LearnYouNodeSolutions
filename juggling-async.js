'use strict';
const http = require('http');

let urls = process.argv.slice(2);
let numUrls = urls.length;
let finishedContent = Array(numUrls).fill(null);

/*
=================
 Old Solution
=================

for(let i = 0; i < numUrls; i++) {
    http.get(urls[i], response => {
        response.setEncoding('utf-8');
        let content = '';
        response.on('data', data => {
            content += data;
        });
        response.on('error', err => console.log(err));
        response.on('end', () => {
            finishedContent[i] = content;

            if(!finishedContent.includes(null)){
                finishedContent.forEach(fin => console.log(fin));
            }
            
        });
    });
}

*/

/*
===========
Modified after seeing official (juggling-async-official.js)
===========
*/
function printResults(){
    finishedContent.forEach(x => console.log(x));
}

function httpGet(index){
    http.get(urls[index], response => {
        response.setEncoding('utf-8');
        let content = '';
        
        response.on('error', err => console.log(err));
        
        response.on('data', data => {
            content += data;
        });
        
        response.on('end', () => {
            finishedContent[index] = content;

            if(!finishedContent.includes(null)){
                printResults();
            }
            
        });
    });
}

for(let i = 0; i < numUrls; i++){
    httpGet(i);
}

