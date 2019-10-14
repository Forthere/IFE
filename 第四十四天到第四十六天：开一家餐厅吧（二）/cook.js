// function Cook(
// 	name,
// 	pay) {
// 	console.log(Staff)
// 	Staff.call(this, {
// 		name: name,
// 		pay: pay
// 	})
// }

// Cook.prototype.finishWork = function () {
// 	console.log('厨师完成了一次烹饪.')
// }
var Cook = (function () {
	var instantiated;

	function init(name, pay) {
		return Staff.call(this, {
			name: name,
			pay: pay
		})
	}

	return function (name, pay) {
		if (!instantiated) {
			instantiated = init(name, pay)
		}
		return instantiated
	}
})()