const { create } = require("../services/organizationForm");
const createDocument = async (req, res) => {
  try {
    const document = await create(req.body);
    res.status(document.status).send(document);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { createDocument };
