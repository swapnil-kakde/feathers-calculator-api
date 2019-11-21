const assert = require('assert');
const app = require('../../src/app');

describe('\'calculator\' service', () => {
  it('registered the service', () => {
    const service = app.service('calculator');

    assert.ok(service, 'Registered the service');
  });
});
