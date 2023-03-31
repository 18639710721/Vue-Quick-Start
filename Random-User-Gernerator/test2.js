
// 局部作用域  let & const have block level scope
{
    {
        let score = 11;
        
    }
    // console.log(score);
    
}


// console.log(score);

// destructuring 解构赋值  数组是[]  对象是{}
const person = {
    firstName:"John",
    lastName:"Doe",
    age:30,
    hobbies: ["music","movies","sports"],
    address: {
        street: "50 main st",
        city: "Boston",
        state: "MA"
    }
}
// 嵌套的解构赋值

const {firstName, lastName, address: {street}} = person

console.log(firstName, lastName,street);

const todos = [
    {
        id:1,
        text: "Take out trash",
        isCompleted: true

    },
    {
        id:2,
        text: "Meeting with boss",
        isCompleted: true

    },
    {
        id:3,
        text: "Dentist appt",
        isCompleted: false

    }
]

// forEach的第一个参数是迭代对象
todos.forEach(todo => {
    // console.log(todo.text);
});

// map 和 filter 都是返回一个新的数组对象  根据匿名函数的条件
const todosText = todos.map(todo => todo.text)
// console.log(todosText);

// 过滤出来是true的文本
const todosTextFilter = todos.filter(todo => todo.isCompleted === true).map(todo => todo.text)
// console.log(todosTextFilter);