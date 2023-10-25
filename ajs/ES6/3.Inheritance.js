class Person{
    constructor(name,age){
        this.name= name;
        this.age = age;
    }
    showInfos(){
        console.log("isim: " + this.name + " Yaş: " + this.age);
    }
}

class Employee extends Person{
    constructor(name, age, salary){
        super(name,age);
        this.salary = salary;
    }
    showInfos(){ //overridding
        console.log("isim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
    }
}

const emp = new Employee("asli", 16,89799);

emp.showInfos();