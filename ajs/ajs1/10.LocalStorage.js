// //set Item

// localStorage.setItem("hareket" ,"burpee");
// localStorage.setItem("tekrar" ,50);

// //get Item

// const value = localStorage.getItem("tekrar");
// console.log(value);

//Local Storage array yazma

const a = ["asli", "onur", "toprak"];

localStorage.setItem("a", JSON.stringify(a));

// const value = JSON.parse(localStorage.getItem("a"));  -> böyle de array olarak alınabilir.