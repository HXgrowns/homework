# 分别通过 内部引用 和 外部引用 的方式引入下面一段JavaScript代码。
```
document.write('Hello World');
```
## 内部引用
内部引用包括行内引用，和内部引用，但基本没人用行内引用，就像css一样，都可以行内使用，但是会使代码看起来很杂很乱，不利于维护，当然也存在解析顺序的问题，导致页面加载很慢很乱，用户体验不好。下面列出两种引用的样例：
**行内js：只适用于引用了js的标签**
```
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>js的3种引入方法</title>
</head>

<body>
  <input type="button" value="点击有惊喜" onclick="javascript:document.write('Hello World');" />
</body>

</html>
```
**内部js：script里的程序整个页面都可以用**
```
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>js的3种引入方法</title>
  <script type="text/javascript">
    document.write('Hello World');
  </script>
</head>

<body>
  <h1>这是一段没有意义的文字</h1>
</body>

</html>
```
*注意:*
按照解析嵌入式代码的规则，当浏览器遇到字符串`"</script>"`时，就会认为那是结束的标志。所以我们需要通过转义字符`\`解决
```
<script type="text/javascript">
	function myFunction(argument) {
		alert("<\/script>")
	}
 </script>

```
## 外部引用
和css引入方式类似
```
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>js的3种引入方法</title>
  <script type="text/javascript" src="introduce.js"></script>
</head>

<body>
  <h1>这是一段没有意义的文字</h1>
</body>

</html>
```
*注意：*
把标签放在head下，意味着必须等到全部js代码下载、解析和执行完成以后才开始呈现页面内容（因为浏览器在遇到body标签时才开始呈现页面内容），这对于Js代码很多的页面来说，无疑会造成页面显示的明显延迟，延迟期间页面一片空白。
为了避免这个问题，将所有的javaScript代码放在<body>元素中页面内容的后面。
```
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<div>这里是页面内容，最后放JavaScript代码</div>
	<script type="text/javascript" src="introduce.js"></script>
</body>
</html>
```
# 总结
<script>元素，有6个属性
属性 | 值 | 描述
:---: | :---: | :---:
async | async | 规定异步执行脚本（仅适用于外部脚本）
charset | charset | 规定在外部脚本文件中使用的字符编码
defer | defer | 规定是否对脚本执行进行延迟，直到页面加载为止
type | MIME-type | 指示脚本的MIME类型
src | URL| 规定外部脚本文件的URL

从属性中可以看出，`async`可以异步执行，`defer`可以延时执行，似乎可以解决`<script>`放在`<head>`中的解析顺序的问题，但是他们都不能保证脚本的执行顺序。下面总结一下引入脚本的规则：
- 包含外部文件时，必须将`src`属性指向为外部脚本的路径
- 在不使用`defer`和`async`属性情况下，所有的脚本按照顺序解析执行
- 将js脚本引入放在页面最底部为最佳选择
- 使用`defer`属性脚本立即下载，延后执行
- 使用`async`属性表示当前脚本不比等待其他脚本，不能保证脚本的执行顺序