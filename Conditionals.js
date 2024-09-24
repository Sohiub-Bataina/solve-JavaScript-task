"use strict"
// 1. Age eligibility check with dynamic year calculation
function checkEligibility(birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    if (age > 60) {
        console.log("You may join the seniors' program.");
    } else if (age > 30) {
        console.log("You are not eligible. You may join other programs.");
    } else if (age >= 18 && age <= 30) {
        console.log("You are eligible. Start your application.");
    } else {
        console.log("You may join the kids' program.");
    }
}

checkEligibility(1995); // Example: for a person born in 1995

// 2. Function to switch letters' case
function switchCase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result += str[i].toLowerCase();
        } else {
            result += str[i].toUpperCase();
        }
    }
    return result;
}

console.log(switchCase("OrAnGe")); // oRaNgE

// 3. Function to capitalize first letters and remove spaces (Camel Case)
function toCamelCase(str) {
    return str
        .split(' ')
        .map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}

console.log(toCamelCase("Coding Academy by Orange")); // CodingAcademyByOrange

// 4. Function to remove a specific element in an array
function removeElement(arr, element) {
    return arr.filter(item => item !== element);
}

console.log(removeElement(["Coding", "Academy", "By", "Orange"], "By")); // ["Coding", "Academy", "Orange"]

// 5. Function to check if a number is odd or even
function isOddOrEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

console.log(isOddOrEven(4)); // Even
console.log(isOddOrEven(7)); // Odd

// 6. Function to check if an input variable is a number
function isNumber(input) {
    return typeof input === 'number' && !isNaN(input);
}

console.log(isNumber(123)); // true
console.log(isNumber('123')); // false

// 7. Function to find the largest of two numbers
function findLargest(a, b) {
    return a > b ? a : b;
}

console.log(findLargest(10, 20)); // 20

// 8. Function to check if a triangle is equilateral, scalene, or isosceles
function triangleType(a, b, c) {
    if (a === b && b === c) {
        return "Equilateral";
    } else if (a === b || b === c || a === c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}

console.log(triangleType(3, 3, 3)); // Equilateral
console.log(triangleType(3, 4, 4)); // Isosceles
console.log(triangleType(3, 4, 5)); // Scalene

// 9. Function to check if a number is in a given range
function isInRange(num, min, max) {
    return num >= min && num <= max;
}

console.log(isInRange(5, 1, 10)); // true
console.log(isInRange(15, 1, 10)); // false

// 10. Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2023)); // false
