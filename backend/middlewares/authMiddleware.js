const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/UserModel");

module.exports.userVerification = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ status: false, message: "No token provided" });
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
    if (err) {
      return res.status(401).json({ status: false, message: "Token is not valid" });
    } else {
      const user = await UserModel.findById(data.id);
      if (user) {
        req.user = user;
        next();
      } else {
        return res.status(401).json({ status: false, message: "User not found" });
      }
    }
  });
};
