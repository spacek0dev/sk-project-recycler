const mongoose = require("mongoose");
const Schema = require("../schemas/organization");
const Utils = require("../utils");
const create = async (schema) => {
  try {
    const document = new Schema(schema);
    const _schema = await document.save();
    return { status: 201, data: _schema };
  } catch (error) {
    return { status: 400, reason: "We have a problem try again" };
  }
};

const readAll = async (page, pageSize, regex) => {
  return new Promise(async (resolve, reject) => {
    const _page = parseInt(page) || 1;
    const _pageSize = parseInt(pageSize) || 20;
    const count = await Schema.count();
    Schema.aggregate(
      [
        {
          $match: {
            $or: [{ name: { $regex: ".*" + regex + ".*", $options: "i" } }, { email: { $regex: ".*" + regex + ".*", $options: "i" } }],
          },
        },
        {
          $lookup: {
            from: "areas",
            localField: "areasId",
            foreignField: "_id",
            as: "areasId",
          },
        },
        {
          $skip: _page == 1 ? 0 : (_page - 1) * _pageSize,
        },
        {
          $limit: _pageSize,
        },
      ],
      {}
    )
      .then((result) => {
        resolve({ status: 200, data: { rows: result, count } });
      })
      .catch((err) => {
        reject({
          status: 400,
          reason: "We have a problem try again",
        });
      });
  });
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

/* Build charts Role Admin */

const getUsersByOrganization = async () => {
  try {
    const document = await Schema.aggregate(
      [
        {
          $lookup: {
            from: "users",
            localField: "_id",
            foreignField: "organizationId",
            as: "users",
          },
        },
      ],
      {}
    );
    const dataToChart = {
      config: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
      type: "bar",
      data: {
        labels: document.map((v) => v.name),
        datasets: [
          {
            data: document.map((v) => v.users.length),
            backgroundColor: document.map((v) => `#${Utils.generateRandomColor()}`),
          },
        ],
      },
    };
    return { status: 200, data: dataToChart };
  } catch (error) {
    return {
      status: 400,
      reason: "We have a problem try again",
    };
  }
};

module.exports = { remove, update, readAll, readById, create, getUsersByOrganization };
