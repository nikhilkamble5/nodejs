const route= require('express').Router();


route.get('/',(req,res)=>{


  res.send("ur in home of  user blog");

})

route.post('/insert',(req,res)=>{
  const data=req.body;
  res.send(data);
})

module.exports=route;
