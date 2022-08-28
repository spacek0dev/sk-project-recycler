const express = require("express");
const controllers = require("../controllers/organization");
const routes = express.Router();
routes.get("/organizations", [], controllers.readAllDocuments);
routes.get("/organizations/:id", [], controllers.readDocumentById);
routes.delete("/organizations/:id", [], controllers.deleteDocument);
routes.put("/organizations/:id", [], controllers.updateDocument);
routes.post("/organizations", [], controllers.createDocument);
/* Charts admin */
routes.get("/organizations/charts/users-length", [], controllers.getUsersByOrganizationChartData);
module.exports = routes;
