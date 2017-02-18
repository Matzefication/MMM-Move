/* Magic Mirror
 * Module: MMM-Move
 * 
 * By Mathias Kaniut
 * MIT Licensed
 */

var NodeHelper = require("node_helper");
var statistics = require('math-statistics');
var usonic = require('mmm-usonic');

module.exports = NodeHelper.create({
	// Override start method.
	start: function() {
		console.log("Starting node helper for: " + this.name);

		usonic.init(function (error) {
			if (error) {
				console.log(error);
			} else {
				this.initSensor();
            }
		});
    },
    
    socketNotificationReceived: function (notification, payload) {
        this.config = payload;
        var sensor;
        
        if ( notification === 'MESSUREMENT') {
            this.sensor = usonic.createSensor(this.config.echoPin, this.config.triggerPin, this.config.sensorTimeout);
			this.sendSocketNotification('MESSURED', this.sensor().toFixed(2));        
        }
    },
    
	initSensor: function () {
	}    
});