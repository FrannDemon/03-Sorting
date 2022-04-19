function split(wholeArray){

  /* tu código acá para definir el firstHalf y secondHalf array */
  let firstHalf = []
  let secondHalf = []

  if(wholeArray.length >= 1){
    firstHalf = wholeArray.slice(0, wholeArray.length/2)
    secondHalf = wholeArray.slice(wholeArray.length/2, wholeArray.length)
  }else{
    return wholeArray
  }
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {

  /* tu código acá */
  let mer1= 0
  let mer2 = 0
  let totalDeArrs = []
  while(mer1 < arr1.length || mer2 < arr2.length){
    if(arr1[mer1] < arr2[mer2] || !arr2[mer2]){
      totalDeArrs.push(arr1[mer1])
      mer1++
    }else{
      totalDeArrs.push(arr2[mer2])
      mer2++
    }
  }
  return totalDeArrs

}

function mergeSort(arr){
  if(arr.length <= 1){
    return arr
  }else{
    var [arr1, arr2] = split(arr)
    return merge(mergeSort(arr1), mergeSort(arr2))
  }
  
}




