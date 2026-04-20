    // Problem 3: Sum of All Numbers
    // 👉 Given an array of numbers, find the total sum.
//array: [1, 2, 3, 4, 5]
//output: 15

// Explanation:
// 1. We start with a variable `sum` initialized to 0.
// 2. We iterate through each number in the array using a loop.
// 3. For each number, we add it to our `sum` variable.
// 4. After going through all the numbers, we return the final value of `sum`, which is the total sum of all numbers in the array.


function sumOfNumbers(numbers){
    let sum =0;
    for(let i=0;i < numbers.length;i++){
        sum = sum + numbers[i]
    }
    return sum;
}


const numbers = [1,2,3,4,5]
console.log(sumOfNumbers(numbers))