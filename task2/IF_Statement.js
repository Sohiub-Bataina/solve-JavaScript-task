"use strict"
// 1.Check if a variable named "password" is at least 8 characters long and display a message "Your password is strong" if it is. 

let password = "mypassword123";

if (password.length >= 8) {
    console.log("Your password is strong","// 1.Check if a variable named password is at least 8 characters long and display a message Your password is strong if it is. ");
}


// 2. Check if a variable named "color" is either "red", "green", or "blue" and display a
// message "color is a primary color" if it is. 

let color = "red";

if (color === "red" || color === "green" || color === "blue") {
    console.log("color is a primary color","// 2. Check if a variable named color is either red, green, or blue and display a message color is a primary color if it is.");
}


// 3. Check if a variable named "y" is a negative number and display a message "y is a negative number" if it is. 

let y = -5;

if (y < 0) {
    console.log("y is a negative number","3. Check if a variable named y is a negative number and display a message y is a negative number if it is. ");
}


// 4. Check if a variable named "list" is an array and display a message "It's an array" if it is. 

let list = [1, 2, 3];

if (Array.isArray(list)) {
    console.log("It's an array"," 4. Check if a variable named list is an array and display a message It's an array if it is. ");
}


