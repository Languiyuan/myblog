---
title: margin的纵向重叠和负值
date: 2021-7-22
tags:
  - 'CSS'
categories:
  - 'CSS'
---

## margin 的纵向重叠

- 相邻的元素的 margin-top 和 margin-bottom 是会发生重叠
- 空白内容的块状元素也是会重叠的
- AAA 和 BBB 之间的距离 15px

```html
<style type="text/css">
  p {
    font-size: 16px;
    line-height: 1;
    margin-top: 10px;
    margin-bottom: 15px;
  }
  div {
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
<body>
  <p>AAA</p>
  <p></p>
  <p></p>
  <p></p>
  <div></div>
  <div></div>
  <div></div>
  <p>BBB</p>
</body>
```

## margin 负值情况

可以理解为长或者宽被缩减，但是内容还是会呈现的。圣杯布局是典型案例。

- margin-top 和 margin-left 为负值时候，是自身往上移动和向左移动
- margin-right 和 margin-bottom 为负值的时候，是右侧的或者下方的元素，往左移动和往上移动
