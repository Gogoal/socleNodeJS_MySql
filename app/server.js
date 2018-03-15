import 'babel-polyfill';
import app from './app';
import logger from './helpers/logger.helper';

// Choose the port
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  logger.info(`Express server listening on port ${port}`);
});

// export the server
module.exports = server;
