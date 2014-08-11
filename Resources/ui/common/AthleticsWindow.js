function AthleticsWindow(tabGroup) {
	var platformHeight = Ti.Platform.displayCaps.platformHeight;
	var fontModifier = 1;
	
	if (platformHeight >= 500) {
		fontModifier = 1.1;
	}
	
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
		opacity : 0.35,
		layout : 'vertical',
	});
	var titleLabel = Ti.UI.createLabel({
		color : '#ece4ce',
		text : 'Athletics',
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

	// create the group fitness button
	var groupButton = Ti.UI.createButton({
		title : 'Group Fitness Schedule',
		top: '12%',
		height : '10%',
		width : '90%',
		color : '#DECC99',
		textAlign : 'center',
		borderColor: '#ece4ce',
		borderRadius: 15,
		font : {
			fontFamily : 'Arial',
			fontSize : 16 * fontModifier
		},
	});
	groupButton.addEventListener('click', function() {
		tabGroup.activeTab.open(createGroupWindow(fontModifier));
	});
		
	// create the small group fitness button
	var smallButton = Ti.UI.createButton({
		title : 'Small Group Schedule',
		top: '25%',
		height : '10%',
		width : '90%',
		color : '#DECC99',
		textAlign : 'center',
		borderColor: '#ece4ce',
		borderRadius: 15,
		font : {
			fontFamily : 'Arial',
			fontSize : 16 * fontModifier
		},
	});
	smallButton.addEventListener('click', function() {
		tabGroup.activeTab.open(createSmallGroupWindow(fontModifier));
	});
	
	// create the pilates group fitness button
	var pilatesButton = Ti.UI.createButton({
		title : 'Pilates Schedule',
		top: '38%',
		height : '10%',
		width : '90%',
		color : '#DECC99',
		textAlign : 'center',
		borderColor: '#ece4ce',
		borderRadius: 15,
		font : {
			fontFamily : 'Arial',
			fontSize : 16 * fontModifier
		},
	});
	pilatesButton.addEventListener('click', function() {
		tabGroup.activeTab.open(createPilatesWindow(fontModifier));
	});
	
	wrapper.add(body);
	wrapper.add(titleLabel);
	wrapper.add(groupButton);
	wrapper.add(smallButton);
	wrapper.add(pilatesButton);

	return wrapper;
}

function createSmallGroupWindow(fontModifier) { 
	var smallGroupWindow = Ti.UI.createWindow({
		backgroundImage : '/images/small_group_bg.png',
		titleControl : Titanium.UI.createLabel({
			color : '#d29941',
			text : 'SMALL GROUP',
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
	smallGroupWindow.add(wrapper);
	
	return smallGroupWindow;
}

function createGroupWindow(fontModifier) { 
	var groupWindow = Ti.UI.createWindow({
		backgroundImage : '/images/group_bg.png',
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

function createPilatesWindow(fontModifier) { 
	var pilatesWindow = Ti.UI.createWindow({
		backgroundImage : '/images/pilates_bg.png',
		titleControl : Titanium.UI.createLabel({
			color : '#d29941',
			text : 'PILATES',
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
	pilatesWindow.add(wrapper);
	
	return pilatesWindow;	
}

module.exports = AthleticsWindow;