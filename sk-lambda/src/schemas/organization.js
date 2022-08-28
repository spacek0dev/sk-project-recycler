const mongoose = require("mongoose");
const Schema = new mongoose.Schema(
  {
    ubication: {},
    name: { type: String, required: true },
    email: { type: String, required: false },
    phone: { type: String, required: false },
    address: { type: String, required: false },
    logo: { type: String, required: false },
    extras: { type: String, required: false },
    images: { type: String, required: false },
    areasId: { type: mongoose.Schema.Types.ObjectId, required: false, ref: "areas" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Organizations", Schema, "organizations");
