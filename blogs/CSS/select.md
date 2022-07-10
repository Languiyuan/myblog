---
title: 选择器和权重
date: 2021-7-23
tags:
  - 'CSS'
categories:
  - 'CSS'
---

## 选择器

CSS 的选择器分类可以分为三大类：id 选择器，类选择器，标签选择器。

组合产生多种选择器

|     选择器     |                                         |                     |                                  说明                                   |
| :------------: | :-------------------------------------: | :-----------------: | :---------------------------------------------------------------------: |
|   后代选择器   |                  el el                  |        div p        |                     选择 div 元素内部的所有 p 元素                      |
|   子代选择器   |                  el>el                  |        div>p        |                  选择 div 元素的第一子代的所有 p 元素                   |
|  子元素选择器  |     el：nth-child(n);el: last-child     |                     |                        第 n 个元素；最后一个元素                        |
| 相邻兄弟选择器 |                  el+el                  |       .msg+p        |         选择与 class 为"msg"的元素同级且紧跟其后的第一个 p 元素         |
| 通用兄弟选择器 |                  el~el                  |       .msg~p        |                选择 class 为"msg"的元素后面的所有 p 元素                |
|   群组选择器   |                  el,el                  | p, span, .blue,#box | 选择所有的 p 元素、span 元素、class 为"blue"的元素以及 id 为"box"的元素 |
|  伪元素选择器  |             :before, :after             |      p:before       |                      在每个 p 元素内容之前插入内容                      |
|   属性选择器   |               [attribute]               |  div p[class="aa"]  |                   div 下的 p 中有 class 为 aa 的元素                    |
|   伪类选择器   | :link,:visited, :hover, :active, :focus |       a:hover       |                    选择鼠标指针位于 a 标签之上的链接                    |
|   通用选择器   |                   \*                    |         \*          |                             选择所有的元素                              |

### 伪元素选择器：

：before；：after 默认是 inline

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>伪元素选择器</title>
    <style>
      #container {
        font-size: 35px;
      }
      p:after {
        content: '';
        display: inline-block;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-left: 8px solid #afabab;
        position: relative;
        top: 2px;
        left: 10px;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <p>伪元素选择器</p>
    </div>
  </body>
</html>
```

## 权重

css 优先级规则：

1. css 选择规则的权重值不同时，权重值高的优先；
2. css 选择规则的权重值相同时，后定义的规则优先；
3. css 属性后面加 !importand 时，无条件绝对优先；

权重值的计算(相加)

|                        选择器                         | 权重  |
| :---------------------------------------------------: | :---: |
|           .class {width:"10px" !important;}           | 10000 |
|                       内联样式                        | 1000  |
|                          id                           |  100  |
|             class 选择器/属性选择器/伪类              |  10   |
|                      标签/伪元素                      |   1   |
| 通用选择器（\*），子选择器（>）， 相邻同胞选择器（+） |   0   |

`为目标元素直接添加样式，永远比继承样式的优先级高，无视优先级的遗传规则。`
