// Initializes the `calculator` service on path `/calculator`
const { Calculator } = require('./calculator.class');
const hooks = require('./calculator.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/calculator', new Calculator(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('calculator');

  service.hooks(hooks);
};
