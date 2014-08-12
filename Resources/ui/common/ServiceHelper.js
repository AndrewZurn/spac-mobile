var SMALL_GROUP_FILENAME = "small_group_schedule.json";
var GROUP_FILENAME = "group_schedule.txt";
var PILATES_FILENAME = "pilates_schedule.txt";
var EVENTS_FILENAME = "events_schedule.txt";

var BASE_URL = "http://andrewzurn.com/spac-demo/";

exports.getSmallGroupSchedule = function() {
	return JSON.parse(getJSONFromURL(SMALL_GROUP_FILENAME, BASE_URL, null, null));
};

exports.getGroupSchedule = function() {
	var data = JSON.parse(getJSONFromURL(GROUP_FILENAME, BASE_URL, null, null)); //FIXME: See message below.
	return data;
};

exports.getPilatesSchedule = function() {
	return getJSONFromURL(PILATES_FILENAME, BASE_URL, null, null);
};

exports.getEventsSchedule = function() {
	return JSON.parse(getJSONFromURL(EVENTS_FILENAME, BASE_URL, null, null));
};

exports.getInstructorInfo = function(instructorId) {
	// will need to figure out later
};

exports.getClassInfo = function(classId) {
	// will need to figure out later
};

function getJSONFromURL(filename, url, fn_end, fn_progress) {
	var myHttpClient = Ti.Network.createHTTPClient();

	myHttpClient.onload = function() {
		var json = JSON.parse(myHttpClient.responseText);
		alert(json.Schedule.Monday.Class[0]);  //FIXME: No Clue why this isn't working... need to figure it out.
		return json;
	};

	myHttpClient.onerror = function() {
		alert('Could not retrieve data for item. Please try again later.');
	};

	myHttpClient.open("GET", url + filename);
	myHttpClient.send(null);
}