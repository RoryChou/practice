/**
 * Created by Administrator on 2016/12/12.
 */
/*  第二章。词法作用域
*   作用域有两种工作模型：
*   1.词法作用域
*   2.动态作用域
*
*   2.1
*       词法作用域就是定义在词法阶段的作用域
*   2.2
*       欺骗词法作用域，这会导致性能下降
*       1.eval
*       2.with
* */

var obj = {
    a: 1,
    b: 2,
    c: 3
};
// 单调乏味的重复 "obj"
obj.a = 2;
obj.b = 3;
obj.c = 4;
// 简单的快捷方式
with (obj) {
    a = 3;
    b = 4;
    c = 5;
}