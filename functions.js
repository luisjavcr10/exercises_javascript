function sumar (a,b){
    return a + b;
}

const multiplicar = (a,b) =>{
    return a*b;
}

function saludar (nombre = 'Bebe'){
    return `Hola ${nombre}`;
}

console.log(saludar())

function externa() {
    function interna() {
        console.log("Soy la función interna");
    }
    interna(); // Llama a la función interna
}
externa(); // Ejecuta la función externa

//Funciones son ciudadanos de primera clase
function operar (a, b, operacion){
    return operacion(a,b)
}

console.log(operar(3,2,sumar))

