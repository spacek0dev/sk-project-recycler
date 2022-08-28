const express = require("express");
const controllers = require("../controllers/organizationFormQuestions");
const routes = express.Router();
routes.post("/organization-form-questions", [], controllers.createDocument);
module.exports = routes;
