### Q1 总结 Ajax 请求共有多少种回调呢？

共有8种，分别如下：

onSuccess: 加载成功

onFailure:加载失败

onUninitialized: 未初始化

onLoading：正在加载

onLoaded：加载完成

onInteractive：正在交互

onComplete：完成图像加载

onException：异常

### Q2 编程实现，创建一个名为 ajax 的 XHR 对象，其示例用法如下：

```
function myCallback(xhr) { 
   alert(xhr.responseText); 
 }
 ajax.request(“somefile.txt”, ”get”, myCallback);
 ajax.request(“script.php”, ”post”, myCallback, ”first=John&last=Smith”);
```

### Q3 造成跨域的原因有哪些？

协议、端口、和域名有任意一个不同就会造成跨域。

### Q4 有哪些办法可以解决跨域？

- Jsonp 需要目标服务器配合一个callback函数

  ```
  JSONP(JSON with Padding)是一个非官方的协议，它允许在服务器端集成Script tags返回至客户端，通过javascript callback的形式实现跨域访问（这仅仅是JSONP简单的实现形式）。
  
  Json+padding（内填充），顾名思义，就是把JSON填充到一个盒子里，它的基本思想是，网页通过添加一个<script>元素，向服务器请求JSON数据，这种做法不受同源政策限制；服务器收到请求后，将数据放在一个指定名字的回调函数里传回来。
  首先，网页动态插入<script>元素，由它向跨源网址发出请求。
  ```

- 通过修改document.domain来跨子域

### Q5 编程实现：有一个方法，可以避免每次请求重复去写创建 XHR 的整个过程，请求方法现只考虑 `POST` 和 `GET`，要求默认请求方法是 `GET`，如下：

```
/**
options = {
  url: "",
  method: "",
  headers: {},   // 传给
  data: "",     // 传给服务器的参数
  success: function(result) {},  // 请求成功后调用此方法
  fail: function(error) {}    // 请求失败或出错后调用此方法
}
**/
var request = function(options) {
   // code this here
}
```

