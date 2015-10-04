var express = require('express');
var router = express.Router();
var media = require("../models/media");

router.get('/', function(req, res, next) {
	res.render("images", { title: "画像検索" } );
});

module.exports = router;
