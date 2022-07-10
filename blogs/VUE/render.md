---
title: render渲染函数
date: 2021-7-28
tags:
  - 'Vue'
categories:
  - 'Vue'
autoSort: 98
---

## [render 渲染函数](https://juejin.cn/post/6844903973502058504?)

```javascript
// Es5
new Vue({
  render: function(elementCreat) {
    return elementCreat(App)
  },
})
// Es6
new Vue({
  render(elementCreat) {
    return elementCreat(App)
  },
})
// 再简化
new Vue({
  render: (h) => h(App),
})
```
