const mongoose = require("mongoose");
const Schema = new mongoose.Schema(
  {
    key: { type: String, required: false },
    name: { type: String, required: true },
    group: { type: Boolean },
    parentId: { type: mongoose.Schema.Types.ObjectId, required: false, ref: "Areas" },
    parentGroupId: { type: mongoose.Schema.Types.ObjectId, required: false, ref: "Areas" },
    countryId: { type: mongoose.Schema.Types.ObjectId, required: false, ref: "Countrys" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Areas", Schema, "areas");
