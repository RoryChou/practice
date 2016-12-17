/**
 * Created by Administrator on 2016/12/14.
 */
/*
*   作用域闭包
* */
//当函数可以记住并访问所在的词法作用域时， 就产生了闭包
// 闭包使得函数可以继续访问定义时的词法作用域
//当然， 无论使用何种方式对函数类型的值进行传递， 当函数在别处被调用时都可以观察到闭包。

function wait(message) {
    setTimeout( function timer() {
        console.log( message );
    }, 1000 );
} wait( "Hello, closure!" );
//其中的timer()就是闭包
/*无论何时何地， 如果将函数（ 访问它们各自的词法作用域） 当作第一
 级的值类型并到处传递， 你就会看到闭包在这些函数中的应用。在定时器、 事件监听器、
 Ajax 请求、 跨窗口通信、 Web Workers 或者任何其他的异步（ 或者同步） 任务中， 只要使
 用了回调函数， 实际上就是在使用闭包！*/


/*要说明闭包， for 循环是最常见的例子*/
for (var i=1; i<=5; i++) {
    setTimeout( function timer() {
        console.log( i );
    }, i*1000 );
}

for (var i=1; i<=5; i++) {
    (function(j) {
        setTimeout( function timer() {
            console.log( j );
        }, j*1000 );
    })( i );
}
/*换句话说， 每次迭代我们都需要一个块作用域*/
for (var i=1; i<=5; i++) {
    let j = i; // 是的， 闭包的块作用域！
    setTimeout( function timer() {
        console.log( j );
    }, j*1000 );
}
/* 变量在循环过程中不止被声明一次， 每次迭代都会声明。 */
for (let i=1; i<=5; i++) {
    setTimeout( function timer() {
        console.log( i );
    }, i*1000 );
}

/* 模块 */
var foo = (function CoolModule() {
    var something = "cool";
    var another = [1, 2, 3];
    function doSomething() {
        console.log( something );
    }
    function doAnother() {
        console.log( another.join( " ! " ) );
    }
    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
})();

/* 现代模块 */
var MyModules = (function Manager() {
    var modules = {};
    function define(name, deps, impl) {
        for (var i=0; i<deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply( impl, deps );
    }
    function get(name) {
        return modules[name];
    }
    return {
        define: define,
        get: get
    };
})();
//定义模块
MyModules.define( "bar", [], function() {
    function hello(who) {
        return "Let me introduce: " + who;
    }
    return {
        hello: hello
    };
} );