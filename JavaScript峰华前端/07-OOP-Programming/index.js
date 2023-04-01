// p74 面向对象 定义class

class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position
    }

    // p75 成员方法
    signIn() {
        console.log(this.name + "打卡上班");
    }

    get info() {
        return this.name + " " + this.position

    }

    set info(info) {
        let [name, position] = info.split(" ");
        this.name = name;
        this.position = position
    }
}

var emp = new Employee("峰华", "前端工程师");
console.log(emp);
emp.signIn();
console.log(emp.position);

console.log(emp.info);
emp.info = "李四 后端"
console.log(emp.info);
console.log(emp.name, emp.position);

// p76 实现继承 用extends关键字
class Manager extends Employee {
    constructor(name, position, dept) {
        super(name, position)  // 继承父类的属性
        this.dept = dept;
    }

    signIn() {
        super.signIn();
        console.log("额外信息: 经理打卡");
    }
}
var manager = new Manager("王五", "经理", "技术部")
console.log(manager);
manager.signIn()

// manager.dept = "技术部";
// console.log(manager);


// p78 静态成员 类变量
class Page {
    static count = 0;
    static increaseViewCount() {

    }
}

Page.count++;
Page.increaseViewCount();
console.log(Page.count);