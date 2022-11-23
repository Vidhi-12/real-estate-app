const { tokenValidator } = require("./token");
module.exports = async function (req, res, next) {
  try {
    const { jwt } = req.cookies;
    const valid = await tokenValidator(jwt);
    if (valid) {
      next();
    } else {
      res.status(400).json("Access Denied");
    }
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};
