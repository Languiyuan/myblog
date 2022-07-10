---
autoGroup-1: SCSS
title: SCSS(下)
date: 2021-7-25
tags:
  - 'CSS'
  - 'SCSS'
categories:
  - 'CSS'
---

## 九、混合指令

> 混合指令（Mixin）用于定义可重复使用的样式，避免了使用无语意的 class，比如 `.float-left`。混合指令可以包含所有的 CSS 规则，绝大部分 Sass 规则，甚至通过参数功能引入变量，输出多样化的样式。

注意：这不是函数！没有返回值！！

### 1.定义混合指令

混合指令的用法是在 `@mixin` 后添加名称与样式，以及需要的参数（可选）。

```scss
// 格式：
@mixin name {
  // 样式....
}
```

```scss
// example：
@mixin large-text {
  font: {
    family: Arial;
    size: 20px;
    weight: bold;
  }
  color: #ff0000;
}
```

### 2.引用混合样式

使用 `@include` 指令引用混合样式，格式是在其后添加混合名称，以及需要的参数（可选）。

```scss
// 格式：
@include name;

// 注：无参数或参数都有默认值时，带不带括号都可以
```

```scss
// example：
p {
  @include large-text;
}

// compile:
p {
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  color: #ff0000;
}
```

### 3.参数

格式：按照变量的格式，通过逗号分隔，将参数写进 Mixin 名称后的圆括号里

支持默认值；支持多参数；支持不定参数；支持位置传参和关键词传参

#### a. 位置传参

```scss
@mixin mp($width) {
  margin: $width;
}

body {
  @include mp(300px);
}
```

#### b.关键词传参

```scss
@mixin mp($width) {
  margin: $width;
}

body {
  @include mp($width: 300px);
}
```

#### c.参数默认值

```scss
@mixin mp($width: 500px) {
  margin: $width;
}

body {
  @include mp($width: 300px);
  // or
  @include mp(300px);
}
```

#### d.不定参数

> 官方：Variable Arguments
>
> 译文：参数变量
>
> 有时，不能确定混合指令需要使用多少个参数。这时，可以使用参数变量 `…` 声明（写在参数的最后方）告诉 Sass 将这些参数视为值列表处理

```scss
@mixin mar($value...) {
  margin: $value;
}
```

### 4.向混合样式中导入内容

在引用混合样式的时候，可以先将一段代码导入到混合指令中，然后再输出混合样式，额外导入的部分将出现在 `@content` 标志的地方

可以看作参数的升级版

```scss
@mixin example {
  html {
    @content;
  }
}
@include example {
  background-color: red;
  .logo {
    width: 600px;
  }
}

// compile:
html {
  background-color: red;
}

html .logo {
  width: 600px;
}
```

## 十、函数指令

### 1.内置函数

#### a. 字符串函数

> 索引第一个为 1，最后一个为-1；切片两边均为闭区间

