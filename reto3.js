const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
];

const inventory2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
  ]

let categories = {};

for (const {category,name,quantity} of inventory2) {
    if(!categories[category]){
        categories[category]= {};
    }
    if(!categories[category][name]){
        categories[category][name]= quantity;
    }else{
        categories[category][name] += quantity;
    }  
}





console.log(categories);
