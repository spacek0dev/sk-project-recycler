const mongoose = require("mongoose");
const Schema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    key: { type: String, required: false },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Roles", Schema, "roles");
