"use strict"
// Original string
let text = "Welcome to Orange";

// 1. Output: WELCOME TO ORANGE (all uppercase)
let output1 = text.toUpperCase();
console.log(output1);  // Output: WELCOME TO ORANGE

// 2. Output: TO (extract "TO")
let output2 = text.slice(8, 10).toUpperCase();
console.log(output2);  // Output: TO

// 3. Output: Hello from Orange (replace "Welcome to" with "Hello from")
let output3 = text.replace("Welcome to", "Hello from");
console.log(output3);  // Output: Hello from Orange

// 4. Output: welcome to orange (all lowercase)
let output4 = text.toLowerCase();
console.log(output4);  // Output: welcome to orange

// 5. Output: 17 (length of the string)
let output5 = text.length;
console.log(output5);  // Output: 17

// 6. Output: Welcome to “Orange” (adding quotes around "Orange")
let output6 = text.replace("Orange", '"Orange"');
console.log(output6);  // Output: Welcome to "Orange"

// 7. Output: Welcome to Orange Jordan (append "Jordan" at the end)
let output7 = text + " Jordan";
console.log(output7);  // Output: Welcome to Orange Jordan

function replaceFirstLetter(input) {
    // Get the first letter
    let firstLetter = input[0];
    
    // Replace all occurrences of the first letter (after the first occurrence) with '*'
    let result = firstLetter + input.slice(1).replaceAll(firstLetter, '*');
    
    return result;
}

// Sample Input
let input = "cactus";

// Output
console.log(replaceFirstLetter(input));  // Output: ca*tus
