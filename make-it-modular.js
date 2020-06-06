'use strict';
const mymodule = require('./mymodule');

const dirPath = process.argv[2];
const extQuery = process.argv[3];

mymodule(dirPath, extQuery, (err, data) => {
    if(err){
        console.log(error);
        return;
    }

    data.forEach(file => {console.log(file)});
});