// p98 Json 对象
/**
 * Json是一种特殊格式的字符串
 * 用于服务器之间交换数据 后台返回的数据是json格式
 * JavaScript Object Notation JavaScript对象标记  
 * 和JavaScript的对象类似
 * 支持对象 数组 数字 字符串 Boolean null 类型
 * key必须用双引号括起来
 */
 var postJSON = `{
    "id":1,
    "title": "标题",
    "comments": [
        {
            "userId" : 1,
            "comment": "评论1"
        },
        {
            "userId": 2,
            "comment": "评论2"
        }
    ],
    "published": true,
    "author": null
}`;
// 把json对象解析为JavaScript对象
// console.log(JSON.parse(postJSON));

let person = {
    id: 1,
    name: "张龙",
    skills: ["React", "Java"]
};

// console.log(person);
// 把JavaScript对象convert为json对象字符串
// console.log(JSON.stringify(person, null, 2));

let comments = `[
    {
        "userId": 1,
        "comment": "评论1"
    },
    {
        "userId": 2,
        "comment": "评论2"   
    }
]`;

console.log(JSON.parse(comments)); // json对象解析为JavaScript对象