function Staff({
	name,
	pay
}) {
	this.id = radomID()
	this.name = name || ''
	this.pay = pay || 0
	return {
		id: this.id,
		name: this.name,
		pay: this.pay
	}
}

Staff.prototype.finishWork = function () {
	// 完成一次功能, 在子类中重写
}