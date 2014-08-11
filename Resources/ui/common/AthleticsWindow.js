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
		top : '12%',
		height : '10%',
		width : '90%',
		color : '#DECC99',
		textAlign : 'center',
		borderColor : '#ece4ce',
		borderRadius : 15,
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
		top : '25%',
		height : '10%',
		width : '90%',
		color : '#DECC99',
		textAlign : 'center',
		borderColor : '#ece4ce',
		borderRadius : 15,
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
		top : '38%',
		height : '10%',
		width : '90%',
		color : '#DECC99',
		textAlign : 'center',
		borderColor : '#ece4ce',
		borderRadius : 15,
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
		width : '80%',
		contentHeight : 'auto',
		showVerticalScrollIndicator : true,
		layout : 'vertical',
		zIndex : 1
	});
	var body = Ti.UI.createScrollView({
		backgroundColor : 'black',
		height : '90%',
		width : '80%',
		opacity : 0.75,
		zIndex : 0
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

	// prototyping this stuff...
	var mondayView = Ti.UI.createView({
		//top:'2%',
		height : '10%',
		width : '93%',
		zIndex : 1
	});
	var mondayLabel = Ti.UI.createLabel({
		color : '#ece4ce',
		backgroundColor:'#d29941',
		text: '  MONDAY',
		height: 28*fontModifier,
		width : '93%',
		textAlign : 'left',
		borderRadius : 10,
		font : {
			fontFamily : 'Times New Roman',
			fontSize : 15 * fontModifier,
			fontWeight: 'bold'
		},
		opacity : 1
	});
	var mondayDetailView = Ti.UI.createView({
		height : '9%',
		width : '93%',
		zIndex : 1
	});
	var mondayDetailsLabel = Ti.UI.createLabel({
		color: '#DECC99',
		borderColor: '#ece4ce',
		borderRadius: 10,
		textAlign: 'left',
		height:28*fontModifier,
		width: '93%',
		text: '  6:30pm - Body Blast',
		font : {
			fontFamily : 'Arial',
			fontSize : 15 * fontModifier
		},
	}); 
	mondayDetailsLabel.addEventListener('click', function(){
		alert('Instructor: Mike \n Room: 7');
	});
	mondayView.add(mondayLabel);
	mondayDetailView.add(mondayDetailsLabel);
	
	var tuesdayView = Ti.UI.createView({
		//top:'2%',
		height : '10%',
		width : '93%',
		zIndex : 1
	});
	var tuesdayLabel = Ti.UI.createLabel({
		color : '#ece4ce',
		backgroundColor:'#d29941',
		text: '  TUESDAY',
		height: 28*fontModifier,
		width : '93%',
		textAlign : 'left',
		borderRadius : 10,
		font : {
			fontFamily : 'Times New Roman',
			fontSize : 15 * fontModifier,
			fontWeight: 'bold'
		},
		opacity : 1
	});
	var tuesdayDetailView = Ti.UI.createView({
		height : '9%',
		width : '93%',
		zIndex : 1
	});
	var tuesdayDetailsLabel = Ti.UI.createLabel({
		color: '#DECC99',
		borderColor: '#ece4ce',
		borderRadius: 10,
		textAlign: 'left',
		height:28*fontModifier,
		width: '93%',
		text: '  6:30pm - Body Blast',
		font : {
			fontFamily : 'Arial',
			fontSize : 15 * fontModifier
		},
	}); 
	tuesdayDetailsLabel.addEventListener('click', function(){
		alert('Instructor: Mike \n Room: 7');
	});
	tuesdayView.add(tuesdayLabel);
	tuesdayDetailView.add(tuesdayDetailsLabel);
	
	var wednesdayView = Ti.UI.createView({
		//top:'2%',
		height : '10%',
		width : '93%',
		zIndex : 1
	});
	var wednesdayLabel = Ti.UI.createLabel({
		color : '#ece4ce',
		backgroundColor:'#d29941',
		text: '  WEDNESDAY',
		height: 28*fontModifier,
		width : '93%',
		textAlign : 'left',
		borderRadius : 10,
		font : {
			fontFamily : 'Times New Roman',
			fontSize : 15 * fontModifier,
			fontWeight: 'bold'
		},
		opacity : 1
	});
	var wednesdayDetailView = Ti.UI.createView({
		height : '9%',
		width : '93%',
		zIndex : 1
	});
	var wednesdayDetailsLabel = Ti.UI.createLabel({
		color: '#DECC99',
		borderColor: '#ece4ce',
		borderRadius: 10,
		textAlign: 'left',
		height:28*fontModifier,
		width: '93%',
		text: '  6:30pm - Body Blast',
		font : {
			fontFamily : 'Arial',
			fontSize : 15 * fontModifier
		},
	}); 
	wednesdayDetailsLabel.addEventListener('click', function(){
		alert('Instructor: Mike \n Room: 7');
	});
	wednesdayView.add(wednesdayLabel);
	wednesdayDetailView.add(wednesdayDetailsLabel);
	
	var thursdayView = Ti.UI.createView({
		//top:'2%',
		height : '10%',
		width : '93%',
		zIndex : 1
	});
	var thursdayLabel = Ti.UI.createLabel({
		color : '#ece4ce',
		backgroundColor:'#d29941',
		text: '  THURSDAY',
		height: 28*fontModifier,
		width : '93%',
		textAlign : 'left',
		borderRadius : 10,
		font : {
			fontFamily : 'Times New Roman',
			fontSize : 15 * fontModifier,
			fontWeight: 'bold'
		},
		opacity : 1
	});
	var thursdayDetailView = Ti.UI.createView({
		height : '9%',
		width : '93%',
		zIndex : 1
	});
	var thursdayDetailsLabel = Ti.UI.createLabel({
		color: '#DECC99',
		borderColor: '#ece4ce',
		borderRadius: 10,
		textAlign: 'left',
		height:28*fontModifier,
		width: '93%',
		text: '  4:45pm - Kettlebell',
		font : {
			fontFamily : 'Arial',
			fontSize : 15 * fontModifier
		},
	}); 
	thursdayDetailsLabel.addEventListener('click', function(){
		alert('Instructor: Jill \n Room: 5B');
	});
	thursdayView.add(thursdayLabel);
	thursdayDetailView.add(thursdayDetailsLabel);
	
	
	var fridayView = Ti.UI.createView({
		//top:'2%',
		height : '10%',
		width : '93%',
		zIndex : 1
	});
	var fridayLabel = Ti.UI.createLabel({
		color : '#ece4ce',
		backgroundColor:'#d29941',
		text: '  FRIDAY',
		height: 28*fontModifier,
		width : '93%',
		textAlign : 'left',
		borderRadius : 10,
		font : {
			fontFamily : 'Times New Roman',
			fontSize : 15 * fontModifier,
			fontWeight: 'bold'
		},
		opacity : 1
	});
	var fridayDetailView = Ti.UI.createView({
		height : '9%',
		width : '93%',
		zIndex : 1
	});
	var fridayDetailsLabel = Ti.UI.createLabel({
		color: '#DECC99',
		borderColor: '#ece4ce',
		borderRadius: 10,
		textAlign: 'left',
		height:28*fontModifier,
		width: '93%',
		text: '  7:30am - Gold Theory',
		font : {
			fontFamily : 'Arial',
			fontSize : 15 * fontModifier
		},
	}); 
	fridayDetailsLabel.addEventListener('click', function(){
		alert('Instructor: Jill \n Room: 5');
	});
	fridayView.add(fridayLabel);
	fridayDetailView.add(fridayDetailsLabel);
	
	var saturdayView = Ti.UI.createView({
		//top:'2%',
		height : '10%',
		width : '93%',
		zIndex : 1
	});
	var saturdayLabel = Ti.UI.createLabel({
		color : '#ece4ce',
		backgroundColor:'#d29941',
		text: '  SATURDAY',
		height: 28*fontModifier,
		width : '93%',
		textAlign : 'left',
		borderRadius : 10,
		font : {
			fontFamily : 'Times New Roman',
			fontSize : 15 * fontModifier,
			fontWeight: 'bold'
		},
		opacity : 1
	});
	var saturdayDetailView = Ti.UI.createView({
		height : '9%',
		width : '93%',
		zIndex : 1
	});
	var saturdayDetailsLabel = Ti.UI.createLabel({
		color: '#DECC99',
		borderColor: '#ece4ce',
		borderRadius: 10,
		textAlign: 'left',
		height:28*fontModifier,
		width: '93%',
		text: '  9:00am - TRX',
		font : {
			fontFamily : 'Arial',
			fontSize : 15 * fontModifier
		},
	}); 
	saturdayDetailsLabel.addEventListener('click', function(){
		alert('Instructor: Georgene \n Room: 5B');
	});
	saturdayView.add(saturdayLabel);
	saturdayDetailView.add(saturdayDetailsLabel);

	wrapper.add(titleLabel);
	wrapper.add(mondayView);
	wrapper.add(mondayDetailView);
	wrapper.add(tuesdayView);
	wrapper.add(wednesdayView);
	wrapper.add(thursdayView);
	wrapper.add(thursdayDetailView);
	wrapper.add(fridayView);
	wrapper.add(fridayDetailView);
	wrapper.add(saturdayView);
	wrapper.add(saturdayDetailView);
	smallGroupWindow.add(body);
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