let allTasks = [];
//! Warum Array verwenden?
//! Es ist einfach, Daten zu speichern.
//! Bei der Eingabe neuer Daten können wir leicht herausfinden, ob dieselben Daten vorhanden sind oder nicht.

let total = 0;
let completed = 0;

const newTask = document.querySelector("input");
const list = document.querySelector(".todoList");
const addButton = document.querySelector("button");
const totalTask = document.querySelector("#total");

addButton.addEventListener("click", () => {
  if (!newTask.value) {
    alert("Please enter a task!");
  } else if (allTasks.includes(newTask.value)) {
    alert("You have already added this task ");
    //! hic birsey dönmesini istemiyorsak. devam etsin hic birsey yapmadan diyorsak. sadece return yazariz. bos dursa da olur ama best practise budur..
  } else {
    allTasks.push(newTask.value);
    total += 1;
    list.innerHTML = list.innerHTML + `
    <li><p>${newTask.value}</p> 
    <span class="material-symbols-outlined"> check_circle </span>
    <span class="material-symbols-outlined"> delete </span>
    </li>
    `;
    totalTask.innerText = total
    newTask.value = ""
    newTask.focus()

  }
});

// const addButton = document.querySelector("button")
// let list = document.querySelector(".todoList").innerHTML

addButton.addEventListener("click", () => {
  //   const newLi = document.querySelector("input").value.trim()
  //   console.log(newLi);
  //   console.log(list);
  //   list = list + `<li>${newLi}</li>`
  //   console.log(list);
});

newTask.onkeydown=(key)=>{
    // key.keyCode === 13 && addButton.click()
    key.key === "Enter" && addButton.click()
}