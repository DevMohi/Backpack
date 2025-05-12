// 5.Task: Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const numbers = [1, 2, 3, 4, 5];

const totalEvenNumbers = (numberArray) => {
  return numberArray.reduce((acc, current) => {
    if (current % 2 === 0) {
      return acc + current;
    }
    return acc;
  }, 0);
};
// const totalEvenNumbers = (numberArray) => {
//   const result = numberArray.reduce((acc, current) => {
//     return acc + current;
//   }, 0);
//   return result;
// };

console.log(totalEvenNumbers(numbers));
