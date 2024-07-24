
const fs= require('fs')
const os=require('os');
console.log(os.cpus().length);
//sync
// fs.writeFileSync('./test.txt', "hello")


//asynchrous


// fs.writeFile('./test.txt',"hey Async ",(err)=>{

// })


//synchronus   blockin request

// const result=fs.readFileSync('./contacts.txt',"utf-8");
// console.log(result);


//asynchronus non -Blocking request

// fs.readFile("./contacts.txt", "utf-8", (err,result)=>{
//   if(err){
//     console.log("Eror" ,err);
//   }
//   else{
//     console.log(result);
//   }
// })


// fs.appendFileSync(',/contacts.txt')



console.log('1');


// Blocking 

// const result=fs.readFileSync("contacts.txt" ,"utf-8")
//   console.log(result);

//non - blocking ...

fs.readFile("contacts.txt" ,"utf-8", (err,result)=>{
  console.log(result);
})

console.log("2");