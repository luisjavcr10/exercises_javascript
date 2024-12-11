//1. 
const whatIs = (x) =>{
    if(x===0){
        return "It's zero";
    }else if(x<0){
        return "It's negative"
    }else return "It's positive"
}

//console.log(whatIs(0));

//2. 
const printNumbers = x =>{
    for(let i= 1; i<x+1;i++){
        console.log(i)
    }
}

//printNumbers(7);

//3. 
c = 0
const whilePares = x => {
    while(c<x){
        if(c%2==0){
            console.log(c);
        }
        c++
    }
}
//whilePares(24);

//4. 
const estado = x => {
    if(x>0 && x<=12){
        return 'Es niño';
    } else if (x>12 && x<=17){
        return 'Es un adolescente'
    } else if(x>17 && x<=59){
        return 'Es un adulto'
    }else{
        return 'Es un adulto mayor'
    }

}

//console.log(estado(1));

//6.
const table = x =>{
    for(let i = 1; i<11;i++){
        console.log(`${x} x ${i} = `+x*i);
    }
} 
//table(7)

const factorial = x =>{
    if(x==0){
        return 1;
    }else
        return x*factorial(x-1);
}

//console.log(factorial(3));

//7.
const original = [1,2,3,4,5,6,7,8]
const invertido = original.reverse();
//console.log(invertido)

//8. 
const rep = [1,1,1,2,2,3,3,4,5,6,6,7,8,8]
const sinRep = array =>{
    return [... new Set(array)]
}
//console.log(sinRep(rep));

//9. 

const rep1 = [1,1,1,2,2,3,3,4,5,6,6,7,8,8]

const veces = (array,x) => {
    const veces = array.reduce((acum,actual) =>{
        if(actual==x){
            acum++
        }
        return acum;
    },0)
    return veces;
}

//console.log(veces(rep1,3));

//10.

const biDim = [[1,2,3,4],[5,6,7,8]];

const sum = biDim[0].reduce((a,b)=>a+b,0) + biDim[1].reduce((a,b)=>a+b,0)
//console.log(sum)

//11. 
const buscalo = [1,2,3,4,5,6,7,8]

const search = (array,x) => {
    let indice = -1
    for(let i=0;i<array.length;i++){
        if(x==i){
            indice = i; 
        }
        //console.log(i)
    }
    return indice;
}

//console.log(search(buscalo,2));

//12. 

const triangulo = cantidad => {
    let c = cantidad;
    while(c!=0){
        console.log('*'.repeat(c));
        c--;
    }
}

//triangulo(5);

//13. 

let sudoku1 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

let sudoku2 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 5]  // Repetición del número 5 en la última subcuadrícula
];

let sudoku3 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 2]  // Repetición del número 2 en la última columna
];

let sudoku4 = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
    [9, 1, 2, 3, 4, 5, 6, 7, 8]
];

let sudoku5 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 0]  // El número 0 no es válido en el Sudoku
];

let sudoku6 = [
    [9, 6, 1, 8, 2, 7, 4, 5, 3],
    [4, 2, 3, 1, 9, 5, 7, 6, 8],
    [7, 8, 5, 4, 3, 6, 9, 2, 1],
    [2, 3, 6, 7, 5, 8, 1, 9, 4],
    [5, 9, 8, 3, 4, 1, 6, 7, 2],
    [1, 4, 7, 9, 6, 2, 3, 8, 5],
    [3, 1, 9, 5, 8, 4, 2, 3, 7],
    [8, 5, 4, 6, 7, 9, 2, 1, 6],
    [6, 7, 2, 2, 1, 3, 5, 4, 9]
];


const checkRows = matriz =>{
    for(let i=0;i<9;i++){
        if(matriz[i].reduce((a,b)=>a+b,0)!==45){
            return false;
        }
    }
    return true;
}

const checkColumns = matriz =>{
    for(let i=0;i<9;i++){
        let sum = 0;
        for(let j = 0; j<9; j++){
            sum+=matriz[j][i];
        }
        if(sum!==45){
            return false;
        }
    }
    return true;
}

const checkAreas= (matriz) => {
    for (let row = 0; row < 9; row += 3) {  
        for (let col = 0; col < 9; col += 3) { 
            let seen = new Set();  
            for (let i = 0; i < 3; i++) {   
                for (let j = 0; j < 3; j++) {  
                    let num = matriz[row + i][col + j];
                    if (num < 1 || num > 9 || seen.has(num)) {  
                        return false;
                    }
                    seen.add(num); 
                }
            }
        }
    }
    return true;  
}

const verifySudoku= matriz=>{
    if(checkAreas(matriz) && checkRows(matriz) && checkColumns(matriz))
        return 'Ganaste el juego'
    else return 'Corrige el sudoku'
}

console.log(verifySudoku(sudoku1));
console.log(verifySudoku(sudoku2));
console.log(verifySudoku(sudoku3));
console.log(verifySudoku(sudoku4));
console.log(verifySudoku(sudoku5));
console.log(verifySudoku(sudoku6));


