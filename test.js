var assert = require("assert");

describe('require("sys")', function () {
  it('should throw on Node.js v0.8.x', function () {
    assert.throws(function () {
      var sys = require("sys");
    });
  });

  it('should not throw after require("sys-not-throw")', function () {
    require("./"); // equivalent to require("sys-not-throw")

    assert.doesNotThrow(function () {
      var sys = require("sys");
    });
  });
});
