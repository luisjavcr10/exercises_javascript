let valor1 = '10'
let valor2 = 20

function compare1 (a,b){
    if(a===b)
        return 'Tienen el mismo valor y el mismo tipo' 
    else if(a==b)
        return 'Tienen el mismo valor, pero diferente tipo'
    else 
        return 'Son diferentes'
}

console.log(compare1(valor1,valor2))