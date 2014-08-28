function EventsWindow(window, navGroup) {
	var ServiceHelper = require('ui/service/ServiceHelper');
	
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
		height : '90%',
		width : '80%', 
		layout : 'vertical',
		zIndex : 1
	});
	var body = Ti.UI.createScrollView({
		backgroundColor : 'black',
		height : '90%',
		width : '80%',
		opacity : 0.75,
		layout : 'vertical',
		zIndex : 0
	});
	var titleLabel = Ti.UI.createLabel({
		color : '#ece4ce',
		text : 'Events',
		top : 5,
		width : '90%',
		textAlign : 'left',
		font : {
			fontFamily : 'Arial',
			fontSize : 20 * fontModifier,
			fontWeight : 'bold'
		},
		opacity : 1
	});
	wrapper.add(titleLabel);
	window.add(body);
	window.add(wrapper);


	return wrapper;
}

function setupEvents(wrapper, fontModifier, eventsArray) {
	for(var i = 0; i < eventsArray.length; i++) {
		var event = eventsArray[i];
		
		var view = Ti.UI.createView({
			height : '19%',
			width : '93%',
			zIndex : 1,
			borderColor:'red'
		});
		var label = Ti.UI.createLabel({
			color : '#DECC99',
			//	borderRadius: 10,
			borderColor:'white',
			textAlign : 'left',
			//height :'100%',
			width : '93%',
			text : event.name + '\n' + event.date + '\n' + event.location,
			font : {
				fontFamily : 'Arial',
				fontSize : 15 * fontModifier
			},
		});
		var labelView = Ti.UI.createView({
			height : '2%',
			width : '93%',
			zIndex : 1,
		});
		var lineLabel = Ti.UI.createLabel({
		top:'1%',
		color : '#ece4ce',
		text : '_____________________',
		//height:'2%',
		width : '93%',
		textAlign : 'left',
		font : {
			fontFamily : 'Arial',
			fontSize : 16
		},
		opacity : 1
	});
		view.add(label);
		wrapper.add(view);
		if(i!=eventsArray.length-1){
			labelView.add(lineLabel);
			wrapper.add(labelView);
		}
		
	}
}
module.exports = EventsWindow;