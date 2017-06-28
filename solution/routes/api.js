var router = require('express').Router();

var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;

var Promise = require('bluebird');


const Hotels = Hotel.findAll().then(data=>{return data});
const Restaurants = Restaurant.findAll().then(data=>{return data});
const Activities = Activity.findAll().then(data=>{return data});


router.get('/', (req, res, next) => {
	res.send('hello aatish');
})

router.get('/hotels', function (req, res, next) {
	res.send(Hotels);
});

router.get('/restaurants', function (req, res, next) {
	res.send(Restaurants);
});

router.get('/activities', function (req, res, next) {
	res.send(Activities);
});

module.exports = {
	router,
	Hotels,
	Restaurants,
	Activities
};