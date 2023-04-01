//26 function 声明 函数变成  打开冰箱门 放入大象 关门
// function putInRefrigerator(){
//     console.log("打开冰箱门");
//     console.log("把大象放进去");
//     console.log("关上冰箱门");
// }

// function putAnythingInRefrigerator(something){
//     console.log("打开冰箱门");
//     console.log("把" + something + "放进去");
//     console.log("关上冰箱门");
// }

// 函数表达式
// const putInRefrigerator = (something) => {
//     console.log("打开冰箱门");
//     console.log(`把${something}放进去`);
//     console.log("关上冰箱门");
// }
// putInRefrigerator("大象")

function add(a,b){
    return a + b
}
// 不是太理解
// function testNum(num) {
//     if(num < 0) return;  // 在一个语句块内
//     return num > 10;
    
// }
// testNum(10)


age = (c,d) =>(c + d)


// // 27 调用函数
// putInRefrigerator();
// putAnythingInRefrigerator("兔子");
// add(1,2);
// console.log(add(1,2));

// let result = add(1,2);
// console.log(result);

// console.log(add(result,5));  // 也可以放一个变量

// console.log(testNum(-5));  // undefind
// console.log(testNum(15));  // true


// // 28 函数表达式   匿名函数 
// 函数也是表达式 表达式就是直接运行能够计算出结果的一串代码
console.log(add);  //不加() 就是返回函数本身的值 定义
// 这里可以套娃一样的引用
let plus = add;
let res = plus;
let final = res
console.log(final(2,3));

// 匿名函数
// let multiply = function (a,b){    // 这里的函数名可以省略 匿名函数
//     return a * b
// }
// console.log(multiply(6,2));

// const multiply = (a, b) => {
//     return  a * b
// }
// console.log(multiply(2,6));

// // 29 函数和变量的提升  可以先使用后声明  hoistign
// console.clear();

// x = 6;   // 日常开发中尽量不要这么写

// console.log(x);

// var x = 5;   // 这里必须用 var(全局作用域？) 必须上面赋值或者重新赋值
// console.log(divide(8,4));   // 函数的变量提示比较重要

// function divide(a,b){
//     return a / b;
// }


// // 30 默认参数
// console.clear();

// function greeting(name = "峰华"){
//     console.log("你好，" + name);  
// }

// greeting();
// greeting("张三")

// // 如果想第一个用默认参数，第二个传值的话，用undefined

function greetingWithWeather(name = "峰华",weather){
    console.log("你好," + name + "今天是：" + weather);    
}
greetingWithWeather(undefined,"晴天")


// // 31 递归  调用栈 后进先出  所有的循环都可以转换成递归
// console.clear();

// function sum(n){
//     if (n === 0){
//         return 1;
//     }
//     return n + sum( n-1 )

// 计算数字之和 n+f(n-1) 所有的递归都可以写成循环
// const sum1 = (n) => {
//     if (n == 1) {
//         return 1
//     } else {
//         return n + sum(n - 1)
//     }
// }
// console.log(sum1(10));
// console.log(sum1(100));

// }
// console.log(sum);

// // 1 1 2 3  5 8 13
// function fib(num){
//     if (num <= 1){
//         return 1;
//     }
//     return fib(num - 1) + fib(num - 2)
// }

// const fib1 = (num) => {
//    if (num == 0){
//         return 1
//    } else if ( num == 1){
//         return 1
//    } else {
//         return fib1(num - 1) + fib1(num - 2)
//    }
// }
// console.log(fib1(5));

// // 32 arguments 和数组类型的参数集合   不指定参数
// console.clear();

// function log(){
//     for(let i = 0;i < arguments.length;i++){
//         console.log(arguments[i]);
//     }  
// }
// log("abc","233","455")

// // 33 作用域 全局作用域和局部作用域 函数内部的局部作用域(局部作用域的代码可以访问全局作用域的变量)
// var x = 5;

// function add(a){
//     var y = 18;
//     console.log(y);
     
//     return a + x;
// }
// console.log(add(8));
// // console.log(y);   // 全局作用域访问不到局部作用域 此处访问不到，会报错

// x = 20;

// console.log(add(8));

