function EventsWindow(tabGroup) {
	var platformHeight = Ti.Platform.displayCaps.platformHeight;
	
	// body
	var wrapper = Ti.UI.createView({
		backgroundColor : 'transparent',
		height : '90%',
		width : '80%'
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