const mongoose = require("mongoose");
const Schema = require("../schemas/contactForm");

const create = async (schema) => {
  try {
    const document = new Schema(schema);
    const _schema = await document.save();
    return { status: 201, data: _schema };
  } catch (error) {
    return { status: 400, reason: "We have a problem try again" };
  }
};

const readAll = async () => {
  try {
    const documents = await Schema.find().exec();
    return { status: 200, data: documents };
  } catch (error) {
    return {
      status: 400,
      reason: "We have a problem try again",
    };
  }
};

const readById = async (id) => {
  try {
    const document = await Schema.findById(id).exec();
    return { status: 200, data: document };
  } catch (error) {
    return { status: 400, reason: "We have a problem try again" };
  }
};

const update = async (id, schema) => {
  try {
    const document = await Schema.findByIdAndUpdate(id, schema);
    return { status: 200, data: document };
  } catch (error) {
    return {
      status: 400,
      reason: "We have a problem try again",
    };
  }
};

const remove = async (id) => {
  try {
    const document = await Schema.findByIdAndRemove(id);
    return { status: 200, data: document };
  } catch (error) {
    return {
      status: 400,
      reason: "We have a problem try again",
    };
  }
};

module.exports = { remove, update, readAll, readById, create };