var num3 = 100;
function multiply(num3){
    return num3 * 10;
}
// 如果全局作用域和局部作用域的变量名字相同, 那么全局的就会被局部的所覆盖
console.log(multiply(500));  
// // 34 var let 区别
// /*
//     1.var和let都是用来定义变量的
//     2.在函数里定义的变量 无论是var还是let 出了函数就不能访问了
//     3.用var和let定义的全局变量在哪里都可以访问
//      除了函数这种情况 是否还能访问到     
//      
//     之前是只有函数作用域和全局作用域的
//     块级作用域? 暂时性死区
//     const定义的常量和let的规则是只能在当前作用域访问到
// */
// var z = 6;
// if (z > 2){
//     console.log(z);
//     var innerZ = 17;   // 此处用let定义访问就会报错
// }
// console.log(innerZ);

// for(var i = 0; i < 10;i++){
//     console.log(i);
//     let testNumber = 10
// }
// console.log(i);  //此处为10,如果上诉用let定义i，则报错
// console.log(testNumber); // 这里for循环内部用let定义的访问不到


// 35  箭头函数  (参数)=>{代码块}  （参数) => 返回值
// 一个参数小括号可以省略
// 类似lambda 也可以直接下返回值
/*
    function name(params) {
    
}

    const variable = function (params) { 
}

const variable = (params) => {
    
}

const variable = params => params+1   直接参数+返回值
 */
// console.clear();




var geeting2 = (name,weather) => {      // 这里是=>  
    console.log("hello " + name + " weather " + weather);   
};
geeting2("listem","晴天");

var increment = x => x + 1;
console.log(increment(5));

// 这一坨居然能运行出来
const sum2 = n => n == 1 ? n = 1 : n + sum2(n - 1)
console.log(sum2(100));



// // 36 闭包
// /*
//     1.一个函数里面再定义一个函数 形成一个闭包
//     2.内部函数可以访问外部函数作用域的变量
//     3.外界不知道内部函数的具体细节(封装)
//     形成一个私有的private函数 
//     外部函数形成一个高阶函数 Higher-order function 高阶函数 返回函数的函数
// */
// //计算两个参数的平方和v1
// function squareSum(a,b){
//     function square(x){
//         return x * x;
//     }
//     return square(a) + square(b)
// }
// //计算两个参数平方和v2
// function squareSum1(a, b){
//     const square = x => x * x
//     return square(a) + square(b)
// }
// console.log(squareSum1(2, 3));
// 计算两个参数平方和v3
// const squareSum2 = (a, b) => {
//     const square = x => x * x
//     return square(a) + square(b)
// }

// console.log(squareSum2(2, 3))

// console.log(squareSum(2,3));

// // 外部函数形成一个高阶函数 Higher-order function   相当于给name设置了一个只读属性
// function person(){
//     let name = "listem";
//     function getName(){
//         return name;
//     }
//     return getName;
// }

// let getName = person()
// console.log(getName);   // 这里居然返回一个函数
// console.log(getName());


// // 37 柯里化(curry) 把一个接受多个参数的函数变成一系列接受一个参数的内部函数
// function addThreeNums(a,b,c){
//     return a + b + c;
// }
// console.log(addThreeNums(1,2,3));

// function addThreeNumsCurry(a) {
//     return function(b){
//         return function(c){
//             return a + b + c
//         }
//     }
    
// }


// console.log(addThreeNumsCurry(1)(2)(3));
// let fixedTwo = addThreeNumsCurry(1)(2);
// console.log(fixedTwo(4));
// console.log(fixedTwo(5));
// console.log(fixedTwo(6));

// const addThreeNumsCurryTest = a => (b => (c => a + b + c))

// console.log(addThreeNumsCurryTest(1)(2)(3));
// let fixedTwo1 = addThreeNumsCurryTest(1)(2);
// console.log(fixedTwo1(5));


// // 38 自执行函数  函数在定义完之中调用自己  
// // 自执行内部的代码在外部是绝对访问不到的
// var num1 = 10;
// (function () {    // 此处是匿名的
//     var num1 = 20;
//     console.log(num1);   
// }
// )();
// console.log(num1);
console.log((a => (b => (c => a + b + c)))(1)(2)(3));

// // 39 回调函数  狗屁没看懂

function request(cb){
    console.log("请求数据");
    cb("success");
    console.log("请求结束");
}

// function callback(result) {
//     console.log("执行回调");
//     console.log("执行回调的结果是:" + result);
// }

request(result => {
    console.log("执行回调");
    console.log(`执行回调的结果是${result}`);
})










