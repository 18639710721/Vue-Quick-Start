/*
JavaScript内置了一些常用的对象 方便对数据结构进行操作
比如数学 日期 集合 等等
*/

// p95 内置对象 Number
let strNum = "15";
let num = window.parseInt(strNum); // 解析成整数

console.log(strNum);
console.log(num);
console.log(typeof num);  // number

let strNum1 = "12.34";
let num1 = window.parseFloat(strNum1) // 解析成浮点数

console.log(typeof num1);

// 如果一个字符串不是数字 会返回NaN not a number NaN也是number类型的

let strNum2 = "abc";
let num2 = parseInt(strNum2);

console.log(num2);       // NaN
console.log(isNaN(num2));   // true 的确是数字

// toFixed 保留几位小数
let num3 = 12.33645;
let numStr = num3.toFixed(2); // 保留两位
console.log(numStr);

console.log(Number.MAX_SAFE_INTEGER);  // 最大的不溢出数字
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity

// p96 math
console.clear();

console.log(Math.PI);
console.log(Math.abs(-6));  // absolute value
console.log(Math.sin(Math.PI/2));
console.log(Math.floor(3.99));  // 向下取整
console.log(Math.ceil(3.001));  // 向上取整
console.log(Math.pow(10, 3));
console.log(Math.trunc(2.655)); // 截断小数部分
console.log(Math.random());   // [0, 1) 左闭右开

arr = []
for (let index = 0; index < 10; index++) {
    const element = Math.floor(Math.random() * 100 + 1)
    arr.push(element);
}
console.log(arr);
for (key in arr){
    console.log(arr[key]);
}

// p97 内置对象 date
console.clear();
var date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());  // 一周内的第几天
console.log(date.getDate()); 
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getTime());  // get1970年至今的时间秒
console.log(date.toLocaleDateString()); // 当时的时间戳

// 可以通过set去设置
date.setFullYear(2023)
console.log(date.toLocaleDateString());
date.setTime(1769535679745)
console.log(date.toLocaleDateString());

// p99 set对象  set是一种没有重复元素的集合
console.clear();
let set = new Set();
set.add(1);
set.add(3);
set.add(5);

console.log(set);

set.add(3);
console.log(set); // 重复的没有了

console.log(set.has(4)); // false

// 用forEach遍历
set.forEach(value => {
    console.log(value);
});

// 删除元素
set.delete(3)
console.log(set);

// 清空元素
set.clear()
console.log(set);

// 重复的对象是指的指向同一内存地址的对象
let obj1 = {id: 1};
let obj2 = {id: 1};
set.add(obj1);
set.add(obj2);
console.log(set);

set.add(obj1);
console.log(set);  // 这里是装不进去的

// p98 内置对象 Map
/*
map是一种键值对的数据结构 和对象类似
不过map的键和value可以是任意数据类型
*/
// console.clear();
let map = new Map();

let objKey = { key: 2}
// 添加 key-value pairs
map.set(1, "值1");
map.set(objKey, "值2");
map.set("key 3", "值3")

console.log(map);
console.log(map.get(1));
console.log(map.get(objKey));
console.log(map.get("key 3"));

console.log(map.has("key 3"));  // 查看是否拥有某个key
// 遍历key value pairs
map.forEach((value, key) => {
    console.log(key, value);
});

// may.entries() done为true的时候才迭代完毕
let iterator = map.entries();  // 迭代器
console.log(iterator.next().value);
console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next());  // value: undefined, done: true

// for of 迭代
for (const [key, value] of map) {
    console.log(key, value);
}
// 删除一个key value pairs
map.delete(1);
console.log(map);
