function Person(first, last, age, sex, interests) {
	this.name = {
		first: first,
		last: last
	}

	this.age = age
	this.sex = sex
	this.interests = interests

	this.translateSex = function () {
		if (this.sex === '男') {
			return '他'
		} else if (this.sex === '女') {
			return '她'
		}
		return ''
	}

	this.bio = function () {
		console.log(`${this.translateSex}的一生, 年龄${this.age}, 性别${this.sex}, 兴趣${this.interests[0]}${this.interests[1]}`)
	}

	this.gretting = function () {
		console.log(`你好, 我是${this.name.first}`)
	}
}

const person1 = new Person('李', '毅', 24, '男', ['打球', '看书'])

// 此外， 我们的bio()方法里仍有一些问题 —— 尽管您创建的Person是女性，
// 或者是些别的性别类型，输出里的代词都总是 "He"。 而且， 
// 纵然您有更多的兴趣列举在interests数组中， bio只会展示您的两个兴趣。 
// 您能想出如何在类型定义（构造函数）中解决这个问题吗？ 
// 您可以按照您喜欢的方式编写构造函数（您可能需要一些条件判断和循环）。 
// 考虑下语句如何根据性别、兴趣列表中兴趣的数目异构。