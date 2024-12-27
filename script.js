console.log('Hello!');
// 1. Write an arrow function with two parameters that calculates the area of a rectangle. Print the output.
const calculateArea = (length, breadth) => length * breadth;
console.log(calculateArea(4, 5));

// 2. Write an arrow function with two parameters 15 and 5, that checks if the first number is divisible by the second number. Print the output.
const isDivisible = (num1, num2) => num1 % num2 === 0;
console.log(isDivisible(15, 5));

// 3. Write an arrow function with two parameters 15 and 5, that calculates the difference of the two numbers. Print the output.
const calculateDiffrence = (num1, num2) => num1 - num2;
console.log(calculateDiffrence(15, 5));

// 4. Write an arrow function with three parameters that concatenates three strings. Your Output should be: I am happy.
const concatenatesString = (str1, str2, str3) => str1 + ' ' + str2 + ' ' + str3;
console.log(concatenatesString('I', 'am', 'happy'));

// 5. Convert the below arrow function into traditional function declaration format?

const isBigger = (a, b) => a > b;
console.log('Is 2 bigger than 3?', isBigger(2, 3));
function isBigger2(a, b) {
  if (a > b) {
    return true;
  } else {
    return false;
  }
}

console.log('Is 2 bigger than 3?', isBigger2(2, 3));

// 6. Convert the below function into an arrow function?

function printProduct(a, b) {
  return a * b;
}
console.log('Product of two numbers: ', printProduct(2, 6));
const printProduct2 = (a, b) => a * b;
console.log('Product of two numbers: ', printProduct2(2, 6));

// 7. Convert the below function into an arrow function?
function getGreeting(greeting, name) {
  return greeting + name;
}
console.log(getGreeting('Hello ', 'John'));
const getGreeting2 = (greeting, name) => greeting + name;
console.log(getGreeting2('Hello ', 'John cena'));
