const express = require("express");
const controllers = require("../controllers/auth");
const { AuthGuard } = require("../middlewares/AuthGuard");
const routes = express.Router();
routes.post("/auth/login", [], controllers.loginApp);
routes.post("/auth/register", [], controllers.registerApp);
routes.post("/auth/register/organization", [], controllers.registerByOrganizationApp);
routes.get("/auth/user", [AuthGuard], controllers.getUser);
module.exports = routes;
