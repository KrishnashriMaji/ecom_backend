const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const DB_URI = 'mongodb+srv://krishnashrimaji:Bewakoof@1995@cluster0.xihrm.mongodb.net/portfolio?retryWrites=true&w=majority';
mongoose.connect(DB_URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Mongo db is connected")
}).catch((error)=>{
    console.error(error)
})

const User = require('./api/model/User');

app.use(cors())

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())
app.get('/',(req,res,next)=>{
    res.end("its first api")
})

app.post('/add',(req,res)=>{

    let num1 = +req.body?.num1;
    let num2 = +req.body?.num2;
    console.log(`${num1} + ${num2} = ${num1+num2}`)
    res.status(200).send(`${num1+num2}`)
})

app.get('/myName',(req,res,next)=>{
    res.status(200);
    res.send({
        'name' : "Krishnashri Maji"
    })
    res.end();
})

app.post('/user',(req,res,next)=>{
    const user = new User({
        _id: new mongoose.Schema.Types.ObjectId(),
        // userName:req.body.userName,
        email:req.body.email,
        pass:req.body.pass
    });
    user
    .save()
    .then((result)=>{
        console.log(result)
        res.status(201).json({
            message:"user created",
            user:result
        })
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
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