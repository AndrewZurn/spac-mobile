function PilatesWindow(fontModifier) {
	var ServiceHelper = require('ui/service/ServiceHelper');
	
	var platform = Ti.Platform.osname;
	
	ServiceHelper.getPilatesSchedule(function(schedule) {
		var mondayClassArray = schedule.schedule.monday.clazz;
		var tuesdayClassArray = schedule.schedule.tuesday.clazz;
		var wednesdayClassArray = schedule.schedule.wednesday.clazz;
		var thursdayClassArray = schedule.schedule.thursday.clazz;
		var fridayClassArray = schedule.schedule.friday.clazz;
		var saturdayClassArray = schedule.schedule.saturday.clazz;
		var sundayClassArray = schedule.schedule.sunday.clazz;

		setupClasses(wrapper, fontModifier, 'MONDAY', mondayClassArray);
		setupClasses(wrapper, fontModifier, 'TUESDAY', tuesdayClassArray);
		setupClasses(wrapper, fontModifier, 'WEDNESDAY', wednesdayClassArray);
		setupClasses(wrapper, fontModifier, 'THURSDAY', thursdayClassArray);
		setupClasses(wrapper, fontModifier, 'FRIDAY', fridayClassArray);
		setupClasses(wrapper, fontModifier, 'SATURDAY', saturdayClassArray);
		setupClasses(wrapper, fontModifier, 'SUNDAY', sundayClassArray);
		
		var blankView = Ti.UI.createView({
			text : '',
			height : 10
		});
		wrapper.add(blankView);
	});
	
	var imagePath;
	if ( platform == 'android' ) {
		imagePath = '/images/HD/';
	} else { // is iphone or ipad
		imagePath = '/images/SD/';
	}
	
	var pilatesWindow = Ti.UI.createWindow({
		backgroundImage : imagePath + 'pilates_bg.png',
		navTintColor :'#DECC99',
		barColor : '#2e2e2e',
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
		text : 'Schedule',
		top : '1%',
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
	pilatesWindow.add(body);
	pilatesWindow.add(wrapper);

	return pilatesWindow;
}

function setupClasses(wrapper, fontModifier, day, classArray) {
	var dayView = Ti.UI.createView({
		//top:'2%',
		height : '10%',
		width : '93%',
		zIndex : 1
	});
	var dayLabel = Ti.UI.createLabel({
		color : '#ece4ce',
		backgroundColor : '#d29941',
		text : '  ' + day,
		height : 28 * fontModifier,
		width : '93%',
		textAlign : 'left',
		//borderRadius : 10,
		font : {
			fontFamily : 'Times New Roman',
			fontSize : 15 * fontModifier,
			fontWeight : 'bold'
		},
		opacity : 1
	});
	dayView.add(dayLabel);
	wrapper.add(dayView);
	
	for (var i = 0; i < classArray.length; i++) {
		var clazz = classArray[i];

		var view = Ti.UI.createView({
			height : '9%',
			width : '93%',
			zIndex : 1,
		});
		var label = Ti.UI.createLabel({
			color : '#DECC99',
			borderColor : '#ece4ce',
			//	borderRadius: 10,
			textAlign : 'left',
			height : 28 * fontModifier,
			borderWidth : 1.7,
			width : '93%',
			text : ' ' + clazz.time + ' - ' + clazz.name,
			font : {
				fontFamily : 'Arial',
				fontSize : 15 * fontModifier
			},
			name : clazz.name,
			time : clazz.time,
			instructor : clazz.instructor,
			room : clazz.room
		});
		view.addEventListener('click', function(e) {
			alert('Class: ' + e.source.name + '\nInstructor: ' + e.source.instructor
				 + '\nTime: ' + e.source.time + '\nRoom: ' + e.source.room);
		});
		view.add(label);
		wrapper.add(view);
	}
}
module.exports = PilatesWindow;
