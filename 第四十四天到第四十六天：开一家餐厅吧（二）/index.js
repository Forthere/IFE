var ifeRestaurant = new Restaurant({
	money: 1000000,
	seats: 20,
	staff: []
});

var newCook = new Cook("Tony", 10000);
var newWaiter = new Waiter("Waiter", 3500);
console.log(newCook)
ifeRestaurant.hire(newCook);
ifeRestaurant.hire(newWaiter)
// ifeRestaurant.fire(newCook)