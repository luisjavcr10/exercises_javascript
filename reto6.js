const box =[
    "#####",
    "#  *#",
    "#   #",
    "#   #",
    "#####"
  ];

function inBox2(box) {
    let result;

    for(let i=0; i<box.length;i++){
      if((i==0 || i==box.length-1 )&& box[i].includes('*')){
        result=false;
      }else if(box[i].includes('*')){
        if(box[i].lastIndexOf('*') == 0 || box[i].lastIndexOf('*') == box[i].length-1){
            result=false;
        }else{
            result=  true;
            break;
        }
      }else{
        result=false;
      }
    }
    return result
}

function inBox(box) {
    for (let i = 0; i < box.length; i++) {
        if ((i === 0 || i === box.length - 1) && box[i].includes('*')) {
            return false;
        }
        if (box[i].includes('*')) {
            const firstIndex = box[i].indexOf('*');
            const lastIndex = box[i].lastIndexOf('*');
            if (firstIndex === 0 || lastIndex === box[i].length - 1) {
                return false; 
            }
            return true;
        }
    }
    return false;
}


console.log(inBox(box));