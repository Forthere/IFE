import {
	randomID
} from '../utils/utils.js'

function Staff(name, pay) {
	this.id = randomID()
	this.name = name
	this.pay = pay
}

Staff.prototype.finish = function () {
	// 完成一次工作
	console.log('完成一次工作')
}

export default Staff