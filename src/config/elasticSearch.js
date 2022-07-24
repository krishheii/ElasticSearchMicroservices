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
      username: 'elastic',
      password: '_Y9ac*9M-zfNI8SbNodE',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  return client;
};
