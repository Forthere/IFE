/*
	** 需求
		我们现在要开一个餐厅啦，餐厅里面有服务员，有厨师，有顾客。
		学习面向对象，为餐厅和几个角色创建自己的类吧。
		餐厅可以招聘或者解雇职员，职员越多，就越能够满足更多的顾客需求，从而赚取更多的钱
		餐厅里的容量是有限的，当顾客坐满了，其他顾客需要排队
		服务员的工作有两个职责，一个是负责点菜，另外一个是上菜
		厨师的职责就一个，烹饪食物
		顾客可以做两件事情，一个是点菜，一个是吃
		系列任务的第一个部分，我们先只实现类的编写。并通过大量阅读掌握JavaScript的面向对象编程
*/

/*
	** 设计
	员工类:
		ID, 姓名, 工资
		方法: 完成一次方法
	服务员
		完成一次工作, 如果参数不是数组, 则记录客人点菜, 如果参数不是数组则是上菜行为
	厨师
		烹饪出菜品
	顾客
		点菜
		吃
	餐厅类:
		招聘, 解聘
		容量, 金钱, 员工列表
	菜品:
		名称, 价格, 烹饪时间
*/
function ID() {
	return (new Date().getTime()) + '' + Math.random() * 10000
}

function Staff(name, salary) {
	this.id = ID()
	this.name = name
	this.salary = salary
	this.finishWork = function () {
		// 完成工作
	}
}

function Waiter(name, salary) {
	Staff.call(this, name, salary);
	this.finishWork = function (params) {
		if (params instanceof Array) {
			// 点菜
			console.log(`编号${this.id}, 姓名:${this.name} 记录菜品${params.join(',')}`)
		} else {
			// 上菜
			console.log(`编号${this.id}, 姓名:${this.name} 上了${params}`)
		}
	}
}

function Cook(name, salary) {
	Staff.call(name, salary);
	this.finishWork = function () {
		// 厨师完成了一次烹饪
		console.log(`编号${this.id}, 姓名:${this.name}完成了一次烹饪`)
	}
}

// 顾客
function Customer() {
	this.eat = function () {
		console.log('顾客开始吃菜了。')
	}

	this.orderDishes = function () {
		console.log('顾客在点菜了')
	}
}

function Restaurant(cost, money) {
	this.cost = cost
	this.money = money
	this.staffs = []

	this.hire = function (obj) {
		this.staffs.push(obj)
	}

	this.fire = function (obj) {
		for (let i = 0, l = this.staffs.length; i < l; i++) {
			if (this.staffs[i] === obj) {
				this.staffs.splice(i, 1)
			}
		}
	}
}

// 菜品
function Dishes(name, cost, time) {
	this.name = name
	this.cost = cost
	this.time = time
}