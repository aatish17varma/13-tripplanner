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
	return day_restaurant.create({
		dayId: req.params.id,
		restaurantId: req.body
	}).then(data => {
		console.log('created restaurants');
	})
})

router.delete('/days/:id/restaurants', (req, res, next) => {
	day_restaurant.findAll({
		where: {
			dayId: req.params.id,
			restaurantId: req.body
		}
	}).then(dataArray => {
		dataArray.forEach(el => {
			return el.destroy()
		})
	}).then(destroyed => {
		console.log('destroyed restaurants')
	})
})

router.post('/days/:id/activity', (req, res, next) => {
	return day_activity.create({
		dayId: req.params.id,
		activityId: req.body
	}).then(data =>{
		console.log('created activity');
	})
})

router.delete('/days/:id/activities', (req, res, next) => {
	day_activity.findAll({
		where: {
			dayId: req.params.id,
			activityId: req.body
		}
	}).then(dataArray => {
		dataArray.forEach(el => {
			return el.destroy()
		})
	}).then(destroyed => {
		console.log('destroyed activities')
	})
})

module.exports = router;