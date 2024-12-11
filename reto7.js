let word = 'a(bc(def)g)h';


function fixPackages(packages){
    let pos= 0;
    let nuevaPalabra;

    if(!packages.includes('(')){
        return packages;
    }else{
        for(let i=0; i<packages.length; i++){
            if(packages[i]==='('){
                pos = i;
            }else if(packages[i]===')'){
                let parcial = packages.slice(pos,i+1);
                let vital = packages.slice(pos+1,i).split('').reverse().join('');
                nuevaPalabra= packages.replace(parcial,vital);
                break;
            }
        }
        return fixPackages(nuevaPalabra);
    }
}


let parcial = word.slice(2,4).split('').reverse().join('');


console.log(fixPackages(word))