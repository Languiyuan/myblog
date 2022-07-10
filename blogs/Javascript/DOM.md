---
title: DOM
date: 2021-7-25
tags:
  - 'Javascript'
categories:
  - 'javascript'
autoSort: 200
---

## 查找节点

```javascript
document.getElementById() // 返回第一个带有指定id的元素
document.getElementsByClassName() // 返回所有带有指定class的元素的集合(返回数组形式)
document.getElementsByTagName() // 返回所有带有指定标签的元素的集合(返回数组形式)
document.querySelector() // 返回第一个带有指定id或class的元素（支持css选择器的方式）
document.querySelectorAll() // 返回所有带有指定id或class的元素
```

### 通过节点之间的关系进行查找

```javascript
// 子元素 => 父元素
element.parentNode //返回该节点的父节点，每个节点都会有一个父节点，Element的父节点可能是Element，Document或DocumentFragment；
element.parentElement //返回父节点，只有父节点为元素节点时返回，否则返回null

// 父元素 => 子元素
element.children //返回所有元素子节点的集合，仅包含元素节点
element.childNodes //返回当前元素所有的子节点，包含元素节点，文本节点，属性节点。（注释、空格、换行等也会被当作一个节点）
element.firstChild //返回当前元素的第一个子节点，该子节点可以是任意节点，如果没有则返回null
element.firstElementChild //返回当前元素的第一个子节点，该子节点只可以是元素节点，如果没有则返回null
element.lastChild //返回当前元素的最后一个子节点，该子节点可以是任意节点，如果没有则返回null
element.lastElementChild //返回当前元素的最后一个子节点，该子节点只可以是元素节点，如果没有则返回null

// 兄弟元素
element.previousSibling //返回该节点的前一个兄弟节点
element.previousElementSibling //返回该节点的前一个元素兄弟节点
element.nextSibling //返回该节点的后一个兄弟节点
element.nextElementSibling //返回该节点的后一个元素兄弟节点
```

## 增加节点

```javascript
node.append(), // 可以添加多个元素，位置也在父元素当中的最后
  node.appendChild() // 添加到父元素当中最后
node.replaceChild(div3, p1) // replaceChild(newNode, oldNode)
node.insertBefore(div3, p1) // insertBefore(newNode, refNode) 这个就可以指定添加的位置，指定元素之前
```

## 删除子节点

```javascript
node.removeChild()
```

## 创造节点

```javascript
document.createElement('') //创建一个元素节点
document.createTextNode('') //创建一个文本节点
newNode.cloneNode(true) //克隆一个节点，参数true表示会克隆当前节点以及它的所有子节点，false表示只克隆当前节点，默认为false
document.createDocumentFragment() // 文档碎片
```

### 获取当前节点的文本值

```javascript
element.innerHtml //返回当前节点的所有文本包含html
element.innerText //返回当前节点及所有后代节点的文本值,不包含html

// 设置值
element.innerHtml = '<p>value</p>' // 'value'
element.innerText = 'value'
```

`property`: 通过 JavaScript 来获得了 Dom 的节点，在 JavaScript 中这个节点就会成为一个对象，而 property 就是这个对象的属性，这个就类似于`hasOwnProperty`（）中的 property

`attribute`:这个是指 html 标签中的属性，比如 class，id，style，value,或者可以自定义属性，这个属性只能是字符串，关于这个属性一共有三个相关的方法，`setAttribute`、`getAttribute`、`removeAttribute`、`hasAttribute`；

```javascript
// attribute
p1.setAttribute('class', 'red')
console.log(p1.getAttribute('class'))
```

### `nodeType`

```javascript
const type = node.nodeType
```

| 常量                               | 值   | 描述                                                                                                                                                                                                                          |
| :--------------------------------- | :--- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Node.ELEMENT_NODE`                | `1`  | 一个 [`元素`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element) 节点，例如 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/p) 和 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/div)。 |
| `Node.TEXT_NODE`                   | `3`  | [`Element`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element) 或者 [`Attr`](https://developer.mozilla.org/zh-CN/docs/Web/API/Attr) 中实际的 [`文字`](https://developer.mozilla.org/zh-CN/docs/Web/API/Text)           |
| `Node.CDATA_SECTION_NODE`          | `4`  | 一个 [`CDATASection`](https://developer.mozilla.org/zh-CN/docs/Web/API/CDATASection)，例如 `<!CDATA[[ … ]]>`。                                                                                                                |
| `Node.PROCESSING_INSTRUCTION_NODE` | `7`  | 一个用于 XML 文档的 [`ProcessingInstruction` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/ProcessingInstruction) ，例如 `<?xml-stylesheet ... ?>` 声明。                                                         |
| `Node.COMMENT_NODE`                | `8`  | 一个 [`Comment`](https://developer.mozilla.org/zh-CN/docs/Web/API/Comment) 节点。                                                                                                                                             |
| `Node.DOCUMENT_NODE`               | `9`  | 一个 [`Document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document) 节点。                                                                                                                                           |
| `Node.DOCUMENT_TYPE_NODE`          | `10` | 描述文档类型的 [`DocumentType`](https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentType) 节点。例如 `<!DOCTYPE html>` 就是用于 HTML5 的。                                                                               |
| `Node.DOCUMENT_FRAGMENT_NODE`      | `11` | 一个 [`DocumentFragment`](https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment) 节点                                                                                                                             |

### 文档碎片

对 DOM 的操作是十分的影响性能的，所以可以采用把要操作的 DOM 元素都提取出来，统一操作之后，再添加回 DOM 树，文档碎片就是完成这样一个工作，有效的减少页面的重排和重绘。

`DocumentFragment`继承了 node 的所有`api`，并增加了一些

```javascript
const div1 = document.getElementById('div1')

const fragment = document.createDocumentFragment()

let child

while (div1.firstChild) {
  child = div1.firstChild
  fragment.append(child)
}

let nodes = fragment.childNodes
console.log('nodes', nodes)
console.log('fragment', fragment)

//在一步对文档碎片进行操作，此时DOM树中并不会有这些节点，对这些节点进行操作，并不会引起重拍重绘，等一系列指令都操作完了，在把文档碎片重新从添加到DOM树中
// replace(fragment)

div1.appendChild(fragment)
```

### DOM 性能提升

- 避免频繁的 dom 操作

- 利用文档碎片进行， 把频操作改成一次性操作

- 查询缓存

  ```javascript
  // 不缓存 DOM的查询结果
  for (let = 0; i < document.getElementsByTagName('p').length; i++) {
    // 每次循环，都会计算length，频繁的进行DOM查询
  }
  // 缓存DOM结果
  const pList = document.getElementsByTagName('p')
  const length = pList.length
  for (let i = 0; i < length; i++) {
    // 缓存了 length， 只进行一次DOM查询
  }
  ```
