$.get('/api/hotels')
	.then(hotels => {
		let $hotelList = hotels.map(hotel => {
			return `<option>${hotel.name}</option>`
		});
		$('#hotel-choices').empty().append($hotelList)
	})

	.catch(console.error.bind(console));

$.get('/api/restaurants')
	.then(restaurants => {
		let $restaurantList = restaurants.map(restaurant => {
			return `<option>${restaurant.name}</option>`
		});
		$('#restaurant-choices').empty().append($restaurantList)
	})
	.catch(console.error.bind(console));

$.get('/api/activities')
	.then(activities => {
		let $activityList = activities.map(activity => {
			return `<option>${activity.name}</option>`
		});
		$('#activity-choices').empty().append($activityList)
	})
	.catch(console.error.bind(console));