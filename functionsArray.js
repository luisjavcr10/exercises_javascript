
const celsius= [23,25,34,59];

const fahrenheit = celsius.map(degree => (degree*1.8)+32);

//console.log(fahrenheit);

const numbers = [1,2,3,4,5,6];

let sum = 0;
numbers.forEach(num => {sum = sum + num;});
//console.log(sum)

const sum2= numbers.reduce((a,b)=>a+b,0);
//console.log(sum2)

const withoutFilter= [1,2,3,4,5,6];

const even = withoutFilter.filter(number => number%2==0);

//console.log(even);

const words = ['Banana','apple','hello','bye','banana','bye','bye']

const wordFrequency = words.reduce((acumulador, valorActual) =>{
    if(acumulador[valorActual]){
        acumulador[valorActual]++;
    }else{
        acumulador[valorActual] = 1;
    }
    return acumulador;
},{})

//console.log(wordFrequency);

const word = words.find(word => word ==='banana');

const word2 = words.findIndex(word => word ==='banana');
//console.log(word)

console.log('Slice: \n')
console.log('Divide una palabra desde una posicion: Banana(2):')
console.log(word.slice([2]))
console.log('\nDivide una array desde una posicion::')
console.log(words.slice([2]))
 
