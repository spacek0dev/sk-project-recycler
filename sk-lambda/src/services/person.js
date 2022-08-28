const mongoose = require("mongoose");
const Schema = require("../schemas/person");
const update = async (id, person) => {
  try {
    const document = await Schema.findByIdAndUpdate(id, person);
    return { status: 200, data: document };
  } catch (error) {
    return {
      status: 400,
      reason: "We have a problem try again",
    };
  }
};

module.exports = { update };
