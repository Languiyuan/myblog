---
title: CSS的响应式
date: 2021-7-23
tags:
  - 'CSS'
categories:
  - 'CSS'
---

### rem

html 根元素的字体大小，有阶梯性的特点

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>响应式布局</title>
    <style type="text/css">
      @media only screen and (max-width: 374px) {
        /* iphone5 或者更小的尺寸，以 iphone5 的宽度（320px）比例设置 font-size */
        html {
          font-size: 86px;
        }
      }
      @media only screen and (min-width: 375px) and (max-width: 413px) {
        /* iphone6/7/8 和 iphone x */
        html {
          font-size: 100px;
        }
      }
      @media only screen and (min-width: 414px) {
        /* iphone6p 或者更大的尺寸，以 iphone6p 的宽度（414px）比例设置 font-size */
        html {
          font-size: 110px;
        }
      }

      body {
        font-size: 0.16rem;
      }
      #div1 {
        width: 1rem;
        background-color: #ccc;
      }
    </style>
  </head>
  <body>
    <div id="div1">
      this is div
    </div>
  </body>
</html>
```

### vh/vw

网页视口的高度/宽度

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>vw vh test</title>
    <style>
      body {
        margin: 0;
        padding: 0;
      }

      #container {
        background-color: red;
        width: 10vw;
        height: 10vh;
      }
    </style>
  </head>
  <body>
    <p>vw vh 测试</p>
    <div id="container"></div>

    <script>
      // window.innerHeight === 100vh 网页视口的高度
      // window.innerWidth === 100vw 网页视口的宽度
    </script>
  </body>
</html>
```
