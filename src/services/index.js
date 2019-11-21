const calculator = require('./calculator/calculator.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(calculator);
};
