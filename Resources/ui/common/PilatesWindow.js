function PilatesWindow(fontModifier) {
	var ServiceHelper = require('ui/common/ServiceHelper');
	
	var pilatesWindow = Ti.UI.createWindow({
		backgroundImage : '/images/pilates_bg.png',
		navTintColor :'#DECC99',
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
	
	var testButton = Ti.UI.createLabel({
		color: '#DECC99',
		borderColor: '#ece4ce',
	//	borderRadius: 10,
		textAlign: 'left',
		height : '10%',
		bottom : 5,
		borderWidth:1.7,
		width: '93%',
		text: ' Test Service Helper',
		font : {
			fontFamily : 'Arial',
			fontSize : 15 * fontModifier
		},
	}); 
	testButton.addEventListener('click', function(){
		var schedule = ServiceHelper.getGroupSchedule();
		alert(schedule.Schedule.Monday.Class[0]);
	});
	
	wrapper.add(body);
	wrapper.add(titleLabel);
	wrapper.add(testButton);
	pilatesWindow.add(wrapper);

	return pilatesWindow;
}
module.exports = PilatesWindow;
