const express=require('express')
const path=require('path')
const app=express()
const mongoose = require('mongoose');
//adding public folder to path
app.use(express.static(path.join(__dirname,'public')))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/html/dashboard.html')
});
app.get('/details',(req,res)=>{
    res.sendFile(__dirname+'/public/html/customerdetails.html')
});
app.listen(3000,()=>console.log('Listening....on 3000'));
//connecting to the mongo DB
//const MongoClient = require('mongodb').MongoClient;
const uri ='mongodb+srv://Prem:pavan123@cluster0.dfmdd.mongodb.net/clust?retryWrites=true&w=majorityy';

mongoose.connect(uri,{useNewUrlParser: true},(err)=>{
    if(!err)
    console.log("Connected..")
    else
    console.log("err",err)
    

});
