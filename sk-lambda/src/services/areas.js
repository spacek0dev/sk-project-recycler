const mongoose = require("mongoose");
const Schema = require("../schemas/areas");
const create = async (area) => {
  try {
    const document = new Schema(area);
    const _area = await document.save();
    return { status: 201, data: document };
  } catch (error) {
    return {
      status: 400,
      reason: "We have a problem try again",
    };
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
    return {
      status: 400,
      reason: "We have a problem try again",
    };
  }
};

const update = async (id, area) => {
  try {
    const document = await this.model.findByIdAndUpdate(id, area);
    return { status: 200, data: document };
  } catch (error) {
    return {
      status: 400,
      reason: "We have a problem try again",
    };
  }
};

const deleteId = async (id) => {
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
const getAreas = async (countryId) => {
  try {
    const match = {
      $match: { countryId: new mongoose.Types.ObjectId(countryId) },
    };
    const projection = {
      $project: {
        _id: 1,
        name: 1,
        group: 1,
        parentId: 1,
        parentGroupId: 1,
        countryId: 1,
      },
    };
    const document = await Schema.aggregate([match, projection], {});
    const roots = document.filter((v) => v.group);
    roots.forEach((value) => {
      value.areas = document.filter((area) => String(area.parentGroupId) == String(value._id));
    });
    return { status: 200, data: roots.reverse() };
  } catch (error) {
    return {
      status: 400,
      reason: "We have a problem try again",
    };
  }
};
// module.exports = { getAreas, deleteId, create, update, readAll, readById };
module.exports = { getAreas, deleteId, create, update, readAll, readById };
