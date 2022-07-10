(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{551:function(i,v,a){"use strict";a.r(v);var t=a(6),e=Object(t.a)({},(function(){var i=this,v=i.$createElement,a=i._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[a("h2",{attrs:{id:"前端安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端安全"}},[i._v("#")]),i._v(" 前端安全")]),i._v(" "),a("h3",{attrs:{id:"xss-跨站脚本攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss-跨站脚本攻击"}},[i._v("#")]),i._v(" XSS：跨站脚本攻击")]),i._v(" "),a("p",[i._v("就是攻击者想尽一切办法将可以执行的代码注入到网页中。")]),i._v(" "),a("h4",{attrs:{id:"存储型-server-端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储型-server-端"}},[i._v("#")]),i._v(" 存储型（server 端）：")]),i._v(" "),a("ul",[a("li",[i._v("场景：见于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等。")]),i._v(" "),a("li",[i._v("攻击步骤：\n"),a("ul",[a("li",[i._v("i）攻击者将恶意代码提交到目标网站的数据库中")]),i._v(" "),a("li",[i._v("ii）用户打开目标网站时，服务端将恶意代码从数据库中取出来，拼接在 HTML 中返回给浏览器")]),i._v(" "),a("li",[i._v("iii）用户浏览器在收到响应后解析执行，混在其中的恶意代码也同时被执行")]),i._v(" "),a("li",[i._v("iv）恶意代码窃取用户数据，并发送到指定攻击者的网站，或者冒充用户行为，调用目标网站的接口，执行恶意操作")])])])]),i._v(" "),a("h4",{attrs:{id:"反射型-server-端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反射型-server-端"}},[i._v("#")]),i._v(" 反射型（Server 端）")]),i._v(" "),a("p",[i._v("与存储型的区别在于，存储型的恶意代码存储在数据库中，反射型的恶意代码在 URL 上")]),i._v(" "),a("ul",[a("li",[i._v("场景：通过 URL 传递参数的功能，如网站搜索、跳转等。")]),i._v(" "),a("li",[i._v("攻击步骤：\n"),a("ul",[a("li",[i._v("i）攻击者构造出特殊的 URL，其中包含恶意代码。")]),i._v(" "),a("li",[i._v("ii）用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器。")]),i._v(" "),a("li",[i._v("iii）用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。")]),i._v(" "),a("li",[i._v("iv）恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。")])])])]),i._v(" "),a("h4",{attrs:{id:"dom-型-浏览器端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom-型-浏览器端"}},[i._v("#")]),i._v(" Dom 型(浏览器端）")]),i._v(" "),a("p",[i._v("DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞。")]),i._v(" "),a("ul",[a("li",[i._v("场景：通过 URL 传递参数的功能，如网站搜索、跳转等。")]),i._v(" "),a("li",[i._v("攻击步骤：\n"),a("ul",[a("li",[i._v("i）攻击者构造出特殊的 URL，其中包含恶意代码。")]),i._v(" "),a("li",[i._v("ii）用户打开带有恶意代码的 URL。")]),i._v(" "),a("li",[i._v("iii）用户浏览器接收到响应后解析执行，前端 JavaScript 取出 URL 中的恶意代码并执行。")]),i._v(" "),a("li",[i._v("iv）恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。")])])])]),i._v(" "),a("h4",{attrs:{id:"预防方案-防止攻击者提交恶意代码-防止浏览器执行恶意代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预防方案-防止攻击者提交恶意代码-防止浏览器执行恶意代码"}},[i._v("#")]),i._v(" 预防方案：（防止攻击者提交恶意代码，防止浏览器执行恶意代码）")]),i._v(" "),a("ul",[a("li",[i._v("i）对数据进行严格的输出编码：如 HTML 元素的编码，JS 编码，CSS 编码，URL 编码（encodeURIComponent）等等\n"),a("ul",[a("li",[i._v("避免拼接 HTML；Vue/React 技术栈，避免使用 v-html / dangerouslySetInnerHTML")])])]),i._v(" "),a("li",[i._v("ii）CSP HTTP Header，即 Content-Security-Policy、X-XSS-Protection\n"),a("ul",[a("li",[i._v("增加攻击难度，配置 CSP(本质是建立白名单，由浏览器进行拦截)")]),i._v(" "),a("li",[a("code",[i._v("Content-Security-Policy: default-src 'self'")]),i._v("-所有内容均来自站点的同一个源（不包括其子域名）")]),i._v(" "),a("li",[a("code",[i._v("Content-Security-Policy: default-src 'self' *.trusted.com")]),i._v("-允许内容来自信任的域名及其子域名 (域名不必须与 CSP 设置所在的域名相同)")]),i._v(" "),a("li",[a("code",[i._v("Content-Security-Policy: default-src https://yideng.com")]),i._v("-该服务器仅允许通过 HTTPS 方式并仅从 yideng.com 域名来访问文档")])])]),i._v(" "),a("li",[i._v("iii）输入验证：比如一些常见的数字、URL、电话号码、邮箱地址等等做校验判断")]),i._v(" "),a("li",[i._v("iv）开启浏览器 XSS 防御：Http Only cookie，禁止 JavaScript 读取某些敏感 Cookie，攻击者完成 XSS 注入后也无法窃取此 Cookie。")]),i._v(" "),a("li",[i._v("v）验证码")])]),i._v(" "),a("h3",{attrs:{id:"csrf-跨站请求伪造"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf-跨站请求伪造"}},[i._v("#")]),i._v(" CSRF：跨站请求伪造")]),i._v(" "),a("p",[i._v("攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。")]),i._v(" "),a("h4",{attrs:{id:"攻击流程举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#攻击流程举例"}},[i._v("#")]),i._v(" 攻击流程举例")]),i._v(" "),a("ul",[a("li",[i._v("i）受害者登录 a.com，并保留了登录凭证（Cookie）")]),i._v(" "),a("li",[i._v("ii）攻击者引诱受害者访问了 b.com")]),i._v(" "),a("li",[i._v("iii）b.com 向 a.com 发送了一个请求：a.com/act=xx 浏览器会默认携带 a.com 的 Cookie")]),i._v(" "),a("li",[i._v("iv）a.com 接收到请求后，对请求进行验证，并确认是受害者的凭证，误以为是受害者自己发送的请求")]),i._v(" "),a("li",[i._v("v）a.com 以受害者的名义执行了 act=xx")]),i._v(" "),a("li",[i._v("vi）攻击完成，攻击者在受害者不知情的情况下，冒充受害者，让 a.com 执行了自己定义的操作")])]),i._v(" "),a("h4",{attrs:{id:"攻击类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#攻击类型"}},[i._v("#")]),i._v(" 攻击类型")]),i._v(" "),a("ul",[a("li",[i._v("i）GET 型：如在页面的某个 img 中发起一个 get 请求")]),i._v(" "),a("li",[i._v("ii）POST 型：通过自动提交表单到恶意网站")]),i._v(" "),a("li",[i._v("iii）链接型：需要诱导用户点击链接")])]),i._v(" "),a("h4",{attrs:{id:"预防方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预防方案"}},[i._v("#")]),i._v(" 预防方案：")]),i._v(" "),a("p",[i._v("CSRF 通常从第三方网站发起，被攻击的网站无法防止攻击发生，只能通过增强自己网站针对 CSRF 的防护能力来提升安全性。）")]),i._v(" "),a("ul",[a("li",[i._v("i）同源检测：通过 Header 中的 Origin Header 、Referer Header 确定，但不同浏览器可能会有不一样的实现，不能完全保证")]),i._v(" "),a("li",[i._v("ii）CSRF Token 校验：将 CSRF Token 输出到页面中（通常保存在 Session 中），页面提交的请求携带这个 Token，服务器验证 Token 是否\n正确")]),i._v(" "),a("li",[i._v("iii）双重 cookie 验证：\n"),a("ul",[a("li",[i._v("流程：\n"),a("ul",[a("li",[i._v("步骤 1：在用户访问网站页面时，向请求域名注入一个 Cookie，内容为随机字符串（例如 csrfcookie=v8g9e4ksfhw）")]),i._v(" "),a("li",[i._v("步骤 2：在前端向后端发起请求时，取出 Cookie，并添加到 URL 的参数中（接上例 POST https://www.a.com/comment?csrfcookie=v8g9e4ksfhw）")]),i._v(" "),a("li",[i._v("步骤 3：后端接口验证 Cookie 中的字段与 URL 参数中的字段是否一致，不一致则拒绝。")])])]),i._v(" "),a("li",[i._v("优点：\n"),a("ul",[a("li",[i._v("无需使用 Session，适用面更广，易于实施。")]),i._v(" "),a("li",[i._v("Token 储存于客户端中，不会给服务器带来压力。")]),i._v(" "),a("li",[i._v("相对于 Token，实施成本更低，可以在前后端统一拦截校验，而不需要一个个接口和页面添加。")])])]),i._v(" "),a("li",[i._v("缺点：\n-Cookie 中增加了额外的字段。 -如果有其他漏洞（例如 XSS），攻击者可以注入 Cookie，那么该防御方式失效。 -难以做到子域名的隔离。 -为了确保 Cookie 传输安全，采用这种防御方式的最好确保用整站 HTTPS 的方式，如果还没切 HTTPS 的使用这种方式也会有风险。")])])]),i._v(" "),a("li",[i._v("iv）Samesite Cookie 属性：Google 起草了一份草案来改进 HTTP 协议，那就是为 Set-Cookie 响应头新增 Samesite 属性，它用来标明这个 Cookie 是个“同站 Cookie”，同站 Cookie 只能作为第一方 Cookie，不能作为第三方 Cookie，Samesite 有两个属性值，Strict 为任何情况下都不可以作为第三方 Cookie ，Lax 为可以作为第三方 Cookie , 但必须是 Get 请求")])]),i._v(" "),a("h3",{attrs:{id:"iframe-安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iframe-安全"}},[i._v("#")]),i._v(" iframe 安全")]),i._v(" "),a("h4",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[i._v("#")]),i._v(" 说明：")]),i._v(" "),a("ul",[a("li",[i._v("i）嵌入第三方 iframe 会有很多不可控的问题，同时当第三方 iframe 出现问题或是被劫持之后，也会诱发安全性问题")]),i._v(" "),a("li",[i._v("ii）点击劫持\n"),a("ul",[a("li",[i._v("攻击者将目标网站通过 iframe 嵌套的方式嵌入自己的网页中，并将 iframe 设置为透明，诱导用户点击。")])])]),i._v(" "),a("li",[i._v("iii）禁止自己的 iframe 中的链接外部网站的 JS")])]),i._v(" "),a("h4",{attrs:{id:"预防方案-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预防方案-2"}},[i._v("#")]),i._v(" 预防方案：")]),i._v(" "),a("ul",[a("li",[i._v("i）为 iframe 设置 sandbox 属性，通过它可以对 iframe 的行为进行各种限制，充分实现“最小权限“原则")]),i._v(" "),a("li",[i._v("ii）服务端设置 X-Frame-Options Header 头，拒绝页面被嵌套，X-Frame-Options 是 HTTP 响应头中用来告诉浏览器一个页面是否可以嵌入 "),a("iframe",[i._v(" 中\n"),a("ul",[a("li",[i._v("eg."),a("code",[i._v("X-Frame-Options: SAMEORIGIN")])]),i._v(" "),a("li",[i._v("SAMEORIGIN: iframe 页面的地址只能为同源域名下的页面")]),i._v(" "),a("li",[i._v("ALLOW-FROM: 可以嵌套在指定来源的 iframe 里")]),i._v(" "),a("li",[i._v("DENY: 当前页面不能被嵌套在 iframe 里")])])])]),i._v(" "),a("li",[i._v("iii）设置 CSP 即 Content-Security-Policy 请求头")]),i._v(" "),a("li",[i._v("iv）减少对 iframe 的使用")])]),i._v(" "),a("h3",{attrs:{id:"错误的内容推断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误的内容推断"}},[i._v("#")]),i._v(" 错误的内容推断")]),i._v(" "),a("h4",{attrs:{id:"说明-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明-2"}},[i._v("#")]),i._v(" 说明：")]),i._v(" "),a("p",[i._v("文件上传类型校验失败后，导致恶意的 JS 文件上传后，浏览器 Content-Type Header 的默认解析为可执行的 JS 文件")]),i._v(" "),a("h4",{attrs:{id:"预防方案-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预防方案-3"}},[i._v("#")]),i._v(" 预防方案：")]),i._v(" "),a("p",[i._v("设置 X-Content-Type-Options 头")]),i._v(" "),a("h3",{attrs:{id:"第三方依赖包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三方依赖包"}},[i._v("#")]),i._v(" 第三方依赖包")]),i._v(" "),a("p",[i._v("减少对第三方依赖包的使用，如之前 npm 的包如：event-stream 被爆出恶意攻击数字货币；")]),i._v(" "),a("h3",{attrs:{id:"https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[i._v("#")]),i._v(" HTTPS")]),i._v(" "),a("h4",{attrs:{id:"描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[i._v("#")]),i._v(" 描述：")]),i._v(" "),a("p",[i._v("黑客可以利用 SSL Stripping 这种攻击手段，强制让 HTTPS 降级回 HTTP，从而继续进行中间人攻击。")]),i._v(" "),a("h4",{attrs:{id:"预防方案-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预防方案-4"}},[i._v("#")]),i._v(" 预防方案：")]),i._v(" "),a("p",[i._v("使用 HSTS（HTTP Strict Transport Security），它通过下面这个 HTTP Header 以及一个预加载的清单，来告知浏览器和网站进行通信的时候强制性的使用 HTTPS，而不是通过明文的 HTTP 进行通信。这里的“强制性”表现为浏览器无论在何种情况下都直接向务器端发起 HTTPS 请求，而不再像以往那样从 HTTP 跳转到 HTTPS。另外，当遇到证书或者链接不安全的时候，则首先警告用户，并且不再用户选择是否继续进行不安全的通信。")]),i._v(" "),a("h3",{attrs:{id:"本地存储数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地存储数据"}},[i._v("#")]),i._v(" 本地存储数据")]),i._v(" "),a("p",[i._v("避免重要的用户信息存在浏览器缓存中")]),i._v(" "),a("h3",{attrs:{id:"静态资源完整性校验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态资源完整性校验"}},[i._v("#")]),i._v(" 静态资源完整性校验")]),i._v(" "),a("h4",{attrs:{id:"描述-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述-2"}},[i._v("#")]),i._v(" 描述")]),i._v(" "),a("p",[i._v("使用 内容分发网络 (CDNs) 在多个站点之间共享脚本和样式表等文件可以提高站点性能并节省带宽。然而，使用 CDN 也存在风险，如果攻击者获得对 CDN 的控制权，则可以将任意恶意内容注入到 CDN 上的文件中 （或完全替换掉文件），因此可能潜在地攻击所有从该 CDN 获取文件的站点。")]),i._v(" "),a("h4",{attrs:{id:"预防方案-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预防方案-5"}},[i._v("#")]),i._v(" 预防方案")]),i._v(" "),a("p",[i._v("将使用 base64 编码过后的文件哈希值写入你所引用的 "),a("script")])])}),[],!1,null,null,null);v.default=e.exports}}]);