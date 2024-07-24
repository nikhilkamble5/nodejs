const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const { error } = require("console");
const { type } = require("os");

const app = express();
const PORT = 8000;
//conection

mongoose
  .connect("mongodb://127.0.0.1:27017/app-1")
  .then(() => console.log("mongodb Connected !"))
  .catch((err) => console.log("mongo Error", err));
// schema
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  job_title: {
    type: String,
  },
  gender: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);

//midlleware
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("hello grom middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("hello grom middleware 2");
  next();
});
app.get("/users", (req, res) => {
  const html = `
  <ul>
  ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>
  `;
  res.send(html);
});

//Routes
//rest api
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.post("/api/users", (req, res) => {
  //Todo :Create new user
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All field are required" });
  }
  // console.log("Body",body);
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {});
  return res.status(201).json({ status: "success", id: users.length });
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) return res.status(404).json({ error: "user not found" });
    return res.json(user);
  })
  .patch((req, res) => {
    //Edit user with id
    return res.json({ status: "Pending" });
  })
  .delete((req, res) => {
    //delete  user with id
    return res.json({ status: "Pending" });
  });
// app.listen((PORT), => console.log(`Server started at:${PORT}`));

app.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}`);
});
