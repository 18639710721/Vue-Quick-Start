// 40 遍历 访问 修改 array
/*
    1.使用数组的字面值
    2.构造函数
*/
var arr1 = [1,2,3];
console.log(arr1);
var arr2 = new Array(4,5,6);
console.log(arr2);
var arr3 = Array(7,8,9);
console.log(arr3);
var arr4 = Array.of(10,11,12);
console.log(arr4);

// 设置空数组以及单一元素的数组
var arrSingle = Array(6);
console.log(arrSingle);
var arr2Single = new Array(5);  // 这两个方法都是空值
console.log(arr2Single);
var arr3Single = Array.of(10)
console.log(arr3Single);
var arr4Single = [8]
console.log(arr4Single);

// 删除元素 splice
// splice 删除元素索引
let arr_range = [1, 2, 3]
arr_range.length = 2;   // 删除最后一个元素
console.log(arr_range);
arr_range.length = 0;
console.log(arr_range);

// 删除任意位置元素  索引 数量 添加的新元素
let arr_splice = [1, 2, 3, 4, 5, 6];

arr_splice.splice(2, 1);    // 删除3
console.log(arr_splice);
arr_splice.splice(1, 2, 3, 7, 8) // 从1这个索引开始删除两个元素 后面的都是插入
console.log(arr_splice);
arr_splice.splice(1, 0, 9, 10)  // 设置为0表示在这个位置前面插入
console.log(arr_splice);

// 44 数组遍历
// 1.使用for循环  index
var arr = [1, 3, 5, 7, 9];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}

//2.forof循环 没有计数器 不能访问i
for (const ele of arr) {
    console.log(ele);
}

//3.这个方法接收一个回调 当前遍历元素 索引 数组本身 内置方法forEach
arr.forEach((ele,index, self) => {
    console.log(ele, index, self)
    
});

// 栈模式 后进先出
console.clear();
let stack = [1, 2, 3]
stack.push(4)

console.log(stack);

stack.push(5, 6, 7)

console.log(stack);

let last = stack.pop();
console.log(last);
console.log(stack);

// peek 查看栈顶元素
console.log(stack[stack.length - 1]);

// 队列 先进先出
console.clear();
let queue = [1, 2, 3];
queue.push(4, 5, 6)
console.log(queue);  // 从末尾入队

// 从头出队 shift
let first = queue.shift();
console.log(first);
console.log(queue);

// 从队头添加元素
queue.unshift(10, 11, 12)
console.log(queue);

// 反转数组 reverse
console.clear();

let arr5 = [1, 2, 3]
console.log(arr5.reverse());  // 返回一个反转的数组
console.log(arr5);  // 原数组也改变了

// 利用reverse 反转字符串  split和join互逆
console.log("hello".split("").reverse().join(""));


// 数组排序
console.clear();
let arr6 = [1, 5, 3, 2, 4];
arr6.sort();

console.log(arr6);

arr6.sort((a, b) => b - a); // 数字逆序

console.log(arr6);

// 数组连接 concat
console.clear();
let arr7 = [1, 2, 3];
let arr8 = [4, 5, 6];
console.log(arr7.concat(arr8));

// 数组的裁切
console.clear();
let arr9 = [1, 2, 3, 4, 5];  // 和python字符串很相似 
console.log(arr9.slice(0, 1)); // 类似与切片

// map  和forEach相似 返回一个新的数组
let arr10 = [1, 2, 3, 4];
let mappedArr = arr10.map(ele => ele * 2);
console.log(mappedArr);
console.log(arr10);

// 用reduce 数组求和
console.clear();
let arr11 = [1, 2, 3, 4];
// 回调函数 初始值
let result = arr11.reduce((previous, current) => previous + current, 0);
console.log(result);

let result1 = arr11.reduce((first, second) => first + second);
console.log(result1);

// 数组过滤
let arr12 = [1, 2, 3, 4, 5, 6];
let filteredArr = arr12.filter(item => item > 4)  // 接收一个回调函数

console.log(filteredArr);

// 数组测试
/**
 * 1.every() 检查所有元素是否满足条件
 * 2.sum() 判断是否有一个元素满足条件
 */

let arr13 = [1, 2, 3, 4, 5, 6];
let result2 = arr13.every(item => item > 0);
console.log(result2);

let resultSome = arr.some(item => item > 5);
console.log(resultSome);

// destructuring 解构操作符  把数组元素赋值给变量
console.clear();
let arr14 = [1, 2, 3];
let [a, b, c] = arr14;
console.log(a, b, c);

let [d, e] = arr14;
console.log(d, e);

let [, f] = arr14;
console.log(f);

function multipleReturns() {
    let name = "峰华";
    let position = "前端工程师";

    return [name, position];
}

let [myName, myPosition] = multipleReturns();
console.log(myName, myPosition);

// rest 操作符
let arr15 = [1, 2, 3, 4, 5, 6, 7, 8];
let [h, i, ...rest] = arr15;
console.log(h, i, rest);

let [j, , k, ...rest1] = arr15;
console.log(h, i, rest1);

function variousArGs(...args){
    console.log(args);
}
variousArGs(1, 2, 3)

// 多维数组
console.clear();

// 生成五行四列的数组
arr16 = []
for (let i = 0; i < 5; i++) {
    arr16[i] = [];
    for (let j = 0; j < 4; j++){
        arr16[i][j] = i + j;
    }
}
console.log(arr16);