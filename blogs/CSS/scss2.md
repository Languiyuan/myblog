---
autoGroup-1: SCSS
title: SCSS(中)
date: 2021-7-25
tags:
  - 'CSS'
  - 'SCSS'
categories:
  - 'CSS'
---

## 六、杂货语法

### 1.`插值语法`

通过 `#{}` 插值语句可以在选择器、属性名和属性值中使用变量。

但大多数情况下，这样使用属性值可能还不如直接使用变量方便，但是使用 `#{}` 可以避免 Sass 运行运算表达式，直接编译 CSS。

```scss
$name: foo;
$attr: border;
p.#{$name} {
  #{$attr}-color: $name;
}

// 编译后：
p.foo {
  border-color: foo;
}
```

### 2.`& in SassScript`

`&`为父选择器

```scss
a {
  color: yellow;
  &:hover {
    color: green;
  }
  &:active {
    color: blank;
  }
}
```

### 3.`!default`

可以在变量的结尾添加 `!default` 给一个未通过 `!default` 声明赋值的变量赋值，此时，如果变量已经被赋值，不会再被重新赋值，但是如果变量还没有被赋值，则会被赋予新的值。

```scss
$content: 'First content';
$content: 'Second content?' !default;
$new_content: 'First time reference' !default;

#main {
  content: $content;
  new-content: $new_content;
}

// 编译为：
#main {
  content: 'First content';
  new-content: 'First time reference';
}
```

注意：变量是 null 空值时将视为未被 `!default` 赋值。

### 3.`!global`

将局部变量提升为全局变量

### 4.`!optional`

如果 `@extend` 失败会收到错误提示，比如，这样写 `a.important {@extend .notice}`，当没有 `.notice` 选择器时，将会报错，只有 `h1.notice` 包含 `.notice` 时也会报错，因为 `h1` 与 `a` 冲突，会生成新的选择器。

如果要求 `@extend` 不生成新选择器，可以通过 `!optional` 声明达到这个目的.

简而言之：当`@extend`相关代码出现语法错误时，编译器可能会给我们"乱"编译为 css，我们加上这个参数可以在出现问题后不让他编译该部分代码

## 七、@-Rules 与指令

### 1.`@import`

Sass 拓展了 `@import` 的功能，允许其导入 SCSS 或 SASS 文件。被导入的文件将合并编译到同一个 CSS 文件中，另外，被导入的文件中所包含的变量或者混合指令 (mixin) 都可以在导入的文件中使用。

通常，`@import` 寻找 Sass 文件并将其导入，但在以下情况下，`@import` 仅作为普通的 CSS 语句，不会导入任何 Sass 文件。

- 文件拓展名是 `.css`；
- 文件名以 `http://` 开头；
- 文件名是 `url()`；
- `@import` 包含 media queries。

如果不在上述情况内，文件的拓展名是 `.scss` 或 `.sass`，则导入成功。没有指定拓展名，Sass 将会试着寻找文件名相同，拓展名为 `.scss` 或 `.sass` 的文件并将其导入。

```scss
@import 'foo.scss';
@import 'foo';
// 以上两种方式均可

// 以下方式均不可行
@import 'foo.css';
@import 'foo' screen;
@import 'http://foo.com/bar';
@import url(foo);
```

Sass 允许同时导入多个文件，例如同时导入 rounded-corners 与 text-shadow 两个文件：

```scss
@import 'rounded-corners', 'text-shadow';
```

导入文件也可以使用 `#{ }` 插值语句，但不是通过变量动态导入 Sass 文件，只能作用于 CSS 的 `url()` 导入方式：

```scss
$family: unquote('Droid+Sans');
@import url('http://fonts.googleapis.com/css?family=\#{$family}');

// 编译为：
@import url('http://fonts.googleapis.com/css?family=Droid+Sans');
```

如果你有一个 SCSS 或 Sass 文件需要引入， 但是你又不希望它被编译为一个 CSS 文件， 这时，你就可以在文件名前面加一个下划线，就能避免被编译。 这将告诉 Sass 不要把它编译成 CSS 文件。 然后，你就可以像往常一样引入这个文件了，而且还可以省略掉文件名前面的下划线。

除此之外，还支持嵌套 @import,但是不可以在混合指令 (mixin) 或控制指令 (control directives) 中嵌套 `@import`。

### 2.`@media`

Sass 中 `@media` 指令与 CSS 中用法一样，只是增加了一点额外的功能：允许其在 CSS 规则中嵌套。如果 `@media` 嵌套在 CSS 规则内，编译时，`@media` 将被编译到文件的最外层，包含嵌套的父选择器。这个功能让 `@media` 用起来更方便，不需要重复使用选择器，也不会打乱 CSS 的书写流程。

```scss
.sidebar {
  width: 300px;
  @media screen and (orientation: landscape) {
    width: 500px;
  }
}
// 编译为
.sidebar {
  width: 300px;
  @media screen and (orientation: landscape) {
    width: 500px;
  }
}
```

