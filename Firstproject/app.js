
// // let { add, sub ,name} = require("./Add");
// // add(5, 3);
// // sub(8, 4);
// // console.log(name);
// // console.log("hello");

// //fs file system
// const { log } = require('console');
// let fs=require('fs');

// //👇asynchronus

// // fs.readFile("abc.txt","utf8",(err,data)=>{

// //   if(err) console.log(err);
// //   console.log(data);
// // })

// //👇synchronus
// //++++++++++++++++++++++++++++++++++++++++++++++++++

// // // fs.writeFileSync("abc.txt","this is writing from  node js",()=>{})
// //   let data=fs.readFileSync("abc.txt");
// //   console.log("data",data.toString());
  
  
//   // console.log("this has to print last");


//   //++++++++++++++++++++++++++++++++++++++


//   fs.writeFile("abc.txt","this is writing from  node js2",()=>{})

// fs.readFile("abc.txt","utf8",(err,data)=>{
//   console.log(data);

// });


// console.log("this has to print last");


let fs=require('fs');
let http= require('http');

let server=http.createServer((req,res)=>{

  fs.readFile('index.html','utf8',(err,data)=>{
    res.write(data);

    return res.end();
  })
  // res.write("<h1>Hello</h1>");
  // res.end();
})


server.listen(5000,()=>{
  console.log(" i am listening on port 5000");
})