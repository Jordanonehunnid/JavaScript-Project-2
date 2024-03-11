// String Manipulation Functions:


// ------------Reverse a String-----------

function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}
console.log(reverseString("hello")); // Output: "olleh"

// ----------Count Characters-------

function countCharacters(inputString) {
    return inputString.length;
}
console.log(countCharacters("hello"));  // Output: 5

//----------- Capitalize Words--------
function capitalizeWords(inputString) {
    return inputString.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords("hello world")); // Output: "Hello World"

// Array Functions:
// ---------Find Maximum and Minimum---------------
const numbers = [5, 2, 9, 1, 7];


function findMaximum(arr) {
    return Math.max(...arr);
}
console.log(findMaximum(numbers)); // Output: 9

function findMinimum(arr) {
    return Math.min(...arr);
}
console.log(findMinimum(numbers)); // Output: 1

// ----------Sum of Array-------------

function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumArray(numbers)); // Output: 24

//---------- Filter Array-----------------

// Example of filter condition: Filter out numbers greater than 5
function filterArray(arr, condition) {
    return arr.filter(condition);
}

console.log(filterArray(numbers, num => num <= 5)); // Output: [5, 2, 1]


// ---------Mathematical Functions-----

//-------- Factorial--------------
function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}
console.log(factorial(5)); // Output: 120
// -----------Prime Number Check----------
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7)); // Output: true

//------------ Fibonacci Sequence-----
function fibonacci(n) {
    let fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence;
}

console.log(fibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]


