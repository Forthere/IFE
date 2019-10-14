function Restaurant({
	money,
	seats,
	staff
}) {
	this.money = money || 0
	this.seats = seats || 0
	this.staff = staff || []
}

// 招聘
Restaurant.prototype.hire = function (obj) {
	this.staff.push(obj)
}


// 解雇
Restaurant.prototype.fire = function (obj) {
	let point = -1;
	for (let i = 0, l = this.staff.length; i < l; i++) {
		if (obj.id === this.staff[i].id) {
			point = i
		}
	}
	if (point !== -1) {
		this.staff.splice(point, 1)
	}
}