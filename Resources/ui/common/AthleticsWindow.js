function AthleticsWindow(navGroup) {
	var GroupWindow = require('ui/common/GroupWindow'),
		SmallGroupWindow = require('ui/common/SmallGroupWindow'),
		PilatesWindow = require('ui/common/PilatesWindow');
	
	var platform = Ti.Platform.osname;
	var platformHeight = Ti.Platform.displayCaps.platformHeight;
	var fontModifier = 1;

	if (platformHeight >= 500) {
		fontModifier = 1.1;
	} else if (platformHeight >= 1200) {
		fontModifier = 1.25;
	}
	
	var titleTop, groupButtonTop, smallButtonTop, pilatesButtonTop, width;
	if (platform == 'android') {
		titleTop = '6%';
		groupButtonTop = '13%';
		smallButtonTop = '33%';
		pilatesButtonTop = '53%';
		width = '73%';
	}
	else {
		titleTop = '2%';
		groupButtonTop = '12%';
		smallButtonTop = '32%';
		pilatesButtonTop = '52%';
		width = '90%';
	}

	// body
	var wrapper = Ti.UI.createScrollView({
		backgroundColor : 'transparent',
		height : '80%',
		width : '80%',
		top : '5%'
	});
	var titleLabel = Ti.UI.createLabel({
		color : '#ece4ce',
		text : 'Athletics',
		top : titleTop,
		width : width,
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
		top : groupButtonTop,
		height : '17%',
		width : width,
		color : '#DECC99',
		textAlign : 'center',
		borderColor : '#ece4ce',
		borderWidth:1.7,
	//	borderRadius : 15,
		font : {
			fontFamily : 'Arial',
			fontSize : 16 * fontModifier
		},
	});
	groupButton.addEventListener('click', function() {
		if ( platform == 'android' ){
			GroupWindow(fontModifier).open({animated : true});
		} else {
			navGroup.openWindow(GroupWindow(fontModifier), {animated : true});
		}
	});

	// create the small group fitness button
	var smallButton = Ti.UI.createButton({
		title : 'Small Group Schedule *',
		top : smallButtonTop,
		height : '17%',
		width : width,
		color : '#DECC99',
		textAlign : 'center',
		borderColor : '#ece4ce',
		borderWidth:1.7,
	//	borderRadius : 15,
		font : {
			fontFamily : 'Arial',
			fontSize : 16 * fontModifier
		},
	});
	smallButton.addEventListener('click', function() {
		if ( platform == 'android' ){
			SmallGroupWindow(fontModifier).open({animated : true});
		} else {
			navGroup.openWindow(SmallGroupWindow(fontModifier), {animated : true});	
		}
	});

	// create the pilates group fitness button
	var pilatesButton = Ti.UI.createButton({
		title : 'Pilates Reformer *',
		top : pilatesButtonTop,
		height : '17%',
		width : width,
		color : '#DECC99',
		textAlign : 'center',
		borderColor : '#ece4ce',
		borderWidth:1.7,
//		borderRadius : 15,
		font : {
			fontFamily : 'Arial',
			fontSize : 16 * fontModifier
		},
	});
	pilatesButton.addEventListener('click', function() {
		if ( platform == 'android' ){
			PilatesWindow(fontModifier).open({animated : true});
		} else {
			navGroup.openWindow(PilatesWindow(fontModifier), {animated : true});	
		}
	});
	
	var exclusionLabel = Ti.UI.createLabel({
		text : '* Please contact us for prices and registration of these classes',
		width : width,
		color : '#DECC99',
		bottom : '0%',
		font : {
			fontFamily : 'Arial',
			fontSize : 12 * fontModifier
		},
	});

	wrapper.add(titleLabel);
	wrapper.add(groupButton);
	wrapper.add(smallButton);
	wrapper.add(pilatesButton);
	wrapper.add(exclusionLabel);

	return wrapper;
}

module.exports = AthleticsWindow; 