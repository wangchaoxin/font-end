// document.write("index.js");
//直接输出标签
// document.write("<h1>index.js</h1>");
document.getElementById("p1").innerHTML = "我的";

//1.变量
var x = 1;
var y = 1;
document.writeln(x + y);

//2.数据类型 字符串，数字，布尔，数组，对象，空null,未定义
var name = "wang";
var b = true;
//数组声明方式
var arr = [1, 2, 3];
var arr1 = [];
arr1[0] = "haha";
arr1[1] = 1;
//赋值为null,可以通过赋值为空清除变量
var n = null;
//赋值为undefined
var n1 = undefined;
document.writeln(arr + "<br>");
document.writeln(arr1 + "<br>");
document.writeln("null:" + n + ",undefine:" + n1 + "<br>");


document.writeln("1+2=" + add(1, 2) + "<br>");
//4.运算符
x = 1;
y = "1";
x == y  //true ==
x === y  //false ===类型必须也相等
//三则运算符
var z = x > y ? "a" : "b";

//5.if else
if (x > 1) {

} else if (x < -1) {

} else {

}
//switch case
switch (x) {
    case 1:
        break;
    case 2:
        break;
    default:
        break;
}
//6.for
for (var i = 0; i < arr.length; i++) {
    document.writeln(arr[i]);
}
//forin
for (x in arr) {
    document.writeln(x);
}
//while
while (i < 0) {
    i++
}
//do while
do {

} while (i < 0);
//跳转语句
while (i < 0) {
    if (i === 1) {
        continue;
    }
    break;
}

//3.函数
function add(x, y) {
    return x + y;
}

function alert1() {
    alert("hello");
}
//可以直接传入控件对象
function changeHtml(obj) {
    obj.innerHTML = "哈哈";
}


//7.变量,全局变量
var x1 = 1;
x2 = 1;
//8.异常
try {

} catch (e) {
    console.log(e);
    //抛出异常
    throw e;
    throw "其他信息";
}
//9.dom对象
//dom可以改变html元素，属性，css样式
document.write("hello");  //一定不要早文档加载完成之后输出，会覆盖原文件
//9.1寻找元素
//通过id寻找,改变元素内容
document.getElementById("text1").innerHTML='<h1>11</h1>';
//9.2通过标签寻找元素，找到相同元素中的第一个
document.getElementsByTagName("p");
//9.3改变元素属性
document.getElementById("a").href = "";
document.getElementById("img").src = "";
//9.4改变元素的css
document.getElementById("a").style.background = 'black';






