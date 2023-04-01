// p58 创建对象
/*
JavaScript设计规范是基于对象原型的
一个对象可以描述客观世界的物体
    拥有属性和行为

1.用对象字面值(对象初始化器)
    key value pairs
2.用 new Object()
*/
let employee = {
    name: "张三",
    age: 20,
    position: "前端工程师",
    signIn: function() {
        console.log("张三打卡");
    },
    
}

let employee2 = new Object();
employee2.name = "李四"
employee2.signIn = () => {
    console.log("李四打卡");
}

// p59 对象属性 
/* 
每个对象里面的键值对都是对象的属性
    数字 字符串 函数(方法) 对象
    .调用或者类似数组索引
*/

// 查看对象属性
console.log(employee.name);
console.log(employee["name"]);

// 更改对象属性
employee.name = "张五"
console.log(employee.name);
employee["name"] = "张六"
console.log(employee.name);

// 访问一个不存在的属性为undefined
console.log(employee2.age);  // undefined
employee2.age = 22
console.log(employee2.age);

// 当key遇见-之类的特殊字符 用""包裹
let employee3 = {
    name: "王五",
    // "birth-date": "1990-03-02"
    birthDate: "1990-03-02"
}
// console.log(employee3["birth-date"]); // 这里只能用这种
console.log(employee3.birthDate);

// p60 省略key
// 如何对象属性和一个变量 并且key和变量名字一样 可以省略key
// 函数也可以直接省略
console.clear()
var name = "李四"
var employee4 = {
    name,
    signIn() {
        console.log("李四打卡");
    }
}

console.log(employee4.name);
console.log(employee4.signIn());

// p61遍历对象所有属性
/**
 * 1.Object.keys => 返回一个数组
 * 2.for in
 */
console.clear();
console.log(Object.keys(employee));

// 使用for in
for (key in employee){
    console.log(key);
}

// p62 删除对象属性 deleter
delete employee.name;
console.log(employee);
console.log(Object.keys(employee));
console.clear();


