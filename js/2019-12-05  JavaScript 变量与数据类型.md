# Q1 JS 中有哪些数据类型？
数据类型包括（`Undefined`、`Null`、`Boolean`、`Number`和`String`），一种复杂数据类型（`Object`）和一种新的原始数据类型(`Symbol`)。
下面是对数据类型的解释：
**Undefined**
- 只有一个值，即undefined值
- 使用var声明了变量，但未给变量初始化值，那么这个变量的值就是undefined
- 访问一个对象不存在的属性时，也会返回undefined
```
var a
console.log(a)  // undefined

var obj = {
	name: 'lisi',
	// age: 20
}

console.log(obj.age)  // undefined

```
**Null**
- 只有一个值，即 null 值
- null 值表示一个空对象指针
```
var a = null
console.log(typeof a)  // object
```
**Boolean**
- 该类型只有两个值，true 和 false
**Number**
- Number类型包含整数和浮点数（浮点数数值必须包含一个小数点，且小数点后面至少有一位数字）两种值
- NaN为非数字类型（Not a Number）
    1. 涉及到的 任何关于NaN的操作，都会返回NaN
    2. NaN不等于任何数值包括它本身
```
console.log(NaN === NaN)       // false
console.log(NaN === true)      // false
console.log(NaN === false)     // false
console.log(NaN === null)      // false
console.log(NaN === undefined) // false
console.log(NaN + 1)   // NaN
console.log(NaN - 1)   // NaN
console.log(NaN * 2)   // NaN
console.log(NaN / 2)   // NaN
console.log(NaN % 2)   // NaN
console.log(99 % 0)    // NaN
console.log(99 / 0)    // Infinity

```
**String**
- 字符串有 length 属性
- String类型用于表示由零或多个16位Unicode字符组成的字符序列，即字符串
- 字符串可以由单引号 ’ ’ 或双引号 " " 表示

**Object**
- JS中对象是一组属性与方法的集合
- 引用类型是一种数据结构，用于将数据和功能组织在一起
- 引用类型有时候也被称为对象定义，因为它们描述的是一类对象所具有的属性和方法
**Symbol**
- 表示独一无二的值
- Symbol值通过Symbol函数生成
    凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突
```
// 没有参数的情况
let s1 = Symbol();
let s2 = Symbol();

s1 === s2 // false

// 有参数的情况
let s1 = Symbol('foo');
let s2 = Symbol('foo');

s1 === s2 // false

```
- Symbol函数前不能使用new命令
    因为生成的Symbol是一个原始类型的值，不是对象，不能添加属性
- Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述
    为了在控制台显示，或者转为字符串时，比较容易区分
- Symbol值可以作为标识符，用于对象的属性名，能保证不会出现同名的属性
    因为每一个 Symbol 值都是不相等的，能防止某一个键被不小心改写或覆盖
- Symbol 值不能与其他类型的值进行运算，会报错
```
// Symbol 值不能与其他类型的值进行运算，会报错
let sym = Symbol('My symbol');

"your symbol is " + sym
// TypeError: can't convert symbol to string
`your symbol is ${sym}`
// TypeError: can't convert symbol to string
```
- Symbol 值可以显式转为字符串和布尔值，但是不能转为数值
```
// Symbol 值可以显式转为字符串和布尔值，但是不能转为数值
let sym1 = Symbol('My symbol');

String(sym1)     // 'Symbol(My symbol)'
sym1.toString()  // 'Symbol(My symbol)'

let sym2 = Symbol();
Boolean(sym2)    // true
!sym2            // false

if (sym2) {
  // ...
}

Number(sym2)  // TypeError
sym2 + 2     // TypeError

```
- 消除魔术字符串
    魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。风格良好的代码，应该尽量消除魔术字符串，该由含义清晰的变量代替
```
// 常用的消除魔术字符串的方法，就是把它写成一个变量

const shapeType = {
  triangle: 'Triangle'
};

function getArea(shape, options) {
  let area = 0;
  switch (shape) {
    case shapeType.triangle:
      area = .5 * options.width * options.height;
      break;
  }
  return area;
}

getArea(shapeType.triangle, { width: 100, height: 100 });

```
- 属性名遍历
    Symbol 作为属性名，该属性不会出现在for…in、for…of循环中，也不会被 Object.keys()、Object.getOwnPropertyNames()、JSON.stringify() 返回。但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名
    Object.getOwnPropertySymbols方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值
```
const obj = {};

let foo = Symbol("foo");

Object.defineProperty(obj, foo, {
  value: "foobar",
});

for (let i in obj) {
  console.log(i); // 无输出
}

Object.getOwnPropertyNames(obj)
// []

Object.getOwnPropertySymbols(obj)
// [Symbol(foo)]

```
# Q2 JS Object 数据类型和其它原始类型有什么区别？
上面的数据类型除了Object外，都是基本数据类型。
下面是基本数据类型与Object对象类型的区别
|    类型    | 原始类型 |   对象类型   |
| :--------: | :------: | :----------: |
|     值     | 不可改变 |   可以改变   |
| 属性和方法 | 不能添加 |    能添加    |
|   存储值   |    值    | 地址（指针） |
|    比较    | 值的比较 |  地址的比较  |

