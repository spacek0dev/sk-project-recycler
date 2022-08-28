const mongoose = require("mongoose");
const Schema = new mongoose.Schema(
  {
    firstname: { type: String, required: false },
    lastname: { type: String, required: false },
    email: { type: String, required: false },
    dni: { type: String, required: false, unique: false },
    username: { type: String, required: false, unique: true },
    phone: { type: String, required: false },
    password: { type: String, required: false },
    address: { type: String, required: false },
    terms_conditions: { type: Boolean, required: false, default: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Persons", Schema, "persons");
