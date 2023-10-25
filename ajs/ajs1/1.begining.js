//alert("helllo word");

console.log(6436);

//const ve let de yeni değer ataması hata verir

//örn:

let a= 0;
console.log(a);

a=3;
console.log(a);

// veri tiplerini birbirine dönüştürme

let value;
// burda let değil de const kullansaydık hata verirdi değeri ilk başta atamamız gerek
// veri tiplerini stringe dönüştürme
value = String(12.4)
console.log(typeof value);
value = String(true);
console.log(typeof value);
//ya da
value = (23).toString();

console.log(value);
console.log(typeof value);

value = Math.abs(-10); // mutlak değer
value = Math.pow(9,3); //üs alma
console.log(value);