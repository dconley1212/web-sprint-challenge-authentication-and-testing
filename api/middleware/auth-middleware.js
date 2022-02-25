const Users = require("../users/users-model");

const validateRequestBody = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    next({ status: 422, message: "username and password required" });
  } else {
    next();
  }
};

const checkUsernameExists = async (req, res, next) => {
  try {
    const { username } = req.body;
    const usernameExists = await Users.findBy({ username });
    if (usernameExists || !usernameExists.length) {
      next();
    } else {
      next({ status: 401, message: "username taken" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkUsernameExists,
  validateRequestBody,
};
