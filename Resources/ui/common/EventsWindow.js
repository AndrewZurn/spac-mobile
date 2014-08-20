function EventsWindow(navGroup) {
	var platform = Ti.Platform.osname;
	var platformHeight = Ti.Platform.displayCaps.platformHeight;
	var fontModifier = 1;

	if (platformHeight >= 500) {
		fontModifier = 1.1;
	} else if (platformHeight >= 1200) {
		fontModifier = 1.25;
	}
	
	// body
	var wrapper = Ti.UI.createView({
		backgroundColor : 'transparent',
		height : '87%',
		width : '80%',
		top : '5%'
	});
	var body = Ti.UI.createView({
		backgroundColor : 'black',
		height : 'auto',
		width : 'auto',
		opacity : 0.35,
		layout : 'vertical',
	});
	var titleLabel = Ti.UI.createLabel({
		color : '#d29941',
		text : 'Events',
		top : '2%',
		width : '90%',
		textAlign : 'center',
		font : {
			fontFamily : 'Arial',
			fontSize : 20,
			fontWeight : 'bold'
		},
		opacity : 1
	});
	var label = Ti.UI.createLabel({
		color : '#DECC99',
		text : 'Welcome to the Saint Paul Athletic Club\'s mobile application.',
		top : '10%',
		width : '93%',
		textAlign : 'center',
		font : {
			fontFamily : 'Arial',
			fontSize : 16
		},
		opacity : 1
	});
	wrapper.add(body);
	wrapper.add(titleLabel);
	wrapper.add(label);

	return wrapper;
}
module.exports = EventsWindow;