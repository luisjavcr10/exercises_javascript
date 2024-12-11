/*for(variable;condicion;incremento){
    
}*/

let array = ["1","2","3","4"]

for (let i = 0; i < 3 ; i++ ){
    console.log(array[i])
}

//sobre objetos iterables, arrays o strings
for (number of array){
    console.log(number)
}

//soobre objetos enumerables
const usuario = {
    nombre:'luis' , 
    apellido:'castillo', 
    email: 'luis@gmail'
}

for(dato in usuario){
    console.log(dato)
}

for(dato in usuario){
    console.log(`${dato} : ${usuario[dato]}`);
}
console.log(usuario.email)