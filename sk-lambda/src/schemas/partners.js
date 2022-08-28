const mongoose = require("mongoose");
const Schema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    email: { type: String, required: false },
    phone: { type: String, required: false },
    address: { type: String, required: false },
    logo: { type: Boolean, required: false },
    organizationId: { type: mongoose.Schema.Types.ObjectId, required: false, ref: "organizations" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Partners", Schema, "partners");
