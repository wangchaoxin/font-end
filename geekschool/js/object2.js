//声明类的另一种方式
function Person() {
    var _this = {};
    _this.say = function () {
        alert("Person");
    };
    return _this;
}
//继承类
function Teacher() {
    var _this = Person();
    _this.name = "haha";
    //覆盖父类方法
    _this.say = function () {
        alert("teacher");
    };
    return _this;
}

var t = Teacher();
t.say();