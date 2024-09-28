"use strict"
// Arrays
let arr = ["Coding", "Academy", "By", "Orange"];

// ● Output: [“Coding”, “Academy”, “By”, “Orange”, “Jordan”]
let arr1 = [...arr, "Jordan"];
console.log(arr1);

// ● Output: [“Coding”, “Academy”]
let arr2 = arr.slice(0, 2);
console.log(arr2);

// ● Output: [“Welcome”, “To”, “Coding”, “Academy”, “By”, “Orange”]
let arr3 = ["Welcome", "To", ...arr];
console.log(arr3);

// ● Output: [“Academy”, “By”, “Orange”]
let arr4 = arr.slice(1);
console.log(arr4);

// ● Output: “Coding Academy By Orange”
let arr5 = arr.join(" ");
console.log(arr5);

// ● Output: [“Coding”, “Academy”, “By”, “Orange”]
let arr6 = [...arr];
console.log(arr6);

// ● Output: [“Coding”, “Orange”]
let arr7 = [arr[0], arr[3]];
console.log(arr7);


// 2 Arrays
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// a. Remove the last item from the vegetable array.
vegetables.pop();
console.log(vegetables); // ["carrot", "tomato", "pepper"]

// b. Remove the first item from the fruit array.
fruit.shift();
console.log(fruit); // ["apple", "orange", "watermelon"]

// c. Find the index of "orange."
var orangeIndex = fruit.indexOf("orange");
console.log(orangeIndex); // 1

// d. Add that number to the end of the fruit array.
fruit.push(orangeIndex);
console.log(fruit); // ["apple", "orange", "watermelon", 1]

// e. Find the length of the vegetable array.
var vegLength = vegetables.length;
console.log(vegLength); // 3

// f. Add that number to the end of the vegetable array.
vegetables.push(vegLength);
console.log(vegetables); // ["carrot", "tomato", "pepper", 3]

// g. Put the two arrays together into one array. Fruit first. Call the new array "food".
var food = fruit.concat(vegetables);
console.log(food); // ["apple", "orange", "watermelon", 1, "carrot", "tomato", "pepper", 3]

// h. Remove 2 elements from your new array starting at index 4.
food.splice(4, 2);
console.log(food); // ["apple", "orange", "watermelon", 1, "pepper", 3]

// i. Reverse your array.
food.reverse();
console.log(food); // [3, "pepper", 1, "watermelon", "orange", "apple"]

// j. Turn the array into a string.
var foodString = food.join(", ");
console.log(foodString); // "3, pepper, 1, watermelon, orange, apple"
