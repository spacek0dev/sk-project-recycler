const { create, readAll, readById, remove, update } = require("../services/person");
const updateDocument = async (req, res) => {
  try {
    const document = await update(req.params.id, req.body);
    res.status(document.status).send(document);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {  updateDocument };
