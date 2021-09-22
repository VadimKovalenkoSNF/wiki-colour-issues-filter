const http = require('http');
const fs = require('fs');
// const domino = require('domino');

const PORT = 8000;

fs.readFile('./sample_1.htm', (err, html) => {

    if (err) throw err;  

    // This does not work with the 'domino' package
    /*
    const window = domino.createWindow(html.toString());
    const document = window.document;
    
    const walker = document.createTreeWalker(document.body);

    while (walker.nextNode()) {
        if (walker.currentNode && walker.currentNode.nodeType === 1) {
            if (
                window.getComputedStyle(walker.currentNode).backgroundColor ===
                window.getComputedStyle(walker.currentNode).color
            ) {
                // Highlight element with wrong styles
                walker.currentNode.style.border = '2px solid red';
            }
        }
    }
    */

    http.createServer((request, response) => {  
        response.writeHeader(200, {"Content-Type": "text/html"});
        // Uncomment this if want to test response html from 'domino' package
        //response.write(document.outerHTML);
        response.write(html);  
        response.end();  
    }).listen(PORT, () => {
        console.log('server listened on port', PORT);
    });

});
