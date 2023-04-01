// 1
// console.log("Hello World");   // 控制台输出
// alert("Hello World");          // 调用windows对象网页弹出对话框
// document.write("Hello World"); // 网页上输出


// //2 let const 变量名字区分大小写  驼峰命名法 fontColor font_color
// let name  // 只初始化未赋值的话会显示一个undefined(未定义的) 推荐使用let undefined
// var first_name = "相好" // var 声明的变量未赋值是空白
// console.log(name);
// console.log(first_name);

let price = null;
console.log(price);


// let a = 5;
// let b = 6;
// let c = a + b
// console.log(c + 5);

// //3 const 常量
// const PI = 3.14  // 无法改变否则会报错

// //4 数据类型 boolean numbers  String  undefined 
// // undefined 是没有赋值或者没有初始化  null是已经赋值 但是赋值为空
// let visible = true;
// let isEqual = false;

// console.log(visible);
// console.log(isEqual);

// let num = 100;
// let floatingNum = 12.34;
// let negative = -100;

// console.log(num);
// console.log(floatingNum);
// console.log(negative);

// let str = "hello";
// console.log(str);

// let notInitialized = undefined   // 变量还未初始化或者被赋值  未定义的
// console.log(notInitialized);    // 字面量？没有被二次赋值的?
// console.log(typeof(notInitialized));

// let emptyValue = null;    // 空 什么都没有
// console.log(emptyValue);
// console.log(typeof(emptyValue));

// //5 动态类型语言  定义变量时不需要定义变量数据类型  parseInt() parseFloat()
// console.log(typeof visible);
// console.log(typeof num);
// console.log(typeof floatingNum);
// console.log(typeof str);
// console.log(typeof notInitialized);
// console.log(typeof emptyValue);

// let age = 15;
// console.log(typeof age);

// age = "15"
// console.log(typeof age);   // javascript 能在代码执行时动态判断数据类型

// let result = num + str;
// console.log(result);    // javascript 在字符串和数字拼接时会自动转换为字符串

// let strNum = "123";
// console.log(parseInt(strNum) + num);   // 转换类型并数字相加

// //6 注释  // 单行注释  /* 多行注释 */   /** 文档注释(生成API文档的) */ 使用文档生成工具
// // 姓名
// let myName = "listem";

// /*
// 下面的代码是为了完成以下的操作:
//     1. 获取表单的值
//     2. 提交表单
// */

// /**
//  * 对两个操作符进行加法运算
//  * @param {number} a  第一个操作数
//  * @param {number} b  第二个操作数
//  * @returns  返回两个操作数的和
//  */
// function add(a = 1, b = 1) {
//     return a + b;  
// }

// console.log(add(5,6))



/**
 * 对两个操作数进行加法运算
 * @param {number} a 第一个操作数
 * @param {number} b 第二个操作数
 * @returns 返回两个参数的和
 */
function add(a, b) {
    return a + b;
}





















