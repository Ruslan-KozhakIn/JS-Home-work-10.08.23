//  Task # 1



function createArray(start, end) {
    let newArr = [];
    for (let i = start; i <= end; i++) {
        newArr.push(i);
        
    }
    return newArr
}
    
let arr = createArray(11, 22);
console.log(arr);
    

//  Task # 2

function createRepVal(a, b) {
    
for (let i = a; i <= b; i++) {
  for (let j = 1; j <= i - a + 1; j++) {
      console.log(i);
    }
    
}


}

createRepVal(1, 10);
    



//  Task # 3

function randArray(k) {
    function getRandomValueInArr(min = 1, max = 500) {
        return Math.floor(min + Math.random() * (max - min + 1));
    }
    const arrayNew = [];
    for (let i = 0; i < k; i++) {
        arrayNew.push(getRandomValueInArr());
    }

    console.log(arrayNew);
    
}
    
randArray(10);


//  Task # 4
function compact(arr) {
    const cleanArray = arr.filter((item, index) => 
    { return arr.indexOf(item) === index });
    

    return cleanArray;
}

const arr1 = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(arr1);
console.log(arr2);

// [...new Set(arr)]; альтернативний метод



//  Task # 5
   
function createFilterArr(arr) {
    const flattenedArr = arr.flat();
    const onlyStrArr = flattenedArr.filter(item => typeof item === 'string'); 
    const onlyNumArr = flattenedArr.filter(item => typeof item === 'number'); 
    
    
    return console.log([onlyNumArr, onlyStrArr]);
}

 let arr3 = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
 let arrNew = createFilterArr(arr3);



//  Task # 6

function calc(a, b, op) {
    if (op === 1) {
        return console.log(a - b);
    }
    else if (op === 2) {
        return console.log(a * b);
    }
    else if (op === 3) {
        return console.log(a / b);
    }
    else  {
        return console.log(a + b);
    } 

   


}

calc(10, 7, 0);


//  Task # 7


function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return console.log(false);
            }
        }
    }
    
    return console.log(true);
        
}

findUnique([1, 2, 3, 5, 3]); 
findUnique([1, 2, 3, 5, 11]);



