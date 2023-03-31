const app = Vue.createApp({
    // template: '',
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser() {
            // 请求这个api返回一个随机的用户json数据  response
            const res = await fetch('https://randomuser.me/api')
            const { results }  = await res.json()  // 使用对象的解构赋值
            console.log(results);

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        },
    },
})

app.mount('#app')