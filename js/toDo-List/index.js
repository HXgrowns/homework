function inputItem(name) {
  var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  var id = tasks.length;
  tasks.push({ "id": id, "name": name, "status": false });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  var itemsLink = document.getElementById('itemsLink');
  var item = `
  <li class="item">
    <input id="id-${id}" type="checkbox"/>
    <span>${name}</span>
  </li>
  `;
  itemsLink.innerHTML += item;
  refresh(1);
}

function refresh(t) {
  var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  var itemsLink = document.getElementById('itemsLink');
  itemsLink.innerHTML = "";

  for (var task of tasks) {
    if ((t == 2 && task.status) || (t == 3 && !task.status)) {
      continue
    }

    var checked = task.status ? "checked" : "";
    var item = `
    <li class="item">
      <input id="id-${task.id}" ${checked} type="checkbox"/>
      <span>${task.name}</span>
    </li>
    `;
    itemsLink.innerHTML += item;

    var node = document.getElementById(`id-${task.id}`).parentNode;
    if (task.status) {
      node.style.textDecoration = "line-through";
      node.style.color = "grey";
    } else {
      node.style.textDecoration = "none";
      node.style.color = "black";
    }
  }
}

function insertItem() {
  var inputContent = document.getElementById('input').value;
  if (inputContent) {
    inputItem(inputContent);
  }
  document.getElementById('input').value = '';
}

function enterpress() {
  if (event.keyCode === 13) {
    insertItem();
  }
};

document.getElementById('itemsLink').onclick = function (e) {
  if (e.target && e.target.nodeName.toLowerCase() == "input") {
    var id = e.target.id.substring(3);
    var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks[id].status = e.target.checked;
    localStorage.setItem("tasks", JSON.stringify(tasks));

    var item = e.target.parentNode;
    if (e.target.checked) {
      item.style.textDecoration = "line-through";
      item.style.color = "grey";
    } else {
      item.style.textDecoration = "none";
      item.style.color = "black";
    }
  }
}

window.onload = function () {
  refresh(1);
};

