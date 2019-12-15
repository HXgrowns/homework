[JS的函数总结](https://www.jianshu.com/p/421f158fbbb4?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation
)
## Q1 创建函数有哪些方法？分别有什么特点？
创建函数3种方式:
###### (1)声明式
解析器会先读取函数声明，并使其在执行任何代码之前可以访问；
```
function Fn(x,y){
    return x + y;
}
```
###### (2)匿名式
必须等到解析器执行到它所在的代码行才会真正被解释执行
```
var fn=function(x,y){
    return x + y ;
}
```
###### (3)Function式
从技术角度讲，这是一个函数表达式。一般不推荐用这种方法定义函数，因为这种语法会导致解析两次代码（第一次是解析常规ECMAScript代码，第二次是解析传入构造函数中的字符串），从而影响性能。
```
//new Function(arg1,arg2...,body)
var sum = new Function('x','y','return x + y ;')
sum(1,2)  //3
//特殊注意点:
var name='sss';
  function fun(){
    var name='lll';
    return new Function('return name');//不能获取局部变量
  }
 console.log(fun()()); //sss
 //另一个注意点
 new Function('var x =1;return x;')() //1
 x  //报错，外部无法访问Function内部变量
```
## Q2 见如下代码，b会打印出什么？
```
(function() {
   var a = b = 5;
})();
 
console.log(b);
```
结果是5，解析：
var a = b = 5;等价于：
b = 5;
var a = b;
对于没有写var的变量系统默认为是全局变量，哪里都可以访问到，a则是局部变量只能在函数内部可以访问，所以这里打印b的值是5,a is not defined.
## Q3 编写一个函数，实现一个输出 n (n > 0，否则返回原字符串)遍连接后的 str 功能，如下：
```
var a = repeatStr('hello', 2);  //hellohello
var a = repeatStr('hello', 4);  //hellohellohellohello
```
函数实现如下：
```
function repeatStr(str, n) {
      var result = "";
      if (n <= 0) {
        return str;
      }
      for (let i = 0; i < n; i++) {
        result += str;
      }
      return result;
    }
```
## Q4 以下代码的执行结果是：
```
function test() {
   console.log(a);
   console.log(foo());
   
   var a = 1;
   function foo() {
      return 2;
   }
}
 
test();
```
结果是`undefined` `2`,分析如下：
1、变量在声明之前不能访问，所以打印a为`underfined`
2、函数是声明式创建，前面提到，声明式创建解析器会先读取函数声明，并使其在执行任何代码之前可以访问；所以函数可以访问，打印为`2`

## Q5 以下代码的执行结果分别是：
```
function foo(){
    return 1;
}
var foo;
console.log(typeof foo);
```
结果是：`function`，

```
function foo(){
    return 1;
}
var foo = 1;
console.log(typeof foo);
```
结果是：`number`,
分析如下：
两个程序的区别在于var foo是否赋值，在Js中，声明一个变量是不给该变量开辟空间的，所以如果不赋值，foo还是之前的foo()函数，赋值之后，foo变成了一个number变量。
## Q6 编写一个函数，实现一个乘法计算器：无论输入多少个数字参数，最终都返回参数的乘积。例如:
```
var a = multiplicationCalculator(3, 6); // 18
var b = multiplicationCalculator(3, 6, 2); // 36
var c = multiplicationCalculator(1, 2, 5, 6); // 60
.........
```
函数程序如下：
```
function multiplicationCalculator() {
  var result = 1;
  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}
```
## Q7 编写一个函数，实现如下语法的功能：var a = add(2)(3)(4); // 9，提示：2 + 3 + 4 = 9

解题关键：add()函数需要返回一个加法函数，而不是一个普通的值，即定义add()，并想办法让add()返回一个add()。js最显著的特征就是函数的返回值可以是一个函数。
程序代码如下：
```
function add(x) {
  var sum = x;
  function addElement(y) {
    sum = sum + y;
    return addElement;
  }

  //这里valueOf是addElement的方法，所以只能用函数给他赋值
  addElement.valueOf = function () {
    return sum;
  }

  return addElement;
}
console.log(add(1)(2)(3).valueOf());  //6
console.log(add(1)(2)(3)(4).valueOf());   //10
```