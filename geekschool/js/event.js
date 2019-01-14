//9.5 dom event listener,不用在控件中写死函数名
//添加多个句柄不会覆盖
var elemet = document.getElementById("p1");
if (elemet) {
    elemet.addEventListener("click", function (ev) {
        alert('hello')
    });
    elemet.addEventListener("click", function (ev) {
        alert('world')
    });
    elemet.onclick = function (ev) {
    };

    // elemet.removeEventListener("click");
}
//事件流
//事件流：页面中接收事件的顺序
//事件冒泡：事件逐层向上冒泡
function hello() {
    alert("hello")
}

//1.事件处理
//1.直接添加到html中。2.DOM0 级事件处理，把一个函数赋值给一个事件处理程序，btn.onclick=function(){}3.Dom2级事件处理，addEventListener

//2.事件对象
//事件产生时会产生一个事件对象
var btn1 = document.getElementById("btn1");
if (btn1) {
    btn1.onclick = function (ev) {
        //事件类型,target获取事件目标
        alert("事件类型：" + ev.type + "target：" + ev.target)
        //阻止事件冒泡
        ev.stopPropagation();
        //阻止默认事件，例如 a 不进行跳转
        ev.preventDefault();
    };
}

