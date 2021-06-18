function smallestCommons(arr) {
    let min = Math.min(...arr);
    let max= Math.max(...arr);
    console.log(min);
    console.log(max);
     let rangearr= [];
     let maxarrmultiple=[];
    for(let i = min; i<=max; i++){
      
      
      rangearr.push(i);
    }
  
    for(let j = 1; j<=100100; j++){
      let multiple = 1;
      
      multiple=max * j;
      maxarrmultiple.push(multiple);
    }
  console.log(maxarrmultiple);
  console.log( " range of the number to checked" + rangearr)
    for(let i = 0 ;i<=maxarrmultiple.length-1; i++){
      
        const divide = (number)=> (maxarrmultiple[i] % number)==0
        let result = rangearr.every(divide)
        
        if(result){
          console.log(maxarrmultiple[i]);
          break;
        }
      }

console.log("This is another line added by kayode");
    
  }
  
  
  smallestCommons([23,18]);