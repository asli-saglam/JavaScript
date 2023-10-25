// Call() fonksiyonu, verilen this anahtar değeriyle(obje) ve bağımsız olarak sağlanan bağımsız argümanlarla bir fonksiyonu çağırır. Argümanlar fonksiyona tek tek gönderilir. (Örnek: test(obj,arg1,arg2,arg3))
// Apply() fonksiyonu, verilen this anahtar değeriyle(obje) ve bağımsız olarak sağlanan değişkenlerle bir fonksiyonu çağırır. Argümanlar fonksiyona argüman listesi şeklinde gönderilir. (Örnek: test(obj,[arg1,arg2,arg3]))
//Bind() fonksiyonu, içine verilen objeye göre yeni bir fonksiyon kopyası yaratır. Oluşan bu kopya fonksiyonu daha sonradan argüman listesi ile beraber gönderilen objeye kullanabiliriz.


const obj1 = {
    number1 : 20,
    number2 : 50
};
const obj2 = {
    number1 : 70,
    number2 : 20
};

function addNumbers(number3,number4){
    console.log(this.number1 + this.number2 + number3 + number4);
}

addNumbers.call(obj1,200,100);
addNumbers.call(obj2,200,100);

addNumbers.apply(obj1,[100,200]);

function getNumberTotal(number3,number4){
    return this.number1 + this.number2 + number3 + number4;
}

const copyFunc1 = getNumberTotal.bind(obj1); // kopya fonk oluşturduk

console.log(copyFunc1(200,300));