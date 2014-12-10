function SmallGroupWindow(fontModifier) {
	var ServiceHelper = require('ui/service/ServiceHelper');
	
	var platform = Ti.Platform.osname;

	ServiceHelper.getSmallGroupSchedule(function(schedule) {
		var mondayClassArray = schedule.classSchedule[0].classes;
		var tuesdayClassArray = schedule.classSchedule[1].classes;
		var wednesdayClassArray = schedule.classSchedule[2].classes;
		var thursdayClassArray = schedule.classSchedule[3].classes;
		var fridayClassArray = schedule.classSchedule[4].classes;
		var saturdayClassArray = schedule.classSchedule[5].classes;
		var sundayClassArray = schedule.classSchedule[6].classes;

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
	
	var smallGroupWindow = Ti.UI.createWindow({
		backgroundImage : imagePath + 'small_group_bg.png',
		navTintColor : '#DECC99',
		barColor : '#2e2e2e',
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
	smallGroupWindow.add(body);
	smallGroupWindow.add(wrapper);

	return smallGroupWindow;
}

function setupClasses(wrapper, fontModifier, day, classArray) {
	var PopupWindow = require('ui/common/PopupWindow');
	
	var classViewHeight, classLabelHeight, dayViewHeight, dayLabelHeight;
	var platform = Ti.Platform.osname;
	if ( platform == 'android') {
		dayViewHeight = 34;
		dayLabelHeight = 32;
		classViewHeight = 35;
		classLabelHeight = 30;
	}
	else {
		dayViewHeight = '10%';
		dayLabelHeight = '92%';
		classViewHeight = '9%';
		classLabelHeight = '92%';
	}
	
	var dayView = Ti.UI.createView({
		//top:'2%',
		height : dayViewHeight,
		width : '93%',
		zIndex : 1
	});
	var dayLabel = Ti.UI.createLabel({
		color : '#ece4ce',
		backgroundColor : '#d29941',
		text : '  ' + day,
		height : dayLabelHeight,
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
			height : classViewHeight,
			width : '93%',
			zIndex : 1,
		});
		var label = Ti.UI.createLabel({
			color : '#DECC99',
			borderColor : '#ece4ce',
			textAlign : 'left',
			height : classLabelHeight,
			borderWidth : 1.7,
			width : '92%',
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
		label.addEventListener('click', function(e) {
			var classInfo = 'Class: ' + e.source.name + '\nInstructor: ' + e.source.instructor
				 + '\nTime: ' + e.source.time + '\nRoom: ' + e.source.room;
			var popupWindow = PopupWindow('Class Information', classInfo, '').open({animated : true});
		});
		view.add(label);
		wrapper.add(view);
	}
}
module.exports = SmallGroupWindow;