`@media`的 queries 允许互相嵌套使用，编译时，Sass 自动添加 `and`

```scss
@media screen {
  .sidebar {
    @media (orientation: landscape) {
      width: 500px;
    }
  }
}
// 编译为：
@media screen and (orientation: landscape) {
  .sidebar {
    width: 500px;
  }
}
```

`@media` 甚至可以使用 SassScript（比如变量，函数，以及运算符）代替条件的名称或者值

```scss
$media: screen;
$feature: -webkit-min-device-pixel-ratio;
$value: 1.5;

@media #{$media} and ($feature: $value) {
  .sidebar {
    width: 500px;
  }
}
// 编译为：
@media screen and (-webkit-min-device-pixel-ratio: 1.5) {
  .sidebar {
    width: 500px;
  }
}
```

### 3.`*@extend`

`@extend`即`继承`。在设计网页的时候常常遇到这种情况：一个元素使用的样式与另一个元素完全相同，但又添加了额外的样式。

总的来看：支持层叠继承、多继承、允许延伸任何定义给单个元素的选择器（但是允许不一定好用）

a. `基本延伸`

```scss
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
// 上面代码的意思是将 .error 下的所有样式继承给 .seriousError，border-width: 3px; 是单独给 .seriousError 设定特殊样式，这样，使用 .seriousError 的地方可以不再使用 .error。
```

`@extend` 的作用是将重复使用的样式 (`.error`) 延伸 (extend) 给需要包含这个样式的特殊样式（`.seriousError`）

注意理解以下情况：

```scss
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.error.intrusion {
  background-image: url("/image/hacked.png");
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
// .error, .seriousError {
  border: 1px #f00;
  background-color: #fdd; }

.error.intrusion, .seriousError.intrusion {
  background-image: url("/image/hacked.png"); }

.seriousError {
  border-width: 3px; }
```

当合并选择器时，`@extend` 会很聪明地避免无谓的重复，`.seriousError.seriousError` 将编译为 `.seriousError`，不能匹配任何元素的选择器也会删除。

b. `延伸复杂的选择器`：Class 选择器并不是唯一可以被延伸 (extend) 的，Sass 允许延伸任何定义给单个元素的选择器，比如 `.special.cool`，`a:hover` 或者 `a.user[href^="http://"]` 等

c. `多重延伸`：同一个选择器可以延伸给多个选择器，它所包含的属性将继承给所有被延伸的选择器

d. `继续延伸`：当一个选择器延伸给第二个后，可以继续将第二个选择器延伸给第三个

e.`*选择器列`：暂时不可以将选择器列 (Selector Sequences)，比如 `.foo .bar` 或 `.foo + .bar`，延伸给其他元素，但是，却可以将其他元素延伸给选择器列。

尽量不使用`合并选择器列`，因为如果凭个人推理的话，会出现排列组合的情况，所以 SASS 编译器只会保留有用的组合形式，但依旧会存在排列组合的情况，有可能会留下隐患。

1. 当两个列合并时，如果没有包含相同的选择器，将生成两个新选择器：第一列出现在第二列之前，或者第二列出现在第一列之前

   ```scss
   #admin .tabbar a {
     font-weight: bold;
   }
   #demo .overview .fakelink {
     @extend a;
   }
   // 编译为：
   #admin .tabbar a,
   #admin .tabbar #demo .overview .fakelink,
   #demo .overview #admin .tabbar .fakelink {
     font-weight: bold;
   }
   ```

2) 如果两个列包含了相同的选择器，相同部分将会合并在一起，其他部分交替输出

   ```scss
   #admin .tabbar a {
     font-weight: bold;
   }
   #admin .overview .fakelink {
     @extend a;
   }
   // 编译为
   #admin .tabbar a,
   #admin .tabbar .overview .fakelink,
   #admin .overview .tabbar .fakelink {
     font-weight: bold;
   }
   ```

f. `在指令中延伸`

在指令中使用 `@extend` 时（比如在 `@media` 中）有一些限制：Sass 不可以将 `@media` 层外的 CSS 规则延伸给指令层内的 CSS.

g. `%placeholder`为选择器占位符，配合`@extend-Only选择器`使用。

效果：只定义了样式，但不会对原有选择器匹配的元素生效

```scss
// example1:
%img {
  color: red;
}
.path {
  @extend %img;
}
// 编译后：
.path {
  color: red;
}
```

```scss
// example2:
#context a%extreme {
  color: blue;
  font-weight: bold;
  font-size: 2em;
}
// 编译后：
.notice {
  @extend %extreme;
}

// 注：必须是"."和"#"选择器
```

### 4.`@at-root`

> The @at-root directive causes one or more rules to be emitted at the root of the document, rather than being nested beneath their parent selectors. It can either be used with a single inline selector

译文：@at root 指令使一个或多个规则在文档的根发出，而不是嵌套在其父选择器下。它可以与单个内联选择器一起使用

且@at-root 使多个规则跳出嵌套

