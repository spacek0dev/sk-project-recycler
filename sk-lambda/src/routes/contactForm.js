const express = require("express");
const controllers = require("../controllers/contactForm");
const routes = express.Router();
routes.get("/contactform", [], controllers.readAllDocuments);
routes.get("/contactform/:id", [], controllers.readDocumentById);
routes.delete("/contactform/:id", [], controllers.deleteDocument);
routes.put("/contactform/:id", [], controllers.updateDocument);
routes.post("/contactform", [], controllers.createDocument);
module.exports = routes;
