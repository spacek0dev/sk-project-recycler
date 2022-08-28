const mongoose = require("mongoose");
const Schema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    slug: { type: String, required: false },
    organizationId: { type: mongoose.Schema.Types.ObjectId, required: false, ref: "organizations" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("OrganizationForm", Schema, "organizationform");
