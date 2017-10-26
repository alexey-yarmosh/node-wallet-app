const logger = require('../libs/logger')('wallet-app');

module.exports = async (ctx, next) => {
  try {
    await next();
  } catch(err) {
    logger.log('error', err);
    ctx.status = 500;
    ctx.body = `Error detected: ${err.message}`;
  }
}
