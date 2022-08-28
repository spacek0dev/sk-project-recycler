"use strict";
const app = require("./configs/server");
const awsServerlessExpress = require("aws-serverless-express");
const { StartConnection } = require("./configs/database");
module.exports.server = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const database = await StartConnection();
  const server = awsServerlessExpress.createServer(app);
  return awsServerlessExpress.proxy(server, event, context, "PROMISE").promise;
};
