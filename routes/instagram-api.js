var express = require('express');
var router = express.Router();
var config = require('../config/config');
var apiConfig = config.instagram.api;
var clientConfig = apiConfig.client["insta-api-test"];
var exec = require('child_process').exec
var fs = require('fs');

router.get('/oauth-callback', function(req, res, next) {
	var code = req.query.code;
	if ( code ) {
		// get access token
		var cmd = " curl " +
		"-F 'client_id="+ clientConfig.client_id +"' " +
		"-F 'client_secret="+ clientConfig.client_secret +"' " +
		"-F 'grant_type=authorization_code' " +
		"-F 'redirect_uri="+ clientConfig.redirect_url +"' " +
		"-F 'code="+ code +"' " +
		apiConfig.request_access_token_url.host + apiConfig.request_access_token_url.path;
		
		console.log( cmd );
		exec(cmd, function (error, stdout, stderr) {
			console.log( stdout );
			var filepath = clientConfig.token_stored_file;
			var token = JSON.parse(stdout).access_token;
			fs.writeFileSync(filepath, token);
			res.status(200).send(stdout);
		});
	} else {
		
		res.send( req.query );
	}
});

module.exports = router;