| 函数名和参数类型                         |                    函数作用                    |
| :--------------------------------------- | :--------------------------------------------: |
| quote(\$string)                          |                    添加引号                    |
| unquote(\$string)                        |                    除去引号                    |
| to-lower-case(\$string)                  |                    变为小写                    |
| to-upper-case(\$string)                  |                    变为大写                    |
| str-length(\$string)                     |        返回\$string 的长度(汉字算一个)         |
| str-index($string，$substring)           |         返回$substring在$string 的位置         |
| str-insert($string, $insert, \$index)    |        在$string的$index 处插入\$insert        |
| str-slice($string, $start-at, \$end-at） | 截取$string的$start-at 和\$end-at 之间的字符串 |

#### b. 数字函数

| 函数名和参数类型         |                                  函数作用                                  |
| ------------------------ | :------------------------------------------------------------------------: |
| percentage(\$number)     |                              转换为百分比形式                              |
| round(\$number)          |                               四舍五入为整数                               |
| ceil(\$number)           |                                数值向上取整                                |
| floor(\$number)          |                                数值向下取整                                |
| abs(\$number)            |                                 获取绝对值                                 |
| min(\$number...)         |                                 获取最小值                                 |
| max(\$number...)         |                                 获取最大值                                 |
| random(\$number?:number) | 不传入值：获得 0-1 的随机数；传入正整数 n：获得 0-n 的随机整数（左开右闭） |

#### c. 数组函数

| 函数名和参数类型                  |                                        函数作用                                         |
| --------------------------------- | :-------------------------------------------------------------------------------------: |
| length(\$list)                    |                                      获取数组长度                                       |
| nth(\$list, n)                    |                                   获取指定下标的元素                                    |
| set-nth($list, $n, \$value)       |                                向$list的$n 处插入\$value                                |
| join($list1, $list2, \$separator) |   拼接$list1和list2；$separator 为新 list 的分隔符，默认为 auto，可选择 comma、space    |
| append($list, $val, \$separator)  | 向$list的末尾添加$val；\$separator 为新 list 的分隔符，默认为 auto，可选择 comma、space |
| index($list, $value)              |                             返回$value值在$list 中的索引值                              |
| zip(\$lists…)                     |            将几个列表结合成一个多维的列表；要求每个的列表个数值必须是相同的             |

#### d. 映射函数

| 函数名和参数类型        |                 函数作用                 |
| ----------------------- | :--------------------------------------: |
| map-get($map, $key)     |       获取$map中$key 对应的\$value       |
| map-merge($map1, $map2) |    合并$map1和$map2，返回一个新\$map     |
| map-remove($map, $key)  |    从$map中删除$key，返回一个新\$map     |
| map-keys(\$map)         |            返回$map所有的$key            |
| map-values(\$map)       |           返回$map所有的$value           |
| map-has-key($map, $key) | 判断$map中是否存在$key，返回对应的布尔值 |
| keywords(\$args)        |  返回一个函数的参数，并可以动态修改其值  |

#### e. 颜色函数

- **RGB 函数**

  | 函数名和参数类型               |                                          函数作用                                           |
  | ------------------------------ | :-----------------------------------------------------------------------------------------: |
  | rgb($red, $green, \$blue)      |                                   返回一个 16 进制颜色值                                    |
  | rgba($red,$green,$blue,$alpha) | 返回一个 rgba；$red,$green 和\$blue 可被当作一个整体以颜色单词、hsl、rgb 或 16 进制形式传入 |
  | red(\$color)                   |                                 从\$color 中获取其中红色值                                  |
  | green(\$color)                 |                                 从\$color 中获取其中绿色值                                  |
  | blue(\$color)                  |                                 从\$color 中获取其中蓝色值                                  |
  | mix($color1,$color2,\$weight?) |                   按照$weight比例，将$color1 和\$color2 混合为一个新颜色                    |

- **HSL 函数**

  | 函数名和参数类型                         | 函数作用                                                                              |
  | ---------------------------------------- | ------------------------------------------------------------------------------------- |
  | hsl($hue,$saturation,\$lightness)        | 通过色相（hue）、饱和度(saturation)和亮度（lightness）的值创建一个颜色                |
  | hsla($hue,$saturation,$lightness,$alpha) | 通过色相（hue）、饱和度(saturation)、亮度（lightness）和透明（alpha）的值创建一个颜色 |
  | saturation(\$color)                      | 从一个颜色中获取饱和度（saturation）值                                                |
  | lightness(\$color)                       | 从一个颜色中获取亮度（lightness）值                                                   |
  | adjust-hue($color,$degrees)              | 通过改变一个颜色的色相值，创建一个新的颜色                                            |
  | lighten($color,$amount)                  | 通过改变颜色的亮度值，让颜色变亮，创建一个新的颜色                                    |
  | darken($color,$amount)                   | 通过改变颜色的亮度值，让颜色变暗，创建一个新的颜色                                    |
  | hue(\$color)                             | 从一个颜色中获取亮度色相（hue）值                                                     |

- **Opacity 函数**

  |                                                             |                  |
  | ----------------------------------------------------------- | ---------------- |
  | alpha($color)/opacity($color)                               | 获取颜色透明度值 |
  | rgba($color,$alpha)                                         | 改变颜色的透明度 |
  | opacify($color, $amount) / fade-in($color, $amount)         | 使颜色更不透明   |
  | transparentize($color, $amount) / fade-out($color, $amount) | 使颜色更加透明   |

#### f. Introspection 函数

| 函数名和参数类型               |                            函数作用                             |
| ------------------------------ | :-------------------------------------------------------------: |
| type-of(\$value)               |                       返回\$value 的类型                        |
| unit(\$number)                 |                       返回\$number 的单位                       |
| unitless(\$number)             |            判断\$number 是否带单位，返回对应的布尔值            |
| comparable($number1, $number2) | 判断$number1和$number2 是否可以做加、减和合并，返回对应的布尔值 |

### 2.自定义函数

> Sass 支持自定义函数，并能在任何属性值或 Sass script 中使用
>
> Params: 与 Mixin 一致
>
> 支持返回值

**基本格式：**

```scss
@function fn-name($params...) {
  @return $params;
}
```

```scss
// example:
@function fn-name($params...) {
  @return nth($params, 1);
}
p {
  height: fn-name(1px);
}

// compiled:
p {
  height: 1px;
}
```
