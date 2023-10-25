// const filterInput = document.getElementById("filter");

// // filterInput.onfocus = function(){
// //     console.log("nbr");
    
// // }

// // filterInput.addEventListener("focus", function(e){
// //     console.log("selam");
// // });


const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit",submitForm);

function submitForm(e){
    console.log("onay");
    e.preventDefault(); //submit DEfault özellik olarak sayfayı yeniler bu bunu engeller
}