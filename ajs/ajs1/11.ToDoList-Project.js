//tüm elementleri seçme

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todolist = document.querySelector(".list-group");
const firstCard = document.querySelectorAll(".card-body")[0];
const secondCard = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const Clearbutton = document.querySelector("#buton");



addEventListeners();
//tüm eventler
function addEventListeners(){
    form.addEventListener("submit", AddTodo);
    document.addEventListener("DOMContentLoaded", LoadAllTodosUI); // sayfa yüklendiğinde todoları alma
    secondCard.addEventListener("click",DeleteTodo);
    filter.addEventListener("keyup",filterTodos);
    Clearbutton.addEventListener("click", ClearALL);
}

function filterTodos(e){
    const filtervalue = e.target.value.toLowerCase(); // küçük harf yapar büyük- küçük duyarlılığı olmaması için
    const listItems = document.querySelectorAll(".list-group-item"); // tüm li leri seçtik

    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filtervalue) === -1){
            //bulamadı
            listItem.setAttribute("style", "display : none ! important");//göster
        }
        else{
            listItem.style.display = "block";
        }

        console.log(filtervalue);

    });
}


function ClearALL(e){
    console.log(e.target);
    if(confirm("Tüm todoları silmek istediğinize emin misiniz?")){
        //arayüzden silme
        while(todolist.firstChild != null){
            todolist.removeChild(todolist.firstChild);
        }

        //bellekten silme

        localStorage.removeItem("todos");
    }
}

function DeleteTodo(e){
    if(e.target.className === "fa-solid fa-xmark"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.previousElementSibling.textContent);
        showAlert("success", "Todo Başarıyla silindi");
    }
}

function deleteTodoFromStorage(deletetodo){
    let todos = getTodosFromStorage();
    todos.forEach(function(todo,index){
        if(todo === deletetodo){
            todos.splice(index,1); // arrayden değeri silebiliriz
        }
    });

    localStorage.setItem("todos", JSON.stringify(todos));

}

function LoadAllTodosUI(){
    let todos = getTodosFromStorage();
    todos.forEach(function(todo) {
        addTodoToUI(todo);
    });
}
function AddTodo(e){
    const newTodo = todoInput.value.trim(); //trim girdinin başındaki sonundaki boşlukları siler.
    
    //bilgilendirme mesajı
    if(newTodo == ""){
        showAlert("danger","Bir todo giriniz!");
    }
    else{
        addTodoToUI(newTodo); //newTodoları liste ekleyecek fonk

        addTodoToStorage(newTodo); //newTodoları depolamaya ekleyecek
        showAlert("success", "Todo başarıyla eklendi");
    }

    e.preventDefault();
}


function getTodosFromStorage(){ //storageden todosları alma
    let todos;

    if(localStorage.getItem("todos") == null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();
    todos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(todos));
}


function showAlert(type,message){
    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCard.appendChild(alert);

    setTimeout(function(){
        alert.remove();    //mesaj 2 sn sonra silinecek
    },2000);
}


function addTodoToUI(newTodo){ //String değerini listitem olarak UI ya ekleme

    // <!-- <li class="list-group-item d-flex justify-content-between">todo1
    //                         <a href="#" class="delete-item"><i class="fa-solid fa-xmark"></i></a>
    //                     </li>
    //                     <li class="list-group-item d-flex justify-content-between">todo2
    //                         <a href="#" class="delete-item"><i class="fa-solid fa-xmark"></i></a></li>
    //                     <li class="list-group-item d-flex justify-content-between">todo3
    //                         <a href="#" class="delete-item"><i class="fa-solid fa-xmark"></i></a></li> -->


    const ListItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class= 'fa-solid fa-xmark'></i>";

    ListItem.className = "list-group-item d-flex justify-content-between";

    //text node ekleme

    ListItem.appendChild(document.createTextNode(newTodo));
    ListItem.appendChild(link);


    //todo liste listitem ı ekleme

    todolist.appendChild(ListItem);
    todoInput.value = ""; // input yerine yazdığımız şeyi ekledikten ve sonra siler.

    // console.log(todolist);
}