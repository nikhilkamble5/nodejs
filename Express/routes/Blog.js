const route= require('express').Router();


route.get('/',(req,res)=>{


  res.send("ur in home of blog route");

})

route.get('/:id',(req,res)=>{
    let id= req.params.id;
  res.send(id);
})

module.exports=route;
