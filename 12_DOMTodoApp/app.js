let allTasks = [];
//! Warum Array verwenden?
//! Es ist einfach, Daten zu speichern.
//! Bei der Eingabe neuer Daten können wir leicht herausfinden, ob dieselben Daten vorhanden sind oder nicht.

let total = 0;
let completed = 0;

//! const newTask = document.querySelector("input").value     //Es geht nicht so, weil die value noch nicht vorhanden ist.
const newTask = document.querySelector("input");
const list = document.querySelector(".todoList");
const addButton = document.querySelector("button");
const totalTask = document.querySelector("#total");
const completedTask = document.querySelector("#completed")

addButton.addEventListener("click", () => {
  if (!newTask.value.trim()) {
    alert("Please enter a task!");
  } else if (allTasks.includes(newTask.value.trim())) {
    alert("You have already added this task ");
    //! return          //hic birsey yapmadan devam et.
  } else {
    allTasks.push(newTask.value.trim());
    total += 1;
    list.innerHTML =
      `
    <li class="test"><p>${newTask.value}</p> 
    <span class="material-symbols-outlined" id="check"> check_circle </span>
    <span class="material-symbols-outlined" id="del"> delete </span>
    </li>
    ` + list.innerHTML;
    totalTask.innerText = total;
    newTask.value = "";
    newTask.focus();
  }

  checkClick();

  deleteClick();
  //! functionlari add butonuna tikladigimizda tanitiyoruz burada. eger disarda tanitirsak. henüz add e basilmamis olur. ve ortada ne check iconu nede delete iconu olur. olmayan birseyide cagirip tanitamayiz. 
});

//!#########################################################################
//!############################ DELETE #####################################
const deleteClick = () => {
  //! Bütün delete iconlarina ulas.
  document.querySelectorAll("#del").forEach((item) => {
    item.onclick = () => {
      //? bastigim iconun p elementine ulasma yollari....
      // console.log(item.parentElement.querySelector("p").textContent);
      // console.log(item.closest("li")); closest() yukari yönlü, parente dogru hareket eder.
      // console.log(item.closest("li").querySelector("p").textContent);
      //? remove from list
      allTasks = allTasks.filter(
        (task) => task != item.closest("li").querySelector("p").textContent
      ); 
      //! her taski dolas. delete iconuna bastigim task ile esit degilse filtrele. esit ise onu görmezden geliyor yani siliyor yeni listede bulunmayacak
      //? remove from screen
      item.parentElement.remove();

      total--;
      totalTask.textContent = total;
        //! if i sundan dolayi yaziyoruz. eger silinen task checked edilmis task ise completed da eksilme olsun diye
      if (item.parentElement.classList.contains("checked")) {
        completed--
        completedTask.innerText = completed;
      }
    };
  });
};


//!#########################################################################
//!############################# CHECK #################################
//!  With ForEach()
const checkClick=()=>{
  document.querySelectorAll("#check").forEach((item)=>{
  item.onclick=()=>{
        if (!item.parentElement.classList.contains("checked")) {
          item.parentElement.classList.add("checked")
          completed++
        }else{
         item.parentElement.classList.remove("checked")
          completed--
        }
        completedTask.innerText = completed
      }
  }
)
}
//!#########################################################################

//!#### ENTER #####
newTask.onkeydown = (key) => {
  // key.keyCode === 13 && addButton.click()    //! 2.way
  key.key === "Enter" && addButton.click();
};

//!#########################################################################
//!#########################################################################
//!#########################################################################

//!############################# OTHER WAYS ################################
//? Target  1.Way to change directly in style 
//! target nereye tikladigimi direk anlar.
//todo target kullanacaksam parentElementde onclick islemi olusturmaliyim list.onclick gibi
// const checkClick = () => {
//   list.onclick = (e) => {
//     if (e.target.parentElement.querySelector("p").style.textDecoration == "line-through") {
//       e.target.parentElement.querySelector("p").style.textDecoration = "none"
//     }else
//     e.target.parentElement.querySelector("p").style.textDecoration =
//       "line-through";
//   };
// };

//? target 2.way  to change or add in className or classList
//todo className üzerinde oynama yaparak... 
//todo bu kullanimda click yapilinca className degisecek.
//todo tek bir className üzerinde calisir ve click isleminde bunu degistirirsem mevcut olan stylinglerde degisebilir. o yuzden ClassList ile calisip birden fazla class name kullanmaliyim...
//! burada bir PROBLEM var. cöp kutusuna basinca li ye de basmisim gibi algiliyor... bu yuzden hem checkClick() hem deleteClick()calismis oluyor. sonuc olarak completed artiyor....
//! TARGET KULLANMA BUG CIKTI 
//! BUNUN YERINE FOREACH KULLAN.
// const checkClick=()=>{
//   list.onclick=(e)=>{
//     // console.log(e.target.parentElement.className);
//     if (!e.target.parentElement.classList.contains("checked")) {
//       e.target.parentElement.classList.add("checked")
//       completed++
//     }else{
//       e.target.parentElement.classList.remove("checked")
//       completed--
//     } 
//     document.querySelector("#completed").innerText = completed
//   }
  
// }

//!#####################################################################
//todo ~~~~~~~~~ to reach the parentElement 1.Way (this) ~~~~~~~~~~~~~~~
//! functionu inline da cagiriyoruz  
//onclick="checkClick(this)"
//! this sayesinde parentElemente ulastik...
// const checkClick=(icon)=>{
//   let listP = icon.parentElement;
//   console.log(listP);
// }
//!#####################################################################
//!#####################################################################
