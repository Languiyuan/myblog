---
title: 数组
date: 2021-7-15
tags:
 - "Javascript"
 - "Array"
categories: 
 -  "javascript"
autoSort: 100
---

## 数组的方法
### join() [数组转字符串]
- 只接收一个参数，默认逗号分隔符

### push()\pop() [数组尾部的操作]
- push()：方法可向数组的末尾添加一个或多个元素，并返回新的长度。
- pop()：方法用于删除并返回数组的最后一个元素。 

### shift()\unshift() [数组首操作]
- shift()：方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
- unshift()：方法可向数组的开头添加一个或更多元素，并返回新的长度。

### sort() [排序]
- 对数组元素进行排序，传入一个函数，来判断是属于逆序还是正序

```javascript
arr.sort((a ,b) => a - b) // 升序
arr.sort((a ,b) => b - a) // 降序
```

### reverse() [反转数组]
- 用于反转数组中的元素，原数组会发生改变。

### concat() [用于连接多个数组]
- 一层的深拷贝，原数组也不会改变

### slice() [数组的截取]
arr.slice(start , end);**原数组是不会改变的**
- **start**：必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。

- **end**：可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。

```javascript
	var arr = [1,4,6,8,12];
	var arrCopy1 = arr.slice(1);	
	var arrCopy2 = arr.slice(0,4);	
	var arrCopy3 = arr.slice(1,-2);
	var arrCopy4 = arr.slice(-5,4);
	var arrCopy5 = arr.slice(-4,-1)
	console.log(arrCopy1);  // [4, 6, 8, 12]
	console.log(arrCopy2);  // [1, 4, 6, 8] 
	console.log(arrCopy3);  // [4, 6] 
	console.log(arrCopy4);  // [1, 4, 6, 8]
	console.log(arrCopy5);  // [4, 6, 8]
	console.log(arr);  // [1, 4, 6, 8, 12] (原数组未改变) 
```

### splice() [数组更新]
splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。（该方法会改变原始数组）

- arr.splice(index , howmany , item1,.....,itemX)

- index：必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。

- howmany：必需。要删除的项目数量。如果设置为 0，则不会删除项目。

- item1, ..., itemX：可选。向数组添加的新项目。

- 返回值：含有被删除的元素的数组，若没有删除元素则返回一个空数组。
```javascript
	var arr = ["张三","李四","王五","小明","小红"];
	/**************删除"王五"****************/
	var arrReplace1 = arr.splice(2,1);	
	console.log(arrReplace1);  // ["王五"] 
	console.log(arr);  // ["张三", "李四", "小明", "小红"] (原数组改变)
	//删除多个
	var arrReplace2 = arr.splice(1,2);	
	console.log(arrReplace2);  //  ["李四", "小明"] 
	console.log(arr);  // ["张三", "小红"]
	/**************添加"小刚"****************/
	var arrReplace3 = arr.splice(1,0,"小刚");
	console.log(arrReplace3);  // [] (没有删除元素，所以返回的是空数组)
	console.log(arr);  // ["张三", "小刚", "小红"]
	//添加多个
	var arrReplace4 = arr.splice(3,0,"刘一","陈二","赵六");
	console.log(arrReplace4);  // []
	console.log(arr);  // ["张三", "小刚", "小红", "刘一", "陈二", "赵六"]
	/**************"王五"替换"小刚"****************/
	var arrReplace5 = arr.splice(1,1,"王五");
	console.log(arrReplace5);  // ["小刚"]
	console.log(arr);  // ["张三", "王五", "小红", "刘一", "陈二", "赵六"]
	//替换多个
	var arrReplace6 = arr.splice(1,4,"李四");
	console.log(arrReplace6);  // ["王五", "小红", "刘一", "陈二"]
	console.log(arr);  // ["张三", "李四", "赵六"]
```

### indexOf()\lastIndexOf()
- 两个方法都返回要查找的项在数组中首次出现的位置，在没找到的情况下返回-1
- indexOf(**item**, start) ,last就是从数组的末尾开始找

### 五个迭代方法
**五个方法都不会改变原数组**
#### forEach()
对数组进行遍历循环，这个方法没有返回值。

#### map()
指“映射”，方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

#### filter()
“过滤”功能，方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。

#### every()
判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回true

#### some()
判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true。

### reduce()

这两个方法都会迭代数组中的所有项，然后生成一个最终返回值。他们都接收两个参数，第一个参数是每一项调用的函数，函数接受四个参数分别是初始值，当前值，索引值，和当前数组，函数需要返回一个值，这个值会在下一次迭代中作为初始值。第二个参数是迭代初始值，参数可选，如果缺省，初始值为数组第一项，从数组第一个项开始叠加，缺省参数要比正常传值少一次运算。
 ```javascript
// 简单的实现数组的求合
let arr = [1, 3, 4]
let result = arr.reduce((lastValue, cur) => lastValue + cur, 0)
 ```

 ### Array.from()
 方法是用于类似数组的对象（即有length属性的对象）和可遍历对象转为真正的数组。

 ### Array.of()
 方法是将一组值转变为数组，参数不分类型，只分数量，数量为0返回空数组。
 ```javascript
	let arr1 = Array.of(1,2,3);	
	let arr2 = Array.of([1,2,3]);
	let arr3 = Array.of(undefined);
	let arr4 = Array.of();
	console.log(arr1); // [1, 2, 3]
	console.log(arr2); // [[1, 2, 3]]
	console.log(arr3); // [undefined]
	console.log(arr4); // []
```
### find()
方法返回通过测试（函数内判断）的数组的第一个元素的值。方法为数组中的每个元素都调用一次函数执行。当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数。如果没有符合条件的元素返回 undefined。

回调函数可以接收3个参数，依次为当前的值（currentValue）、当前的位置（index）、原数组（arr）

注意：find() 对于空数组，函数是不会执行的。find() 并没有改变数组的原始值。

```javascript
	let Arr = [1,2,5,7,5,9];
	let result1 = Arr.find(function(currentValue,index,arr){			
		return currentValue>5;
	});
	let result2 = Arr.find(function(currentValue,index,arr){			
		return currentValue>9;
	});
	console.log(result1); // 7
	console.log(result2); // undefined

  // 根据id取对象
  let Arr = [
		{
			id:1,
			name:"张三"
		},
		{
			id:2,
			name:"李四"
		}		
	];
	let obj = Arr.find(function(currentValue,index,arr){			
		return currentValue.id===1;
	});
	console.log(obj.name); // 张三
```
### includes()
- 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。
arr.includes(searchElement ,  fromIndex)
- searchElement ： 必须。需要查找的元素值。

- fromIndex：可选。从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。默认为 0