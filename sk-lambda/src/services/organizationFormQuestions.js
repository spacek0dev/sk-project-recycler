const mongoose = require("mongoose");
const Schema = require("../schemas/organizationFormQuestions");

const create = async (schema) => {
  try {
    const document = new Schema(schema);
    const _schema = await document.save();
    return { status: 201, data: _schema };
  } catch (error) {
    return { status: 400, reason: "We have a problem try again" };
  }
};

module.exports = { create };
