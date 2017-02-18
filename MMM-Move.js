/* Magic Mirror
 * Module: MMM-Move
 * 
 * By Mathias Kaniut
 * MIT Licensed
 */

Module.register("MMM-Move", {
	defaults : {
		echoPin: "",
		triggerPin: "",
        text: "Hello world!"
	},
	  
	getDom: function() {
		var wrapper = document.createElement("div");
        wrapper.innerHTML = this.config.text;
		return wrapper;
	}
});