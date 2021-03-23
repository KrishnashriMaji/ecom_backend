const express = require('express');
const app = express();

app.get('/krish',(req,res,next)=>{
    res.end("its first api")
})

app.post('/kr',(req,res,next)=>{
    // res.end("its first api")
    res.status('201');
    res.send("its send respone");
    res.end();
})

app.listen(4000,()=>{
    return console.log("its still  running")
})