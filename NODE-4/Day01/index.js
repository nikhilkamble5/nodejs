// const math = require("./arth");

// console.log('Addition is ',math.addition(5, 4));
// console.log('subtraction ',math.subtraction(8, 2));

//core module
//fs module🔥
// const fs = require("fs");

// fs.writeFileSync("./new.txt", "hello this is john cena here");
// fs.readFile("sample.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(data);
//   }
// });

// 🔥 http module

// const http = require("http");
// const PORT = 4000;

// const server = http.createServer((re, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("hello world");
// });

// server.listen(PORT, () => {
//   console.log(`server is runnig on ${PORT} Port`);
// });

//********************************************** */

//🔥express

//crud - create read update delete

const express = require("express");
const PORT = 4000;

const app = express();

app.get("/", (req, res) => {
  res.send("hellow word,hello everyone");
});

app.get("/users", (req, res) => {
  //a code which will show list of all users
  res.send("List of all useers");
});

app.post("/users/:id", (req, res) => {
  //a code which will create user and store it in db
  res.send("user succesfully created");
});

app.put("/users/:id", (req, res) => {
  //a code which will update the user and stor it in db

  res.send("user updated sucessfully");
});

app.delete("/users/id", (req, res) => {
  res.send("useer delete sucessfully");
});
app.listen(PORT, () => {
  console.log(`server is runnig on ${PORT} port`);
});
