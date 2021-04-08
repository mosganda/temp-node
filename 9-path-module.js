const path = require('path');
//sep is a platform specific seperator
console.log(path.sep);
const filePath = path.join('/content/','subfolder','text.txt');
console.log(filePath);
//get the base name
const base = path.basename(filePath);
console.log(base);
const absolute = path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute);