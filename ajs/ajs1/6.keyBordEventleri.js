//Klavye eventleri

// keypress eventleri
// document.addEventListener("keypress", run);

// function run(e){
//     console.log(e.key);
//     console.log(e.which);
// }

//keydown
// document.addEventListener("keydown", run);

// function run(e){
//     console.log(e.key);
//     console.log(e.which);  // tüm tuşları algılar
// }



//keyup

//tuşu bıraktığın zaman aktif olur
document.addEventListener("keyup", run);

function run(e){
    console.log(e.key);
    console.log(e.which);  // tüm tuşları algılar
}

const header = document.querySelector(".card-header");
const todo = document.querySelector("#todo-form");

document.addEventListener("keyup", run);

function run(e){
    header.textContent = e.target.value;
    console.log(e.target.value); // yazılan değeri verir
}