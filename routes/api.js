var express = require('express');
var router = express.Router();

router.get('/images/find', function(req, res, next) {
	var media = require("../models/media");
	var tagName = req.query.tag_name;
	media.find(tagName, function(err, data) {
		res.json(data);
	});
});

module.exports = router;
