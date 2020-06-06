'use strict';
const fs = require('fs');
const path = require('path');

module.exports = function(dirPath, query, callback){
    fs.readdir(dirPath, (err, files) => {
        if(err) { return callback(err); }

        let results = [];

        for(let i = 0; i < files.length; i++){
            if(path.extname(files[i]).slice(1) === query){
                results.push(files[i]);
            }
        }

        return callback(null, results);
    })
}