function GroupWindow(fontModifier) {
	var ServiceHelper = require('ui/service/ServiceHelper');

	ServiceHelper.getGroupSchedule(function(schedule) {
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
	});

	var groupWindow = Ti.UI.createWindow({
		backgroundImage : '/images/group_bg.png',
		navTintColor : '#DECC99',
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
			zIndex : 1
		});
		var label = Ti.UI.createView({
			color : '#DECC99',
			borderColor : '#ece4ce',
			//	borderRadius: 10,
			textAlign : 'left',
			height : 28 * fontModifier,
			borderWidth : 1.7,
			width : '93%',
			text : clazz.time + ' - ' + clazz.name,
			font : {
				fontFamily : 'Arial',
				fontSize : 15 * fontModifier
			},
		});
		view.addEventListener('click', function() {
			alert('Class: ' + clazz.name + '\nInstructor: ' + clazz.instructor + '\nTime: ' + clazz.time + '\nRoom: ' + clazz.room);
		});
		view.add(label);
		wrapper.add(view);
	}
}

module.exports = GroupWindow; 