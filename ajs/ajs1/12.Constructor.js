//yapıcı metotlar

function Yapici(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
}

const element = new Yapici("Asli", 20, 2000);
const element2 = new Yapici("onur", 22,2000);

console.log(element);
console.log(element2);