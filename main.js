
let fs = require('fs');


let text = '' + fs.readFileSync('./test.md');
let md_subs = [
    /(\n|^)# (.*)/g, "\n<h1>$2</h1>",
    /(\n|^)## (.*)/g, "\n<h2>$2</h2>",
    /(\n|^)### (.*)/g, "\n<h3>$2</h3>",
    /(\n|^)#### (.*)/g, "\n<h4>$2</h4>",
    /(\n|^)##### (.*)/g, "\n<h5>$2</h5>",
    /(\n|^)###### (.*)/g, "\n<h6>$2</h6>",
    /__([^_\n]*)__/g, "<b>$1</b>",
    /\*\*([^_\n]*)\*\*/g, "<b>$1</b>",
    /_([^_\n]*)_/g, "<i>$1</i>",
    /\*([^_\n]*)\*/g, "<i>$1</i>",
];

main();

function main(){
    for(let i=0; i<md_subs.length-1; i += 2){
        let search = md_subs[i];
        let replace = md_subs[i+1];
        text = text.replace(search, replace); }
    console.log("Text: ", text);
}
