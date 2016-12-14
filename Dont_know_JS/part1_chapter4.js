/**
 * Created by Administrator on 2016/12/14.
 */
/*
*   提升
* */
//即使是具名的函数表达式， 名称标识符在赋值之前也无法在所在作用域中使用：
foo(); // TypeError
bar(); // ReferenceError
var foo = function bar() {
// ...
};

/* 4.3 函数优先 */
//函数会首先被提升， 然后才是变量。
