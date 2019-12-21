document.getElementById('addButton').onclick = function () {
  var inputContent = document.getElementById('input').value;
  if (inputContent) {
    addItem();
  }
  document.getElementById('input').value = '';
};

document.getElementById('input').onkeypress = function () {
  if (event.keyCode === 13) {
    var inputContent = document.getElementById('input').value;
    if (inputContent) {
      addItem();
    }
    document.getElementById('input').value = '';
  }
};

document.getElementById('itemsLink').onclick = function (e) {
  if (e.target && e.target.nodeName.toLowerCase() == "input") {
    var targetStr = e.target.id;
    var targetId = targetStr.charAt(targetStr.length - 1);
    var item = document.getElementById('item-' + targetId);
    if (e.target.checked) {      
      item.style.textDecoration = "line-through";
      item.style.color = "grey";
    } else {
      item.style.textDecoration = "none";
      item.style.color = "black";
    }
  } 
}

document.getElementById('all').onclick = function () {
  var itemsNum = document.getElementById('itemsLink').childNodes.length;
  var index = 0;
  for (var i = 0, len = itemsNum; i < len; i++) {
    var item = document.getElementById('item-' + i);
    item.style.display = "block";
    index++;
    var itemNum = document.getElementById("itemNum-" + i);    
    itemNum.innerHTML = index + ".";
  }
}

document.getElementById('active').onclick = function () {
  var itemslen = document.getElementById('itemsLink').childNodes.length;
  var index = 0;
  for (var i = 0, len = itemslen; i < len; i++) {
    var checkBox = document.getElementById('checkbox-' + i);
    var item = document.getElementById('item-' + i);
    if (checkBox.checked) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
      index++;
    }    
    var itemNum = document.getElementById("itemNum-" + i);    
    itemNum.innerHTML = index + ".";
  }
};

document.getElementById('complete').onclick = function () {
  var itemsNum = document.getElementById('itemsLink').childNodes.length;
  var index = 0;
  for (var i = 0, len = itemsNum; i < len; i++) {
    var checkBox = document.getElementById('checkbox-' + i);
    if (!checkBox.checked) {
      var item = document.getElementById('item-' + i);
      item.style.display = "none";
    } else {
      var item = document.getElementById('item-' + i);
      item.style.display = "block";
      index++;
    }
    var itemNum = document.getElementById("itemNum-" + i);    
    itemNum.innerHTML = index + ".";
  }
};

function addItem() {
  var itemsLink = document.getElementById('itemsLink');
  var childNum = itemsLink.childNodes.length;
  itemsLink.style.listStyle = "none";

  var item = document.createElement('li');
  item.className = "item";
  item.id = "item-" + childNum;

  var itemNum = document.createElement('span');
  itemNum.id = "itemNum-" + childNum;
  itemNum.className = "itemNum";
  itemNum.innerHTML = childNum + 1 + ".";

  var checkBox = document.createElement('input');
  checkBox.type = "checkbox";
  checkBox.id = "checkbox-" + childNum;

  var inputContent = document.getElementById('input').value;
  var itemContent = document.createElement('span');
  itemContent.innerText = inputContent;

  var deleteButton = document.createElement('button');
  deleteButton.id = "delete-" + childNum;
  deleteButton.className = "delete";
  deleteButton.innerText = "X";

  itemsLink.appendChild(item);
  item.appendChild(itemNum);
  item.appendChild(checkBox);
  item.appendChild(itemContent);  
  item.appendChild(deleteButton);
}
