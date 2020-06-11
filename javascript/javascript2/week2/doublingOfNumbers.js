/* write a program that doubles the odd numbers in an array 
and throws away the even number
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers.filter((number) => number % 2).map((number) => number * 2));
