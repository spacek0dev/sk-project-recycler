const mongoose = require("mongoose");
const person = require("./person");
const Schema = new mongoose.Schema(
  {
    enabled: { type: Boolean, required: false, default: true },
    organizationId: { type: mongoose.Schema.Types.ObjectId, required: false, ref: "organizations" },
    personId: { type: mongoose.Schema.Types.ObjectId, required: false, ref: "persons" },
    roleId: { type: mongoose.Schema.Types.ObjectId, required: false, ref: "roles" },
    areasId: { type: mongoose.Schema.Types.ObjectId, required: false, ref: "areas" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Users", Schema, "users");
