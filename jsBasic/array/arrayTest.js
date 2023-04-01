let fruits = ["Apple", "Orange", "Plum"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

// 因为数组也是对象 所以可以用for in  不过不推荐
for (const fruit  in fruits) {
    if (fruits.hasOwnProperty.call(fruits, fruit )) {
        const element = fruits[fruit];
        console.log(element);
    }
}

for (const fruit in fruits) {
    console.log(fruits[fruit]);
}

fruits.forEach(element => {
    
});
console.log("\n");

// 查
console.log(fruits[0]);

// 改

// 增


// 删