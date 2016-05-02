var express = require('express'),
	r = express.Router(),
	h = require('./handler'),
	router;

router = function(app){
	r.get('/', h.home);
	r.get('/nilai', h.nilai);
	app.use(r);
};
module.exports = router;