@at-root 默认情况下并不能使规则或者选择器跳出指令，通过使用 without 和 with 可以解决该问题

了解即可

### 5.`@debug`

用于调试，按标准错误输出流输出

```scss
$size: 9px;

.file {
  @debug $size;
}
```

### 6.`@warn`

用于警告，按标准错误输出流输出

### 7.`@error`

用于报错，按标准错误输出流输出

| 序列 | @-rules  | 作用                               |
| ---- | -------- | ---------------------------------- |
| 1    | @import  | 导入 sass 或 scss 文件             |
| 2    | @media   | 用于将样式规则设置为不同的媒体类型 |
| 3    | @extend  | 以继承的方式共享选择器             |
| 4    | @at-root | 转到根节点                         |
| 5    | @debug   | 用于调试，按标准错误输出流输出     |
| 6    | @warn    | 用于警告，按标准错误输出流输出     |
| 7    | @error   | 用于报错，按标准错误输出流输出     |

## 八、控制指令

### 1.`if()`

_三元运算符_

表达式：`if(expression, value1, value2)`

```scss
p {
  color: if(1 + 1 = 2, green, yellow);
}

// compile:
p {
  color: green;
}
```

### 2.`@if`

_条件语句_

当 `@if` 的表达式返回值不是 `false` 或者 `null` 时，条件成立，输出 `{}` 内的代码

`@if` 声明后面可以跟多个 `@else if` 声明，或者一个 `@else` 声明。如果 `@if` 声明失败，Sass 将逐条执行 `@else if` 声明，如果全部失败，最后执行 `@else` 声明

- `单@if`

  ```scss
  p {
    @if 1 + 1 == 2 {
      color: red;
    }
  }

  // compile:
  p {
    color: red;
  }
  ```

- `@if - @else`

  ```scss
  p {
    @if 1 + 1 != 2 {
      color: red;
    } @else {
      color: blue;
    }
  }

  // compile:
  p {
    color: blue;
  }
  ```

- `@if - @else if - @else`

  ```scss
  $age: 19;

  p {
    @if $age == 18 {
      color: red;
    } @else if $age == 19 {
      color: blue;
    } @else {
      color: green;
    }
  }

  // compile:
  p {
    color: blue;
  }
  ```

### 3.`@for`

_循环语句_

表达式：`@for $var from <start> through <end>` 或 `@for $var from <start> to <end>`

through 和 to 的相同点与不同点：

- 相同点：两者均包含 start 的值
- 不同点：through 包含 end 的值，但 to 不包含 end 的值

```scss
@for $i from 1 through 3 {
  .item-#{$i} {
    width: 2em * $i;
  }
}

// compile:
.item-1 {
  width: 2em;
}
.item-2 {
  width: 4em;
}
.item-3 {
  width: 6em;
}
```

### 4.`@while`

_循环语句_

表达式：`@while expression`

`@while` 指令重复输出格式直到表达式返回结果为 `false`。这样可以实现比 `@for` 更复杂的循环，只是很少会用到

```scss
$i: 6;
@while $i > 0 {
  .item-#{$i} {
    width: 2em * $i;
  }
  $i: $i - 2;
}

// compile:
.item-6 {
  width: 12em;
}
.item-4 {
  width: 8em;
}
.item-2 {
  width: 4em;
}
```

### 5.`@each`

_循环语句_

表达式：`$var in $vars`

`$var` 可以是任何变量名

`$vars` 只能是`Lists`或者`Maps`

- 一维列表

  ```scss
  @each $animal in puma, sea-slug, egret, salamander {
    .#{$animal}-icon {
      background-image: url('/images/#{$animal}.png');
    }
  }

  // compile:
  .puma-icon {
    background-image: url('/images/puma.png');
  }
  .sea-slug-icon {
    background-image: url('/images/sea-slug.png');
  }
  .egret-icon {
    background-image: url('/images/egret.png');
  }
  .salamander-icon {
    background-image: url('/images/salamander.png');
  }
  ```

- 二维列表

  ```scss
  @each $animal, $color, $cursor in (puma, black, default), (
      sea-slug,
      blue,
      pointer
    ), (egret, white, move)
  {
    .#{$animal}-icon {
      background-image: url('/images/#{$animal}.png');
      border: 2px solid $color;
      cursor: $cursor;
    }
  }

  // compile:
  .puma-icon {
    background-image: url('/images/puma.png');
    border: 2px solid black;
    cursor: default;
  }
  .sea-slug-icon {
    background-image: url('/images/sea-slug.png');
    border: 2px solid blue;
    cursor: pointer;
  }
  .egret-icon {
    background-image: url('/images/egret.png');
    border: 2px solid white;
    cursor: move;
  }
  ```

- maps

  ```scss
  @each $header, $size in (h1: 2em, h2: 1.5em, h3: 1.2em) {
    #{$header} {
      font-size: $size;
    }
  }

  // compile:
  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.2em;
  }
  ```
