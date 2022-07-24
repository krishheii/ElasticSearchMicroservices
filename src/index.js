const app = require('./config/express');
const { port, env } = require('./config/vars');
const logger = require('./config/logger');

// listen to requests
app.listen(port, () => logger.info(`server started on port ${port} (${env})`));

/**
* Exports express
* @public
*/
module.exports = app;
