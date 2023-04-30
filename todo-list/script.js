const list = document.getElementById("list");
const newItem = document.getElementById("todoInputBox");

function addList() {
  const text = newItem.value;
  if (text !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" onclick="doneItem(this)" id="mcb">
      <span>${text}</span>
      <button class="editDeleteBtn" onclick="editList(this)">Edit</button>
      <button class="editDeleteBtn" onclick="deleteList(this)">Delete</button>
    `;
    list.insertBefore(li, list.firstChild);
    newItem.value = "";
  } else {
    alert("Please add an item first");
  }
  // const howMuch = list.childElementCount;
  // const notDone = document.querySelector("#undone");
  // notDone.innerText = howMuch;
}

function editList(button) {
  const li = button.parentNode;
  const span = li.querySelector("span");
  const text = span.innerText;
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("value", text);
  li.insertBefore(input, span);
  li.removeChild(span);
  button.innerText = "Save";
  button.onclick = () => saveList(li, input);
}

function saveList(li, input) {
  const text = input.value;
  const span = document.createElement("span");
  span.innerText = text;
  li.insertBefore(span, input);
  li.removeChild(input);
  const button = li.querySelector("button:nth-of-type(1)");
  button.innerText = "Edit";
  button.onclick = () => editList(button);
}

function deleteList(button) {
  const li = button.parentNode;
  list.removeChild(li);
}

function doneItem(checkbox) {
  const li = checkbox.parentNode;
  const span = li.querySelector("span");
  const btn = li.querySelector("button:nth-of-type(1)");
  const btn1 = li.querySelector("button:nth-of-type(2)");
  const finishedList = document.querySelector("#finishedList");
  if (span.style.textDecoration !== "line-through") {
    span.style.textDecoration = "line-through";
    span.style.fontStyle = "italic";
    li.style.backgroundColor = "#414a4c";
    li.style.opacity = "0.5";
    btn.style.display = "none";
    btn1.style.display = "none";
    finishedList.appendChild(li);
  } else {
    span.style.textDecoration = "none";
    span.style.fontStyle = "normal";
    li.style.backgroundColor = "transparent";
    li.style.opacity = "1";
    btn.style.display = "block";
    btn1.style.display = "block";
    list.appendChild(li);
  }
  const donePo = document.querySelector("#done");
  const allCheckBox = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  ).length;
  donePo.innerText = allCheckBox;
}

// Get the username from landing page to main page
const params = new URLSearchParams(location.search);
const userName = params.get("username");
const mainTitle = document.querySelector("#mainTitle");

const userH1 = document.querySelector("#user");
userH1.innerHTML = `${userName ? userName : "Guest"}`;
mainTitle.innerText = `${userName ? userName : "Guest"}'s to do list`;
