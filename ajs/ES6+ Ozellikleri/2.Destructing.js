//array destructing
let number1, number2;

arr = [100,200,300,400];

[number1,number2] = arr;
console.log(number1,number2);

//Obje destructing

const numbers={
    a : 500,
    b : 600,
    c : 700,
    d : 900 
};

const{a,b,c} = numbers; //objelerle aynı ismi taşımalı
console.log(a,b,c);

//SPREAD operatörü

const langs1 = ["js","pyhton", "c#"];

const langs2 = ["ruby", "java",...langs1];

console.log(langs2);