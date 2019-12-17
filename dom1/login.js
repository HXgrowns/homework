function login() {
  var username = document.getElementById('user').value;
  var password = document.getElementById('password').value;
  
  if (username === '123' && password === '123') {
    alert("登录成功");
  } else {
    alert("用户名或密码有误");
    document.getElementById('password').value = null;
  }
}
