function HomeWindow(navGroup) {
	var platformHeight = Ti.Platform.displayCaps.platformHeight;
	var fontModifier = 1;
	
	if (platformHeight >= 500) {
		fontModifier = 1.1;
	} else if (platformHeight >= 1000) {
		fontModifier = 1.25;
	}
	
	// body
	var wrapper = Ti.UI.createView({
		backgroundColor : 'transparent',
		height : '87%',
		width : '80%',
		top : '5%'
	});
	var titleLabel = Ti.UI.createLabel({
		color : '#ece4ce',
		text : 'Welcome',
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
	var label = Ti.UI.createLabel({
		color : '#DECC99',
		text : 'The Saint Paul Atheltic Club is the premier fitness and ' + 'social club in the heart of historic downtown Saint Paul.  The Club ' + 'has a lot to offer from state of the art amenities, high energy fitness ' + 'classes, exquisite social events, and our wonderful hospitality. \n',
		top : '10%',
		width : '93%',
		textAlign : 'left',
		font : {
			fontFamily : 'Arial',
			fontSize : 15 * fontModifier
		},
		opacity : 1
	});
	var lineLabel = Ti.UI.createLabel({
		color : '#ece4ce',
		text : '_____________________',
		top : '48%',
		width : '93%',
		textAlign : 'left',
		font : {
			fontFamily : 'Arial',
			fontSize : 16
		},
		opacity : 1
	});
	var clubLabel = Ti.UI.createLabel({
		color : '#DECC99',
		text : 'CLUB HOURS\n',
		top : '55%',
		width : '93%',
		textAlign : 'left',
		font : {
			fontFamily : 'Arial',
			fontSize : 15 * fontModifier,
			fontWeight : 'bold'
		},
		opacity : 1
	});
	var hoursLabel = Ti.UI.createLabel({
		color : '#DECC99',
		text : 'Weekdays - 5am. to 10pm.\n' + 'Weekends - 7am. to 8pm.\n',
		top : '60%',
		width : '93%',
		textAlign : 'left',
		font : {
			fontFamily : 'Arial',
			fontSize : 15 * fontModifier
		},
		opacity : 1
	});
	var lineLabel2 = Ti.UI.createLabel({
		color : '#ece4ce',
		text : '_____________________',
		top : '68%',
		width : '93%',
		textAlign : 'left',
		font : {
			fontFamily : 'Arial',
			fontSize : 16
		},
		opacity : 1
	});
	var contactLabel = Ti.UI.createLabel({
		color : '#DECC99',
		text : '340 Cedar Street\n' + 'St. Paul, MN 55101',
		top : '76%',
		width : '93%',
		textAlign : 'left',
		font : {
			fontFamily : 'Arial',
			fontSize : 15 * fontModifier
		},
		opacity : 1
	});
	
	var phoneNumber = Ti.UI.createLabel({
		color : '#DECC99',
		text : '(651) 291-7722',
		top : '86%',
		width : '93%',
		textAlign : 'left',
		font : {
			fontFamily : 'Arial',
			fontSize : 15 * fontModifier
		},
		opacity : 1
	});
	phoneNumber.addEventListener('click', function(e){
		var dialog = Ti.UI.createAlertDialog({
    		call: 0,
    		buttonNames: ['Call', 'Cancel'],
    		message: '(651)-291-7722'
  		});
  		dialog.addEventListener('click', function(e){
    		if (e.index === e.source.call){
		      	Ti.Platform.openURL('tel:9526490887');
			}
		});
		dialog.show();
	});
	
	var url = Ti.UI.createLabel({
		color : '#417AD2',
		text : 'thespac.com',
		top : '91%',
		width : '93%',
		textAlign : 'left',
		font : {
			fontFamily : 'Arial',
			fontSize : 15 * fontModifier,
			textDecoration:'underline'
		},
		opacity : 1
	});
	url.addEventListener('click', function(e){
		Ti.Platform.openURL('http://thespac.com');
	});
	
	wrapper.add(titleLabel);
	wrapper.add(label);
	wrapper.add(lineLabel);
	wrapper.add(clubLabel);
	wrapper.add(hoursLabel);
	wrapper.add(lineLabel2);
	wrapper.add(contactLabel);
	wrapper.add(phoneNumber);
	wrapper.add(url);
	
	return wrapper;
}
module.exports = HomeWindow;