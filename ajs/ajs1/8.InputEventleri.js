 document.addEventListener("DOMContentLoaded", loaded);

function loaded(e){
   console.log("Sayfa yüklendi");
}

//focus

// const filter = document.getElementById("filter");

// filter.addEventListener("focus", run);

// //blur
// filter.addEventListener("blur", run);



// function run(e){
//     console.log(e.type);
// }

const cardbody1 = document.querySelectorAll(".card-body")[1];

cardbody1.addEventListener("click",run);

function run(e){
    if(e.target.id === "filter"){
        console.log("input yeri");
    }
    if(e.target.className === "fa-solid fa-xmark"){
        console.log("Silme işlemi");
    }

}


