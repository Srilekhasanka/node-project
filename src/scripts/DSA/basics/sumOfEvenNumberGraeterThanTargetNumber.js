// Problem 5: Sum of Even Numbers Greater Than Target

// 👉 Given an array of numbers and a target number,
// find the sum (not count) of numbers that are:
// even
// greater than the target

// array: [1, 2, 3, 4, 5, 6, 8]
// target: 3

// output: 18


function sumOfEvenNumGreatTargetNum(numbers){
    const target = 3;
    let sum =0;
    for( let i=0; i< numbers.length; i++){
        if(numbers[i] > 3){
            if(numbers[i]%2 === 0){
            sum = sum+numbers[i]
            }
        }
    }
    return sum;
}
const numbers = [1, 2, 3, 4, 5, 6, 8]
console.log(sumOfEvenNumGreatTargetNum(numbers))


// Return count + sum of even numbers greater than target number

function sumOfEvenNumGreatTargetNum(numbers){
    const target = 3;
    let sum =0;
    let count =0;
    for( let i=0; i< numbers.length; i++){
        if(numbers[i] > 3){
            if(numbers[i]%2 === 0){
            count = count + 1;
            sum = sum+numbers[i]
            }
        }
    }
    return {
        Sum:sum,
        Count:count
    };
}
const numbers = [1, 2, 3, 4, 5, 6, 8]
console.log(sumOfEvenNumGreatTargetNum(numbers))