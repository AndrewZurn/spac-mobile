function PushNotificationService() {
	
	if (Ti.Platform.osname === 'android') {
		setupAndroidNotifications();
	} else {
		setupIOSNotifications();
	}

}

function setupIOSNotifications() {
	var deviceToken = null;
	
	// Check if the device is running iOS 8 or later
	if (Ti.Platform.name == "iPhone OS" && parseInt(Ti.Platform.version.split(".")[0]) >= 8) {
	    function registerForPush() {
	        Ti.Network.registerForPushNotifications({
	            success: deviceTokenSuccess,
	            error: deviceTokenError,
	            callback: receivePush
	        });
	        // Remove event listener once registered for push notifications
	        Ti.App.iOS.removeEventListener('usernotificationsettings', registerForPush); 
	    };
	 
		// Wait for user settings to be registered before registering for push notifications
	    Ti.App.iOS.addEventListener('usernotificationsettings', registerForPush);
	 
	    // Register notification types to use
	    Ti.App.iOS.registerUserNotificationSettings({
		    types: [
	            Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT,
	            Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND,
	            Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE
	        ]
	    });
	
	} else {
	    // For iOS 7 and earlier
	    Ti.Network.registerForPushNotifications({
	        // Specifies which notifications to receive
	        types: [
	            Ti.Network.NOTIFICATION_TYPE_BADGE,
	            Ti.Network.NOTIFICATION_TYPE_ALERT,
	            Ti.Network.NOTIFICATION_TYPE_SOUND
	        ],
	        success: deviceTokenSuccess,
	        error: deviceTokenError,
	        callback: receivePush
	    });
	}
	
	// Process incoming push notifications
	function receivePush(e) {
	  	var dialog = Ti.UI.createAlertDialog({
		    message: JSON.parse(evt.payload).android.alert,
		    ok: 'Okay',
		    title: JSON.parse(evt.payload).android.title
		  });
		dialog.show();
	}
	// Save the device token for subsequent API calls
	function deviceTokenSuccess(e) {
	    deviceToken = e.deviceToken;
	    subscribeToPushChannel(deviceToken);
	    Ti.API.log("DeviceId: " + deviceToken);
	}
	
	function deviceTokenError(e) {
	    alert('Failed to register for push notifications! ' + e.error);
	}

}

function setupAndroidNotifications() {
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
		subscribeToPushNotifications(deviceToken);
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
}

function subscribeToPushNotifications(deviceToken) {
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
}

module.exports = PushNotificationService;
