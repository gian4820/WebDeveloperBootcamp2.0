class Pet{
    constructor(name, age){
        console.log("IN PET CONSTRUCTOR");
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating!`;
    }
}


class Cat extends Pet{
    constructor(name, age, liveLeft = 9){
        console.log("IN CAT CONSTRUCTOR");
        super(name, age);
        this.liveLeft = liveLeft;
    }
    meow(){
        return "MEOWWW";
    }
}

class Dog extends Pet{
    bark(){
        return 'GUAUU!!';
    }
    eat(){
        return `${this.name} scrafs his food!`;
    }
}