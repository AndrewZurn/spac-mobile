function GroupWindow(fontModifier) {
	var groupWindow = Ti.UI.createWindow({
		backgroundImage : '/images/group_bg.png',
		navTintColor :'#DECC99',
		titleControl : Titanium.UI.createLabel({
			color : '#d29941',
			text : 'GROUP FITNESS',
			textAlign : 'center',
			font : {
				fontFamily : 'Times New Roman',
				fontSize : 18,
				fontWeight : 'bold'
			}
		})
	});

	// body
	var wrapper = Ti.UI.createScrollView({
		backgroundColor : 'transparent',
		height : '90%',
		width : '80%'
	});
	var body = Ti.UI.createScrollView({
		backgroundColor : 'black',
		height : 'auto',
		width : 'auto',
		opacity : 0.75,
		layout : 'vertical',
	});
	var titleLabel = Ti.UI.createLabel({
		color : '#ece4ce',
		text : 'Schedule',
		top : '2%',
		width : '90%',
		textAlign : 'left',
		font : {
			fontFamily : 'Arial',
			fontSize : 20 * fontModifier,
			fontWeight : 'bold'
		},
		opacity : 1
	});
	wrapper.add(body);
	wrapper.add(titleLabel);
	groupWindow.add(wrapper);

	return groupWindow;
}
module.exports = GroupWindow;