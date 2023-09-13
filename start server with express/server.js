// const http = require('http');
const express = require('express')
const api = express();

// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'});
//     res.write(req.url) 
//     res.write("<h1>Hello from SK DigiTech.<h1/>");

    api.get('/home',(req,res)=>{
    res.send('home page')
    })
    api.get('/about',(req,res)=>{
    res.send('about page')
    })
    api.get('/cont',(req,res)=>{
    res.send('cont page')
    })
// })

api.listen(30001 , ()=>{
    console.log('server is running 30001');
})