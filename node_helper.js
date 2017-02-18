'use strict';

/* Magic Mirror
 * Module: MMM-Move
 * 
 * By Mathias Kaniut
 * MIT Licensed
 */

const NodeHelper = require('node_helper');
const usonic = require('mmm-usonic');
const gpio = require('mmm-gpio');

module.exports = NodeHelper.create({
	start: function () {
		const self = this;
		usonic.init(function (error) {
			if (error) {
				console.log(error);
			} else {
				self.initSensor();
            }
		});	
		gpio.init(function (error) {
			if (error) {
				console.log(error);
			} else {
				self.initSensor();
			}
		});
	},
	
	initSensor: function () {
	}
  
});