const httpStatus = require('http-status');
const User = require('../repository/userRepository');

/**
 * Create new user
 * @public
 */
exports.create = async (req, res, next) => {
  try {
    const response = await User.create(req.body);
    if (response) {
      res.status(httpStatus.CREATED);
      res.json({ message: 'User creation sucessful' });
    } else {
      res.status(httpStatus.FAILED_DEPENDENCY);
      res.json({ message: 'User creation failed' });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Get user list
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    const response = await User.list();
    if (response) {
      res.status(httpStatus.FOUND);
      res.json(response);
    } else {
      res.status(httpStatus.FAILED_DEPENDENCY);
      res.json({ message: 'Failed to get user' });
    }
  } catch (error) {
    next(error);
  }
};
