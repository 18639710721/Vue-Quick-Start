/* p86 创建正则表达式
   1. 表示字符串的规则和模式  验证手机号 验证邮箱 有没有特殊字符
   字面值 和   RegExp创建一个正则表达式对象
   //        new RegExp("")

   /正则表达式主体/修饰符(可选)
   g(修饰符) 执行全局匹配(而非在第一个匹配后停止)
*/

var str = "where when what";
var re = /wh/g;    // 字面值方式 匹配wh字符串
var re2 = new RegExp("wh");  // 创建一个正则对象 

// 执行的两种方式 1.exce返回匹配后的信息 2.text只会返回true和false,显示有没有访问到
//  re.exce(字符串)  匹配信息(只返回第一个匹配结果)   re.test(字符串)  是否包含 返回布尔值
console.log(re.exec(str));     // 返回第一个匹配的结果
// console.log(re.test(str));     // 是否包含 返回true

// console.log(re2.exec(str));
// console.log(re2.test(str));  
console.log(re.exec(str)); 
console.log(re.exec(str));    // 加上标志g后能一直进行直到匹配完即可
console.log(re.exec(str));    // null  已经把整个字符串搜索完


/* p87 字符匹配
   单纯匹配  已经提前知道要匹配的字符串的规则和模式
*/

console.clear();
var str = `This str contains 123
CAPITALIZED letters and _-&^% symbols`;  // 模板字符串

console.log(/T/.test(str));
console.log(/This/.test(str));
console.log(/Thiss/.test(str));   // false
console.log(/12/.test(str));
console.log(/1234/.test(str));    // false
console.log(/_-&/.test(str));


/* p88 特殊字符匹配
   . 通配符 匹配不包括诸如换行符之类的任意字符  使用str.match()方法返回字符串
   \d [0-9] 匹配数字 digit(数字)
   \w [0-9 a-z A-Z _]  匹配word(单词字符)   匹配数字 大小写字母和下划线  
   \s [\t \v \n \r\f]  空白符 space character 
   \大写  表示上述相反  \D匹配非数字 \w匹配非单词 \s 匹配非空白符
   中文要使用Unicode编码 \u  查询汉字所对应Unicode对应数字

 */
console.clear();
console.log(str.match(/Th.s/g));    // 全局匹配g 匹配字符
console.log(str.match(/1.3/g));    // 匹配数字

console.log(str.match(/\d/g));     // 匹配数字
console.log(str.match(/\w/g));     // 
console.log(str.match(/\s/g));

console.log(str.match(/\D/g));
console.log("你好".match(/\u4f60/));


/*
   var定义的变量可以重复定义，新的值覆盖旧的值
   * 匹配任意次
   + 追加  至少出现一次后一直追加
   ? 匹配一个字符出现了一次或者0次
 */
console.clear()
var str = `This str contains 123
CAPITALIZED letters ttt and _-&^% symbols`;
console.log(str.match(/This.*/g));
console.log(str.match(/t+/g));  // t
console.log(str.match(/x?/g));  // 全部匹配一个字符出现了没有

console.log();

 
























