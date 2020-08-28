const assert = require('assert');

// eslint-disable-next-line no-undef
describe('should pass', () => {
  // eslint-disable-next-line no-undef
  it('should also pass', () => {
    assert.equal(1, 1);
  });
});

// eslint-disable-next-line no-undef
describe('should fail', () => {
  // eslint-disable-next-line no-undef
  it('should also fail', () => {
    assert.equal(1, 2);
  });
});
