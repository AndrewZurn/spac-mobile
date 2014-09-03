function PopupWindow(eventTitle, content, contactInfo) {
	
	var windowHeight = '36%';
	if (contactInfo != null && contactInfo != '') {
		windowHeight = '50%';
	}
	
	var platform = Ti.Platform.osname;
	var contentTop, contactTop, urlTop;
	if (platform == 'android') {
		contentTop = '8%';
		contactTop = '56%';
		urlTop = '64%';
	}
	else {
		contentTop = '11%';
		contactTop = '64%';
		urlTop = '72%';
	}
	
	var window = Ti.UI.createWindow({
		height : '100%',
		width : '100%',
	});
	
	var view = Ti.UI.createView({
		height : windowHeight,
		width : '73%',
		borderColor : '#d29941',
	    backgroundColor : '#2e2e2e'
	});
	
	var title = Ti.UI.createLabel({
		text : eventTitle,
		top : '2%',
		width : '90%',
		color : '#DECC99',
		font : {
			fontFamily : 'Arial',
			fontSize : 19,
			fontWeight : 'bold'
		},
	});
	view.add(title);
	
	var content = Ti.UI.createLabel({
		text : content,
		top : contentTop,
		height : '50%',
		width : '90%',
		color : '#DECC99',
		font : {
			fontFamily : 'Arial',
			fontSize : 16,
		},
	});
	view.add(content);
	
	if (contactInfo != null && contactInfo != '') {
		var contact = Ti.UI.createLabel({
			text : 'For more info:',
			top : contactTop,
			widht : '90%',
			color : '#DECC99',
			font : {
				fontFamily : 'Arial',
				fontSize : 16,
				fontWeight : 'bold'
			},
		});
		var url = Ti.UI.createLabel({
			text : contactInfo,
			top : urlTop,
			widht : '90%',
			color : '#417AD2',
			font : {
				fontFamily : 'Arial',
				fontSize : 16,
				fontWeight : 'bold'
			},
			eventTitle : eventTitle
		});
		url.addEventListener('click', function(e){
			var url = e.source.text;
			if (url.indexOf('@') > 0) {
				var emailDialog = Titanium.UI.createEmailDialog();
				emailDialog.subject = "More info regarding " + e.source.eventTitle;
				emailDialog.toRecipients = [url];
				emailDialog.messageBody = 'Hello,\r\n\r\nI would like some more information regarding the ' 
											+ e.source.eventTitle + ' event.\r\n\r\n' +
											'If you could please email be back with some additional ' +
											'information on this event, that would be great.\r\n\r\n' +
											'Thank you.';
				emailDialog.open();
			}
			else {
				Ti.Platform.openURL(e.source.text);
			}
		});
		
		view.add(contact);
		view.add(url);
	}
	
	var closeButton = Ti.UI.createButton({
		bottom : '3%',
	    width : '40%',
	    height : '13%',
	    title : "Close",
	    textAlign : 'center',
		color : '#d29941',
		backgroundColor : '#545454',
		backgroundImage : 'none',
		style : 'none',
		font : {
			fontSize : 20,
			fontFamily : 'Times New Roman',
			fontWeight : 'bold'
		},
	});
	closeButton.addEventListener('click', function(){
		window.close({animated : true});
	});
	view.add(closeButton);
	
	var transparentView = Ti.UI.createView({
		backgroundColor : 'black',
		height : '100%',
		width : '100%',
		opacity : 0.45
	});
	transparentView.addEventListener('click', function(){
		window.close();
	});
	
	window.add(transparentView);
	window.add(view);
	
	return window;
}
module.exports = PopupWindow;