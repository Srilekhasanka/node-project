function sumOfArray(numbers){
    let result = []
    let sum =0
    for(let i=0;i<numbers.length;i++){
        sum = sum + numbers[i]
         result[i] =sum
    }
    return result;
}
const numbers = [1,2,3,4]
console.log(sumOfArray(numbers))