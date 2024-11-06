const add = require('./app');
const assert = require('assert');

describe('Addition Function', function() {
  it('should return the sum of two numbers', function() {
    assert.strictEqual(add(2, 3), 5);
  });
});
