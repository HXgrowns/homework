const select = document.getElementById('goods-list');
const table = document.getElementById('table');

var data = carProducts;

window.onload = function () {
  var option = "<option value='-1'>==请选择商品==</option>";
  for (let i of data) {
    option += `<option value="${i.id}">${i.name}</option>`;
  }
  select.innerHTML = option;
}

function shoppingGoods(goods) {
  var tr = table.insertRow(table.rows.length - 1);
  var row = ` 
  <tr> 
    <td>
      <input type="checkbox" id="checkBox-${goods.id}" onclick="selectedRow(${goods.id})"/>
    </td>
    <td>${goods.name}</td>
    <td id="price-${goods.id}">${goods.price}</td>
    <td>
      <button id="substract${goods.id}" class="button" onclick="substract(${goods.id})">-</button>
      <span id="count-${goods.id}" class="count">${goods.count}</span>
      <button id="add${goods.id}" class="button" onclick="add(${goods.id})">+</button>
    </td>
    <td><span id="total-${goods.id}">${goods.price * goods.count}</span></td>
  </tr>
  `;
  tr.id = "row-" + goods.id;
  tr.innerHTML += row;
}

function selectedDroplist() {
  var goodsId = select.value;
  var goods = data[goodsId];
  if (goods.count <= 1) {
    goods.count = 1;
    shoppingGoods(goods);
  } else {
    var goodsNum = document.getElementById('count-' + goodsId);
    goods.count++;
    goodsNum.innerText = goods.count;
  }
};

function selectedRow(targetId) {
  var checkBox = document.getElementById('checkBox-' + targetId);
  var totalSumPrice = document.getElementById('totalSumPrice');
  var totalSumNum = document.getElementById('totalSumNum');
  var totalPrice = document.getElementById('total-' + targetId);
  var goodsNum = document.getElementById('count-' + targetId);
  if (checkBox.checked) {
    totalSumNum.innerText = parseFloat(totalSumNum.innerText) + parseFloat(goodsNum.innerText);
    totalSumPrice.innerText = parseFloat(totalSumPrice.innerText) + parseFloat(totalPrice.innerText);
  } else {
    totalSumNum.innerText = parseFloat(totalSumNum.innerText) - parseFloat(goodsNum.innerText);
    totalSumPrice.innerText = parseFloat(totalSumPrice.innerText) - parseFloat(totalPrice.innerText);
  }
}

function selectAll() {
  var checkBoxAll = document.getElementById('checkBox-' + 0);
  var allChild = table.childNodes[1].childNodes;
  for (let index = 4, len = allChild.length; index < len - 2; index++) {
    var row = allChild[index];
    var rowId = row.id.charAt(row.id.length - 1);
    var checkBox = document.getElementById('checkBox-' + rowId);
    if (checkBoxAll.checked) {
      if (!checkBox.checked) {
        checkBox.checked = true;
        selectedRow(rowId);
      }
    } else {
      if (checkBox.checked) {
        checkBox.checked = false;
        selectedRow(rowId);
      }
    }
  }
}


function substract(targetId) {
  var goodsNum = document.getElementById('count-' + targetId);
  if (goodsNum.innerText === '1') {
    var targetRow = document.getElementById('row-' + targetId);
    var tbody = targetRow.parentNode;
    tbody.removeChild(targetRow);
  }
  data[targetId].count--;
  goodsNum.innerText = data[targetId].count;
  everSum(targetId);
}

function add(targetId) {
  var goodsNum = document.getElementById('count-' + targetId);
  data[targetId].count++;
  goodsNum.innerText = data[targetId].count;
  everSum(targetId);
}

function everSum(targetId) {
  var sumPrice = document.getElementById('total-' + targetId);
  sumPrice.innerText = data[targetId].count * data[targetId].price;
}