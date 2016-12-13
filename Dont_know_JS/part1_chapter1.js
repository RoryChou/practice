/**
 * Created by Administrator on 2016/12/12.
 */

/*这些问题说明需要一套设计良好的规则来存储变量， 并且之后可以方便地找到这些变量。
 这套规则被称为作用域*/

/*
*   在传统编译语言的流程中，程序中的源代码在执行前会经历三个步骤，统称为编译：
*   1.分词/词法分析（Tokenizing/Lexing）:将代码分割成有意义的代码块，成为词法单元（token）
*
*   2.解析/语法分析（parse）: 将词法单元流转换成一个由元素逐级嵌套所组成的代表了程序语法结构的树。
*       这个树称为“抽象语法树”（Abstract Syntax Tree,AST）
*   3.代码生成：将语法树转换为可执行代码的过程，这个过程与语言，目标平台信息相关
*       就是将 var a = 2; 的 AST 转化为一组机器指令，
*       用来创建一个叫作 a 的变量（ 包括分配内存等）， 并将一个值储存在 a 中。
* */

/*
*   1.引擎：从头到尾负责整个 JavaScript 程序的编译及执行过程。
*   2.编译器：负责语法分析及代码生成等脏活累活
*   3.作用域：负责收集并维护由所有声明的标识符（ 变量） 组成的一系列查
    询， 并实施一套非常严格的规则， 确定当前执行的代码对这些标识符的访问权限
* */

var a = 2
/*编译器首先会将这段程序分解成词法单元， 然后将词法单元解析成一个树结构*/

/* LHS RHS*/