# Module: MMM-Move
The `MMM-Move` program is a <a href="https://github.com/MichMich/MagicMirror">MagicMirror</a> addon module.
This module uses a HC-SR04 ultrasonic sensor to detect hand movement

## Installing the module
1. Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/Matzefication/MMM-Move.git`.  A new folder labeled `MMM-Move` will appear, cd into it.
2. Execute `npm install` to install the dependencies
3. You will need to run `sudo npm start` instead of `npm start` in order to read/write to the GPIO pins.

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MMM-Move',
		position: 'bottom_left',
		config: {
			echoPin: 24, 		//Sensor's BCM Numbered Echo pin - REQUIRED
			triggerPin: 18, 	//Sensor's BCM Numbered trigger pin - REQUIRED
		}
	}
]
````

This module will use the `sendNotification(notification, payload)` to send:<br>
`notification = 'MOVEMENT'`<br>
`payload = 'Swipe Left'` or `'Swipe Right'`

Please use as appropriate in your module using `notificationReceived(notification, payload, sender)`

## Wiring the Sensors

<b>Please wire the sensors using this diagram.</b>
![Example: hcsr04.png] (https://raw.githubusercontent.com/clebert/r-pi-usonic/master/resources/hcsr04.png)

Remember to use the GPIO numbers, not actual pins.  For example, if you want to use the defaults and you have a Raspberry Pi 2/3, echoLeftPin should be on GPIO24 (which is physical pin 18, etc...).

## Configuration options

The following properties can be configured:


<table width="100%">
	<!-- why, markdown... -->
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>
		<tr>
			<td><code>echoPin</code></td>
			<td>Sensor's Echo pin.<br>
				<br><b>Example:</b> <code>24</code>
				<br> This value is <b>REQUIRED</b>
			</td>
		</tr>
		<tr>
			<td><code>triggerPin</code></td>
			<td>Sensor's Trigger pin.<br>
				<br><b>Example:</b> <code>18</code>
				<br> This value is <b>REQUIRED</b>
			</td>
		</tr>
	</tbody>
</table>