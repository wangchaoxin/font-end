//3.内置对象
//3.1 创建对象
people = new Object();
//设置属性
people.name = "wang";
people.age = 1;
document.write(people.name + "," + people.age);
//创建对象另一种方式
people1 = {name: "wang", age: 9};

//函数创建对象
function Son(name, age) {
    //设置属性
    this.name = name;
    this.age = age;
}

son = new Son("wang", 18);
document.write(son.name + son.age);

//3.2 string 字符串对象，字符串可以""或者''
var str = "hello";
str.length;
str.indexOf("o");
//匹配字符串，如果匹配直接打印
str.match("hello");
str.replace("old", "new");
str.toUpperCase();
str.toLowerCase();
var strings = str.split(',');
//3.3 日期对象
var date = new Date();
document.write("<br>" + date.getFullYear() + "<br>"); //获取年份
document.write(date.getTime() + "<br>");//获取毫秒
document.write(date.getFullYear() + "<br>");
document.write(date.getDay() + "<br>");
//获取时分秒
document.write(date.getHours() + "<br>");
document.write(date.getMinutes() + "<br>");
document.write(date.getSeconds() + "<br>");
//3.4数组对象
a = [1];
b = [2];
//数组合并
var c = a.concat(b);
//数组排序
a.sort();
//倒序排序
a.sort(function (a1, b1) {
    return b1 - a1;
});
//数组追加
a.push(1);
a.push(b);
//数组反转
a.reverse();
//3.5 math对象
//0-1的小数
document.write(Math.random() + ",");
//四舍五入
document.write(Math.round(2.5));
//转换成Int
parseInt(Math.random() + ",");
//最大值
document.write(Math.max(1, 2, 3) + ",");
//绝对值
document.write(Math.abs(-1) + ",");

//面向对象
//1.创建对象
var person = {
    name: "wang",
    age: 10
};

//2.函数构造器
function Person() {

}

Person.prototype = {
    name: "wang",
    age: 19,
    eat: function () {
        alert("ear")
    }
};
Person.prototype.say = function () {
    alert("say");
};
var p = new Person();
//3.类的继承
function Student() {
    
}

Student.prototype = new Person();
//覆盖父类方法
Student.prototype.say = function () {
    alert("student say")
};
var s = new Student();
s.say();
//调取父类方法
Student.prototype.say();

//4.闭包封装类,隐藏类的内部实现
(function () {
    function Person() {

    }

    Person.prototype = {
        name: "wang",
        age: 19,
        eat: function () {
            alert("ear")
        }
    };
    //通过window暴露类
    window.Person = Person;
}());
var p = new Person();

