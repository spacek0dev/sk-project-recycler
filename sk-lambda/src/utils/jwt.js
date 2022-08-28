const jwt = require("jsonwebtoken");
const token = require("./constants");
const moment = require("moment");

const createJwt = (user) => {
  return jwt.sign(
    {
      sub: user._id,
      enabled: user.enabled,
      iat: moment().unix(),
      exp: moment().add(999, "days").unix(),
    },
    token.TOKEN_KEY
  );
};
const decodeJwt = (token) => {
  return jwt.decode(token);
};

module.exports = { createJwt, decodeJwt };
