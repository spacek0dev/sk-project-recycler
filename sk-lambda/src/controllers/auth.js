const { login, register, registerWithOrganization, getUserInformation } = require("../services/auth");

const loginApp = async (req, res) => {
  try {
    const document = await login(req.body);
    res.status(document.status).send(document);
  } catch (error) {
    res.status(500).send(error);
  }
};
const registerApp = async (req, res) => {
  try {
    const document = await register(req.body);
    res.status(document.status).send(document);
  } catch (error) {
    res.status(500).send(error);
  }
};
const registerByOrganizationApp = async (req, res) => {
  try {
    const document = await registerWithOrganization(req.body);
    res.status(document.status).send(document);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getUser = async (req, res) => {
  try {
    const document = await getUserInformation(req.user);
    res.status(document.status).send(document);
  } catch (error) {
    console.log('error: ', error);
    res.status(500).send(error);
  }
};

module.exports = { loginApp, registerApp, registerByOrganizationApp, getUser };
