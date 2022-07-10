---
title: 常见api及方法
date: 2021-7-15
tags:
  - 'Javascript'
categories:
  - 'javascript'
autoSort: 99
---

## 常见的 api 手写

### `instanceof`

```javascript
function myIntanceof(l, r) {
  LP = l.__proto__
  RP = r.prototype
  while (true) {
    if (LP === RP) {
      return true
    }
    if (LP === null) {
      return false
    }
    LP = LP.__proto__
  }
}

const obj1 = {
  name: 'yky',
}
console.log(Object.__proto__ === Function.prototype) // true
console.log(Object.prototype.__proto__ === null) // true
console.log(myIntanceof(obj1, Object)) // true
```

### call\apply\bind

```javascript
// myApply
Function.prototype.myApply = function(content) {
  // content表示的就是第一个参数，也就是this要指向的值
  content = content || window
  content.fn = this
  let result
  if (arguments[1]) {
    result = content.fn(...arguments[1])
  } else {
    result = content.fn()
  }
  console.log('content', content)
  delete content.fn
  return result
}

// 对象
/*       const obj2 = {
        name: 'yky',
        age: 20,
        getName() {
          console.log(this.name)
        },
        getAge: function () {
          console.log(this.age)
        },
      }
      obj2.getAge()
      obj2.getName() */

//函数的参数设置
function fn3(a) {
  console.log('a', a)
  console.log(arguments)
}
fn3({ name: 'yky' }, 1, 2, 4, 5)
// myCall
Function.prototype.myCall = function(content) {
  content = content || window
  content.fn = this
  args = Array.from(content).slice(1)
  // console.log('content', content)
  let result = content.fn(...args)
  delete content.fn
  return result
}
// bind
Function.prototype.myBind = function() {
  let args = Array.from(arguments)
  let _this = args.shift()
  let self = this
  return function() {
    return self.apply(_this, args)
  }
}
```

### new

```js
// new
function myNew(fn, args) {
  // 创建一个新对象
  const obj = {}
  // 把对象的隐式原型指向fn的显示原型 获取fn上的方法
  obj.__proto__ = fn.prototype
  // 调用apply，改变this，获得属性
  const result = fn.myApply(obj, args)
  // return 这个result， 如果是object就返回result,不是就返回obj
  return result instanceof Object ? result : obj
}

function Fn(name) {
  this.name = name
  // console.log(this.name)
}

Fn.prototype.getName = function() {
  console.log(this.name)
}

const fn1 = myNew(Fn, ['yky'])
console.log(fn1)
fn1.getName()
```

### 防抖节流

```javascript
// 事件已经触发，单位时间内，再触发，就会重新计算单位时间
function debounce(fn, delay) {
  let timer
  return function() {
    let _this = this
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function() {
      fn.apply(_this, args)
    }, delay)
  }
}

function print1(a) {
  console.log(a)
}

const debounceBtn = debounce(print1, 1000)

let btn = document.getElementById('btn')
/*  btn.addEventListener('click', function () {
        debounceBtn('aaa')
      }) */

// 节流 throttle 就是单位时间内只能触发一次
function throttle(fn, delay) {
  let timer
  let flag = true
  return function() {
    if (!flag) return
    fn.apply(this, arguments)
    flag = false
    setTimeout(function() {
      flag = true
    }, delay)
  }
}

const throttleBtn = throttle(print1, 1000)
btn.onclick = function() {
  throttleBtn('aaabbb')
}
```

### 深度拷贝

```javascript
const deepClone = function(obj) {
  const objClone = Array.isArray(obj) ? [] : {}

  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (typeof obj[i] === 'object') {
        objClone[i] = deepClone(obj[i])
      } else {
        objClone[i] = obj[i]
      }
    }
  }
  return objClone
}
```

### JSONP

```javascript
function addScriptTag(src) {
  let script = document.createElement('script')
  script.setAttribute('type', 'text/jacascript')
  script.src = src
  document.body.appendChild(script)
}

window.onload = function() {
  let src = 'http://www.example.com/hh?callback=fn1'
  addScriptTag(src)
}

function fn1(data) {
  console.log(data)
}
```

### Promise

