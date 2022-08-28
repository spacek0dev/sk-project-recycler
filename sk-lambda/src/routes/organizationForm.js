const express = require("express");
const controllers = require("../controllers/organizationForm");
const routes = express.Router();
routes.post("/organization-form", [], controllers.createDocument);
module.exports = routes;
