const router = require('express').Router();
const Day = require('../models/day');
const Restaurant = require('../models/restaurant');

router.get('/days/findAll', (req, res, next) => {
	Day.findAll().then(days => {
		res.send(days);
	})
})

router.get('/days/:id', (req, res, next) => {
	Day.findOne({
		where: {
			number: req.params.id
		}
	}).then(day => {
		res.send(day);
	})
})

router.post('/days/:id', (req, res, next) => {
	Day.create({
		number: req.params.id
	}).then(day => {
		res.send(day);
	})
})

router.delete('/days/:id', (req, res, next) => {
	Day.findOne({
		where: {
			number: req.params.id
		}
	}).then(day => {
		res.send(day);
	})
})

router.post('/days/:id/restaurants', (req, res, next) => {

})

router.delete('/days/:id/restaurants', (req, res, next) => {
})

router.post('/days/:id/activity', (req, res, next) => {
})

router.post('/days/:id/activity', (req, res, next) => {
})
module.exports = router;
