"use strict"
// 1)
function factorial_of_number( number_user){
    let factorial=1;
    for (let index = number_user; index >=1; index--) {
        factorial= factorial* index;
    }
    return factorial;
}
console.log(factorial_of_number(5)," factorial of a number");

// 2)
function fibonacci_Sequence(limit) {
    let a = 0, b = 1;
    console.log(a);  // Print the first number

    for (let i = 1; b <= limit; i++) {
      console.log(b);  // Print the next number in the sequence
      let next = a + b;
      a = b;
      b = next;
    }
  }
fibonacci_Sequence(10);

// 3)
function print_Primes(limit) {
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}

print_Primes(20); 
console.log();


// 4)
const array2D = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (let i = 0; i < array2D.length; i++) {
    for (let j = 0; j < array2D[i].length; j++) {
        console.log(array2D[i][j] + ' ');
    }
}

console.log(); // To add a newline at the end
const array = [1, 2, 3, 4, 5];

for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i] + ' '); // Print each element followed by a space
}

console.log(); // To add a newline at the end


