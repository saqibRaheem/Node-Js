const express = require('express');
const app  = express();
const PORT = 3000
const route = require('./router')


app.use('/',route )


app.listen(PORT,()=>{
    console.log('server is running on' , PORT);
})