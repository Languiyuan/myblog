---
title: slot-插槽
date: 2021-7-28
tags:
  - 'Vue'
categories:
  - 'Vue'
autoSort: 99
---

## 插槽 slot

子组件内写 slot，可以加上 name 属性就是具名插槽，父组件写 template 中调用 v-slot：name，

子组件要给你父组件传值，并在插槽中使用，就要在子组件中的 slot 中使用 v-bind：dataname="data"，再在父组件中 template，中 v-slot:name="dataname"

slot: 缩写是#

```html
<!-- 子组件 -->
<slot name="header" :headerUser="sonMsg"></slot>
<slot :user="sonMsg">
  备用内容
</slot>
<slot name="footer"></slot>

<!-- 父组件 -->
<list-demo ref="listD">
  <template #header="Header"> 头部内容 {{ Header.headerUser }}</template>
  <template v-slot:default="father">
    <h1 ref="hh1">{{ father.user }}</h1>
  </template>
  <template v-slot:footer>
    尾部内容
  </template>
</list-demo>
```
