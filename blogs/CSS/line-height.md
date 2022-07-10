---
title: line-height的继承问题
date: 2021-7-23
tags:
  - 'CSS'
categories:
  - 'CSS'
---

## line-height 的继承问题

主要是是百分的比情况比较特殊，是继承计算之后的值

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>line-height 继承问题</title>
    <style type="text/css">
      body {
        font-size: 20px;
        /* p的行高是20*200% */
        line-height: 200%;
        /* line-height: 1.5; p的行高1.5*16 */
        /* line-height: 30px; p的行高30 */
      }
      p {
        background-color: #ccc;
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <p>这是一行文字</p>
  </body>
</html>
```
