var versions = process.versions.node.split('.');

// Check node version
if (versions[0] === '0' && parseInt(versions[1], 10) < 8) {
  // Do not execute code below
  return;
}

// Require utils
var util = require('util');

// Deprecation message to show
var msg = 'require("sys-not-throw") is a dirty hack. Please use "util" module instead of "sys" and patch your dependencies.';

// Create fake sys module exports with deprecated functions
var sys = {};
sys.print = util.deprecate(util.print, msg);
sys.puts = util.deprecate(util.puts, msg);
sys.debug = util.deprecate(util.debug, msg);
sys.error = util.deprecate(util.error, msg);
sys.inspect = util.deprecate(util.inspect, msg);
sys.p = util.deprecate(util.p, msg);
sys.log = util.deprecate(util.log, msg);
sys.exec = util.deprecate(util.exec, msg);
sys.pump = util.deprecate(util.pump, msg);
sys.inherits = util.deprecate(util.inherits, msg);

// Set it to node require cache to prevent loading builtin sys module
require("module")._cache.sys = {};
require("module")._cache.sys.exports = sys;
