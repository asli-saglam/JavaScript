class Employee{
    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    showInfos(){
        console.log("isim: " + this.name + " yaş: " + this.age + " maaş: " + this.salary);
    }
}

const emp = new Employee("asli",20,25000);

emp.showInfos();