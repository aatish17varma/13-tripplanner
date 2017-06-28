var router = require('express').Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');

router.get('/', (req, res, next) => {
	res.send('hello aatish');
})

router.get('/hotels', function (req, res, next) {
	Hotel.findAll().then(data => {
		res.send(data);
	});
});

router.get('/restaurants', function (req, res, next) {
	Restaurant.findAll().then(data => {
		res.send(data);
	});
});

router.get('/activities', function (req, res, next) {
	Activity.findAll().then(data => {
		res.send(data);
	});

});

module.exports = router;