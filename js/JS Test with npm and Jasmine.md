# JS Test with npm and Jasmine

Write test before you start coding for feature. Test first will help you understand the task.

For beginners like me, we used **Jasmine** to run test.

Steps:

1. npm installation
2. Jasmine installation
3. test.js
4. module.exports = functionName; in your main js documents.

## npm

> NPM（node package manager)，通常称为node包管理器，主要功能就是管理node包，包括：安装、卸载、更新、查看、搜索、发布等。NPM是基于couchdb一个数据库，详细记录了每个包的信息（作者、版本、依赖、授权信息等）。它是世界上最大的软件注册表，每星期大约有 30 亿次的下载量，包含超过 600000 个 *包（package）* （即，代码模块）。来自各大洲的开源软件开发者使用 npm 互相分享和借鉴。包的结构使您能够轻松跟踪依赖项和版本。

1. `npm -v` 查看版本号，输出了版本号说明npm可用。

2. 新建一个目录作为我们的项目目录。
3. 在新目录下面`npm init` 设置参数，生成package.json文件

## Jasmine

> Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.

上面装完npm之后，就可以安装[Jasmine](https://jasmine.github.io/)了。

4. Add Jasmine to your package.json

```shell
npm install --save-dev jasmine
```

5. initialize Jasmine

```shell
node node_modules/jasmine/bin/jasmine init
```

6. Set jasmine as your test script in your package.json。打开package.json，手动修改里面script那一行的内容：

```js
"scripts": { "test": "jasmine" }
```

7.  在保证你的测试写好之后，可以Run your tests

```shell
npm test //后接测试文档的path
```

## 测试文件的书写

1. 首先函数文件要将主函数（接口函数）输出，在code末尾，这样才能让测试文件接收到：

```js
module.exports = myFunctionName;
```

2. 测试文件则要在开头require

```js
var myFunctionName = require("../file.js"); //括号里为函数文件的路径
```

3. 测试内容

```js
describe("add funtion for two numbers", function () {}); //function里面放各个测试用例
```

比如：

```js
describe("add funtion for two numbers", function () {
  var a = 1;
  var b = 2;
  var sum = 3;

  it("两个整数相加", function () {
    var result = add(a, b);
    expect(result).toEqual(sum);
  });
  
  it("两个浮点数相加", function () {
    var result = add(1.1, 2.1);
    expect(result).toEqual(sum2);
  });
});
```



