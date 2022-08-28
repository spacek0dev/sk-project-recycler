const mongoose = require("mongoose");
const Schema = new mongoose.Schema(
  {
    key: { type: String, required: false },
    name: { type: String, required: true },
    currency: { type: String, required: false },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Countrys", Schema, "countrys");
