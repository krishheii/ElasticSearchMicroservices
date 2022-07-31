const { Client } = require('@elastic/elasticsearch');

/**
 * Connect to elasticsearch
 *
 * @returns {object} Elasticsearch connection
 * @public
 */
exports.connect = async () => {
  const client = new Client({
    node: 'https://localhost:9200',
    auth: {
      username: 'YOUR-USERNAME',
      password: 'YOUR-PASSWORD',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  return client;
};
