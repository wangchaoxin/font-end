//dom控制元素
//1.根据id获取元素
var p = document.getElementById("p1");
//2.根据name获取元素,可以同时获取多个元素，返回一个数组
var elementsByName = document.getElementsByName("p1");
document.write(elementsByName[0].innerText);
//3.byTag name 也返回一个集合
document.getElementsByTagName("p");
//4.获取属性
var attribute = p.getAttribute("title");
document.write(attribute);
//设置属性
p.setAttribute("title", "title");
//5.获取子节点（注意:会包含空白项）
var childNodes = p.childNodes;
//6.访问父节点
var parent = p.parentNode;
//7.创建节点
var body = document.body;
var input = document.createElement("input");
input.type = "button";
input.value = "submit";
//添加到body，向末尾插入
body.appendChild(input);
//新的元素放入,在p前面插入Input元素
body.insertBefore(input, p);
//8.删除节点
body.removeChild(p);
//9.获取屏幕宽度和高度
document.documentElement.offsetHeight;
document.documentElement.offsetWidth;

//window 对象，指当前浏览器窗口，所有全局对象、函数以及变量均自动成为window对象的成员，document为window对象属性之一
window.document.write("");
//1.获取浏览器宽高
document.write(window.innerHeight + "," + window.innerWidth);
//2.打开新的窗口
window.open("event.html");
//关闭窗口
window.close();
//3.计时事件
//间隔执行，延迟1000ms
var interval = function () {
    alert("计时");
};
setInterval(interval, 1000);
//清除间隔执行
clearInterval(interval);
//一段时间后执行
var timeout = function () {

};
setTimeout(timeout);
clearTimeout(timeout());
//history对象.
//1. 包含浏览器的历史url集合
window.history;
//2. 相当于后退按钮
history.back();
//3. 相当于向前按钮
history.forward();
//4. 进入历史中的某个页面
history.go(-1); //跳转到上一个页面

//location对象，用于获取当前页面的地址，并把浏览器重定向到新的页面
location.hostname;   //返回web主机的域名
location.pathname;  //返回当前页面的路径和文件名
location.port;      //返回web主机的端口
location.protocol;      //返回使用的协议  http: https:
location.href;      //返回当前页面的url
location.assign("www.baidu.com");  //加载新的文档在当前页面

//screen对象，包含有关用户屏幕的信息
screen.availHeight;  //可用屏幕高度
screen.availWidth;   //可用屏幕宽度
screen.height;       //屏幕高度
screen.width;       //屏幕宽度




