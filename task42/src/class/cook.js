import Staff from './staff'

function Cook(name, pay) {
	Staff.call(this, name, pay)
}

Cook.prototype.finish = function () {
	console.log('烹饪出菜品')
}

export default Cook