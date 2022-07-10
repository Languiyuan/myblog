(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{508:function(t,v,_){t.exports=_.p+"assets/img/40.598aac3c.png"},509:function(t,v,_){t.exports=_.p+"assets/img/41.4b47664f.png"},552:function(t,v,_){"use strict";_.r(v);var s=_(6),r=Object(s.a)({},(function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"tcp-udp-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-udp-的区别"}},[t._v("#")]),t._v(" TCP/UDP 的区别")]),t._v(" "),s("ul",[s("li",[t._v("连接方面\n"),s("ul",[s("li",[t._v("tcp 面向连接，udp 不需要连接")]),t._v(" "),s("li",[t._v("tcp 需要三次握手四次挥手请求连接")])])]),t._v(" "),s("li",[t._v("可靠性 - tcp 是可靠传输，一旦传输过程中丢包的话就会进行重传 - udp 是不可靠传输，但是会尽最大的努力交付")]),t._v(" "),s("li",[t._v("工作效率\n"),s("ul",[s("li",[t._v("udp 实时性高，比 TCP 工作效率要高")]),t._v(" "),s("li",[t._v("因为不需要建立连接，更不需要复杂的握手挥手以及复杂的算法，也没有重传的机制")])])]),t._v(" "),s("li",[t._v("是否支持多对多 - tcp 是点对点 - UDP 支持一对一，一对多，多对多")]),t._v(" "),s("li",[t._v("首部大小 - tcp 首部占 20 字节 - udp 首部占 8 个字节")])]),t._v(" "),s("h2",{attrs:{id:"tcp-udp-应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-udp-应用"}},[t._v("#")]),t._v(" TCP/UDP 应用")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("TCP")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("UDP")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("SMTP 电子邮件")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("DNS 域名转换")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("TELNET 远程终端接入")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("TFTP 文件传输")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("HTTP 万维网")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("SNMP 网络管理")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("FTP 文件传输")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("QUIC 可靠的应用层协议类似 http")])])])]),t._v(" "),s("h2",{attrs:{id:"tcp-流量控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-流量控制"}},[t._v("#")]),t._v(" TCP 流量控制")]),t._v(" "),s("p",[t._v("对于发送端和接收端而言，TCP 需要把发送的数据放在发送缓存区，将接受的数据放在接收的缓存区。")]),t._v(" "),s("p",[t._v("而流量控制就是通过接受缓存区的大小，控制发送端的发送。如果对方的接受缓存区满了，就不能再继续发送了。")]),t._v(" "),s("h3",{attrs:{id:"tcp-滑动窗口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-滑动窗口"}},[t._v("#")]),t._v(" TCP 滑动窗口")]),t._v(" "),s("p",[t._v("TCP 滑动窗口分成两种：发送窗口和接收窗口")]),t._v(" "),s("ul",[s("li",[t._v("发送窗口")])]),t._v(" "),s("p",[s("img",{attrs:{src:_(508),alt:""}})]),t._v(" "),s("p",[t._v("其中包含四大部分:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("- 已发送且已确认\n- 已发送但未确认\n- 未发送但可以发送\n- 未发送也不可以发送\n")])])]),s("ul",[s("li",[t._v("接受窗口")])]),t._v(" "),s("p",[s("img",{attrs:{src:_(509),alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("流量控制过程")])]),t._v(" "),s("p",[t._v("通过 TCP 来连接发送数据，如果发送方发送的数据很慢，容易导致资源的浪费；如果发送方发送的数据过快，接受方来不及接受数据会造成数据的丢失。流量控制就是指在接收方能够接受的范围内，合理而又快速的发送数据。")]),t._v(" "),s("h2",{attrs:{id:"拥塞控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拥塞控制"}},[t._v("#")]),t._v(" 拥塞控制")]),t._v(" "),s("p",[s("strong",[t._v("拥塞控制")]),t._v("是指防止过多的数据注入网络中，这样可以使网络中路由器或者链路不致过载。现在通信线路的传输质量一般都很好，因传输出现差错丢弃分组的概率很小。因此，判断网络拥塞的依据就是出现了"),s("strong",[t._v("超时")]),t._v("。")]),t._v(" "),s("p",[t._v("​ TCP 进行拥塞控制常用的算法有四种："),s("strong",[t._v("慢启动")]),t._v("、"),s("strong",[t._v("拥塞避免")]),t._v("、"),s("strong",[t._v("快重传")]),t._v("、"),s("strong",[t._v("快恢复")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"慢启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#慢启动"}},[t._v("#")]),t._v(" 慢启动")]),t._v(" "),s("p",[t._v("TCP 为发送方维持一个拥塞窗口（cwnd）。拥塞窗口是发送方使用流量控制，接收方声明的接受窗口是接收方使用的流量控制。发送方的发送窗口大小等于这两个窗口中的最小值。")]),t._v(" "),s("p",[s("strong",[t._v("拥塞窗口")]),t._v("的值跟 SMSS 有关，SMSS 为发送的"),s("strong",[t._v("最大报文段长度")]),t._v("。旧的规定是"),s("strong",[t._v("拥塞窗口")]),t._v("的初始值为 1 至 2 个 SMSS，RFC 5681 规定"),s("strong",[t._v("拥塞窗口")]),t._v("的初始值不超过 2 至 4 个 SMSS。")]),t._v(" "),s("p",[s("strong",[t._v("慢启动")]),t._v("算法规定：拥塞窗口初始化后，每收到一个对新报文的确认，拥塞窗口就加一个 SMSS 的大小。拥塞窗口以字节为单位，但是慢启动以 SMSS 大小为单位增加。按照慢启动算法，经过一轮传输，拥塞窗口就增大一倍，这是一种"),s("strong",[t._v("指数增长")]),t._v("的关系。")]),t._v(" "),s("h3",{attrs:{id:"拥塞避免"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拥塞避免"}},[t._v("#")]),t._v(" 拥塞避免")]),t._v(" "),s("p",[s("strong",[t._v("慢启动")]),t._v("算法除了维持"),s("strong",[t._v("拥塞窗口")]),t._v("cwnd 变量之外，还维持另一个变量"),s("strong",[t._v("慢启动门限")]),t._v("ssthresh。当 cwnd 以指数增长的形式增长到大于或等于 ssthresh 时，就不再采用"),s("strong",[t._v("慢启动")]),t._v("算法，而是采用"),s("strong",[t._v("拥塞避免")]),t._v("算法来进行拥塞控制。")]),t._v(" "),s("p",[s("strong",[t._v("拥塞避免")]),t._v("算法规定：每次收到一个确认时将 cwnd 增加 1/cwnd 个 SMSS。即不再是像慢启动算法那样经过一轮传输 cwnd 翻倍了，而是经过一轮传输增加一个 SMSS。这是一种"),s("strong",[t._v("加性增长")]),t._v("的关系。\n  当拥塞发生时（超时或收到重复确认），cwnd 被设置为 1 个 SMSS。ssthresh 被设置为当前窗口大小的一半，但最少为 2 个报文段。")]),t._v(" "),s("h3",{attrs:{id:"快重传"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快重传"}},[t._v("#")]),t._v(" 快重传")]),t._v(" "),s("p",[t._v("如果个别报文段在网络中丢失，网络并没有发生拥塞，这种情况下发送方收不到确认报文，在超时之后会重传该报文。发送方误以为网络发生拥塞，错误的启动慢开始算法，降低了传输效率。\n  采用"),s("strong",[t._v("快重传")]),t._v("算法可以让发送方尽早知道个别报文段的丢失。"),s("strong",[t._v("快重传")]),t._v("算法要求接收方不要延时发送确认，即使收到失序的报文段也要立刻发送对已收到报文的重复确认。")]),t._v(" "),s("p",[t._v("例如：接收方收到 M1 之后发送对 M1 的确认报文，M2 报文丢失，之后接收方收到 M3、M4、M5 时每次都发送对 M1 报文的重复确认。"),s("strong",[t._v("快重传")]),t._v("算法规定当收到"),s("strong",[t._v("三次重复确认")]),t._v("后，发送方就认为 M2 报文段丢失，立即重传 M2 报文段，而不用等待超时时再重传，这样可以避免发送方误认为网络发生拥塞。使用快重传可以使整个网络的吞吐量提高约 20%。")]),t._v(" "),s("h3",{attrs:{id:"快恢复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快恢复"}},[t._v("#")]),t._v(" 快恢复")]),t._v(" "),s("p",[t._v("在"),s("strong",[t._v("快重传")]),t._v("算法执行后，发送方知道只是丢失个别报文，而不是网络发生拥塞。之后并不会执行"),s("strong",[t._v("慢启动")]),t._v("算法，而是执行"),s("strong",[t._v("快恢复")]),t._v("算法：调整门限值 ssthresh = cwnd/2，同时设置 cwnd = ssthresh + 3 SMSS。这种设置门限值为当前拥塞窗口的一半，同时根据门限值调整拥塞窗口的形式称为"),s("strong",[t._v("乘法减小")]),t._v("。\n  为什么要设置拥塞窗口的值为门限值加 3 个报文段，而不是直接等于门限值？这是因为发送方收到三个确认报文，就认为有三个分组已经离开网络到达接收方的缓存，这三个确认报文不再占用网络资源，可以适当增大拥塞窗口的大小。")])])}),[],!1,null,null,null);v.default=r.exports}}]);