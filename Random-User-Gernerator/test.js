// let person = {
//     // 嵌套对象
//     name: {
//         first: "Bob",
//         last: "Smith"
//     },
//     age: 32,
//     gender : 'male',
//     interests : ['music', 'skiing'],
//     // 缩写的函数
//     bio() {
//         console.log(`${this.name.first} ${this.name.last} is ${this.age} years old. He likes ${this.interests[0]} and ${this.interests[1]}.`);
//     },
//     greeting() {
//         console.log(`Hi! I'm ${this.name.first}.`);
//     }
    
// };

// // 遍历object的key值
// for (key in person) {
//     console.log(key);
// }

// person.bio();
// person.greeting();
// console.log(person);

// 遍历对象的例子




// 写一个生成随机数的函数表达式
const generateRandomArray = () => {
    let arrRandom = []
    for (let index = 0; index < 10; index++){
        const element = Math.floor(Math.random() * 100 + 1)
        arrRandom.push(element)
    }
    return arrRandom;
}
// console.log(arrRandom);



const bubbleSort = (arrs) => {
    for (let i = 0; i < arrs.length - 1;  i++){
        for (let j = 0; j < arrs.length - 1 - i; j++){
            if (arrs[j] > arrs[j+1]) {
                // js的解构赋值 
                // 数组 [] = []
                // 对象 {} = {}
                [arrs[j], arrs[j+1]] = [arrs[j+1], arrs[j]];
            }
        }
    }
    return arrs;
}

// const test = [
//     (a, b) => (a + b),
//     (a, b) => (a * b),
// ]
// 生成十个数组并进行冒泡排序
// for (let arrNum = 0; arrNum < 10; arrNum++) {
//     console.log(bubbleSort(generateRandomArray()));
// }



// 遍历数组对象  
let students = [
    {
        name: "小明",
        age: 18,
        gender: "男",
        hometown: "河北省"
    },

    {
        name: "小红",
        age: 19,
        gender: "女",
        hometown: "河南省"
    },

    {
        name: "小刚",
        age: 17,
        gender: "男",
        hometown: "山西省"
    },

    {
        name: "小丽",
        age: 18,
        gender: "女",
        hometown: "山东省"
    },

]

// 为啥这里没有显示 不知道
// for (let i = 0; i < students.length; i++) {    // key是 0 1 2 3
//     // console.log(students[key]);
//     // console.log(students[key].name);
//     document.write(`
//     <tr>
//         <td>${i + 1}</td>
//         <td>${students[i].name}</td>
//         <td>${students[i].age}</td>
//         <td>${students[i].gender}</td>
//         <td>${students[i].hometown}</td>
//     </tr>
//     `)

// }

// 回调函数


function request(cb){
    console.log("请求数据");
    cb("sucessful");
    console.log("请求结束");
}

// function callback(result){
//     console.log("执行回调");
//     console.log(`执行回调的结果是 ${result}`);
// }

// 这里也可以写一个箭头函数? 不过这里是不可以复用的
// request(result => {
//     console.log("执行回调");
//     console.log(`执行回调的结果是 ${result}`);
// })

testArr = [1, 2, 3]

// testArr.forEach((element, index, self ) => {
//     console.log(self);
//     console.log(element);
//     console.log(testArr[index]);
// });

testArr.push(4)
console.log(testArr);
testArr.pop()
console.log(testArr);
console.log(testArr[testArr.length - 1]);
testArr.shift()
console.log(testArr);
testArr.unshift(1)
console.log(testArr);
console.log(testArr.reverse());
console.log("hello".split("").reverse().join(""));
console.log(testArr.map(ele => ele * 2));
result = [1, 2, 3, 4].reduce((previous, current) => previous + current);  // 数组求和
console.log(result);

console.log([1, 2, 3, 4, 5, 6].filter(item => item > 4));

// 生成五行四列的数组
test = []
for (let i = 0; i < 5; i++){
    test[i] = []
    for (let j = 0; j < 4; j++){
        test[i][j] = i + j
    }
}
console.log(test);


class Page {
    static count = 0;
    static increaseViewCount() {
        this.count++;
    }
}

Page.count++;
Page.increaseViewCount();
console.log(Page.count);