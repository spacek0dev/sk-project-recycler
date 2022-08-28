const mongoose = require("mongoose");
const Schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    message: { type: String, required: false },
    date: { type: String, required: true },
    clientId: { type: mongoose.Schema.Types.ObjectId, required: false, ref: "users" },
    platform: { type: Boolean, required: false },
    email: { type: Boolean, required: false },
  },
  { timestamps: true }
);
module.exports = mongoose.model("ContactForms", Schema, "contactforms");
