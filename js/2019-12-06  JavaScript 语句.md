[
前端js——键盘事件、获取键盘输入、组合按键执行动作](https://blog.csdn.net/qq_41141657/article/details/88653915
)
## Q1 编程实现，班上期末成绩平均分评级，95及以上为卓越；85及以上且小于95为优秀；75及以上且小于85为一般；60及以上且小于75为及格；其余为不合格；请用适当的语句实现上述描述，打印输出评级文字。
代码：
```
function getGrade(input) {
  var result = "";
  if (input >= 95) {
    result = "卓越";
  } else if (input >= 85 && input < 95) {
    result = "优秀";
  } else if (input >= 75 && input < 85) {
    result = "一般";
  } else if (input >= 60 && input < 75) {
    result = "及格";
  } else if (input < 60) {
    result = "不合格";
  }
  return result;
}
console.log(getGrade(90));
```
## Q2 编程实现，有一简易计算器，最终输出结果是：当运算符是+时，为两值相加；当运算符是-时，为两值相减；当运算符是*时，为两值相乘；当运算符是/时，为两值相除；当运算符是%时，为两值相除的余数；请用适当的语句实现上述描述，结果打印输出，假设两值固定为：var x = 10, y = 8;，运算符变量设为 var operator; 。
```
function toCala(x,y,operator) {
  var result;
  switch (operator) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = x / y;
      break;
    case "%":
      result = x % y;
      break;
    default:
      result = "输入操作符有误，请重新输入";
  }
  return result;
}

console.log(toCala(4,8,"."));
```
## Q3 编程实现，求整数1~100的累加值，但要求跳过所有个位为3的数。
结果是`4570`
```
function getSum() {
  var sum = 0;
  for (var i = 1; i < 101; i++) {
    if (!(i % 10 === 3)) {
      sum += i;
    }
  }
  return sum;
}

console.log(getSum());
```

## Q4 编程实现，打印输出如下效果：
![image.png](https://upload-images.jianshu.io/upload_images/20166506-047b95f8f81ce798.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```
function printStar() {
  var result = '';
  for (var i = 0; i < 6; i++) {
    for (var j = i; j < 6; j++) {
      result += '*';
    }
    result += '\n';
  }
  return result;
}

console.log(printStar());
```
## Q5 编程实现，打印输出 99乘法表，如图：
![image.png](https://upload-images.jianshu.io/upload_images/20166506-3f0c4aa2051a46a8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
function multiplication() {
  var result = '';
  for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {
      var temp = i + "*" + j + "=" + i * j;
      result += temp + ' ';
    }
    result += '\n';
  }
  return result;
}

console.log(multiplication());
```

