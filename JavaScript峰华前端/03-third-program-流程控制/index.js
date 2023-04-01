// 18 语句块 let const创建是有作用域的 var在全局变量
{
    // {}框起来的是语句块
    var name = "listem";
    console.log(name);

    let age = 15;
    console.log(age);

    const YEAR = 2021;
    console.log(YEAR);
    
    
    
}
console.log(name);
// console.log(age);  // 不能访问
// console.log(YEAR);  // 不能访问


// 19 if - else
// console.clear();
// let passcode = prompt("请输入暗号");
// if (passcode === "天王盖地虎") {
//     alert("登录成功，宝塔镇河妖")
// } else {
//     alert("登录失败, 你是250")
    
// }


// 20 if -else if - else
// let role = prompt("请输入用户权限");
// if (role === "超级管理员") {
//     alert("跳转到超级管理员页面")
// }else if(role == "管理员") {
//     alert("跳转到管理员页面")
// } else {
//     alert("跳转到用户页面")
// }


// 21 switch-case
// let role = prompt("请输入用户权限")
// switch (role) {
//     case "超级管理员":
//         alert("超级管理员页面");
//         break;
//     case "管理员页面":
//         alert("管理员页面");
//         break;
//     case "特殊用户":
//         alert("跳转到特殊用户页面")
//         break;
//     case "一般用户":
//         alert("跳转到一般用户界面");
//         break;
//     default:
//         alert("跳转到其他页面");
//         break;
// }


// 22 while 循环是一个反复登录的过程   表达式写个true 死循环
// let password = ""
// while(password !== "123456"){
//     password = prompt("请输入密码");  //如果不输入123456一直出现弹窗

// }
// console.log("登录成功");


// 23 do-while  无论do里面的是true或者false，都会执行一次
// let x = 5
// do {
//     // console.log(x);
    
//     console.log(x++);
// } while (x > 5 && x <= 10);


// 24 for 方便计算循环  for(变量起始值;条件;增量表达式) 三个都是可以选择的
// for(let i = 0; i < 10; i++){
//     console.log(i);  
// }
// for(;;){
//     console.log("true");  // 死循环
    
// }
var j = 0;
while(j < 10){
    console.log(j);
    j++;
}


// 25 break(直接跳出循环) continue(跳出当此循环)
for(let i = 0; i < 10;i++){

}
