function EventsWindow(window, navGroup) {
	
	// load dependencies
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
		height : '87%',
		width : '80%',
		top : '5%',
		layout : 'vertical'
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

	return wrapper;
}

function setupEvents(wrapper, fontModifier, eventsArray) {
	var PopupWindow = require('ui/common/PopupWindow');
	
	for(var i = 0; i < eventsArray.length; i++) {
		var event = eventsArray[i];
		var line = '';
		if(i!=eventsArray.length-1){
			line ='_____________________';
		}
		
		var view = Ti.UI.createView({
			height : '20%',
			width : '93%',
			zIndex : 1,
			//borderColor:'red'
		});
		var label = Ti.UI.createLabel({
			color : '#DECC99',
			//	borderRadius: 10,
			//borderColor:'white',
			textAlign : 'left',
			//height :'100%',
			width : '93%',
			text : event.name + '\n' + event.date + '\n' + event.location+
			'\n'+line,
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