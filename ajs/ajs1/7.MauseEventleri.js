const cardbody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-tittle");

//Click eventi

title.addEventListener("click", run);

function run(e){
    console.log(e.type);
}

//mauseover   -> üstüne geldiğimiz zaman 