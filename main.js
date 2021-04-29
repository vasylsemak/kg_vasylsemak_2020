const converter = require('number-to-words');

let x = converter.toWords(13); // => “thirteen”
const commandLineArgs = process.argv.slice(2);

console.log(x, commandLineArgs);
