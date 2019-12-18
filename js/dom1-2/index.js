var xIndex;
var yIndex;
var isDrop = false;
function mouseDown(e) {
  ract1 = document.getElementById('ract');
  var e = e || window.event;
  xIndex = e.clientX - ract1.offsetLeft;
  yIndex = e.clientY - ract1.offsetTop;
  isDrop = true;
}

function mouseMove(e) {
  if (isDrop) {
    var e = e || window.event;
    var moveX = e.clientX - xIndex;
    var moveY = e.clientY - yIndex;

    var maxX = 1000 - 80;
    var maxY = 800 - 80;
    if (moveX < 0) {
      moveX = 0;
    } else if (moveX > maxX) {
      moveX = maxX;
    }
    if (moveY < 0) {
      moveY = 0;
    } else if (moveY > maxY) {
      moveY = maxY;
    }

    ract2 = document.getElementById('fixed');
    x2 = ract2.offsetLeft;
    y2 = ract2.offsetTop;
    if (moveX <= x2 + 80 && moveX >= x2-80 && moveY <= y2 + 80 && moveY >= y2-80) {
      ract2.style.backgroundColor = 'blue';
    } else {
      ract2.style.backgroundColor = 'yellow';
    }
    ract1.style.left = moveX + 'px';
    ract1.style.top = moveY + 'px';
  }
  return;
}

function mouseUp() {
  isDrop = false;
}