//session storage key-value //oturum depolama //sadece oturum açıkkken bilgiler klaır

//butonları seçmek

const add = document.querySelector("#add");
const delete1 = document.querySelector("#delete");
const clear= document.querySelector("#clear");

//Inputlar

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const delete1key = document.querySelector("#deletekey");

add.addEventListener("click",addItems);
delete1.addEventListener("click",delete1Items);
clear.addEventListener("click",clearItems);

function addItems(e){
    sessionStorage.setItem(addkey.value, addvalue.value);
}

function delete1Items(e){
    sessionStorage.removeItem(delete1key.value);
}
function clearItems(e){
    sessionStorage.clear();
}


