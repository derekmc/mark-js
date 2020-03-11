
let fs = require('fs');
let mark = require('./mark.js');


let text = '' + fs.readFileSync('./test.md');

test();

function test(){
    console.log(mark(text));
}
