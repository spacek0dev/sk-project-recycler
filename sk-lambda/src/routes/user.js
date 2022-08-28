const express = require("express");
const controllers = require("../controllers/users");
const routes = express.Router();
routes.get("/users/all", [], controllers.readAllDocuments);
module.exports = routes;
