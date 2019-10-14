function Waiter(
	name,
	pay) {
	Staff.call(this, {
		name: name,
		pay: pay
	})
}

Waiter.prototype.finishWork = function (params) {
	if (params instanceof Array) {
		console.log('正在点菜')
	} else if (typeof params === 'string') {
		console.log('正在上菜')
	}
}