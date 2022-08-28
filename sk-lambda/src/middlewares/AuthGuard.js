const { decodeJwt } = require("../utils/jwt");
const AuthGuard = async (req, res, next) => {
  let token = req.headers.authorization;
  if(!token){
    res.status(401);
  }
  if (token.toLowerCase().includes("bearer")) {
    req.user = await decodeJwt(token.split(" ")[1]).sub;
  } else {
    const decoded = await decodeJwt(req.headers.authorization);
    req.user = decoded.sub;
  }
  next();
};

module.exports = { AuthGuard };
