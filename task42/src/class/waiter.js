import Staff from './staff.js'

function Waiter(name, pay) {
	Staff.call(this, name, pay)
}

Waiter.prototype.finish = function (params) {
	if (params instanceof Array) {
		// 记录点菜
		console.log('记录点菜')
	} else if (typeof params === 'string') {
		// 上菜
		console.log('上菜')
	}
}

export default Waiter