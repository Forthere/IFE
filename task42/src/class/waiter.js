import Staff from './staff.js'

var instance

function Waiter(name, pay) {
	if (!instance) {
		instance = Staff.call(this, name, pay)
	}
	return instance
}

Waiter.prototype.finish = function (params) {
	if (params instanceof Array) {
		// 记录点菜
		for (let i = 0, l = params.length; i < l; i++) {
			console.log(`顾客点了【${params[i].name}】`)
		}
	} else if (typeof params === 'string') {
		// 上菜
		console.log(`上【${params}】给顾客`)
	}
}

Waiter.prototype.sendMenu = function (menus) {
	// 菜单
	for (let i = 0, l = menus.length; i < l; i++) {
		console.log(`菜名:${menus[i].name}, 价格:${menus[i].price}, 预计时间${menus[i].cost};`)
	}
}

export default Waiter