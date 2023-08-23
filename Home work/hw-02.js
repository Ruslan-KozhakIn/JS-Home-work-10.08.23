// task # 2
const filterMostOftenNumber = numsArr => {
    //Code here
  const repeating = new Map();
  let maxRep = 0;
  
  numsArr.forEach(element => { const count = (repeating.get(element) || 0) +1;
  repeating.set(element, count);
  if(count > maxRep ) {
      maxRep = count
  }
  });
  const newArr = numsArr.filter(element => repeating.get(element) !== maxRep); 
    
    return newArr;
}