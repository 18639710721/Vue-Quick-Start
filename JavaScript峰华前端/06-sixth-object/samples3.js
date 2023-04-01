// p66 原型 prototype
// https://www.youtube.com/watch?v=j59qQ7YWLxw&ab_channel=WebDevSimplified
// 如果一个函数是构造函数 new出来的对象会继承这个构造函数的原型

console.clear();
function Emplyee(name, position) {
    this.name = name;
    this.position = position;
    this.signIn = function() {
        console.log(this.name + "打卡");
    };
}



let emp1 = new Emplyee("张三", "后端工程师");
let emp2 = new Emplyee("李四", "后端工程师");

// __proto__ 原型 
// constructor 构造函数 另一个__proto__指向上一级
console.log(emp1);
console.log(emp2);

console.log(Emplyee.prototype);
Emplyee.prototype.age = 20

console.log(emp1.age);
console.log(emp2.age);

Emplyee.prototype.printInfo = function() {
    console.log(this.name, this.age, this.position);
};
emp1.printInfo();
emp2.printInfo();

console.log(emp1.__proto__);
console.log(Emplyee.prototype);
console.log(emp1.__proto__ === Emplyee.prototype);  // true
console.log(Object.getPrototypeOf(emp2)); // 也可以通过这个查看prototype

// p67 Object.create
/**
 * Object.create 可以让一个对象继承另一个对象
 * 新的对象可以继承对象的所有属性
 * 并且拥有自己的特有属性
 */
console.clear();
console.log(emp1);
// 查看emp1原型继承的属性
for (key in emp1) {
    console.log(key);
}

let manager = Object.create(emp1)  // 继承emp1
console.log(manager);
for (key in manager){
    console.log(key); // 查看manager的属性 也是继承的那几个
}
console.log(manager.name); // 这时候还是张三 并没有重写
manager.name = "李四";
manager.position = "经理";
console.log(manager);
manager.signIn();
console.log(Object.getOwnPropertyNames(manager)); // 自己独有的属性

// p68 原型链
/*
每个对象的原型都会有一个上层的原型 直到遇见null
这种链式继承的原型就称之为原型链
最顶层的对象是Object
它的原型是Object.prototype
原型的原型是null
*/
console.clear();
var protoOfManger = Object.getPrototypeOf(manager);
console.log(protoOfManger); // 指向张三
var protoOfEmp1 = Object.getPrototypeOf(protoOfManger);
console.log(protoOfEmp1);  // 这里指向的构造函数
var protoOfEmp = Object.getPrototypeOf(protoOfEmp1)
console.log(protoOfEmp); // 构造函数的原型的原型是Object的原型? 这里疑惑
var protoOfObj = Object.getPrototypeOf(protoOfEmp)
console.log(protoOfObj); // null

console.log(Object.getPrototypeOf(Object.prototype)); // null
// 查看下Object的原型的方法
console.log(manager.toString);
console.log(manager.toString());  // 返回当前对象的类型

// p69 修改原型指向 改变其继承关系
console.clear();

function Manager() {

}
Manager.prototype.department = "技术部";
Object.setPrototypeOf(manager, Manager.prototype); // 改变原型
console.log(manager.department);
console.log(Object.getPrototypeOf(manager));
// console.log(manager.signIn());  // 这个时候已经访问不到以前定义的方法
for (key in manager){
    console.log(key);  // 都是之前定义好的属性
}

// p70 Spread 操作符 ...
/*
和rest一样
用来把对象的属性和数组的元素进行分离
*/
console.clear();
var post = {
    id: 1,
    title: "标题",
    content: "这是内容"
};

console.log(post);

//克隆一个新对象
var postClone = {...post}
console.log(postClone);
console.log(post === postClone); // 这是两个不同的对象 因为内存地址(对象的引用)不同

// 也可以给对象添加新属性
var post2 = {
    ...post,
    author: "峰华"
}
console.log(post2);

var arr = [1, 2, 3];
var arrClone = [...arr];

console.log(arrClone);

// 给数组添加属性
var arr2 = [...arr, 4, 5, 6]
console.log(arr2);

// 如果一个函数定义多个参数 也可以通过数组spread传递进去
function savePost(id, title, content) {
    console.log("保存子文章", id, title, content);

}
savePost(...[2, "标题", "内容内容"])

// 71 destructuring & rest
console.clear();
var post3 = {
    id: 1,
    title: "标题",
    content: "这是内容",
    comments: null
};

var {id, title} = post3; // 解构赋值
console.log(id, title);

var {id, title: headline} = post3; // 起一个别名
console.log(id, headline);

var {id, title, comments = "没有评论"} = post3;
console.log(comments);  // null不会被赋默认值 本身就是值

var [a, b = 2] = [1]  // 数组的解构赋值
console.log(a, b);

var post4 = {
    id: 2,
    title: "标题2",
    content: "这是内容",
    comments: [
        {
            userId: 1,
            comment: "评论1"
        },
        {
            userId: 2,
            comment: "评论2"
        },
        {
            userId: 3,
            comment: "评论3"
        },
    ]
};

var {
    comments: [, , {comment}]
} = post4
console.log(comment);

function getId(idKey, obj) {
    let {[idKey]: id} = obj;   // 取个别名id
    return id
}

console.log(getId("userId", {userId: 3 }));

// rest可以把剩余的对象当成一个数组返回
var {comments, ...rest} = post2;
console.log(rest);

function savePostObj({id, title, content, ...rest}){
    console.log("保存了文章", id, title, content);
    console.log(rest);
}

savePostObj({id: 4, title: "标题4", content: "内容4", author: "峰华"})

// p72 值传递与引用传递
/*
Array和Object在函数的参数中是按引用传递的
也就是说传递的是内存地址
修改它的值之后,所有用到该地址的值都会变化

数字和boolean等基本类型按值传递的
也就是说它的值是会被复制一份新的
在函数中修改它的值不会影响它之前的值

*/
console.clear();
function byReference(arr) {
    arr[0] = 5
}
var array = [1, 2, 3]
byReference(array)
console.log(array);  // 这里修改了

function byReferenceObj(obj) {
    obj.title = "标题标题";
}

var post5 = { id: 1, title: "标题" };
byReferenceObj(post5);
console.log(post5);   // 这里都修改了

// 虽然字符串按引用传递的  每次赋值会创建一个新的string对象 旧的不会改变
function byReferenceStr(str) {
    str = "abc"
    console.log(str);
}

var testStr = "test"
byReferenceStr(testStr);
console.log(testStr);    // 这里外部的字符串并未改变

function byValue(num) {
    num = 10;
    console.log(num);
}

var testNum = 1;
byValue(testNum);
console.log(testNum);  // 这里是1

console.clear();

