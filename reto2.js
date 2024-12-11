const names = ['luis', 'javier', 'josee']

let longerWord  = 0;
for(let i = 0; i< names.length;i++){
    if(names[i].length>=longerWord){
      longerWord = names[i].length;
    }
}

  //console.log(longerWord);

const line = c =>{
    let line = '';
    for(let i = 0; i < c ;i++)
        line = line + '*';
    return line;
}

//console.log(line(8))

//console.log("********\n*luis  *\n********");
l = 10

const completedWord = word =>{
    let line = word;
    if(word.length!=l){
      for(let i=0; i <l-word.length; i++){
        line = line +' ';
      }
      return line;
    }else{
      return line
    }
  }
console.log(completedWord('luis').length)
