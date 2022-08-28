const mongoose = require("mongoose");
const Schema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    type: { type: String, required: false, default: "text" },
    formId: { type: mongoose.Schema.Types.ObjectId, required: false, ref: "organizationform" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("OrganizationFormQuestions", Schema, "organizationformquestions");
