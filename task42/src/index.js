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

/*
首先，我们需要重新来设计我们的厨师、服务员的类，阅读上面的文章，按照单例的方式来进行设计

第二，我们需要解决对象与对象之间的交流问题，
在这个简单的餐厅中，当顾客入座时，
服务员使用服务点菜方法，调用顾客的点菜方法得到顾客点的菜，
然后服务员去告诉厨师需要做什么菜，厨师开始做菜，
做完菜以后告诉服务员去上菜，
上菜完成后，顾客开始用餐，吃完后，
下一个顾客进来。
在这个流程中，你可以给每个类都创建对应的交流沟通相关的方法来实现。

第三，实现一个顾客队列

第四，实现一个菜单，包括菜名、价格，然后实现一个点菜的方法，我们默认顾客每次只点一个菜

编码
基于提供的设计思路来完成上面的需求，通过Console.log来打印出餐厅运作的情况
*/
import Restaurant from './class/restaurant.js'
import Cook from './class/cook.js'
import Waiter from './class/waiter.js'
import Dishes from './class/dishes.js'
import Customer from './class/customer.js'

// 初始化餐厅
var menus = []
var ifeRestaurant = new Restaurant({
	money: 1000000,
	seats: 20,
	staff: []
});

// 初始化厨师
var newCook = new Cook("Tony", 10000);

// 初始化服务员
var newWaiter = new Waiter("Ken", 4500);

// 初始化菜单
function initDishes() {
	var newDishes = new Dishes("辣子鸡", 30, 14)
	var newDishes1 = new Dishes("酸辣土豆丝", 20, 9)
	var newDishes2 = new Dishes("酸菜鱼", 60, 25)
	menus.push(newDishes)
	menus.push(newDishes1)
	menus.push(newDishes2)
}
initDishes()

var newCustomer = new Customer("李毅")

newWaiter.sendMenu(menus);
newCustomer.orderDishes(menus);
newWaiter.notifyCook()
newCook.finish()
newWaiter.finish("上菜")
newCustomer.eat()