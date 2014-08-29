function PopupWindow(eventTitle, content, contactInfo) {
	
	var windowHeight = '38%';
	if (contactInfo != null && contactInfo != '') {
		windowHeight = '50%';
	}
	
	var window = Ti.UI.createWindow({
		height : windowHeight,
		width : '73%',
		borderRadius : 15,
	    borderColor : '#d29941',
	    backgroundColor : '#2e2e2e'
	});
	
	var view = Ti.UI.createView({
		height : '98%',
		width : 'auto',
	});
	
	var title = Ti.UI.createLabel({
		text : eventTitle,
		top : '2%',
		height : '10%',
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
		top : '14%',
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
			top : '66%',
			height : '5%',
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
			top : '72%',
			height : '5%',
			widht : '90%',
			color : '#00C2FC',
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
											'If you could please email be back at ~~PLEASE INSERT EMAIL ADDRESS HERE~~ ' +
											'with some additional information on this event, that would be great.\r\n\r\n' +
											'Thanks, and have a nice day.\r\n\r\n ~~PLEASE INSERT YOUR NAME NERE~~';
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
	    height : '10%',
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
	
	window.add(view);
	
	return window;
}
module.exports = PopupWindow;