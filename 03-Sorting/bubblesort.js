function bubbleSort(array){
   if(array === undefined){
       return array
   }else{
       for(let i = 0; i < array.length-1; i++){
           for(let j = 0; j < array.length-1; j++){
               if(array[j] > array[j+1]){
                   swap(array, j, j+1)
               }
           }
       }
   }
   return array
}

function swap(array, val1, val2){

    let val = array[val1]
    array[val1] = array[val2]
    array[val2] = val
    
}
