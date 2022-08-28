const express = require("express");
const controllers = require("../controllers/areas");
const routes = express.Router();
routes.get("/areas/country/:countryId", [], controllers.readDocuCountryId);
routes.post("/areas", [], controllers.createDocument);
module.exports = routes;
