const express=require('express');
const app=express();

app.get('/',(req,res)=>{

  res.send("<h1>you are in home route</h1>")
})

app.get('/about',(req,res)=>{
  res.status(200).send("you are in about route")
})

app.get('/api/student',(req,res)=>{
  res.json([{name:"shreyas",class:"msc"},{name:"rahul",class:"bsc"}])
})
app.listen(5000);

