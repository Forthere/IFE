import Staff from './staff'

var instance;

function Cook(name, pay) {
	if (!instance) {
		instance = Staff.call(this, name, pay)
	}
	return instance
}

Cook.prototype.finish = function (obj) {
	console.log(`烹饪【${obj.name}】,需要等待${obj.cost}分钟`)
}

export default Cook