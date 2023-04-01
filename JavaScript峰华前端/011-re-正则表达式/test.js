// 创建正则表达式 简单搜索
var str = "where when what"

let re = /wh/g;   // global 全局搜索
let re2 = new RegExp("wh");

console.log(re.exec(str));  // return array 只搜索第一个
// console.log(re.test(str))   // return boolean value  str是否包含正则对象

// console.log(re2.exec(str));
// console.log(re2.test(str));
console.log(re.exec(str));
console.log(re.exec(str));
console.log(re.exec(str));
console.clear();

// 字符匹配
var str = `This str contains 123
CAPITALIZED letters and _-&^% symbols`;  // 模板字符串
console.log(/T/.test(str));
console.log(/This/.test(str));
console.log(/Thiss/.test(str)); // false
console.log(/12/.test(str));
console.log(/1234/.test(str));  // false
console.log(/_-&/.test(str));
console.clear();

// 特殊字符匹配 .*？
console.log(str.match(/Th.s/g));
console.log(str.match(/1.3/g));
console.log(str.match(/\d/g)); // 匹配数字[0~9]
console.log(str.match(/\w/g));
console.log(str.match(/\s/g));
console.log("你好".match(/\u4f60/g));
console.log();
console.clear();

// 匹配次数
var str = `This str contains 123 CAPITALIZED letters and _-&^% symbols`; 
// var 定义的str可以覆盖原来的
console.log(str.match(/This.*/g)); // 'This str contains 123' 不匹配换行符
console.log(str.match(/t+/g)); // +号匹配一次到多次 匹配到三个t
console.log(str.match(/x?/g)); // ？号匹配一次到多次
console.log(str.match(/t?/g));
console.log(str.match(/t{2}/g)); // 匹配到t出现两次的字符 {次数}
console.log(str.match(/\d{1,3}/g));
console.log(str.match(/\d{1,2}/g));
console.log(str.match(/\d{1,}/g)); // 至少出现一次

// 正则 区间 逻辑和界定符
console.clear();
console.log(str.match(/[abc]/g)); // 匹配包含a b c字母的
console.log(str.match(/[a-z]/g)); // 所有小写字母
console.log(str.match(/[A-Z]/g)); // 所有大写字母
console.log(str.match(/[0-9]/g)); // 数字0~9

console.log(str.match(/[^0-9]/g)); // ^非 匹配非数字0~9的
console.log(str.match(/[\-_&\^]/g)); // -和^是需要\转义的 匹配这四个玩意
console.log(str.match(/This|contains/g)); // | 或 匹配this或者contains

// 界定符 ^开始 $结尾 \b边界
var str = "this athata this and that"
console.log(str.match(/^this/g));
console.log(str.match(/that$/g));
console.log(str.match(/that/g)); // 匹配普通的that
console.log(str.match(/\bthat\b/g)); // 匹配前后没有边界的that
console.clear();

// 分组 ()
var str = `this that this and that`;
console.log(str.match(/(th).*(th)/g))

var str = `aaaab abb cddaa`
console.log(str.match(/(aa){2}/g))
console.clear();

// 常见正则表达式
// 验证一个手机 号段13~19  11位数
var mobileRe = /^1[3-9]\d{9}/g;
// console.log(mobileRe.test("18639710721"));
// console.log(mobileRe.test("16637523267"));

// 邮箱@前面和后面只能有大小写字母 数字 下划线 中划线还有点 后面必须有一个点号以及域名后缀com或者cn
var emailRe = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z{2,5}])$/g;
console.log(emailRe.test("admin@163.com"));   // false 为啥这里是false
console.log(emailRe.test("admin@163.commmm"));
// console.clear();

// 账号注册 6到15个字符 只允许大小写字母 数字和下划线组成
var usernameRe = /^[a-zA-z][a-zA-Z0-9_]{5,14}/g;
console.log(usernameRe.test(`abc`));
console.log(usernameRe.test(`$aaa`));
console.log(usernameRe.test(`abc0_12a`));
console.log(usernameRe.test(`fhakfhahfka;hjfa;fjh`));

// 字符串替换
var str = "Tish is an apples"
console.log(str.replace("Tish","This"))  // 传统替换的方法

var str = "Tish 1is 2an 3apples"
console.log(str.replace(/\d+/g,""));   // + 连续追加 g 全局搜索

var html = `<span>Hello</span><div>World</div>`;
console.log(html.replace(/<[^>]*>([^<>]*)<\/[^>]*>/g, "$1"));

// 字符串分割
var tags = "html, css, javascript";
console.log(tags.split(","))  // 通过,进行分割成一个数组

var str = "This | is , an & apple";
console.log(str.split(/\W+/g)); // 匹配非字母进行分割


