function EventsWindow(window, navGroup) {
	
	// load dependencies
	var ServiceHelper = require('ui/service/ServiceHelper');
	
	// get the current schedule, and add elements to the screen
	ServiceHelper.getEventsSchedule(function(events) {
		var eventsArray = events.events;
		setupEvents(wrapper, fontModifier, eventsArray);
		
		var blankView = Ti.UI.createView({
			text : '',
			height : 10
		});
		wrapper.add(blankView);
	});
	
	var platform = Ti.Platform.osname;
	var platformHeight = Ti.Platform.displayCaps.platformHeight;
	var fontModifier = 1;

	if (platformHeight >= 500) {
		fontModifier = 1.1;
	} else if (platformHeight >= 1200) {
		fontModifier = 1.25;
	}
	
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

function setupEvents(wrapper, fontModifier, eventsArray) {
	var PopupWindow = require('ui/common/PopupWindow');
	
	var platform = Ti.Platform.osname;
	var width, viewHeight, labelHeight;
	if (platform == 'android') {
		width = '85%';
		viewHeight = 72;
		labelHeight = 63;
	}
	else {
		width = '93%';
		viewHeight = '20%';
		labelHeight = '85%';
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
module.exports = EventsWindow;