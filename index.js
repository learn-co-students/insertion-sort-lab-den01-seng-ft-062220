function findMinAndRemove(array){
  const min = Math.min(...array);
  const index = array.indexOf(min)
  const newArray = array.splice(index, 1)
  return newArray
}

function selectionSort(array){
  let sorted = [];
  let newMin;
  while(array.length > 0){
    newMin = findMinAndRemove(array)
    sorted.push(newMin);
  }
  return sorted.flat();
}
