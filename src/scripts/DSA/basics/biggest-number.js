// 🧸 Problem 1: Find the Biggest Number
// 👉 Given a list of numbers, find the biggest one.
// Example:[3, 7, 2, 9, 5]
// Output: 9

// Explanation:
// 1. We start with the first number, which is 3, and assume it's the biggest.
// 2. We compare it with the next number, 7. Since 7 is bigger than 3, we update our biggest number to 7.
// 3. Next, we compare 7 with 2. Since 7 is bigger than 2, we keep our biggest number as 7.
// 4. Then we compare 7 with 9. Since 9 is bigger than 7, we update our biggest number to 9.
// 5. Finally, we compare 9 with 5. Since 9 is bigger than 5, we keep our biggest number as 9.
// After going through all the numbers, we find that the biggest number in the list is 9.

function findBiggestNumber(numbers) {
    if (numbers.length === 0) {
        return null; // Return null for an empty list
    }

    let biggest = numbers[0]; // Start with the first number as the biggest

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > biggest) {
            biggest = numbers[i]; // Update biggest if current number is greater
        }
    }

    return biggest; // Return the biggest number found
}

// Example usage:
const numbers = [3, 7, 2, 9, 5];
console.log(findBiggestNumber(numbers)); // Output: 9   