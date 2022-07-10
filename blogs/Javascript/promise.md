---
autoGroup-3: Promise
title: Promise
date: 2021-7-15
tags:
  - 'Javascript'
  - 'Promise'
categories:
  - 'javascript'
---

## Promise

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
