function GroupWindow(fontModifier) {
	var ServiceHelper = require('ui/service/ServiceHelper');
	
	ServiceHelper.getGroupSchedule(function(schedule) {
		var mondayClassesArray 		= schedule.schedule.monday.clazz;
		var tuesdayClassesArray 	= schedule.schedule.tuesday.clazz;
		var wednesdayClassesArray 	= schedule.schedule.wednesday.clazz;
		var thursdayClassesArray 	= schedule.schedule.thursday.clazz;
		var fridayClassesArray 		= schedule.schedule.friday.clazz;
		var saturdayClassesArray 	= schedule.schedule.saturday.clazz;
		var sundayClassesArray		= schedule.schedule.sunday.clazz;

		for(var i = 0; i < mondayClassesArray.length; i++ ) {
			var view = Ti.UI.createView({
				
			});
			var label = Ti.UI.createView({
				
			});	

		}
	});
	
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