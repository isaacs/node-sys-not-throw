var versions = process.versions.node.split('.');

// Check node version
if (versions[0] === '0' && parseInt(versions[1], 10) < 8) {
  // Do not execute code below
  console.log('require("sys") is throw-safe on this Node.js version');
  process.exit();
}

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
