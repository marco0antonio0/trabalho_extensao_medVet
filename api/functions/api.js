const app = require("./../api.js");

exports.handler = async (event, context) => {
  return app(event, context);
};
