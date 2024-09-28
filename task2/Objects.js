"use strict"
// 1.Create an object and add a new property to it using bracket notation. 

let person = { name: "Adam", age: 25 };
person["gender"] = "male"; 

console.log(person,"1.Create an object and add a new property to it using bracket notation. "); 

// 2. Use the Object.values() method to get an array of an object's values. 

let person1 = { name: "Adam", age: 25, gender: "male" };
let valuesArray = Object.values(person1);

console.log(valuesArray , "2. Use the Object.values() method to get an array of an object's values. "); 


// 3. Use the Object.entries() method to get an array of key-value pairs for an object. 

let person22 = { name: "Adam", age: 25, gender: "male" };
let entriesArray = Object.entries(person22);

console.log(entriesArray , "3. Use the Object.entries() method to get an array of key-value pairs for an object."); 



// 4. Use the Object.assign() method to merge two objects. 


let person111 = { name: "Adam", age: 25 };
let person222 = { gender: "male" };
let mergedPerson = Object.assign({}, person111, person222);

console.log(mergedPerson," 4. Use the Object.assign() method to merge two objects. "); 


// 5. Use the Object.seal() method to prevent changes to an object's properties but allows changes to its values. 

let person4 = { name: "Adam", age: 25 };
Object.seal(person); // منع إضافة أو حذف خصائص جديدة

person4.name = "sohiub"; // تغيير قيمة موجودة
person4.gender = "male"; // لن يتم إضافة خاصية جديدة

console.log(person4," 5. Use the Object.seal() method to prevent changes to an object's properties but allows changes to its values. "); 




