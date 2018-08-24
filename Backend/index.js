const express=require('express');
const bodyParser=require('body-parser')
const cookieParser=require('cookieparser')
const pg=require('pg');
const helmet=require('helmet');

const app=express();

app.use(bodyParser.json());
app.use(cookieParser('mysecret1'));
app.use(helmet());

app.get('/',function(req,res){
    res.send('Welcome to CopyCat');
});

app.listen(3000);