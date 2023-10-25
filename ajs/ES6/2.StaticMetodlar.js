class Matematik{
    static cube(x){ // static olduğu için classtan obje yaratmadan direkt olarak çağırabiliriz
        console.log(x*x*x);
    }
}

Matematik.cube(7);