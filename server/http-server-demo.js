const http = require('http');

const server1 = http.createServer((req,res)=>{
    res.end("Hello world fro server1");
});

// const server2 = http.createServer((req,res)=>{
//     res.end("Hello world fro server2");
// });

server1.listen(3000);
// server2.listen(3001);