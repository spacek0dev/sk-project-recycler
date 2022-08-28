const express = require("express");
const controllers = require("../controllers/role");
const routes = express.Router();
routes.get("/roles", [], controllers.readAllDocuments);
routes.get("/roles/:id", [], controllers.readDocumentById);
routes.delete("/roles/:id", [], controllers.deleteDocument);
routes.put("/roles/:id", [], controllers.updateDocument);
routes.post("/roles", [], controllers.createDocument);
module.exports = routes;
