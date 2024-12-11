const persona = {
    firstName : 'Luis',
    lastName : 'Castillo',
    age : 21,
    adress : {
        street : 'Arevalo',
        city : 'Trujillo'
    },
    presentacion(){
        console.log(`Hola mi nombre es ${persona.firstName} ${persona.lastName}, tengo ${persona.age} años y vivo en ${persona.adress.city}`);
    }
}

//console.log(persona.presentacion())

// add an atribute
persona.phone = '943721646';
//console.log(persona)
// add a method
persona.givePhone = ()=> console.log(`Mi numero es ${persona.phone}`);
//console.log(persona.givePhone())

//delete an atribute
delete persona.phone;
//delete a method
delete persona.givePhone;
//console.log(persona)

//CONSTRUCTOR

function Persona(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const persona1 = new Persona('Juan','Perez',20);
console.log(persona1);

//add attibute to constructor
Persona.prototype.phone = '943721646';

