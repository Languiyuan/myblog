---
title: 圣杯/双飞翼布局
date: 2021-7-22
tags:
  - 'CSS'
categories:
  - 'CSS'
---

## 圣杯布局

- 先定义好 header 和 footer 的样式，使之横向撑满。
- 在 container 中的三列设为浮动和相对定位(后面会用到)，center 要放在最前面，footer 清除浮动。
- 三列的左右两列分别定宽 200px 和 150px，中间部分 center 设置 100%撑满
- 这样因为浮动的关系，center 会占据整个 container，左右两块区域被挤下去了
- 接下来设置 left 的 margin-left: -100%;，让 left 回到上一行最左侧
- 但这会把 center 给遮住了，所以这时给外层的 container 设置 padding-left: 200px;padding-right: 150px;，给 left 和 right 空出位置
- 这时 left 并没有在最左侧，因为之前已经设置过相对定位，所以通过 left: -200px; 把 left 拉回最左侧
- 同样的，对于 right 区域，设置 margin-left: -150px; 把 right 拉回第一行
- 这时右侧空出了 150px 的空间，所以最后设置 right: -150px;把 right 区域拉到最右侧就行了。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>圣杯布局</title>
    <style>
      body {
        min-width: 550px;
      }
      #header,
      #footer {
        background-color: green;
        text-align: center;
        height: 60px;
        line-height: 60px;
      }
      #footer {
        /* clear: both; */
      }
      #container {
        padding-left: 200px;
        padding-right: 150px;
        overflow: hidden; /* BFC */
      }
      #container .column {
        position: relative;
        float: left;
        text-align: center;
        height: 300px;
        line-height: 300px;
      }
      #center {
        width: 100%;
        background-color: rgb(196, 194, 194);
      }
      #left {
        width: 200px;
        right: 200px;
        margin-left: -100%;
        background-color: red;
      }
      #right {
        width: 150px;
        margin-right: -150px;
        /* 使用下面给两行因为是可以的 */
        /* margin-left: -150px;
        right: -150px; */
        background-color: #777;
      }
      /* 手写清除浮动 */
      .clearfix:after {
        content: '';
        display: table;
        clear: both;
      }
    </style>
  </head>
  <body>
    <div id="header">#header</div>
    <div id="container" class="clearfix">
      <div id="center" class="column">#center</div>
      <div id="left" class="column">#left</div>
      <div id="right" class="column">#right</div>
    </div>
    <div id="footer">#footer</div>
  </body>
</html>
```

## flex 的圣杯布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>圣杯布局flex</title>
    <style>
      body {
        min-width: 550px;
        font-weight: bold;
        font-size: 20px;
      }
      #header,
      #footer {
        background: rgba(29, 27, 27, 0.726);
        text-align: center;
        height: 60px;
        line-height: 60px;
      }
      #container {
        display: flex;
      }
      #container .column {
        text-align: center;
        height: 300px;
        line-height: 300px;
      }
      #left {
        width: 200px;
        background-color: pink;
      }
      #center {
        flex: 1;
        background-color: #888;
      }
      #right {
        width: 150px;
        background-color: rgb(219, 221, 74);
      }
    </style>
  </head>
  <body>
    <div id="header">#header</div>
    <div id="container">
      <div id="left" class="column">#left</div>
      <div id="center" class="column">#center</div>
      <div id="right" class="column">#right</div>
    </div>
    <div id="footer">#footer</div>
  </body>
</html>
```

## 双飞翼布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        min-width: 550px;
      }
      .column {
        float: left;
      }
      #main {
        width: 100%;
        height: 300px;
        background-color: pink;
      }
      #main #main-wrap {
        margin: 0 190px 0 190px;
      }
      #left {
        width: 190px;
        height: 300px;
        margin-left: -100%;
        background-color: #498;
      }
      #right {
        width: 190px;
        height: 300px;
        margin-left: -190px;
        background-color: #758;
      }
    </style>
  </head>
  <body>
    <div id="main" class="column">
      <div id="main-wrap">#center</div>
    </div>
    <div id="left" class="column">#left</div>
    <div id="right" class="column">#right</div>
  </body>
</html>
```

## 清除浮动

```css
.clearfix:after {
  content: '';
  display: table;
  clear: both;
}
```
