(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{548:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"查找节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找节点"}},[t._v("#")]),t._v(" 查找节点")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回第一个带有指定id的元素")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByClassName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回所有带有指定class的元素的集合(返回数组形式)")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回所有带有指定标签的元素的集合(返回数组形式)")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回第一个带有指定id或class的元素（支持css选择器的方式）")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelectorAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回所有带有指定id或class的元素")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"通过节点之间的关系进行查找"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过节点之间的关系进行查找"}},[t._v("#")]),t._v(" 通过节点之间的关系进行查找")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子元素 => 父元素")]),t._v("\nelement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回该节点的父节点，每个节点都会有一个父节点，Element的父节点可能是Element，Document或DocumentFragment；")]),t._v("\nelement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentElement "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回父节点，只有父节点为元素节点时返回，否则返回null")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 父元素 => 子元素")]),t._v("\nelement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回所有元素子节点的集合，仅包含元素节点")]),t._v("\nelement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回当前元素所有的子节点，包含元素节点，文本节点，属性节点。（注释、空格、换行等也会被当作一个节点）")]),t._v("\nelement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstChild "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回当前元素的第一个子节点，该子节点可以是任意节点，如果没有则返回null")]),t._v("\nelement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstElementChild "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回当前元素的第一个子节点，该子节点只可以是元素节点，如果没有则返回null")]),t._v("\nelement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastChild "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回当前元素的最后一个子节点，该子节点可以是任意节点，如果没有则返回null")]),t._v("\nelement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastElementChild "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回当前元素的最后一个子节点，该子节点只可以是元素节点，如果没有则返回null")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 兄弟元素")]),t._v("\nelement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("previousSibling "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回该节点的前一个兄弟节点")]),t._v("\nelement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("previousElementSibling "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回该节点的前一个元素兄弟节点")]),t._v("\nelement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nextSibling "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回该节点的后一个兄弟节点")]),t._v("\nelement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nextElementSibling "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回该节点的后一个元素兄弟节点")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("h2",{attrs:{id:"增加节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增加节点"}},[t._v("#")]),t._v(" 增加节点")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以添加多个元素，位置也在父元素当中的最后")]),t._v("\n  node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加到父元素当中最后")]),t._v("\nnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// replaceChild(newNode, oldNode)")]),t._v("\nnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBefore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// insertBefore(newNode, refNode) 这个就可以指定添加的位置，指定元素之前")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"删除子节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除子节点"}},[t._v("#")]),t._v(" 删除子节点")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"创造节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创造节点"}},[t._v("#")]),t._v(" 创造节点")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建一个元素节点")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTextNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建一个文本节点")]),t._v("\nnewNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cloneNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//克隆一个节点，参数true表示会克隆当前节点以及它的所有子节点，false表示只克隆当前节点，默认为false")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDocumentFragment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文档碎片")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"获取当前节点的文本值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取当前节点的文本值"}},[t._v("#")]),t._v(" 获取当前节点的文本值")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHtml "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回当前节点的所有文本包含html")]),t._v("\nelement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerText "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回当前节点及所有后代节点的文本值,不包含html")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置值")]),t._v("\nelement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHtml "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<p>value</p>'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'value'")]),t._v("\nelement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerText "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[a("code",[t._v("property")]),t._v(": 通过 JavaScript 来获得了 Dom 的节点，在 JavaScript 中这个节点就会成为一个对象，而 property 就是这个对象的属性，这个就类似于"),a("code",[t._v("hasOwnProperty")]),t._v("（）中的 property")]),t._v(" "),a("p",[a("code",[t._v("attribute")]),t._v(":这个是指 html 标签中的属性，比如 class，id，style，value,或者可以自定义属性，这个属性只能是字符串，关于这个属性一共有三个相关的方法，"),a("code",[t._v("setAttribute")]),t._v("、"),a("code",[t._v("getAttribute")]),t._v("、"),a("code",[t._v("removeAttribute")]),t._v("、"),a("code",[t._v("hasAttribute")]),t._v("；")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// attribute")]),t._v("\np1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'class'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'class'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"nodetype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodetype"}},[t._v("#")]),t._v(" "),a("code",[t._v("nodeType")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeType\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("常量")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Node.ELEMENT_NODE")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("1")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("一个 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("元素")]),a("OutboundLink")],1),t._v(" 节点，例如 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/div",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/p) 和 [")]),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Node.TEXT_NODE")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("3")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Element")]),a("OutboundLink")],1),t._v(" 或者 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Attr",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Attr")]),a("OutboundLink")],1),t._v(" 中实际的 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Text",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("文字")]),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Node.CDATA_SECTION_NODE")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("4")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("一个 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CDATASection",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("CDATASection")]),a("OutboundLink")],1),t._v("，例如 "),a("code",[t._v("<!CDATA[[ … ]]>")]),t._v("。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Node.PROCESSING_INSTRUCTION_NODE")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("7")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("一个用于 XML 文档的 "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/ProcessingInstruction",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("ProcessingInstruction")]),t._v(" (en-US)"),a("OutboundLink")],1),t._v(" ，例如 "),a("code",[t._v("<?xml-stylesheet ... ?>")]),t._v(" 声明。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Node.COMMENT_NODE")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("8")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("一个 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Comment",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Comment")]),a("OutboundLink")],1),t._v(" 节点。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Node.DOCUMENT_NODE")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("9")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("一个 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Document")]),a("OutboundLink")],1),t._v(" 节点。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Node.DOCUMENT_TYPE_NODE")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("10")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("描述文档类型的 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentType",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("DocumentType")]),a("OutboundLink")],1),t._v(" 节点。例如 "),a("code",[t._v("<!DOCTYPE html>")]),t._v(" 就是用于 HTML5 的。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Node.DOCUMENT_FRAGMENT_NODE")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("11")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("一个 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("DocumentFragment")]),a("OutboundLink")],1),t._v(" 节点")])])])]),t._v(" "),a("h3",{attrs:{id:"文档碎片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档碎片"}},[t._v("#")]),t._v(" 文档碎片")]),t._v(" "),a("p",[t._v("对 DOM 的操作是十分的影响性能的，所以可以采用把要操作的 DOM 元素都提取出来，统一操作之后，再添加回 DOM 树，文档碎片就是完成这样一个工作，有效的减少页面的重排和重绘。")]),t._v(" "),a("p",[a("code",[t._v("DocumentFragment")]),t._v("继承了 node 的所有"),a("code",[t._v("api")]),t._v("，并增加了一些")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" div1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fragment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDocumentFragment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" child\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  child "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" div1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstChild\n  fragment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" nodes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fragment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nodes'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fragment'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fragment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在一步对文档碎片进行操作，此时DOM树中并不会有这些节点，对这些节点进行操作，并不会引起重拍重绘，等一系列指令都操作完了，在把文档碎片重新从添加到DOM树中")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// replace(fragment)")]),t._v("\n\ndiv1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fragment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("h3",{attrs:{id:"dom-性能提升"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom-性能提升"}},[t._v("#")]),t._v(" DOM 性能提升")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("避免频繁的 dom 操作")])]),t._v(" "),a("li",[a("p",[t._v("利用文档碎片进行， 把频操作改成一次性操作")])]),t._v(" "),a("li",[a("p",[t._v("查询缓存")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不缓存 DOM的查询结果")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每次循环，都会计算length，频繁的进行DOM查询")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 缓存DOM结果")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 缓存了 length， 只进行一次DOM查询")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);