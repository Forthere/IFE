import Staff from './staff'

var instance;

function Cook(name, pay) {
	if (!instance) {
		instance = Staff.call(this, name, pay)
	}
	return instance
}

Cook.prototype.finish = function () {
	console.log('烹饪出菜品')
}

export default Cook