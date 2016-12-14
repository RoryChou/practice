/**
 * Created by Administrator on 2016/12/14.
 */
/* 函数作用域与块作用域 */

// IIFE：(function foo(){ .. })()与(function(){ .. }())是一样的，
//奇怪的用法
(function IIFE( def ) {
    def( window );
})(function def( global ) {
    var a = 3;
    console.log( a ); // 3
    console.log( global.a ); // 2
});

/*3.4块作用域*/
for (var i=0; i<10; i++) {
    console.log( i );
}//并不是块级作用域
//with，try/catch语句
try {
    undefined(); // 执行一个非法操作来强制制造一个异常
}
catch (err) {
    console.log( err ); // 能够正常执行！
}
console.log( err ); // ReferenceError: err not found

//let语句（ES6）
/*let 关键字可以将变量绑定到所在的任意作用域中（ 通常是 { .. } 内部）。 换句话说， let
 为其声明的变量隐式地了所在的块作用域。*/
var foo = true;
if (foo) {
    let bar = foo * 2;
    bar = something( bar );
    console.log( bar );
} console.log( bar ); // ReferenceError
/*只要声明是有效的， 在声明中的任意位置都可以使用 { .. } 括号来为 let 创建一个用于绑
 定的块*/
if (foo) {
    { // <-- 显式的块
        let bar = foo * 2;
        bar = something( bar );
        console.log( bar );
    }
}//推荐使用这样显式的方式
/*但是使用 let 进行的声明不会在块作用域中进行提升。 声明的代码被运行之前， 声明并不
 “ 存在”。*/
{
    console.log( bar ); // ReferenceError!
    let bar = 2;
}

/* 解决垃圾回收问题 */
function process(data) {
// 在这里做点有趣的事情
}
var someReallyBigData = {};
process( someReallyBigData );
var btn = document.getElementById( "my_button" );
btn.addEventListener( "click", function click(evt) {
    console.log("button clicked");
}, /*capturingPhase=*/false );
/* 由于 click 函数形成
 了一个覆盖整个作用域的闭包， JavaScript 引擎极有可能依然保存着someReallyBigData
 这我就不懂了，click函数为何会成为一个闭包？？？？？？？？？
 */

/* let循环 */
/* for 循环头部的 let 不仅将 i 绑定到了 for 循环的块中， 事实上它将其重新绑定到了循环
 的每一个迭代中， 确保使用上一个循环迭代结束时的值重新进行赋值*/
for (let i=0; i<10; i++) {
    console.log( i );
} console.log( i ); // ReferenceError


/*
*   const(ES6)
* */
//用来创建块作用域变量， 但其值是固定的（ 常量）。 之后任何试图修改值的操作都会引起错误。
var foo = true;
if (foo) {
    var a = 2;
    const b = 3; // 包含在 if 中的块作用域常量
    a = 3; // 正常 !
    //b = 4; // 错误 !
} c
onsole.log( a ); // 3
console.log( b ); // ReferenceError!