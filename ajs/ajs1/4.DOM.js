//yeni element oluşturma

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn  btn-danger";
newLink.href = "https://www.google.com";
newLink.target = "_blank";

newLink.appendChild(document.createTextNode("farklı sayfaya git"));
cardbody.appendChild(newLink);

console.log(newLink);


//dinamik element silme

const todolist = document.querySelectorAll("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");

//remove metodu
todos[0].remove();


console.log(todolist);
console.log(todos);


//REPLACE   = elementleri değiştirme

const cardbody1 = document.querySelectorAll(".card-body")[1];

//<h5 class="card-tittle" id="tasks-tittle">Todolar</h5>
const newElement = document.createElement("h2");

newElement.className = "card-tittle";
newElement.id = "tasks-tittle";
newElement.textContent = "yeni baslik";

const oldElement = document.querySelector("#tasks-tittle");

cardbody1.replaceChild(newElement,oldElement);

console.log(newElement);

