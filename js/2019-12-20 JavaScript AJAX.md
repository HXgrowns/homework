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

答案:如下，没有测试，请指导！

```
var ajax = new XMLHttpRequest();
ajax.request = function (url, method, myCallback) {
  ajax.open(method, url, [async, user, password]);
  try {
    ajax.send();
    if (ajax.status !== 200) {
      console.log(`Error ${ajax.status}:${ajax.statusText}`);
    } else {
      myCallback();
    }
    
  } catch (err) {
    console.log('Request failed');
  }  
}

ajax.request = function (url, method, myCallback, text) {
  ajax.open(method, url, [async, user, password]);
  try {
    ajax.send(text);
    if (ajax.status !== 200) {
      console.log(`Error ${ajax.status}:${ajax.statusText}`);
    } else {
      myCallback();
    }
    
  } catch (err) {
    console.log('Request failed');
  }  
}
```

### Q3 造成跨域的原因有哪些？

跨域：指的是浏览器不能执行其他网站的脚本。他是由浏览器的同源策略造成的，是浏览器对JavaScript施加的安全限制。

所以造成跨域的原因是：

协议、端口、和域名有任意一个不同就会造成跨域。

### Q4 有哪些办法可以解决跨域？

- Jsonp 需要目标服务器配合一个callback函数（只支持get请求）

  ```
  JSONP(JSON with Padding)是一个非官方的协议，它允许在服务器端集成Script tags返回至客户端，通过javascript callback的形式实现跨域访问（这仅仅是JSONP简单的实现形式）。
  
  Json+padding（内填充），顾名思义，就是把JSON填充到一个盒子里，它的基本思想是，网页通过添加一个<script>元素，向服务器请求JSON数据，这种做法不受同源政策限制；服务器收到请求后，将数据放在一个指定名字的回调函数里传回来。
  首先，网页动态插入<script>元素，由它向跨源网址发出请求。
  ```

- 代理

  例如www.123.com/index.html需要调用www.456.com/server.php，可以写一个接口www.123.com/server.php，由这个接口在后端去调用www.456.com/server.php并拿到返回值，然后再返回给index.html，这就是一个代理的模式。相当于绕过了浏览器端，自然就不存在跨域问题。

- PHP端修改header(XHR2方式)

  在php接口脚本中加入以下两句即可：

  ```
  header('Access-Control-Allow-Origin:*');//允许所有来源访问
  ```

  ```
  header('Access-Control-Allow-Method:POST,GET');//允许访问的方式
  ```

- iframe

  在iframe和主页里都不断地检测hashtag有没有变化，一旦有变化，就做出相应的改变。

  ```
  setInterval(function() {
      var hashVal = window.location.hash.substr(1);
      document.body.style.backgroundColor = hashVal;
  }, 1000); 
  ```

  但是这样需要不断的去检测hashtag是否改变，效率有点低，如果能通过原生的监听来实现，就会更加高效和优雅。这里就涉及到另外一个iframe特性：可以设置其他iframe的大小，即使是不同域的。而页面的resize事件是可以监听的，所以就有了下面这个模型。

  主页面先把消息附加到hashtag，然后改变一个隐藏的（或者页面外）iframe的size。这个iframe会监听resize事件，同时捕获到hashtag。捕获到hashtag后（也就是所需的数据），再对hashtag做进一步的处理。处理完后把数据传到主页内的一个iframe，或者直接操作该iframe。这样就可以优雅的完成了跨域操作。

  ```
  <!DOCTYPE html>
  <html>
      <head>
          <meta http-equiv="content-type" content="text/html;charset=utf-8" />
          <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
          <script>
              $(function(){
                  $('#btn').click(function(){
                      $proxy = $('#proxy');
                      var src = $proxy.attr('src').split('#')[0];
                      $proxy.attr('src', src + '#' + $('input[name=it]').val());
                      $proxy.css('width', $proxy.width()+1+'px');
                  });
              });
          </script>
      </head>
      <body>
  
          <input type="text" name="it"> <button id="btn">Translate</button>
          <p></p>
          <iframe src="http://demo.leezhong.com/crossdomain/proxy.html" name="proxy" id="proxy" style="position:absolute; top:-10px; width:1px; height:1px"></iframe>
          <iframe src="http://demo.leezhong.com/crossdomain/show.html" name="show" id="show" style="width:60%;height:300px"></iframe>
      </body>
  </html>
  ```

  

- 通过window.name实现跨域

  例如：

  有三个页面：

  - a.com/app.html：应用页面。

  - a.com/proxy.html：代理文件，一般是一个没有任何内容的html文件，需要和应用页面在同一域下。

  - b.com/data.html：应用页面需要获取数据的页面，可称为数据页面。

    **实现起来基本步骤如下：**

    1、在应用页面（a.com/app.html）中创建一个iframe，把其src指向数据页面（b.com/data.html）。
    数据页面会把数据附加到这个iframe的window.name上，data.html代码如下：

    ```
    <script type="text/javascript">
        window.name = 'I was there!';    // 这里是要传输的数据，大小一般为2M，IE和firefox下可以大至32M左右
                                         // 数据格式可以自定义，如json、字符串
    </script>
    ```

     2、在应用页面（a.com/app.html）中监听iframe的onload事件，在此事件中设置这个iframe的src指向本地域的代理文件（代理文件和应用页面在同一域下，所以可以相互通信）。app.html部分代码如下：

    ```
    <script type="text/javascript">
        var state = 0, 
        iframe = document.createElement('iframe'),
        loadfn = function() {
            if (state === 1) {
                var data = iframe.contentWindow.name;    // 读取数据
                alert(data);    //弹出'I was there!'
            } else if (state === 0) {
                state = 1;
                iframe.contentWindow.location = "http://a.com/proxy.html";    // 设置的代理文件
            }  
        };
        iframe.src = 'http://b.com/data.html';
        if (iframe.attachEvent) {
            iframe.attachEvent('onload', loadfn);
        } else {
            iframe.onload  = loadfn;
        }
        document.body.appendChild(iframe);
    </script>
    ```

    3、获取数据以后销毁这个iframe，释放内存；这也保证了安全（不被其他域frame js访问）。

    ```
    <script type="text/javascript">
        iframe.contentWindow.document.write('');
        iframe.contentWindow.close();
        document.body.removeChild(iframe);
    </script>
    ```

    总结起来即：iframe的src属性由外域转向本地域，跨域数据即由iframe的window.name从外域传递到本地域。这个就巧妙地绕过了浏览器的跨域访问限制，但同时它又是安全操作。

- HTML5中最炫酷的API之一(window.postMessage)

  就是 [跨文档消息传输Cross Document Messaging](http://www.whatwg.org/specs/web-apps/current-work/#crossDocumentMessages)。高级浏览器Internet Explorer 8+, chrome，Firefox , Opera  和 Safari 都将支持这个功能。这个功能实现也非常简单主要包括接受信息的”message”事件和发送消息的”postMessage”方法。

### Q5 编程实现：有一个方法，可以避免每次请求重复去写创建 XHR 的整个过程，请求方法现只考虑 `POST` 和 `GET`，要求默认请求方法是 `GET`，如下：

```js
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
var request = function (options) {
  // code this here
  let xhr = new XMLHttpRequest();
  xhr.open(options.method || "GET", options.url);
  try {
    xhr.send(options.data);
    xhr.onload = function () {
      if (xhr.status != 200) {
        options.fail(xhr.statusText);
      } else {
        options.success(xhr.responseText);
      }
    }
  } catch (err) {
    options.fail(err);
  }
}
```

