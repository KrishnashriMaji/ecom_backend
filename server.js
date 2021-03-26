const express = require('express');
const app = express();

app.get('/',(req,res,next)=>{
    res.end("its first api")
})

app.get('/myName',(req,res,next)=>{
    res.status(200);
    res.send({
        'name' : "Krishnashri Maji"
    })
    res.end();
})

app.post('/kr',(req,res,next)=>{
    // res.end("its first api")
    res.status('201');
    res.send("its send respone");
    res.end();
})

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    return console.log("its still  running")
})