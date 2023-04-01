/*
JavaScript的代码正常情况下是同步执行的

异步是其他代码等待的时候把代码放在其他地方执行 最后把结果返回到一起
    1.使用fetch利用Ajax进行远程加载数据
    2.setTimeout
    3.自定义的promised
    因为JavaScript是单线程语言,所以异步机制是EventLoop实现

    setTimeout会返回一个id
    用clearTimeout取消
 */

// timeout 延迟一段时间执行回调函数 1000 == 1秒
// console.log("第一行代码");
// const timer = setTimeout(() => {
//     console.log("1秒之后执行");
// }, 1000)
// console.log("第二行代码");

// setTimeout(() => {
//     clearTimeout(timer);
//     console.log("中断了timer的执行");
// }, 500)


// // setinterval 每隔一段时间执行一次回调函数
// let interval = setInterval(() => {
//     let date = new Date();
//     console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
// }, 1000)

// setTimeout(() => {
//     clearInterval(interval)
// }, 5000);

// promise
// var promise = new Promise( (resolve,reject) => {
//     setTimeout(() => {
//         reject("执行失败")
//     }, 2000);
// })
// // promise.then(value => console.log(value));
// // promise 异常捕获 reject catch
// promise.catch(error => console.log(error))
// console.log("在promise之前执行");

// promise 链式调用 每次调用then或者catch 都会返回一个新的promise对象
new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject("promise失败") // 这里都会被catch捕获
        resolve(1)
    }, 1000);
})
    .then(value => {
        console.log(value);
        // throw "异常"   // 这里也会被catch捕获
        return value + 10
    })
    .then(value => {
        console.log(value);
        return new Promise(resolve => resolve(value + 20))
    })
    .then( value => {
        console.log(value);
    })
    .catch( error => {
        console.log(error);
    })

// 多个promise同时执行
var p1 = new Promise(resolve => {
    setTimeout(() => {
        resolve(1)
    }, 1000);
})

var p2 = new Promise(resolve => {
    setTimeout(() => {
        resolve(2)
    }, 2000);
})

var p3 = new Promise(resolve => {
    setTimeout(() => {
        resolve(3)
    }, 500);
})

// 所有异步执行的会产生一个结果数组
Promise.all([p1, p2, p3]).then(values => console.log(values));   // [1, 2, 3]
// async await
// v1版本
// async function async1() {
//     setTimeout(() => {
//         console.log("async1 执行完毕");
//     }, 1000);
// }
// v2版本
// async function async1(){
//     let result2 = await async2()
//     let result3 = await async3()
//     console.log(result2);
//     console.log(result3);
// }

// async function async2(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(10)
//         }, 1000);
//     });
// }

// async function async3() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(8)
//         }, 500);
//     });
// }


// // async1();
// console.log(async1());   // 会发现这是一个promise


// v3版本 抛出异常
async function async1(){
    let result2 = await async2()
    try {
        let result3 = await async3();
    } catch (e) {
        console.log(e);
    }
    console.log(result2);
    
    
}

async function async2(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(10)
        }, 1000);
    });
}

async function async3() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("执行出错")
        }, 500);
    });
}

async1()


// 深入理解promise
// 多个回调重叠在一起, 就会产生回调地狱的情况 promise就是为了解决这个

// 怀孕承诺的例子
// const isPregnant = true
// const childPromise = new Promise( (resolve,reject) => {
//     if (isPregnant){
//         resolve("孩子他爹")
//         console.log(resolve);
//     } else{
//         reject("老公")
//         console.log(reject);
//     }
// })
// childPromise
//     .then( name => {
//         console.log(`男人成为了${name}!`);
//     })
//     .catch( name => {
//         console.log(`男人为了成为${name}!`);
//     })
//     .finally(() =>{
//         console.log(`男人和女人最终结婚了!`);
//     })

// // 加载图片的例子
// const imgAddress = "https://imglf5.lf127.net/img/6a15c8aca1d5f341/dmM2TFBma1BocTdMSlU1dE9MajJQTkcyQ1BYV05SK3FhRC9aMlhHaFhhUT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg"

// const imgPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const img = new Image();
//         img.src = url;
//         img.onload = () => {
//             resolve(img);
//         }
//         img.onerror = () => {
//             reject(new Error("图片有误"));
//         }
//     });
// }

// imgPromise(imgAddress)
//     .then(img => {
//         document.body.appendChild(img);
//     }).catch((err) => {
//         document.body.innerHTML = err;
//     });