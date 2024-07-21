// const express=require('express');
// const app=express();

// const User=require('./routes/User');
// const Blog=require('./routes/Blog');
// const mongoose=require('mongoose');

// app.use(express.json());
// // app.get('/',(req,res)=>{

// //   res.send("<h1>you are in home route</h1>")
// // })

// // app.get('/about',(req,res)=>{
// //   res.status(200).send("you are in about route")
// // })

// // app.get('/api/student',(req,res)=>{
// //   res.json([{name:"shreyas",class:"msc"},{name:"rahul",class:"bsc"}])
// // })


// // app.post('/blog/insert',(req,res)=>{
// //   const data= req.body;
// //   res.json(data)
// // })

// // app.get('/blog/:name',(req,res)=>{
// //   const id=req.params.name;
// //   res.send(id);
// // })

// // mongoose.connect('mongodb://localhost:27017/Blog_Demo',()=>{
// //   console.log("db connect ...!!!!");
// // });

// app.use('/blog',Blog)
// app.use('/user',User)
// app.listen(5000);



const express = require('express');
const app = express();

const User = require('./routes/User');
const Blog = require('./routes/Blog');
const mongoose = require('mongoose');

app.use(express.json());

// Connect to MongoDB using .then()
mongoose.connect('mongodb://localhost:27017/Blog_Demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(error => console.error('Error connecting to MongoDB:', error.message));

app.use('/blog', Blog);
app.use('/user', User);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
