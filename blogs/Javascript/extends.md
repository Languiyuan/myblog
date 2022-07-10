---
title: 继承
date: 2021-7-16
tags:
  - 'Javascript'
categories:
  - 'javascript'
autoSort: 102
---

## 继承

**继承有原型继承，组合继承（原型链继承+借用构造函数继承），寄生组合继承，ES6 的 extends**
Object.create()方法有两个特征： 父类已有的实例会共享，子类自己添加的属性方法是私有的

```javascript
const object(o) {
	const fn() {}
	fn.prototype = o
	return new fn()
}
```

- 原型式继承
  就是使用 Object.create(‘object’)

```javascript
// ----------------------方法一：原型继承
// 原型继承
// 把父类的实例作为子类的原型
// 缺点：1.子类的实例共享了父类构造函数的引用属性   2.不能传参

var person = {
  friends: ['a', 'b', 'c', 'd'],
}

var p1 = Object.create(person) // p1.__proto__ === person

p1.friends.push('aaa') //缺点：子类的实例共享了父类构造函数的引用属性

console.log(p1)
console.log(person) //缺点：子类的实例共享了父类构造函数的引用属性
```

- 组合继承

```javascript
// ----------------------方法二：组合继承 组合了原型链方法和构造函数方法
// 原型链方法就是son.prototype = new father() 继承的时候不能传参 实例共享父类中的属性
// 调用构造函数方法 函数不过是特定环境下执行代码的对象，因此可以使用call或者apply方法，（接下）
// function Son() { Father.call(this, params)} 继承的时候可以传参 实例不会共享父类的属性
// 借用构造函数 缺点就是方法必须都要在构造函数中定义，没有函数复用了。（prototype定义有的）

// 在子函数中运行父函数，但是要利用call把this改变一下，
// 再在子函数的prototype里面new Father() ,使Father的原型中的方法也得到继承，最后改变Son的原型中的constructor

// 缺点：调用了两次父类的构造函数，造成了不必要的消耗，父类方法不可以复用
// 优点可传参，不共享父类引用属性
function Father(name) {
  this.name = name
  this.hobby = ['篮球', '足球', '乒乓球']
}

Father.prototype.getName = function() {
  console.log(this.name)
}

function Son(name, age) {
  // 继承属性，子类实现传参
  Father.call(this, name)
  this.age = age
}
// 继承父类方法
//这一步会把父类的属性定义在子类的原型上，但是子类自己身上已经通过上一步
// 获得了父类属性，所以还是不会共享的属性的，但是显然把父类的属性定义在子类原型上是多余的
Son.prototype = new Father()
// 弥补重写原型失去的默认constructor属性
Son.prototype.constructor = Son

var s = new Son('ming', 20)

console.log(s)
```

- 组合寄生继承

```javascript
// ----------------------方法三：寄生组合继承
function Father(name) {
  this.name = name
  this.hobby = ['篮球', '足球', '乒乓球']
}

Father.prototype.getName = function() {
  console.log(this.name)
}
// 函数不过是特定环境执行代码的对象，所以可以使用call
function Son(name, age) {
  Father.call(this, name) // 获得father的所有属性
  this.age = age
}
// s2.__proto__.__proto__ === Father.prototype === Son.prototype.__proto__
// obj1 = Object.create(obj),就是把obj的全部都定义在obj1.__proto__指向的Fn的prototype上，
// 因为传入的Father.prototype上定义的一般都是构造函数方法，就会在让Son获得方法
Son.prototype = Object.create(Father.prototype) // ES5中创建对象副本的方法，通过这个方法，可以获得Father上的所有方法
Son.prototype.constructor = Son // 弥补重写原型失去的默认constructor属性

var s2 = new Son('ming', 18)
console.log(s2)
```

- extends

```javascript
// 方法四：ES6的extends（寄生组合继承的语法糖）
//     子类只要继承父类，可以不写 constructor ，一旦写了，则在 constructor 中的第一句话
// 必须是 super 。
/*因为方法都是定义在prototype上的，所以要让Son获得Father的方法，
    就要让Son.prototype去new一个Father（a.__proto__===A.prototype）,
    Son.prototype.__proto__ = Father.prototype,那Son就有Father的方法了，
    constructor是用来继承属性的*/

class Son3 extends Father {
  // Son.prototype.__proto__ = Father.prototype
  constructor(y) {
    super(200) // super(200) => Father.call(this,200)
    this.y = y
  }
}
```
