const mongoose = require("mongoose");
const Schema = require("../schemas/user");
const getAllUsers = async (page, pageSize, organizationId, regex) => {
  const _page = parseInt(page) || 1;
  const _pageSize = parseInt(pageSize) || 20;
  try {
    const count = await Schema.count();
    const document = organizationId ? await usersByOrganization(_page, _pageSize, organizationId, regex) : await usersAggregate(_page, _pageSize, regex);
    return { status: 200, data: { rows: document, count } };
  } catch (error) {
    return {
      status: 400,
      reason: "We have a problem try again",
    };
  }
};

const usersByOrganization = (page, pageSize, organizationId, regex) => {
  const lookupPerson = { $lookup: { from: "persons", localField: "personId", foreignField: "_id", as: "personId" } };
  const unwindPerson = { $unwind: { path: "$personId", preserveNullAndEmptyArrays: true } };
  const lookupOrganization = { $lookup: { from: "organizations", localField: "organizationId", foreignField: "_id", as: "organizationId" } };
  const unwindOrganization = { $unwind: { path: "$organizationId", preserveNullAndEmptyArrays: true } };
  const lookupAreas = { $lookup: { from: "areas", localField: "areasId", foreignField: "_id", as: "areasId" } };
  const unwindAreas = { $unwind: { path: "$areasId", preserveNullAndEmptyArrays: true } };
  const lookupRole = { $lookup: { from: "roles", localField: "roleId", foreignField: "_id", as: "roleId" } };
  const unwindRole = { $unwind: { path: "$roleId", preserveNullAndEmptyArrays: true } };
  return new Promise((resolve, reject) => {
    Schema.aggregate(
      [
        {
          $match: mongoose.Types.ObjectId(organizationId),
        },
        lookupPerson,
        unwindPerson,
        {
          $match: {
            $or: [
              { "personId.firstname": { $regex: ".*" + regex + ".*", $options: "i" } },
              { "personId.lastname": { $regex: ".*" + regex + ".*", $options: "i" } },
              { "personId.email": { $regex: ".*" + regex + ".*", $options: "i" } },
            ],
          },
        },
        lookupOrganization,
        unwindOrganization,
        lookupAreas,
        unwindAreas,
        lookupRole,
        unwindRole,
        {
          $skip: page == 1 ? 0 : (page - 1) * pageSize,
        },
        {
          $limit: pageSize,
        },
      ],
      {}
    )
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const usersAggregate = (page, pageSize, regex) => {
  const lookupPerson = { $lookup: { from: "persons", localField: "personId", foreignField: "_id", as: "personId" } };
  const unwindPerson = { $unwind: { path: "$personId", preserveNullAndEmptyArrays: true } };
  const lookupOrganization = { $lookup: { from: "organizations", localField: "organizationId", foreignField: "_id", as: "organizationId" } };
  const unwindOrganization = { $unwind: { path: "$organizationId", preserveNullAndEmptyArrays: true } };
  const lookupAreas = { $lookup: { from: "areas", localField: "areasId", foreignField: "_id", as: "areasId" } };
  const unwindAreas = { $unwind: { path: "$areasId", preserveNullAndEmptyArrays: true } };
  const lookupRole = { $lookup: { from: "roles", localField: "roleId", foreignField: "_id", as: "roleId" } };
  const unwindRole = { $unwind: { path: "$roleId", preserveNullAndEmptyArrays: true } };
  return new Promise((resolve, reject) => {
    Schema.aggregate(
      [
        lookupPerson,
        unwindPerson,
        {
          $match: {
            $or: [
              { "personId.firstname": { $regex: ".*" + regex + ".*", $options: "i" } },
              { "personId.lastname": { $regex: ".*" + regex + ".*", $options: "i" } },
              { "personId.email": { $regex: ".*" + regex + ".*", $options: "i" } },
            ],
          },
        },
        lookupOrganization,
        unwindOrganization,
        lookupAreas,
        unwindAreas,
        lookupRole,
        unwindRole,
        {
          $skip: page == 1 ? 0 : (page - 1) * pageSize,
        },
        {
          $limit: pageSize,
        },
      ],
      {}
    )
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
module.exports = { getAllUsers };
