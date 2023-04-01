// 操作符 

//11 赋值操作符
let x = 5;
let y = 10;
[x,y] = [y,x]   // 通过解构赋值交换两个变量的值
console.log(x,y);
console.log("hello world");

/*12 一元操作符只能作用于一个操作数  -  +(字符串转换数字拼接)
 ++ 操作数自身+1   -- 操作数自身-1
*/
console.clear();
let negativeNum = -5;
console.log(negativeNum);
let strNum = +"3"   // +"3" 的+号把字符串类型的数字转换成了Number类型
console.log(strNum,typeof strNum);

let num = 8;
console.log(num++);   // 8 j = num  num += 1
console.log(num);     // num += 1 的值 9

console.log(++num);   // 10  j = (num += 1)
console.log(num);     // 10

console.log(num--);   // 10
console.log(num);     // 9 num变量减一后的结果

console.log(--num);   // 8

// 13 算术操作符  + - * / %(取模) **(指数) 
console.clear();
console.log("1 + 1 =",1 + 1);
console.log("100 - 250 =",100 -250);
console.log("3 * 8 =",3 * 8);
console.log("2 / 1 =",2 / 1, 2 / 1 == 2.0 / 1.0, 2 / 1 === 2.0 / 1.0);

/* 14 比较操作符 return true & false
    ==  JavaScript会自动转换类型比较值 值相等即返回false
    != 不相等
    === 严格相等  值和数据类型都相等 value && data types
    !== 严格不等于
*/
console.clear();
console.log("1 > 5", 1 > 5);
console.log("1 >= 5", 1 >= 5);
console.log("5 >= 5", 5 >= 5);  // true

console.log("5 == 5", 5 == 5);   // true
console.log('5 == "5"', 5 == "5");  // true
console.log('5 === "5"', 5 === "5"); // false different data type
console.log("5 === 5", 5 === 5);    // true same data type

console.log("undefined == null",undefined == null);
console.log("undfined === null",undefined === null); //false 类型不一样


// 15 逻辑运算符 &&(都为真) ||(一者为真即可) !(取反)  false 0 "" null undefined
console.clear();
console.log("true && true", true && true);
console.log("true && false", true && false);

console.log("true || false", true || false);

console.log("!true", !true);

// 表达式(真假) 和 组件  直接显示后面的字符串
console.log('true && "hello"',true && "hello");
console.log('false || "default"',false || "default");
let a = null
b = a || 5;
console.log(b);  // 5
// 与 或的短路特性   && 第一个为false就不会计算后一个操作数了
// || 第一个操作数为true 就不会计算第二个操作数了
console.log('false && "not printed"',false && "not printed");
console.log('4 || "not printed"',4 || "not printed");


// 16 位操作符 对二进制数字进行操作   转换成32位二进制数字
// & 11为1 有一个0就为0   | 或 有一个1就返回1  
// !|异或 相同返回0，不同返回1
//
console.clear()

// 5 101     010
// 3 011
console.log(5 & 3);  //1 1  001
console.log(5 | 3);  //7    111
console.log(5 ^ 3);  //6    110  异或
/*
    按位取反
    https://segmentfault.com/q/1010000005697515
 */
console.log(~ 5);    //-6    +1取反吧 先不想
console.log(~3);
console.log("5 << 1", 5 << 1); //左移  右面添0 1010 表示10
console.log("5 >> 1", 5 >> 1); //右移  右面去掉一位 10  表示2
console.log("-5 >>> 1", -5 >>> 1);// 无符号右移 负数1会变为0 成为一个很大数字 正数的话和普通右移是一样的


// 17 三目运算符  表达式 ？ if:else
console.clear()

let temperature = 10;
console.log(temperature > 15 ? "出门":"回家");






 









































