const select = document.getElementById('goods-list');
const table = document.getElementById('table');

window.onload = function () {
  for (let i of carProducts) {
    var option = document.createElement('option');
    option.value = i.id;
    option.innerText = i.name;
    select.appendChild(option);
  }
}

select.onchange = function () {
  var goodsId = select.value;
  var goods = carProducts[goodsId - 1];
  shoppingGoods(goods);
};

table.addEventListener("click", function (e) {
  if (e.target) {
    var targetStr = e.target.id
    var targetId = targetStr.charAt(targetStr.length - 1);
    var goodsNum = document.getElementById('count-' + targetId);
    var total = document.getElementById('total-' + targetId);

    if (e.target.nodeName.toLowerCase() == "button") {
      var targetType = targetStr.substring(0, targetStr.length - 2);
      if (targetType === 'subtract') {
        if (goodsNum.innerText == 1) {
          var targetRow = document.getElementById('row-' + targetId);
          table.removeChild(targetRow);
        }
        goodsNum.innerText--;
      } else if (targetType === 'add') {
        goodsNum.innerText++;
      }
      var price = document.getElementById('price-' + targetId);
      total.innerText = price.innerText * goodsNum.innerText;
    } else if (e.target.nodeName.toLowerCase() == "input") {
      var checkBox = document.getElementById('checkBox-' + targetId);
      var totalSumNum = document.getElementById('totalSumNum');
      var totalSumPrice = document.getElementById('totalSumPrice');
      if (targetId === '0') {
        var allChild = table.childNodes[1].childNodes;
        for (let index = 2, len = allChild.length; index < len - 2; index++) {
          var row = allChild[index];
          var rowId = row.id.charAt(row.id.length - 1);
          var checkBoxChild = document.getElementById('checkBox-' + rowId);
          var totalSumNum = document.getElementById('totalSumNum');
          var totalSumPrice = document.getElementById('totalSumPrice');
          if (checkBox.checked) {
            if (!checkBoxChild.checked) {
              checkBoxChild.checked = true;
              var goodsNum = document.getElementById('count-' + rowId);
              var total = document.getElementById('total-' + rowId);
              totalSumNum.innerText = parseInt(totalSumNum.innerText) + parseInt(goodsNum.innerText);
              totalSumPrice.innerText = parseInt(totalSumPrice.innerText) + parseInt(total.innerText);
            }
          } else {
            checkBoxChild.checked = false;
            totalSumNum.innerText = 0;
            totalSumPrice.innerText = 0;
          }
        }
      } else {
        if (checkBox.checked) {
          totalSumNum.innerText = parseInt(totalSumNum.innerText) + parseInt(goodsNum.innerText);
          totalSumPrice.innerText = parseInt(totalSumPrice.innerText) + parseInt(total.innerText);
        } else {
          totalSumNum.innerText = parseInt(totalSumNum.innerText) - parseInt(goodsNum.innerText);
          totalSumPrice.innerText = parseInt(totalSumPrice.innerText) - parseInt(total.innerText);
        }
      }
    }
  }
});

function shoppingGoods(goods) {
  var table = document.getElementById('table');
  var tr = document.createElement('tr');

  var tdSelect = document.createElement('td');
  var checkBox = document.createElement('input');
  checkBox.id = 'checkBox-' + goods.id;
  checkBox.type = 'checkbox';
  tdSelect.appendChild(checkBox);

  var tdName = document.createElement('td');
  tdName.innerText = goods.name;

  var tdPrice = document.createElement('td');
  tdPrice.id = 'price-' + goods.id;
  tdPrice.innerText = goods.price;

  var tdNum = document.createElement('td');
  var subtract = document.createElement('button');
  subtract.id = 'subtract-' + goods.id;
  subtract.innerText = '-';
  subtract.className = 'button';
  var num = document.createElement('span');
  num.id = 'count-' + goods.id;
  num.innerText = goods.count;
  num.className = 'count';
  var add = document.createElement('button');
  add.id = 'add-' + goods.id;
  add.innerText = '+';
  add.className = 'button';
  tdNum.appendChild(subtract);
  tdNum.appendChild(num);
  tdNum.appendChild(add);

  var tdTotal = document.createElement('td');
  tdTotal.id = "total-" + goods.id;
  tdTotal.innerText = goods.price * goods.count;

  var allChild = table.childNodes;
  len = allChild.length
  tr = table.insertRow(len - 1);  
  tr.id = 'row-' + goods.id;
  tr.appendChild(tdSelect);
  tr.appendChild(tdName);
  tr.appendChild(tdPrice);
  tr.appendChild(tdNum);
  tr.appendChild(tdTotal);
}