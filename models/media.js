var fs = require("fs");
var https = require("https");

function find(tagName, callback) {
	var token = accessToken();
	function accessToken() {
		var config = require("../config/config");
		var token = config.instagram.api.client.accessToken("insta-api-test");
		return token;
	}
	
	var url = "https://api.instagram.com/v1/tags/"+ tagName +"/media/recent?access_token=" + token;
	
	var res = https.get(url, function(res) {
		var body = "";
		res.on("data", function(chunk) {
			body += chunk;
		});
		res.on('end', function(res){
console.log( body );
			ret = JSON.parse(body);
			callback(null, body);
		});
	}).on("error", function(err) {
		callback(err);
	});
}

module.exports = {
	find: find
}
