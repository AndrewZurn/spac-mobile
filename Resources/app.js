/*
* A tabbed application, consisting of multiple stacks of windows associated with tabs in a tab group.
* A starting point for tab-based application with multiple top-level windows.
* Requires Titanium Mobile SDK 1.8.0+.
*
* In app.js, we generally take care of a few things:
* - Bootstrap the application with any data we need
* - Check for dependencies like device type, platform version or network connection
* - Require and open our top-level UI component
*
*/

//bootstrap and check dependencies
if (Ti.version < 1.8) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

// This is a single context application with mutliple windows in a stack
(function() {
	//determine platform and form factor and render approproate components
	var osname = Ti.Platform.osname, version = Ti.Platform.version, height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;

	var platform = Ti.Platform.osname;
	function checkTablet() {
		switch (platform) {
		case 'ipad':
			return true;
		case 'android':
			var psc = Ti.Platform.Android.physicalSizeCategory;
			var tiAndroid = Ti.Platform.Android;
			return psc === tiAndroid.PHYSICAL_SIZE_CATEGORY_LARGE || psc === tiAndroid.PHYSICAL_SIZE_CATEGORY_XLARGE;
		default:
			return Math.min(Ti.Platform.displayCaps.platformHeight, Ti.Platform.displayCaps.platformWidth) >= 400;
		}
	}

	var CloudPush = require('ti.cloudpush');
	var deviceToken = null;

	// Initialize the module
	CloudPush.retrieveDeviceToken({
		success : deviceTokenSuccess,
		error : deviceTokenError
	});

	// Enable push notifications for this device
	// Save the device token for subsequent API calls
	function deviceTokenSuccess(e) {
		deviceToken = e.deviceToken;
		subscribeToChannel();
		Ti.API.log("DeviceId: " + deviceToken);
	}

	function deviceTokenError(e) {
		Ti.API.log(e.error);
		alert('Failed to register for push notifications! ' + e.error);
	}

	// Process incoming push notifications
	CloudPush.addEventListener('callback', function(evt) {
		var dialog = Ti.UI.createAlertDialog({
		    message: JSON.parse(evt.payload).android.alert,
		    ok: 'Okay',
		    title: JSON.parse(evt.payload).android.title
		  });
		  dialog.show();
	});
	CloudPush.addEventListener('trayClickLaunchedApp', function (evt) {
	    var dialog = Ti.UI.createAlertDialog({
		    message: JSON.parse(evt.payload).android.alert,
		    ok: 'Okay',
		    title: JSON.parse(evt.payload).android.title
		  });
		  dialog.show();
	});
	CloudPush.addEventListener('trayClickFocusedApp', function (evt) {
	    var dialog = Ti.UI.createAlertDialog({
		    message: JSON.parse(evt.payload).android.alert,
		    ok: 'Okay',
		    title: JSON.parse(evt.payload).android.title
		  });
		  dialog.show();
	});
	
	// Require the Cloud module
	var Cloud = require("ti.cloud");
	function subscribeToChannel () {
	    // Subscribes the device to the 'spac_alerts' channel
	    // Specify the push type as either 'android' for Android or 'ios' for iOS
	    Cloud.PushNotifications.subscribeToken({
	        device_token: deviceToken,
	        channel: 'spac_alerts',
	        type: Ti.Platform.name == 'android' ? 'android' : 'ios'
	    }, function (e) {
	        if (e.success) {
	            Ti.API.info("Subscribed to spac_alerts");
	        } else {
	            alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
	        }
	    });
	}

	var isTablet = checkTablet();

	var ApplicationScrollableWindow = require('ui/common/ApplicationScrollableWindow');

	new ApplicationScrollableWindow().open();
})();
