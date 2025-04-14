// JavaScript Assignment Solutions

// Task 1: Age check
let age = 25;
let isAdult = age >= 18;
console.log("Task 1");
console.log("Is adult?", isAdult);

// Task 2: Mathematical operations
let x = 10;
let y = 5;

let addition = x + y;
let multiplication = x * y;
let modulus = x % y;
console.log("Task 2");
console.log("Addition:", addition);
console.log("Multiplication:", multiplication);
console.log("Modulus:", modulus);

// Task 3: Even or odd checker
function checkEvenOdd(n) {
    return n % 2 === 0 ? "even" : "odd";
}

let number = 7;
let numberType = checkEvenOdd(number);
console.log("Task 3");
console.log(`${number} is ${numberType}`);

// Task 4: Store numbers 1 to 5 in an array
let numbersArray = [];
for (let i = 1; i <= 5; i++) {
    numbersArray.push(i);
}
console.log("Task 4");
console.log("Numbers array:", numbersArray);

// Task 5: Square function
function square(num) {
    return num * num;
}
console.log("Task 5");
console.log("Square of 4:", square(4));
console.log("Square of 5:", square(5));