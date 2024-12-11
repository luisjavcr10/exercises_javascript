const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
]
//const pares =[]
function organizeShoes(shoes) {
    const pares =[];
  
    for (let i = 0; i < shoes.length; i++) {
        for (let j = i + 1; j < shoes.length; j++) {
            if (shoes[i].type != shoes[j].type && shoes[i].size == shoes[j].size) {
                pares.push(shoes[i].size);
                shoes.splice(i, 1);
                shoes.splice(j - 1, 1);
                i--; 
                break;
            }
        }
    }
    return pares;
  }

console.log(organizeShoes(shoes))

