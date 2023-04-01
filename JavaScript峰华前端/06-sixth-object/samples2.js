// p63 对象 构造函数
/*
1.预先定义好对象的默认属性
2.使用new关键字创造对象的实例
    图纸 Prototype
    工厂 构造函数
    汽车 实例

*/

// function Employee(name, position){
//     this.name = name;
//     this.position = position;
// }

// 通过new创造实例
// const emp1 = new Employee("凤凰", "前端工程师");
// const emp2 = new Employee("张三", "后端工程师");
// console.log(emp1);
// console.log(emp2);

// p64 this 
// this 关键字指的是对象创建的实例本身 可以访问本身的属性
/**
 * 字面值创造的实例本身就是一个具体的实例
 */
var emp3 = {
    name: "李四",
    position: "后端工程师",
    signIn() {
        console.log(`${this.name}上班打卡`);
    }
}

emp3.signIn()

emp3.goToWork = function() {
    console.log(`${this.name}去上班`);
    console.log(this);  // 这个实例本身
};
emp3.goToWork();


// 箭头函数的this指向的是包裹它作用域的this 因为这里并没有包裹的作用域 
// 所以作用域就是全局对象, 也就是window的对象
emp3.goToWorkLambda  = () => {
    console.log(this.name + "去白嫖");
    console.log(this);  // 这里是window对象 浏览器对象
} 
emp3.goToWorkLambda()

// 箭头函数不适合对象的方法 应该用普通的函数去定义
function Employee(name, position){
    this.name = name;
    this.position = position;
    this.signIn = () => {
        console.log(this.name + " 去上班");
        console.log(this);  // 这里是这个对象本身
    }
}
var emp4 = new Employee("王五","前端工程师");
emp4.signIn();

// p65 getters 和 setters
console.clear();
var person = {
    firstName: "三",
    lastName: "张",
    get fullName(){
        return this.lastName + this.firstName;
    },
    set fullName(fullName){
        // 解构赋值
        let [lastName, firstName] = fullName.split(",")
        this.lastName = lastName
        this.firstName = firstName

    }
}
console.log(person.fullName);
person.fullName = "李,四"
console.log(person.fullName);
console.log(person.lastName, person.firstName);


function Employee2(name, position) {
    this.name = name;
    this.position = position;
}

var emp5 = new Employee2("赵六", "前端工程师");
// 用Object.defineProperty 定义get 和set
// 第一个参数是对象 第二个是属性名字 第三个是函数
Object.defineProperty(emp5,"info", {
    get: function () { 
        return `${this.name} ${this.position}`;
    },
    set: function (info) {
        let [name, position] = info.split(" ");
        this.name = name;
        this.position = position;
    }
    
})
console.log(emp5.info);
emp5.info = "赵七 后端工程师";
console.log(emp5.name);
console.log(emp5.position);

console.clear();

