const express = require("express");
const controllers = require("../controllers/country");
const routes = express.Router();
routes.get("/countrys", [], controllers.readAllDocuments);
routes.get("/countrys/:id", [], controllers.readDocumentById);
routes.delete("/countrys/:id", [], controllers.deleteDocument);
routes.put("/countrys/:id", [], controllers.updateDocument);
routes.post("/countrys", [], controllers.createDocument);
module.exports = routes;
