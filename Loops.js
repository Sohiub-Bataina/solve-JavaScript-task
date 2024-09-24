"use strict"
// 1. Print all even numbers between 1 and 50, twice: once using a for loop and once using a while loop
console.log("Even numbers from 1 to 50 (for loop):");
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

console.log("Even numbers from 1 to 50 (while loop):");
let j = 2;
while (j <= 50) {
    console.log(j);
    j += 2;
}

// 2. Using a single for loop to print all even numbers between 1 and 50
console.log("Even numbers from 1 to 50 (single for loop):");
for (let k = 2; k <= 50; k += 2) {
    console.log(k);
}

// 3. Separate loops for even and odd numbers
console.log("Even numbers:");
for (let m = 2; m <= 50; m += 2) {
    console.log(m);
}

console.log("Odd numbers:");
for (let n = 1; n < 50; n += 2) {
    console.log(n);
}

// 4. Fizz-Buzz implementation
console.log("Fizz-Buzz from 1 to 100:");
for (let p = 1; p <= 100; p++) {
    if (p % 3 === 0 && p % 5 === 0) {
        console.log("FizzBuzz");
    } else if (p % 3 === 0) {
        console.log("Fizz");
    } else if (p % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(p);
    }
}

// 5. Fizz-Buzz using a function
function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}

// Call fizzBuzz for numbers 1 to 100
console.log("Fizz-Buzz using function:");
for (let q = 1; q <= 100; q++) {
    fizzBuzz(q);
}

// 6. Recursive Fizz-Buzz function
function recursiveFizzBuzz(num) {
    if (num > 100) return;
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
    recursiveFizzBuzz(num + 1);
}

// Start recursive Fizz-Buzz
console.log("Recursive Fizz-Buzz:");
recursiveFizzBuzz(1);

// 7. Function to convert a number to banknotes
function convertToBanknotes(amount, denominations) {
    const result = [];
    for (const denomination of denominations) {
        while (amount >= denomination) {
            amount -= denomination;
            result.push(denomination);
        }
    }
    return result;
}

// Sample usage of convertToBanknotes
console.log("Banknotes for 57:", convertToBanknotes(57, [25, 10, 5, 1]));

// 8. Count occurrences of a specific character in a string (case insensitive)
function countCharacter(str, char) {
    const regex = new RegExp(char, 'gi'); // 'gi' for global and case-insensitive
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}

// Sample usage of countCharacter
console.log("Count of 'o' in 'Coding Academy by Orange':", countCharacter("Coding Academy by Orange", "o"));

// 9. Various for loops
// a. Print numbers 0 - 20
console.log("Numbers from 0 to 20:");
for (let r = 0; r <= 20; r++) {
    console.log(r);
}

// b. Print only ODD values from 3 - 29
console.log("Odd values from 3 to 29:");
for (let s = 3; s < 30; s += 2) {
    console.log(s);
}

// c. Print EVEN numbers 12 down to -14
console.log("Even numbers from 12 to -14 in descending order:");
for (let t = 12; t >= -14; t -= 2) {
    console.log(t);
}

// d. Print numbers 50 down to 20 if multiples of 3
console.log("Multiples of 3 from 50 down to 20:");
for (let u = 50; u >= 20; u--) {
    if (u % 3 === 0) {
        console.log(u);
    }
}

// 10. Initialize variables and construct loops
const str = 'CodingAcademy';
const arr = [7, 500, 'KH404', 'black', 36];

// e. Print each element of the array
console.log("Array elements:");
for (const element of arr) {
    console.log(element);
}

// f. Print each character of the string in reverse order
console.log("Characters of 'CodingAcademy' in reverse:");
for (let v = str.length - 1; v >= 0; v--) {
    console.log(str[v]);
}

// 11. Sort an array into evens and odds
const numbers = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
const evens = [];
const odds = [];

for (const number of numbers) {
    if (number % 2 === 0) {
        evens.push(number);
    } else {
        odds.push(number);
    }
}

console.log("Evens:", evens);
console.log("Odds:", odds);

// 12. Create meals using elements from arrays
const proteins = ['chicken', 'noodles', 'tofu', 'beef', 'fish', 'beans'];
const grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
const vegetables = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
const beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
const desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

function createMeals(numberOfMeals) {
    const meals = new Set(); // Use a set to avoid duplicates
    while (meals.size < numberOfMeals) {
        const meal = {
            protein: proteins[Math.floor(Math.random() * proteins.length)],
            grain: grains[Math.floor(Math.random() * grains.length)],
            vegetable: vegetables[Math.floor(Math.random() * vegetables.length)],
            beverage: beverages[Math.floor(Math.random() * beverages.length)],
            dessert: desserts[Math.floor(Math.random() * desserts.length)],
        };
        meals.add(JSON.stringify(meal)); // Use stringification to avoid duplicates
    }
    return Array.from(meals).map(JSON.parse); // Convert back to objects
}

// Sample usage of createMeals
console.log("Random meals:");
console.log(createMeals(5));
