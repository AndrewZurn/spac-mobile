function ApplicationScrollableWindow() {
	// import dependencies
	var HomeWindow = require('ui/common/HomeWindow'), AthleticsWindow = require('ui/common/AthleticsWindow'), EventsWindow = require('ui/common/EventsWindow');

	var platform = Ti.Platform.osname;
	
	var imagePath;
	if ( platform == 'android' ) {
		imagePath = '/images/HD/';
	} else { // is iphone or ipad
		imagePath = '/images/SD/';
	}

	var window = Ti.UI.createWindow({
		backgroundImage : imagePath + 'spac_bg.png',
		barColor : '#2e2e2e',
		titleControl : Titanium.UI.createLabel({
			color : '#d29941',
			height : 'auto',
			width : 'auto',
			top : 10,
			text : 'SAINT PAUL ATHLETIC CLUB',
			textAlign : 'center',
			font : {
				fontFamily : 'Times New Roman',
				fontSize : 18,
				fontWeight : 'bold'
			}
		})
	});

	if ( platform == 'android'){
		var homeWindowView = HomeWindow(), athleticsWindowView = AthleticsWindow(), eventsWindowView = EventsWindow(window, null);
	} else { //is iphone or ipad
		var navGroup = Ti.UI.iOS.createNavigationWindow({
			window : window
		});
		
		var homeWindowView = HomeWindow(navGroup), athleticsWindowView = AthleticsWindow(navGroup), eventsWindowView = EventsWindow(window, navGroup);
	}

	var scrollableView = Ti.UI.createScrollableView({
		views : [homeWindowView, athleticsWindowView, eventsWindowView],
		showPagingControl : false,
		height : '94%',
		top : '0%'
	});
	scrollableView.addEventListener('scroll', function(e) {//also takes care of
		if (e.currentPage == 0) {
			updateButtonLayouts(homeButton);
		} else if (e.currentPage == 1) {
			updateButtonLayouts(athleticsButton);
		} else {
			updateButtonLayouts(eventsButton);	
		}
	});

	var oldButtonIndex = 0;
	var buttonView = Ti.UI.createView({
		height : '10%',
		bottom : 2,
	});

	var homeButton = Ti.UI.createButton({
		image : imagePath + 'home.png',
		title : '  HOME',
		color : '#d29941',
		backgroundColor : '#545454',
		backgroundSelectedColor : '#545454',
		backgroundDisabledColor : '#2e2e2e',
		backgroundImage : 'none',
		style : 'none',
		font : {
			fontSize : 13,
			fontFamily : 'Times New Roman',
			fontWeight : 'bold'
		},
		width : '33%',
		height : '100%',
		left : '0%',
	});
	homeButton.addEventListener('click', function() {
		scrollableView.scrollToView(homeWindowView);
	});
	buttonView.add(homeButton);

	var athleticsButton = Ti.UI.createButton({
		image : imagePath + 'athletics.png',
		title : '  ATHLETICS',
		color : '#d29941',
		backgroundColor : '#2e2e2e',
		backgroundSelectedColor : '#545454',
		backgroundDisabledColor : '#2e2e2e',
		backgroundImage : 'none',
		style : 'none',
		font : {
			fontSize : 13,
			fontFamily : 'Times New Roman',
			fontWeight : 'bold'
		},
		width : '33%',
		height : '100%',
		left : '33%',
	});
	athleticsButton.addEventListener('click', function() {
		scrollableView.scrollToView(athleticsWindowView);
	});
	buttonView.add(athleticsButton);

	var eventsButton = Ti.UI.createButton({
		image : imagePath + 'events.png',
		title : '  EVENTS',
		color : '#d29941',
		backgroundColor : '#2e2e2e',
		backgroundSelectedColor : '#545454',
		backgroundDisabledColor : '#2e2e2e',
		backgroundImage : 'none',
		style : 'none',
		font : {
			fontSize : 13,
			fontFamily : 'Times New Roman',
			fontWeight : 'bold'
		},
		width : '33%',
		height : '100%',
		left : '66%',
	});
	eventsButton.addEventListener('click', function() {
		scrollableView.scrollToView(eventsWindowView);
	});
	buttonView.add(eventsButton);

	window.add(scrollableView);
	window.add(buttonView);
	
	function updateButtonLayouts(button) {
		homeButton.setBackgroundColor('#2e2e2e');
		athleticsButton.setBackgroundColor('#2e2e2e');
		eventsButton.setBackgroundColor('#2e2e2e');
		
		button.setBackgroundColor('#545454');
	}

	if ( platform == 'android' ){
		return window;
	} else {
		return navGroup;
	}
}

module.exports = ApplicationScrollableWindow;
