'use strict'
const fs = require('fs');

const filePath = process.argv[2];

let fileInput = fs.readFileSync(filePath);

let numLines = fileInput.toString().split('\n').length - 1;

console.log(numLines);