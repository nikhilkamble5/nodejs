const route = require("express").Router();
const Blogs = require("../Model/Blog");

route.get("/", async (req, res) => {
  try {
    const data = await Blogs.find();
    res.send(data);
  } catch (err) {
    console.log(err);
  }

  // res.send("ur in home of blog route");
});

route.get("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const data = await Blogs.findById(id);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

// Get blog by slug
route.get("/slug/:slug", async (req, res) => {
  let slug1 = req.params.slug;
  try {
    const data = await Blogs.findOne({ slug: slug1 });
    if (data) {
      res.json(data);
    } else {
      res.status(404).send("Blog not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

route.put("/update/:id", async (req, res) => {
  try {
    let id = req.params.id;

    const data = await Blogs.findByIdAndUpdate(id, req.body, { new: true });
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

route.delete("/delete/:id", async (req, res) => {
  try {
    let id = req.params.id;

    await Blogs.findByIdAndDelete(id);
    res.json("data deleted siccefully .....!!!");
  } catch (err) {
    res.status(404).send(err);
    // console.log(err);
  }
});

route.delete("/deleteByName/:name", async (req, res) => {
  try {
    let name = req.params.name;

    await Blogs.findOneAndDelete({ title: name });
    res.json("data deleted siccefully .....!!!");
  } catch (err) {
    res.status(404).send(err);
    // console.log(err);
  }
});

route.post("/insert", async (req, res) => {
  try {
    const blog = new Blogs(req.body);
    let data = await blog.save();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});
module.exports = route;
