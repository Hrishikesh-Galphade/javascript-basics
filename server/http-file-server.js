const fs = require('fs');
const http = require('http');

const server = http.createServer((request, response) => {
    console.log("My directory:" + __dirname);
    console.log(request.url);
    // const requestUrl = request.url.replace("/","");
    // console.log(requestUrl);

    // if(request.url.includes("index.html")){
    //     fs.readFile("./html/index.html",(error,data)=>{
    //     response.writeHead(200,{'Content-Type': 'text/html'});
    //     response.end(data);
    // })
    // }
    // else{
    //     response.writeHead(404,{'Content-Type': 'text/plain'})
    //     response.end("File Not found");
    // }

    if (request.url == '/') {
        fs.readFile("./html/index.html", (error, data) => {
            if (error) {
                response.writeHead(404, { 'Content-Type': 'text/plain' })
                response.end(error.message);
            }
            else {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(data);
            }
        });
    }
    else {

        fs.readFile("./html" + request.url, (error, data) => {
            if (error) {
                response.writeHead(404, { 'Content-Type': 'text/plain' })//Mime types
                response.end(error.message);
            }
            else {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(data);
            }
        });
    }


});

server.listen(3000);



