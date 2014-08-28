var SMALL_GROUP_FILENAME = "small_group_schedule.json";
var GROUP_FILENAME = "group_schedule.json";
var PILATES_FILENAME = "pilates_schedule.json";
var EVENTS_FILENAME = "events.json";

var BASE_URL = "http://andrewzurn.com/spac-demo/";

exports.getSmallGroupSchedule = function(callback) {
	getJSONFromURL(SMALL_GROUP_FILENAME, BASE_URL, callback, null);
};

exports.getGroupSchedule = function(callback) {
	getJSONFromURL(GROUP_FILENAME, BASE_URL, callback, null);
};

exports.getPilatesSchedule = function(callback) {
	getJSONFromURL(PILATES_FILENAME, BASE_URL, callback, null);
};

exports.getEventsSchedule = function(callback) {
	getJSONFromURL(EVENTS_FILENAME, BASE_URL, callback, null);
};

exports.getInstructorInfo = function(instructorId, callback) {
	// will need to figure out later
};

exports.getClassInfo = function(classId, callback) {
	// will need to figure out later
};

function getJSONFromURL(filename, url, callback, fn_progress) {
	var myHttpClient = Ti.Network.createHTTPClient();

	myHttpClient.onload = function() {
		var data = myHttpClient.responseText;
		data = JSON.parse(data);
		callback(data);
	};

	myHttpClient.onerror = function() {
		alert('Could not retrieve data for item. Please try again later.');
	};

	myHttpClient.open("GET", url + filename);
	myHttpClient.send(null);
}