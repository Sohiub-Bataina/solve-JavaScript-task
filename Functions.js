"use strict"
function stringToArray(str) {
    return str.split(" ");
}

console.log(stringToArray("Orange Jordan")); // ["Orange", "Jordan"]
function hidePhoneNumber(phoneNumber) {
    return phoneNumber.slice(0, 7).replace(/[0-9]/g, '*') + phoneNumber.slice(7);
}

console.log(hidePhoneNumber("0776807777")); // *******777
function hideEmail(email) {
    let [local, domain] = email.split("@");
    return local.slice(0, 6) + "…@" + domain.split(".")[0] + ".com";
}

console.log(hideEmail("orange_academy@orange.jo")); // orange…@orange.com
function capitalizeFirstWord(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstWord("coding academy by orange")); // Coding academy by orange
function capitalizeEachWord(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalizeEachWord("coding academy by orange")); // Coding Academy By Orange
function flipNumber(num) {
    return parseInt(num.toString().split("").reverse().join(""), 10);
}

console.log(flipNumber(92485)); // 58429
function swapWithTemp(a, b) {
    let temp = a;
    a = b;
    b = temp;
    console.log("a =", a, ", b =", b);
}

swapWithTemp(3, 4); // a = 4, b = 3
function swapWithDestructuring(a, b) {
    [a, b] = [b, a];
    console.log("a =", a, ", b =", b);
}

swapWithDestructuring(3, 4); // a = 4, b = 3
function swapWithArithmetic(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("a =", a, ", b =", b);
}

swapWithArithmetic(3, 4); // a = 4, b = 3
function removeCharacter(str, index) {
    return str.slice(0, index) + str.slice(index + 1);
}

console.log(removeCharacter("Orange", 3)); // Orage
function mergeStrings(str1, str2) {
    return str1.slice(1) + str2.slice(1);
}

console.log(mergeStrings("lora", "inge")); // orange
function isCharFirstOrLast(char, str) {
    return str[0] === char || str[str.length - 1] === char;
}

console.log(isCharFirstOrLast("o", "orange")); // true
console.log(isCharFirstOrLast("z", "orange")); // false
function stringToWordsArray(str) {
    return str.split(" ");
}

console.log(stringToWordsArray("Coding Academy by Orange")); // ["Coding", "Academy", "By", "Orange"]
function reorderAlphabetically(str) {
    return str.split("").sort().join("");
}

console.log(reorderAlphabetically("Orange")); // aegnor
