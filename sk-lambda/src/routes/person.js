const express = require("express");
const controllers = require("../controllers/person");
const routes = express.Router();
routes.put("/partners/:id", [], controllers.updateDocument);
module.exports = routes;
