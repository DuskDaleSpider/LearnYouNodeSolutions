'use strict';
const fs = require('fs');
const path = require('path');
const searchExt = process.argv[3];
const dirpath = process.argv[2];

fs.readdir(dirpath, (err, files) => {

    if(err){
        console.log(err);
    }

    let results = [];

    for(let i = 0; i < files.length; i++){
        if(path.extname(files[i]).slice(1) == searchExt){
            results.push(files[i]);
        }
    }

    for(let i = 0; i < results.length; i++){
        console.log(results[i]);
    }

});