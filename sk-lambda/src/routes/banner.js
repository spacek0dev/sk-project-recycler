const express = require("express");
const controllers = require("../controllers/banner");
const routes = express.Router();
routes.get("/banners", [], controllers.readAllDocuments);
routes.get("/banners/:id", [], controllers.readDocumentById);
routes.post("/banners", [], controllers.createDocument);
routes.delete("/banners/:id", [], controllers.deleteDocument);
routes.put("/banners/:id", [], controllers.updateDocument);
module.exports = routes;
