function EventsWindow(window, navGroup) {
	
	// load dependencies
	var ServiceHelper = require('ui/service/ServiceHelper');
	
	// get the current schedule, and add elements to the screen
	ServiceHelper.getEventsSchedule(function(events) {
		var eventsArray = events.eventSchedule;
		setupEvents(wrapper, eventsArray);
		
		var blankView = Ti.UI.createView({
			text : '',
			height : 10
		});
		wrapper.add(blankView);
	});
	
	var platform = Ti.Platform.osname;
	
	var wrapper;
	if (platform === 'android') {
		wrapper = setupAndroidWindow();
	} else {
		wrapper = setupIOSWindow();
	}

	return wrapper;
}

function setupEvents(wrapper, eventsArray) {
	var PopupWindow = require('ui/common/PopupWindow');
	
	var platform = Ti.Platform.osname;
	var width, viewHeight, labelHeight, fontModifier;
	if (platform == 'android') {
		width = '85%';
		viewHeight = 72;
		labelHeight = 66;
		fontModifier = 1.18;
	}
	else {
		width = '93%';
		viewHeight = '20%';
		labelHeight = '85%';
		fontModifier = 1.1;
	}
	
	for(var i = 0; i < eventsArray.length; i++) {
		var event = eventsArray[i];
		
		var view = Ti.UI.createView({
			height : viewHeight,
			width : width,
			zIndex : 1,
		});
		var label = Ti.UI.createLabel({
			color : '#DECC99',
			borderWidth : 1.7,
			borderColor : '#ece4ce',
			textAlign : 'left',
			width : width,
			height : labelHeight,
			text : ' ' + event.name + '\n ' + event.date + '\n ' + event.location,
			font : {
				fontFamily : 'Arial',
				fontSize : 15 * fontModifier
			},
			contact: event.contact,
			about: event.description,
			eventTitle: event.name
		});
		label.addEventListener('click', function(e) {
			PopupWindow(e.source.eventTitle, e.source.about, e.source.contact).open({animated : true});
		});
		
		view.add(label);
		wrapper.add(view);	
	}
}

function setupAndroidWindow() {
	
	var fontModifier = 1.18;
	
	// body
	var wrapper = Ti.UI.createScrollView({
		backgroundColor : 'transparent',
		height : '80%',
		width : '80%', 
		top : '7%',
		layout : 'vertical',
		zIndex : 1
	});
	var titleLabel = Ti.UI.createLabel({
		color : '#ece4ce',
		text : 'Schedule',
		width : '74%',
		textAlign : 'left',
		top : '6%',
		font : {
			fontFamily : 'Arial',
			fontSize : 20 * fontModifier,
			fontWeight : 'bold' 
		},
		opacity : 1
	});
	wrapper.add(titleLabel);
	
	return wrapper;
}

function setupIOSWindow() {
	
	var fontModifier = 1.1;
	
	// body
	var wrapper = Ti.UI.createScrollView({
		backgroundColor : 'transparent',
		height : '80%',
		width : '80%', 
		top : '7%',
		layout : 'vertical',
		zIndex : 1
	});
	var titleLabel = Ti.UI.createLabel({
		color : '#ece4ce',
		text : 'Schedule',
		width : '90%',
		textAlign : 'left',
		top : 0,
		font : {
			fontFamily : 'Arial',
			fontSize : 20 * fontModifier,
			fontWeight : 'bold' 
		},
		opacity : 1
	});
	wrapper.add(titleLabel);
	
	return wrapper;
}

module.exports = EventsWindow;