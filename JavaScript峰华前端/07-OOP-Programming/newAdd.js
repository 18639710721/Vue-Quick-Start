// 成员变量

class Employee {
    dept = " "  // 定义在类里面的变量是成员变量
    constructor(name){
        this.name = "员工姓名：" + name;

    }
}
var emp = new Employee("凤凰"); // 构造函数可以在初始化时添加逻辑
console.log(emp);
emp.dept = "技术部"; // 只能在外面添加
console.log(emp);

// 静态成员变量只能通过类名访问 防止命名冲突
class Page {
    static count = 0;
    static increaseViewCount() {
        Page.count++;
    }
}

Page.count++;
console.log(Page.count);
Page.increaseViewCount();
console.log(Page.count);

