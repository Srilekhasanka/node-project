// Problem 3: Count Even Numbers Greater Than a Target

// 👉 Given an array of numbers and a target number, count how many numbers are:

// even, and
// greater than the target

// array: [1, 2, 3, 4, 5, 6, 8]
// target: 3
// output: 3

// Explanation:
// Even numbers in array → 2, 4, 6, 8
// Numbers greater than 3 → 4, 5, 6, 8
// Common → 4, 6, 8 → count = 3

function countEvenTargetNumber(number) {
    const target = 3;
    let count = 0;

    for (let i = 0; i < number.length; i++) {
        if (number[i] > target) {
            if (number[i] % 2 === 0) {
                count = count + 1;
            }
        }
    }

    return count;
}

const number =[1, 2, 3, 4, 5, 6, 8]; 
console.log(countEvenTargetNumber(number));