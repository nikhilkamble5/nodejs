const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: String,
  content: { type: String, required: true },
  Likes: { type: Number },

  CreatedAt: { type: Date, required: true, default: Date.now() },
});

module.exports = mongoose.model("Blog", blogSchema);
