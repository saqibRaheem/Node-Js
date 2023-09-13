const express = require("express");
const app = express();
const path = require('path')
const PORT = 5000;
require('./middleWare/mongoConnection')
const route = require('./routes/userRoute')


app.use(express.json())
app.use(express.static(path.resolve(path.join(__dirname,"public"))))
app.use(route)




app.listen(PORT, ()=>{
    console.log("server is running on" , PORT);
})