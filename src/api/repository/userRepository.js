const elasticSearch = require('../../config/elasticSearch');
const logger = require('../../config/logger');

/**
 * Create new user
 * @public
 */
exports.create = async (data) => {
  try {
    const client = await elasticSearch.connect();
    await client.index({
      index: 'user',
      body: data,
    });
  } catch (error) {
    logger.info(`Error while creating user : ${error}`);
    return false;
  }
  return true;
};

/**
 * Get user list
 * @public
 */
exports.list = async () => {
  const client = await elasticSearch.connect();
  try {
    const response = await client.search({
      index: 'user',
      body: {
        query: {
          match_all: {},
        },
      },
    });
    return response;
  } catch (error) {
    logger.info(`Error while getting user : ${error}`);
  }
  return null;
};
