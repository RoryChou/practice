/**
 * Created by Administrator on 2016/12/17.
 */
/* 动态作用域 */
/* 词法作用域最重要的特征是它的定义过程发生在代码的书写阶段 */
function foo() {
  console.log(a); // 2
}
function bar() {
  var a = 3;
  foo();
}
var a = 2;
bar();
/* 词法作用域让 foo() 中的 a 通过 RHS 引用到了全局作用域中的 a， 因此会输出 2。 */

/* 而动态作用域并不关心函数和作用域是如何声明以及在何处声明的， 只关心它们从何处调用 */

/* 需要明确的是， 事实上 JavaScript 并不具有动态作用域。 它只有词法作用域， 简单明了。
 但是 this 机制某种程度上很像动态作用域。*/

//# sourceMappingURL=part1_chapter1_appendix_a-compiled.js.map