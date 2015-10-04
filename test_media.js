var media = require("./models/media");

media.find("バス釣り", function(err, data) {
	console.log( data );
});
