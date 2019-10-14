/*
餐厅类
属性：金钱，座位数量、职员列表
方法：招聘职员，解雇职员
职员类
属性：ID，姓名，工资
方法：完成一次工作
服务员类，继承自职员
完成一次工作：如果参数是个数组，则记录客人点菜，如果参数不是数组则是上菜行为
厨师类，继承自职员
完成一次工作：烹饪出菜品
顾客类
方法：点菜，吃
菜品类
属性：名字、烹饪成本、价格
*/
import Restaurant from './class/restaurant.js'
import Cook from './class/cook.js'

var ifeRestaurant = new Restaurant({
	money: 1000000,
	seats: 20,
	staff: []
});

var newCook = new Cook("Tony", 10000);
ifeRestaurant.hire(newCook);

console.log(ifeRestaurant.staff);

ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staff);