```javascript
class MyPromise {
  constructor(executor) {
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    this.successCB = []
    this.failCB = []

    const reslove = (res) => {
      if (this.state !== 'pending') return
      this.state = 'fulfilled'
      this.value = res
      this.successCB.forEach((item) => item(this.value))
    }

    const reject = (error) => {
      console.log(this)
      if (this.state !== 'pending') return
      this.state = 'rejected'
      this.reason = error
      this.failCB.forEach((item) => item(this.reason))
    }

    try {
      executor(reslove, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onResloved, onRejected) {
    if (this.state === 'fulfilled') {
      onResloved(this.value)
    }
    if (this.state === 'rejected') {
      onRejected(this.reason)
    }
    if (this.state === 'pending') {
      this.successCB.push(onResloved)
      this.failCB.push(onRejected)
    }
  }
}

// 构造函数版本
function MyPromise2(executor) {
  // 状态
  this.state = 'pending'
  // result
  this.value = undefined
  this.reason = undefined
  // callbacks
  this.successCB = []
  this.failCB = []

  const reslove = (res) => {
    if (_this.state !== 'pending') return
    this.value = res
    this.state = 'fulfilled'
    this.successCB.forEach((item) => item(this.value))
  }

  const reject = (reason) => {
    console.log(this)
    if (this.state !== 'pending') return
    this.reason = reason
    this.state = 'rejected'
    console.log(Object.prototype.toString.call(this.failCB))
    this.failCB.forEach((item) => item(this.reason))
  }

  try {
    executor(reslove, reject)
  } catch (e) {
    reject(e)
  }
}

MyPromise2.prototype.then = function(onResloved, onRejected) {
  if (this.state === 'fulfilled') {
    onResloved(this.value)
  }
  if (this.state === 'rejected') {
    onRejected(this.reason)
  }
  if (this.state === 'pending') {
    this.successCB.push(onResloved)
    this.failCB.push(onRejected)
  }
}

const p = new MyPromise2((reslove, reject) => {
  setTimeout(() => {
    reject('failed')
  }, 1000)
}).then(
  (value) => console.log(value),
  (reason) => console.log(reason)
)
```

### Array.reduce

```javascript
Array.prototype.myReduce = function(f, value = 0) {
  for (let i = 0; i < this.length; i++) {
    value = f(value, this[i])
  }
  return value
}

let arr = [1, 2, 3, 4]
console.log(arr.myReduce((value, cur) => value + cur, 10))
```

### Object.map

```javascript
//要遍历的对象
let obj = {
  name: 'zhou',
  age: '21',
}
console.log(obj)

//方法1
Object.prototype.myMap = function(fn) {
  //this是obj对象
  var keys = Object.keys(this)
  var that = this
  var newObj = {}
  keys.forEach(function(key, index) {
    // console.log(that[key])
    newObj[key] = fn(that[key], key)
  })
  // console.log(keys)
  return newObj
}
var newObj = obj.myMap(function(value, key) {
  return value + '1'
})
console.log(newObj)
```

### 通用监听函数

```javascript
function bindEvent(elem, type, selector, fn) {
  if (fn == null) {
    fn = selector
    selector = null
  }
  elem.addEventListener(type, function(e) {
    let target = e.target
    if (selector) {
      if (target.matches(selector)) {
        fn.call(target, e)
      }
    } else {
      fn.call(target, e)
    }
  })
}
```

### XML/AJAX 请求

```javascript
var xhr = new XMLHttpRequest()
// 0 已经创建了ajax对象 但是还没有对ajax对象进行配置
console.log(xhr.readyState)
xhr.open('get', 'http://localhost:3000/readystate')
// 1 已经对ajax对象进行配置 但是还没有发送请求
console.log(xhr.readyState)

// 当ajax状态码发生变化的时候出发
xhr.onreadystatechange = function() {
  // 2 请求已经发送了
  // 3 已经接收到服务器端的部分数据了
  // 4 服务器端的响应数据已经接收完成
  console.log(xhr.readyState)
  // 对ajax状态码进行判断 如果状态码的值为4就代表数据已经接收完成了
  if (xhr.readyState == 4) {
    console.log(xhr.responseText)
  }
}
xhr.send()
```
