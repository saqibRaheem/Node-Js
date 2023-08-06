const http = require("http")
const fs = require('fs')
const PORT = 3000
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.write(req.url) 
    res.write("<h1>Hello from SK DigiTech.<h1/>");
    // create file system
    fs.writeFile('myTextFile.txt','" This is my assignment for SK Digi Tech ',(err)=>{
   console.log('saved!');

   //update my text 
   fs.appendFile('myTextFile.txt',' I enjoyed working on this assignment" ',(err)=>{
    console.log('updated!');

    // Read text file
    fs.readFile('myTextFile.txt' , 'utf-8', (err,data)=>{
      res.write(data)
      console.log(data);
    })
   })
    })

}).listen(PORT, ()=>{
   
    console.log('server is running on ' , PORT );
    
});