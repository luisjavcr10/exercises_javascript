class Persona {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    saludar(){
        return `my name is ${this.name}`;
    }
}

const persona1 = new Persona('Luis Castillo',21);
console.log(persona1.saludar());