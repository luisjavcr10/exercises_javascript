//copy an array
let arr = [1, 2, 3];
let copy = [...arr];

console.log(copy); // [1, 2, 3]
console.log(arr === copy); // false (son diferentes objetos)

//merge arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = [...arr1, ...arr2];

console.log(combined); // [1, 2, 3, 4]

//put elementos of array as arguments
function sum(a, b, c) {
    return a + b + c;
  }
  
  let numbers = [1, 2, 3];
  console.log(sum(...numbers)); // 6
  
//copy an object
let obj = { a: 1, b: 2 };
let copy2 = { ...obj };

console.log(copy2); // { a: 1, b: 2 }
console.log(obj === copy2); // false (son diferentes objetos)

//become string to arrays
let str = "hello";
let chars = [...str];

console.log(chars); // ['h', 'e', 'l', 'l', 'o']

//delete a property of object
let obj1 = { a: 1, b: 2, c: 3 };
let { b, ...rest } = obj1;

console.log(rest); // { a: 1, c: 3 }

//