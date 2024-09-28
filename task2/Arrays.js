"use strict"
// 1.Use the concat() method to combine two arrays into a single array. 

let arr1=[1, 2, 3];
let arr2= [4, 5, 6];
console.log(arr1.concat(arr2),"1.Use the concat() method to combine two arrays into a single array. ");


// 2.Use the slice() method to extract a portion of an array. 

function extractPortion(arr, start, end) {
    return arr.slice(0, start).concat(arr.slice(end));
}


console.log(extractPortion([1, 2, 3, 4, 5, 6], 2, 4),"2.Use the slice() method to extract a portion of an array. ");


// 3.Use the splice() method to add and remove elements from an array.

function modifyArray(arr11, index) {
    return arr11.splice(index,2); 
}

 let arr11 = [1, 2, 3, 4, 5];
console.log(modifyArray(arr11,3),"3.Use the splice() method to add and remove elements from an array.");


// 4. Use the for...of loop to iterate through an array.

function iterateArray(arr) {
    console.log(arr.join(', '),"4. Use the for...of loop to iterate through an array.");
}

iterateArray([1, 2, 3, 4, 5]);

// 5.Create an array of numbers and use the forEach() method to print each element to the console

function iterateArray22(arr) {
    arr.forEach(value => {
        console.log(value);
    });
}

iterateArray22([1, 2, 3, 4, 5]);
console.log("// 5.Create an array of numbers and use the forEach() method to print each element to the console");