下面详细讲述一下：
###### 1、基本数据类型的值不可改变，对象数据类型的值可以改变
```
let name = 'wanglin';
name.slice(0,2)     // wa
console.log(name);  // wanglin
name.toUpperCase(); // WANGLIN
console.log(name);  // wanglin
```
在上例中我们定义了一个变量name并将一个字符串类型的值"wanglin"赋值给了name，可以看到，调用slice方法和toUpperCase方法时，返回的是一个新的字符串，跟原来的变量name没有关系，而name的值始终没有改变。那么下面这种情况呢？
```
let name = 'wanglin';
name = 'wanglin1'
console.log(name);   // wanglin1
```
看到这里，可能有些读者会认为，name的值不是改变了吗？但其实并不是这样的，这里的name只是一个指针，你所理解的改变只是name指针的指向从wanglin改为了wanglin1，但真正的值wanglin和wanglin1是不会改变的。我们说的基础类型的值不会改变，是指wanglin或wanglin1不变，而不是name不变。
对象类型的值可以改变
```
let person = {
    name:'wanglin'
}
person.name = 'wangmumu';   // 改变对象的属性值
person.age = 22;            // 新增一个属性
console.log(person);        // {name: "wangmumu", age: 22}
```
######  2、基本数据类型存储的是值，对象数据类型存储的是地址（指针）
```
let a = 1;
let b = a;
b = 2;
console.log(a);   // 1,a的值不会因b的值的改变而受到影响
 
let c = [];
let d = c;
d.push(1);
console.log(c)   // [1],c的值因d的值的改变而受到影响了
```
可以看到，当我们将一个值赋值给另一个变量时，如果是基本类型，则这个变量不会因另一个变量值的变化而受影响。但如果是对象类型，则会受到影响。其根本原因是，基本数据类型存储的是值，对象数据类型存储的是地址。
假设上例中的c的地址是#001，当我们将c赋值给d时，其实是把c的地址，也就是#001赋值给了d，这时d的地址和c一样都是#001，改变d的同时，c也会受到影响了。

如果我们实际开发中不想受到这个问题的困扰，可以使用浅拷贝来解决这个问题。当然，一旦提到浅拷贝，就会发现浅拷贝的各种问题，这时就要考虑使用深拷贝了。
###### 3.基本数据类型的比较是值的比较，对象数据类型的比较是地址的比较
```
let a = 1,b = 1;
console.log( a == b );  // true
 
let c = [],d = [];
console.log( c == d );  // false
```
可以看到，如果是对象类型，即使是完全相同的值，比较的时候也是false，是因为他们的地址是不同的。由此我们引发出一个思考，如果想比较两个对象类型的值是否相同，我们该怎么办呢？

这里提出一种思路解决，就是封装一个函数来判断两个对象的值是否相等，函数的参数就是这两个对象本身，在函数里把这两个对象的值遍历用来逐一比较。
```
function isObjEqual(o1,o2){
    let props1 = Object.getOwnPropertyNames(o1);
    let props2 = Object.getOwnPropertyNames(o2);
    if (props1.length != props2.length) {
        return false;
    }
    for (let i = 0,max = props1.length; i < max; i++) {
        let propName = props1[i];
        if (o1[propName] !== o2[propName]) {
            return false;
        }
    }
    return true;
}
```
# Q3 谈谈你对”变量提升“的理解
变量提升：函数及变量的声明都将被提升到函数的最顶部；变量可以在使用后声明，也就是变量可以先使用再声明。（变量赋值不会提升，有多个函数声明的时候，是由最后面的函数声明来替代前面的；函数提升的优先级大于变量提升的优先级，即函数提升在变量提升之上）
例子：
```
var name="Bob";
(function(){
    if(typeof name=== 'undefined'){
        name='Jack';
        console.log('Goodbye'+name);
    }else{
        console.log('hello'+name);
    }
})();  //立即执行函数
请问执行后打印出的值是：（A）     
    A. Hello Bob
    B. Goodbye Jack
    C. Hello Jack
    D. Goodbye Bob
```
解释：name为全局定义变量且被赋值，进入else
```
var name="Bob";
(function(){
    if(typeof name=== 'undefined'){
        var name='Jack';//此处增加name声明
        console.log('Goodbye'+name);
    }else{
        console.log('hello'+name);
    }
})();  // D
```

解释： 变量提升，相当于在if判断之前定义name(与外层name不同，属于函数内局部变量) 但在if 中给name 赋值，如下：
```
    var name="Bob";
     (function(){
            var name;
            if(typeof name=== 'undefined'){
                name='Jack';
                console.log('Goodbye'+name);
            }else{
                console.log('hello'+name);
            }
        })();// Goodbye Jack
```
再次修改 
```
 (function(){
           name='Jack';
           if(typeof name=== 'undefined'){
                console.log('Goodbye'+name);
            }else{
                console.log('hello'+name);
            }
    })(); // hello Jack
    console.log("name:"+name);// name:Jack (未使用var,默认声明为全局变量)
```

# Q4 分别指出以下运算的执行结果
```
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>js的3种引入方法</title>
  <script type="text/javascript">
    var result = typeof undefined;
    document.write("typeof undefined = " + result + "<br/>");

    result = typeof true;
    document.write("typeof true = " + result + "<br/>");

    result = typeof 42;
    document.write("typeof 42 = " + result + "<br/>");

    result = typeof "42";
    document.write("typeof '42' = " + result + "<br/>");

    result = typeof { lift: 42 };
    document.write("typeof {lift:42} = " + result + "<br/>");
  </script>
</head>

<body>
</body>

</html>
```
结果如下：
![image.png](https://upload-images.jianshu.io/upload_images/20166506-d5727df7928525a3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)