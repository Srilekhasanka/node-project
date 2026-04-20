// 🧩 Problem: Find Index and Value of Even Numbers Greater Than Target
// 📌 Description

// Given an array of numbers and a target number, return a new array containing objects for each number that is:

// even
// greater than the target

// Each object should include:

// the index of the number
// the value of the number

// Input:
// array = [1, 2, 3, 4, 5, 6, 8]
// target = 3

// Output:
// [
//   { index: 3, value: 4 },
//   { index: 5, value: 6 },
//   { index: 6, value: 8 }
// ]


// 💡 Explanation
// Start by creating an empty array to store the results.
// Loop through each element of the input array.
// For every element:
// Check if it is greater than the target.
// Check if it is even (i.e., divisible by 2).
// If both conditions are satisfied:
// Create an object with:
// index: the current position
// value: the element itself
// Add this object to the result array.
// After completing the loop, return the result array.


function indiceOfEvenNumGreatTargetNum(numbers){
    const target = 3;
    let result = []
    let index =0
    for( let i=0; i< numbers.length; i++){
        if(numbers[i] > 3){
            if(numbers[i]%2 === 0){
                result[index] = {
                    index :i,
                    value:numbers[i]
                };  
                index++;
            }
        }
    }
    return result;
}
const numbers = [1, 2, 3, 4, 5, 6, 8]
console.log(indiceOfEvenNumGreatTargetNum(numbers))