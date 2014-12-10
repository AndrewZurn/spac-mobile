var SMALL_GROUP_FILENAME = "small_group_schedule.json";
var GROUP_FILENAME = "group_schedule.json";
var PILATES_FILENAME = "pilates_schedule.json";
var EVENTS_FILENAME = "events.json";

var GROUP_URI = "/schedule/group"
var SMALL_GROUP_URI = "/schedule/small_group"
var PILATES_URI = "/schedule/pilates"
var EVENTS_URI = "/events"

var BASE_URI = "https://spac-mobile-editor.herokuapp.com";

exports.getGroupSchedule = function(callback) {
	getJSONFromURL(GROUP_URI, BASE_URI, callback, null);
};

exports.getSmallGroupSchedule = function(callback) {
	getJSONFromURL(SMALL_GROUP_URI, BASE_URI, callback, null);
};

exports.getPilatesSchedule = function(callback) {
	getJSONFromURL(PILATES_URI, BASE_URI, callback, null);
};

exports.getEventsSchedule = function(callback) {
	getJSONFromURL(EVENTS_URI, BASE_URI, callback, null);
};

exports.getInstructorInfo = function(instructorId, callback) {
	// will need to figure out later
};

exports.getClassInfo = function(classId, callback) {
	// will need to figure out later
};

function getJSONFromURL(schedule_uri, base_uri, callback, fn_progress) {
	var myHttpClient = Ti.Network.createHTTPClient();

	myHttpClient.onload = function() {
		var data = myHttpClient.responseText;
		data = JSON.parse(data);
		callback(data);
	};

	myHttpClient.onerror = function() {
		alert('Could not retrieve data for item. Please try again later.');
	};

	myHttpClient.open("GET", base_uri + schedule_uri);
	myHttpClient.send(null);
}