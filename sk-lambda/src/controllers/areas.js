const { create, getAreas, readAll, readById, deleteId, update } = require("../services/areas");
const createDocument = async (req, res) => {
  try {
    const document = await create(req.body);
    res.status(document.status).send(document);
  } catch (error) {
    res.status(500).send(error);
  }
};
const readDocumentById = async (req, res) => {};
const readDocuCountryId = async (req, res) => {
  try {
    const document = await getAreas(req.params.countryId);
    res.status(document.status).send(document);
  } catch (error) {
    res.status(500).send(error);
  }
};
const deleteDocument = (req, res) => {};
const updateDocument = (req, res) => {};

module.exports = { createDocument, readDocumentById, readDocuCountryId, deleteDocument, updateDocument };
