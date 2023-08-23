
function countOccurrences(arr) {
    const occurrences = new Map();
    
    arr.forEach(element => {
        if (occurrences.has(element)) {
            occurrences.set(element, occurrences.get(element) + 1);
        } else {
            occurrences.set(element, 1);
        }
    });
    
    return occurrences;
}

const myArray = [2, 4, 2, 7, 8, 2, 5, 2];
const result = countOccurrences(myArray);
console.log(result);