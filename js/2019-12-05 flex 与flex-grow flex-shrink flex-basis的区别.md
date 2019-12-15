对于下面的html布局做下面几种测试
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link type="text/css" rel="stylesheet" href="index.css">
    <title>块级元素</title>
</head>
<body>
<div class="main">
    <div class="top box">1</div>
    <div class="centre box">2</div>
    <div class="bottom box">3</div>
</div>
<span>Hello World！</span>
</body>
</html>
```
###### 1、设置flex 为1:2:1
```
.box {
  width: 200px;
  height: 200px;
}

.top {
  flex: 1;
  flex-grow: 1;
  flex-basis: 0%;
  background-color: red;
}

.centre {
  flex: 2;
  float: left;
  background-color: blue;
}

.bottom {
  flex: 1;
  flex-basis: 0%;
  background-color: aqua;
}

.main {
  display: flex;
  align-items: flex-end;
}
```
![image.png](https://upload-images.jianshu.io/upload_images/20166506-e9c80925bea0ca5e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/20166506-c9da02aab650b9d4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
由图中看出区域划分是1:2:1的关系
###### 2、设置flex-grow 为1:2:1
```
.box {
  width: 200px;
  height: 200px;
}

.top {
  flex-grow: 1;
  background-color: red;
}

.centre {
  flex-grow: 2;
  float: left;
  background-color: blue;
}

.bottom {
  flex-grow: 1;
  background-color: aqua;
}

.main {
  display: flex;
  align-items: flex-end;
}
```
![image.png](https://upload-images.jianshu.io/upload_images/20166506-2b8e58b6914b0170.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/20166506-aa4ef5f37262f552.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/20166506-bc540e30379f9cfd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
图出看出其比例为总的宽度-各自的宽度之和再减去字体的大小之后进行的等比例分布
（1536-200*3-16）/4=230
第一块的宽：200+230=430
第二块的宽：200+460=660
**为什么会出现这个情况呢？**
当 flex 取值为一个非负数字，则该数字为 flex-grow 值，flex-shrink 取 1，flex-basis 取 0%，所以flex-grow的值时按剩余的空间进行比例分割的，而flex-shrink和flex-basis 的值会对比例进行影响。
下面再看：
###### 3、设置flex-grow 为1:2:1  flex-shrink全设为1
```
.box {
  width: 200px;
  height: 200px;
}

.top {
  flex-grow: 1;
  flex-shrink: 1;
  background-color: red;
}

.centre {
  flex-grow: 2;
  flex-shrink: 1;
  float: left;
  background-color: blue;
}

.bottom {
  flex-grow: 1;
  flex-shrink: 1;
  background-color: aqua;
}

.main {
  display: flex;
  align-items: flex-end;
}
```
![image.png](https://upload-images.jianshu.io/upload_images/20166506-6b5d9f3ef1672983.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/20166506-a01dbd98487e2cee.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
由图可知，和没加一样的效果，所以应该是flex-basis设为0%造成的影响。
下面再改
###### 4、设置flex-grow 为1:2:1  flex-basis全设为0%
```
.box {
  width: 200px;
  height: 200px;
}

.top {
  flex-grow: 1;
  flex-basis: 0%;
  background-color: red;
}

.centre {
  flex-grow: 2;
  flex-basis: 0%;
  float: left;
  background-color: blue;
}

.bottom {
  flex-grow: 1;
  flex-basis: 0%;
  background-color: aqua;
}

.main {
  display: flex;
  align-items: flex-end;
}
```
![image.png](https://upload-images.jianshu.io/upload_images/20166506-1a50126eba5ebd56.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/20166506-9844c643332d5bea.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
由图可以看出已经和flex设为1:2:1一样的结果了，查了一下原因：flex-basis  ，basis英文意思是<主要成分>，所以他和width放在一起时,肯定把width干掉，basis遇到width时就会说我才是最主要的成分，你是次要成分，所以见到我的时候你要靠边站。
也就是说设置了flex-basis，width就会失效，比例就会按设置的进行排布
那么我们只设置flex-basis会怎样呢？
```
.box {
  width: 200px;
  height: 200px;
}

.top {
  flex-basis: 25%;
  background-color: red;
}

.centre {
  flex-basis: 50%;
  float: left;
  background-color: blue;
}

.bottom {
  flex-basis: 25%;
  background-color: aqua;
}

.main {
  display: flex;
  align-items: flex-end;
}
```
![image.png](https://upload-images.jianshu.io/upload_images/20166506-37662d035daf0b02.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
图片的尺寸是380，和flex设为1是一样的效果。
###### 总结
- flex-grow 是对剩余空间的一个比例排布，减去的内容包括字体大小
- flex-basis 使width失效，所以其百分比也可以设置比例但是需要计算，比较麻烦
- flex-shrink  shrink英文意思是<收缩，>，这就代表当父元素的宽度小于子元素宽度之和时，并且超出了父元素的宽度，这时，flex-shrink就会说外面的世界太苦了，我还是回到父亲的怀抱中去吧！因此，flex-shrink就会按照一定的比例进行收缩（[其他人测试的结果]([https://blog.csdn.net/m0_37058714/article/details/80765562](https://blog.csdn.net/m0_37058714/article/details/80765562)
)）
- 所以用flex设置比例布局比较简便快捷

flex是flex-grow、flex-shrink、flex-basis的简写，但设置的值得顺序不是固定的，也就说不会像margin简写的顺序上右下左一样，flex的顺序跟值的类型有关。
###### flex取值为 none，则计算值为 0 0 auto
```

.item {flex: none;}
.item {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
```
###### 当 flex取值为 auto，则计算值为 1 1 auto
```
.item {flex: auto;}
.item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
}
```
###### 当 flex 取值为一个非负数字，则该数字为 flex-grow 值，flex-shrink 取 1，flex-basis 取 0%
```
.item {flex: 1;}

.item {flex-grow: 1;    flex-shrink: 1;    flex-basis: 0%;}
```
###### 当 flex 取值为一个长度或百分比，则视为 flex-basis 值，flex-grow 取 1，flex-shrink取 1，有如下等同情况（注意 0% 是一个百分比而不是一个非负数字）
```
.item-1 {flex: 0%;}
.item-1 { flex-grow: 1;    flex-shrink: 1;    flex-basis: 0%;}
.item-2 {flex: 24px;}
.item-2 { flex-grow: 1;    flex-shrink: 1;    flex-basis: 24px;}
```
###### 当 flex取值为两个非负数字，则分别视为 flex-grow和 flex-shrink的值，flex-basis取 0%，
```
.item {flex: 2 3;}
.item { flex-grow: 2;    flex-shrink: 3;    flex-basis: 0%;}
当 flex取值为一个非负数字和一个长度或百分比，则分别视为 flex-grow和 flex-basis的值，flex-shrink取 1，如下是等同的：
.item {flex: 2333 3222px;}
.item {    flex-grow: 2333;    flex-shrink: 1;    flex-basis: 3222px;}
```