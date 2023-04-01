let user = {
    name: "张绣",
    age: 18,

    sayHi() {
        console.log(this.name);
    }

}

user.sayHi();