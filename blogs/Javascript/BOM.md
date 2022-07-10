---
title: BOM
date: 2021-7-25
tags:
  - 'Javascript'
categories:
  - 'javascript'
autoSort: 199
---

## BOM

- BOM 概念
  - BOM 即浏览器对象模型，它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是 window
  - BOM 由一系列相关的对象构成，并且每个对象都提供了很多方法与属性
  - BOM 缺乏标准，javascript 语法的标准化组织是 ECMA，DOM 的标准化组织是 W3C，BOM 最初是 Netscape 浏览器标准的一部份
- BOM 的构成
  - window 对象是浏览器的顶级对象，它具有双重角色
  - 它是 js 访问浏览器窗口的一个接口
  - 它是一个全局对象，定义在全局作用域中的变量，函数都会变成 window 对象的属性和方法

## onload 和 DOMContentLoaded

```javascript
window.addEventListener('load', function() {
  // 页面资源全部加载完，包括图片视频，才会执行
})

window.addEventListener('DOMContentLoaded', function() {
  // 页面资源除了图片视频其他都加载完了，就会执行
})
```

## localtion 对象

​- window 对象给我们提供了一个 location 属性用于获取或设置窗体的 URL，并且可以用于解析 URL。因为这个属性返回的是一个对象，所以我们将这个属性也称为 location 对象

​- 统一资源定位符（Uniform Resoure Locator,URL）是互联网上标准资源的地址。互联网上的每个文件都有一个唯一的 URL，它包含的信息指出文件的位置以及浏览器应该怎么处理它
​ URL 的一般语法格式为：
​ protocol://host[:port]/path/[?query]#fragment
​ http://www.languiyuan.fun/index.html?name=andy&age=18#link

| 组成     | 说明                                                                        |
| -------- | --------------------------------------------------------------------------- |
| protocol | 同行协议 常用的 http，ftp，maito 等                                         |
| host     | 主机（域名）www.itheima.com                                                 |
| port     | 端口号可选，省略时使用方案的默认端口，如 http 的默认端口为 80               |
| path     | 路径由零或多个'/'符号隔开的字符串，一般用来表示主机上的一个目录或者文件地址 |
| query    | 参数 以键值对的形式通过&符号分割开来                                        |
| fragment | 片段 #后面内容 常见于链接锚点                                               |

​- location 对象的属性

| location 对象属性   | 返回值                           |
| ------------------- | -------------------------------- |
| `location.href`     | 获取或者设置整个 URL             |
| `location.host`     | 返回主机（域名）www.itheima.com  |
| `location.port`     | 返回端口号 如果未写返回空字符串  |
| `location.pathname` | 返回路径                         |
| `location.search`   | 返回参数                         |
| `location.hash`     | 返回片段 #后面内容常见于锚点链接 |

- 对象方法

| location 对象方法 | 作用                                                                 |
| ----------------- | -------------------------------------------------------------------- |
| assign()          | 跟 href 一样，可以跳转页面(也称为重定向页面)，记录历史               |
| replace()         | 替换当前页面，因为不记录历史，所以不能后退页面                       |
| reload()          | 重新加载页面，相当于刷新按钮或者 f5 如果参数为 true 强制刷新 ctrl+f5 |

## navigator 对象

这个对象包含有关浏览器的信息，它有很多属性，我们最常用的是 `userAgent`,该属性可以返回由客户机发送服务器的 user-agent 头部的值

下面代码可以判断用户哪个终端打开页面

```javascript
function getMultiport() {
  if (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    return 'mobile'
  }
  return 'PC'
}
let multiport = getMultiport()
console.log(multiport) // 'mobile' 或 'PC'
```

## history 对象

window 对象给我们提供了一个 history 对象，与浏览器历史记录进行交互。该对象包含用户（在浏览器窗口中）访问过的 URL

| history 对象方法                                                                                                      | 作用                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| back()                                                                                                                | 后退                                                                                                                                                                                             |
| forward()                                                                                                             | 前进功能                                                                                                                                                                                         |
| go(参数)                                                                                                              | 前进后退功能，参数如果是 1 前进一个页面 如果是-1 后退一个页面                                                                                                                                    |
| [pushState(state, title[, url])](https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState)                  | `pushState()` 不会造成 `hashchange (en-US)` 事件调用, 即使新的 URL 和之前的 URL 只是锚的数据不同。                                                                                               |
| [history.replaceState(stateObj, title[, url])](https://developer.mozilla.org/zh-CN/docs/Web/API/History/replaceState) | 新的 url 代替之后，页面不会刷新，也不会去检测这个替代的页面是不是存在。如果尝试跳转到其他德页面，再 back，就会跳转到替换的页面，再 back 也不会到一开始的页面。可以理解直接替换了原来的历史记录。 |
