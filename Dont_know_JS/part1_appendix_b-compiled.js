/**
 * Created by Administrator on 2016/12/17.
 */
/*this词法*/
var obj = {
    id: "awesome",
    cool: function coolFn() {
        console.log(this.id);
    }
};
var id = "not awesome";
obj.cool(); // 酷
setTimeout(obj.cool, 100); // "not awesome"
setTimeout(obj.cool(), 100); // "awesome" 错误写法，会立即执行
setTimeout(function () {
    obj.cool();
}, 100); // "awesome"
/*问题在于 cool() 函数丢失了同 this 之间的绑定。 */
/* 普通解决闭包中的this问题*/
var obj1 = {
    id: "awesome",
    cool: function coolFn() {
        var that = this; // solved!
        setTimeout(function () {
            console.log(that.id);
        }, 100);
    }
};
/* ES6 处理闭包中的this问题*/
var obj2 = {
    id: "awesome",
    cool: function coolFn() {
        setTimeout(() => {
            //use => to solve
            console.log(this.id);
        }, 100);
    }
};
var obj3 = {
    id: "awesome",
    cool: function coolFn() {
        setTimeout(function () {
            console.log(this.id);
        }.bind(this), 3000);
    }
};

//# sourceMappingURL=part1_appendix_b-compiled.js.map