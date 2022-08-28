const { create, readAll, readById, remove, update } = require("../services/banner");
const createDocument = async (req, res) => {
  try {
    const document = await create(req.body);
    res.status(document.status).send(document);
  } catch (error) {
    res.status(500).send(error);
  }
};
const readDocumentById = async (req, res) => {
  try {
    const document = await readById(req.params.id);
    res.status(document.status).send(document);
  } catch (error) {
    res.status(500).send(error);
  }
};
const readAllDocuments = async (req, res) => {
  try {
    const document = await readAll();
    res.status(document.status).send(document);
  } catch (error) {
    res.status(500).send(error);
  }
};
const deleteDocument = async (req, res) => {
  try {
    const document = await remove(req.params.id);
    res.status(document.status).send(document);
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateDocument = async (req, res) => {
  try {
    const document = await update(req.params.id, req.body);
    res.status(document.status).send(document);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { createDocument, readDocumentById, readAllDocuments, deleteDocument, updateDocument };
