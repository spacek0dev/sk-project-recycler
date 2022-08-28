const express = require("express");
const controllers = require("../controllers/partners");
const routes = express.Router();
routes.get("/partners", [], controllers.readAllDocuments);
routes.get("/partners/:id", [], controllers.readDocumentById);
routes.delete("/partners/:id", [], controllers.deleteDocument);
routes.put("/partners/:id", [], controllers.updateDocument);
routes.post("/partners", [], controllers.createDocument);
module.exports = routes;
