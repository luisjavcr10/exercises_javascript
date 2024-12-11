function createFrame(names) {
    let longerWord  = 0;
    for(let i = 0; i< names.length;i++){
      if(names[i].length>=longerWord){
        longerWord = names[i].length;
      }
    }
  
    const line = c =>{
      let line = '';
      for(let i = 0; i < c + 3 ;i++)
          line = line + '*';
      return line;
    }
  
    const completedWord = word =>{
      let line =' '+ word;
      if(word.length!=longerWord){
        for(let i=0; i <longerWord-word.length; i++){
          line = line +' ';
        }
        return line;
      }else{
        return line
      }
    }
  
    const marco = (names) =>{
      let final= line(longerWord) +'\n';
      for(let i = 0; i< names.length ;i++){
        final = final + '*';
        final = final + completedWord(names[i]);
        final = final + ' *\n';
      }
      final = final +  line(longerWord)
      return final;
    }
  
    let result = marco(names);
  
  
    return result
  }

  const names = ['luis','marcos','charles']

  //console.log(createFrame(names));

  function createFrame2(names) {
    // Encuentra la longitud de la palabra más larga
    const maxLength = Math.max(...names.map(name => name.length));
    // Crea una línea de borde superior o inferior
    const createBorder = () => '*'.repeat(maxLength + 4);
    // Agrega un borde a una palabra y la ajusta al tamaño adecuado
    const formatWord = word => `* ${word.padEnd(maxLength)} *`;
    // Construye el marco completo
    const frame = [
      createBorder(),
      ...names.map(formatWord),
      createBorder()
    ];
    // Une todas las líneas con saltos de línea
    return frame.join('\n');
  }
  
  // Ejemplo de uso
  const names2 = ['John', 'Jane', 'Doe', 'Ann'];
  console.log(createFrame(names2));
  