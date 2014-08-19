function ApplicationTabGroup(Window) {
	// import dependencies
	var HomeWindow = require('ui/common/HomeWindow'),
		AthleticsWindow = require('ui/common/AthleticsWindow'),
		EventsWindow = require('ui/common/EventsWindow');

	// create the tab group to use
	var tabGroup = Ti.UI.createTabGroup();
	tabGroup.barColor = "#2e2e2e";
	
	var homeWindow = HomeWindow(tabGroup),
		athleticsWindow = AthleticsWindow(tabGroup),
		eventsWindow = EventsWindow(tabGroup);

	// add the Home tab
	tabGroup.addTab(Ti.UI.createTab({
		id : 0,
		image : 'images/home.png',
		title : '  HOME',
		font : {
			fontSize : 14,
			fontFamily : 'Times New Roman',
			fontWeight : 'bold'
		},
		window : Ti.UI.createWindow({
			backgroundImage : '/images/spac_bg.png',
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
		})
	}));

	// add the Athletics tab
	tabGroup.addTab(Ti.UI.createTab({
		id : 1,
		image : 'images/athletics.png',
		title : ' ATHLETICS',
		font : {
			fontSize : 14,
			fontFamily : 'Times New Roman',
			fontWeight : 'bold'
		},
		window : Ti.UI.createWindow({
			backgroundImage : '/images/spac_bg.png',
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
		})
	}));

	// add the Events tab
	tabGroup.addTab(Ti.UI.createTab({
		id : 2,
		image : 'images/events.png',
		title : '  EVENTS',
		font : {
			fontSize : 14,
			fontFamily : 'Times New Roman',
			fontWeight : 'bold'
		},
		window : Ti.UI.createWindow({
			backgroundImage : '/images/spac_bg.png',
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
		})
	}));
	tabGroup.tabs[0].window.add(homeWindow);
	tabGroup.tabs[1].window.add(athleticsWindow);
	tabGroup.tabs[2].window.add(eventsWindow);

	// Now call our overrideTabs function!
	overrideTabs(tabGroup, {
		backgroundColor : '#2e2e2e'
	}, {
		backgroundColor : '#545454',
		color : '#d29941',
		style : 0
	}, {
		backgroundColor : '#2e2e2e',
		color : '#d29941',
		style : 0
	});
	
		tabGroup.addEventListener('swipe', function(e) {
		if (e.direction == 'left') {
			if (tabGroup.getActiveTab().id < 2) {
			tabGroup.setActiveTab(tabGroup.getActiveTab().id + 1);
			//TODO: Just need to change the active tab on the bottom of the screen now
			}

			// if (tabGroup.getActiveTab().id == 0) {
				// tabGroup.tabs[1].window.open({animated: true});
			// } else if (tabGroup.getActiveTab().id == 1) {
				// tabGroup.tabs[2].window.open({animated: true});
			// } else {
				// //do nothing
			// }
		} else {
			if (tabGroup.getActiveTab().id > 0) {
				tabGroup.setActiveTab(tabGroup.getActiveTab().id - 1);
				//TODO: Just need to change the active tab on the bottom of the screen now
			}

			// if (tabGroup.getActiveTab().id == 2) {
				// tabGroup.tabs[1].window.open({animated: true});
			// } else if (tabGroup.getActiveTab().id == 1) {
				// tabGroup.tabs[0].window.open({animated: true});
			// } else {
				// //do nothing
			// }

		}
	});

	return tabGroup;
};

function overrideTabs(tabGroup, backgroundOptions, selectedOptions, deselectedOptions) {
	// are we restyling the tab groups?
	if (tabGroup.overrideTabs) {
		tabGroup.remove(tabGroup.overrideTabs);
	}

	// a bunch of our options need to default to 0 for everything to position correctly; we'll do it en mass:
	deselectedOptions.top = deselectedOptions.bottom = selectedOptions.top = selectedOptions.bottom = backgroundOptions.left = backgroundOptions.right = backgroundOptions.bottom = 0;

	// create the overriding tab bar using the passed in background options
	backgroundOptions.height = 50;
	var background = Ti.UI.createView(backgroundOptions);

	// and create our individual tab buttons
	var activeTab = null, increment = 100 / tabGroup.tabs.length;
	deselectedOptions.width = selectedOptions.width = String(increment) + '%';
	for (var i = 0, l = tabGroup.tabs.length; i < l; i++) {
		(function(i) {
			var tab = tabGroup.tabs[i];
			selectedOptions.left = deselectedOptions.left = String(increment * i) + '%';

			// set the title of the button to be the title of the tab
			selectedOptions.title = deselectedOptions.title = tab.title;
			selectedOptions.font = deselectedOptions.font = tab.font;

			// create buttons that will act as overlays for the tabs
			tab.selected = Ti.UI.createButton(selectedOptions);
			tab.deselected = Ti.UI.createButton(deselectedOptions);

			// add an image to those buttons
			tab.selected.image = tab.deselected.image = tab.image;

			tab.deselected.addEventListener('click', function() {
				if (activeTab) {
					activeTab.selected.visible = false;
				}
				tab.selected.visible = true;
				activeTab = tab;
				tabGroup.setActiveTab(i);
			});
			tab.selected.visible = false;
			background.add(tab.deselected);
			background.add(tab.selected);
		})(i);
	}

	tabGroup.add(background);
	tabGroup.overrideTabs = background;

	// "click" the first tab to get things started
	tabGroup.tabs[0].deselected.fireEvent('click');
}

module.exports = ApplicationTabGroup;
