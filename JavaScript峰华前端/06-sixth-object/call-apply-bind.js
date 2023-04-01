// call, apply 与 bind 
/*
this是隐式绑定的
*/
console.clear();

var emp = {
    id: 1,
    name: "峰华",
    // printInfo() {
    //     console.log("员工姓名: " + this.name);
    // },
    // department: {
    //     name: "技术部",
    //     printInfo() {
    //         console.log("部门名称: " + this.name);
    //     }
    // }
}
// this是隐式绑定的
// emp.printInfo();
// emp.department.printInfo();

function printInfo(dep1, dep2, dep3) {
    console.log("员工姓名: " + this.name, dep1, dep2, dep3);
    // console.log(this);  // 这里this是window的全局对象
}

printInfo();

// 用call显示绑定
printInfo.call(emp, "技术部", "IT事件部", "总裁办公室");
// apply是传进去了一个数组
printInfo.apply(emp,["技术部", "IT事件部", "总裁办公室"]);
// bind也是传数据列表 但是是bind返回了一个改变了this指向的新函数
var empPrintInfo = printInfo.bind(emp,"技术部", "IT事件部", "总裁办公室");
empPrintInfo();