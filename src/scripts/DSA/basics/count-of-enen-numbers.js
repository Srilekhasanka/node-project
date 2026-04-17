// 🧩 Problem 2: Count Even Numbers
// 👉 Given an array of numbers, count how many numbers are even.

// array: [1, 2, 3, 4, 5, 6
// output: 3

// Explanation:
// 1. We start with a count of 0 for even numbers.
// 2. We iterate through each number in the array.
// 3. For each number, we check if it is even by using the modulus operator (%). If the number divided by 2 leaves a remainder of 0, it is even.
// 4. If the number is even, we increment our count by 1.
// 5. After going through all the numbers, we return the final count of even numbers.

function countEvenNumbers(numbers) {
    let count = 0; // Initialize count of even numbers

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count++; // Increment count if the number is even
        }
    }

    return count; // Return the total count of even numbers
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6];
console.log(countEvenNumbers(array)); // Output: 3