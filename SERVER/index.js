// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// const myserver = http.createServer((req, res) => {
//   if (req.url === "/favicon.ico") return res.end();

//   const log = `${Date.now()} :${req.method} ${req.url} New Req Recived\n`;
//   const log = `${Date.now()} :${req.method} ${req.url} New Req Recived\n`;

//   const myUrl = url.parse(req.url,true);
//   // console.log(myUrl);
//   fs.appendFile("log.txt", log, (err, data) => {
//     switch (myUrl.pathname) {
//       case "/":
//         res.end("Home page");

//         break;
//       case "/about":
//         const username=myUrl.query.myname;
//         res.end(`hi`, ${username});
//         break;
//         case "/search":
//           res.end("here are your result for "+ search);
//       default:
//         res.end("404 not fount");
//     }
//     // res.end("hello from server");
//   });
//   // console.log("new req rec.");
// });

// myserver.listen(8000, () => console.log("Server started !"));



const http = require("http");
// const fs = require("fs");
// const url = require("url");

const express= require('express');
const app=express();

app.get("/" ,(req,res)=>{
  return res.send("Hello From Home page");
});

app.get("/about" ,(req,res)=>{
  return res.send("Hello From About page");
});


// const myserver = http.createServer((req, res) => {
//   if (req.url === "/favicon.ico") return res.end();

//   const log = `${Date.now()} :${req.method} ${req.url} New Req Recived\n`;

//   const myUrl = url.parse(req.url, true);
  
//   fs.appendFile("log.txt", log, (err) => {
//     if (err) {
//       console.error("Failed to write to log.txt", err);
//       res.end("Internal Server Error");
//       return;
//     }

//     switch (myUrl.pathname) {
//       case "/":
//         if(req.method === 'GET' )
//         res.end("Home page");
//         break;
//       case "/about":
//         const username = myUrl.query.myname;  // No default value added here
//         res.end(`Hi, ${username}`);
//         break;
//         case "search":
//           const search= myUrl.query.search_query;
//           res.end("Here are ur result "+ search)
//       default:
//         res.end("404 not found");
//     }
//   });
// });

const myserver=http.createServer(app);
myserver.listen(8000, () => console.log("Server started!"));
