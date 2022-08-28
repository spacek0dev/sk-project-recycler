const mongoose = require("mongoose");
const Schema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    slug: { type: String, required: false },
    title: { type: String, required: true },
    description: { type: String, required: false },
    isLearn: { type: Boolean, required: false },
    status: { type: Boolean, required: false },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Banners", Schema, "banners");
