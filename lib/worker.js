var util = require("util");
var events = require("events");

function Worker(options) {
	this.workerId=options.workerId;
	this.browser=options.browser;
}

util.inherits(Worker, events.EventEmitter);

Worker.prototype.doJob = function(job) {
	this.emit('job', job);
	return this;
};

module.exports = Worker;