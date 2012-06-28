var util = require('util');

var msg = 'require("sys-not-throw") is a dirty hack. Please use "util" module instead of "sys" and patch your dependencies.';

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

require("module")._cache.sys = sys;
