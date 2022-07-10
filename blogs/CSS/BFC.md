---
title: BFC
date: 2021-7-22
tags:
  - 'CSS'
categories:
  - 'CSS'
---

## BFC 的理解和应用

- BFC(Block-Formatting context ),块级格式化上下文，他是一个独立渲染的区域。
- BFC 特性
  - 同一个 BFC 下 margin 会重叠 （把重叠的两个元素，分成两个 BFC，来避免 margin 重叠。）
  - 计算 BFC 高度时会算上浮动元素（可以清除浮动）
  - BFC 不会影响到外部元素
  - BFC 内部元素是垂直排列的
  - BFC 区域不会与 float 元素重叠（两边自适应布局）
- 如何创建 BFC
  - - position 设为 absolute 或者 fixed
  - float 不为 none
  - overflow 设置为 hidden(常用)
  - display 设置为 inline-block 或者 inline-table 或 flex
