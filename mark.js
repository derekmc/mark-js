

(function(main){
    var is_browser = (typeof module === "undefined");
    var assign = is_browser? function(x){ window.markjs = x; } :
                             function(x){ module.exports = x; };
    main(assign, is_browser);
})(function(assign, is_browser){
    var md_subs = [
        /\n(\s*)[\*\-](.*)/g, '\n<ul><li>$2</li></ul>',
        /\n+\n(?=[^#\n])/g, "\n\n<br><br>",
        /\n+\n/g, "\n",
        /(\n|^)# (.*)/g, "\n<h1 id=\"$2\">$2</h1>",
        /(\n|^)## (.*)/g, "\n<h2 id=\"$2\">$2</h2>",
        /(\n|^)### (.*)/g, "\n<h3 id=\"$2\">$2</h3>",
        /(\n|^)#### (.*)/g, "\n<h4 id=\"$2\">$2</h4>",
        /(\n|^)##### (.*)/g, "\n<h5 id=\"$2\">$2</h5>",
        /(\n|^)###### (.*)/g, "\n<h6 id=\"$2\">$2</h6>",
        /__([^_\n]*)__/g, "<b>$1</b>",
        /\*\*([^_\n]*)\*\*/g, "<b>$1</b>",
        /_([^_\n]*)_/g, "<i>$1</i>",
        /\*([^_\n]*)\*/g, "<i>$1</i>",
        /\[([^\]\n]*)\]\(([^\)\n]*)\)/g, "<a href=\"$2\">$1</a>",
    ];

    assign(markdown);
    if(is_browser){
        window.addEventListener("load", browser_init); }


    function markdown(text){
        for(var i=0; i<md_subs.length-1; i += 2){
            var search = md_subs[i];
            var replace = md_subs[i+1];
            text = text.replace(search, replace); }
        return text;
    }

    function browser_init(){
        var elems = document.getElementsByClassName("markdown-text");
        for(var i=0; i<elems.length; ++i){
            var elem = elems[i];
            elem.innerHTML = markdown(elem.innerHTML);
        }
    }
})
