const { getAllUsers } = require("../services/users");
const readAllDocuments = async (req, res) => {
  try {
    const document = await getAllUsers(req.query.page, req.query.pageSize, req.query.organizationId, req.query.regex);
    res.status(document.status).send(document);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { readAllDocuments };
