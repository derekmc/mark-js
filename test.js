
let fs = require('fs');
let mark = require('./mark.js');

const FILE = './example.md'


let text = '' + fs.readFileSync(FILE);

test();

function test(){
    console.log(mark(text));
}
