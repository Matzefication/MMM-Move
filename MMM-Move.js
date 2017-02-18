/* Magic Mirror
 * Module: MMM-Move
 * 
 * By Mathias Kaniut
 * MIT Licensed
 */

Module.register("MMM-Move", {
    // Define module defaults
	defaults: {
		echoPin: "24", //Echo pin
		triggerPin: "18", //Trigger pin
		sensorTimeout: 500, //Measurement timeout in µs
		interval: 300, //Measurement intervall
        distance: 10 // Distance in cm
	}, 

    // Override start method.
    start: function() {
        var displayData = null;
        
        Log.log("Starting module: " + this.name);
        
        setInterval(function () {
            this.sendSocketNotification('MESSUREMENT', this.config);
        }, this.config.interval);
    },
    
    // Override socket notification handler.
	socketNotificationReceived: function (notification, payload) {
        if ( notification === 'MESSURED') {
            this.displayData = payload;
			this.updateDom(this.config.animationSpeed);
            if ( payload <= this.config.distance ) {
                this.sendNotification('DISTANCE', payload);
            }
        }
    },
    
    // Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		if(this.displayData !== undefined) {
            wrapper.innerHTML = this.displayData;
            wrapper.className = "dimmed light small";
		}
		return wrapper;
	}
});