const { encryptPassword, validatePassword } = require("../utils/auth");
const { createJwt, decodeJwt } = require("../utils/jwt");
const mongoose = require("mongoose");
const person = require("../schemas/person");
const user = require("../schemas/user");
const role = require("../schemas/role");
const organization = require("../schemas/organization");
const login = async (auth) => {
  const existUser = await person.findOne({
    username: auth.username,
  });
  if (existUser) {
    const validate = await validatePassword(auth.password, existUser.password);
    if (validate) {
      const _user = await user.findOne({ personId: mongoose.Types.ObjectId(existUser._id) });
      return { status: 200, access_token: createJwt(_user) };
    } else {
      return { status: 400, reason: "Password incorrect" };
    }
  } else {
    return { status: 404, reason: "User not found" };
  }
};
const register = async (auth) => {
  auth.person.password = await encryptPassword(auth.person.password);
  const existUser = await person.findOne({ username: auth.person.username }).exec();
  if (existUser)
    return {
      status: 409,
      reason: "The username alreay used",
    };
  const _person = new person(auth.person);
  if (!_person)
    return {
      status: 400,
      reason: "We have a problem try again",
    };
  const _user = new user({
    roleId: auth.roleId,
    personId: _person._id,
    areasId: auth.areasId,
    organizationId: auth.organizationId ? auth.organizationId : null,
  });
  if (!_user)
    return {
      status: 400,
      reason: "We have a problem try again",
    };
  await _person.save();
  await _user.save();
  return { status: 201, data: _user };
};
const registerWithOrganization = async (body) => {
  const auth = body.user;
  const organizationData = body.organization;
  auth.person.password = await encryptPassword(auth.person.password);
  const existUser = await person.findOne({ username: auth.person.username }).exec();
  if (existUser)
    return {
      status: 409,
      reason: "The username alreay used",
    };
  const _organization = new organization(organizationData);
  if (!_organization)
    return {
      status: 400,
      reason: "We have a problem try again",
    };
  const _person = new person(auth.person);
  if (!_person)
    return {
      status: 400,
      reason: "We have a problem try again",
    };
  const _user = new user({
    roleId: auth.roleId,
    personId: _person._id,
    organizationId: _organization._id,
  });
  if (!_user)
    return {
      status: 400,
      reason: "We have a problem try again",
    };
  await _person.save();
  await _organization.save();
  await _user.save();
  return { status: 201, data: _user };
};
const getUserInformation = async (userId) => {
  return new Promise((resolve, reject) => {
    const match = {
      $match: { _id: mongoose.Types.ObjectId(userId) },
    };
    const lookupPerson = { $lookup: { from: "persons", localField: "personId", foreignField: "_id", as: "personId" } };
    const unwindPerson = { $unwind: { path: "$personId", preserveNullAndEmptyArrays: true } };
    const lookupOrganization = { $lookup: { from: "organizations", localField: "organizationId", foreignField: "_id", as: "organizationId" } };
    const unwindOrganization = { $unwind: { path: "$organizationId", preserveNullAndEmptyArrays: true } };
    const lookupAreas = { $lookup: { from: "areas", localField: "areasId", foreignField: "_id", as: "areasId" } };
    const unwindAreas = { $unwind: { path: "$areasId", preserveNullAndEmptyArrays: true } };
    const lookupRole = { $lookup: { from: "roles", localField: "roleId", foreignField: "_id", as: "roleId" } };
    const unwindRole = { $unwind: { path: "$roleId", preserveNullAndEmptyArrays: true } };
    user
      .aggregate([match, lookupPerson, unwindPerson, lookupOrganization, unwindOrganization, lookupAreas, unwindAreas, lookupRole, unwindRole], {})
      .then((v) => {
        resolve({ status: 200, data: v[0] ?? {} });
      })
      .catch((err) => {
        reject({ status: 400, reason: "We have a problem try again" });
      });
  });
};

module.exports = { login, register, registerWithOrganization, getUserInformation };
