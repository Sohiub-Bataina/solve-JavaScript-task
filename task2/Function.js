"use strict"
// 1.Create a function that will display the smallest value in the array. 


function findSmallest(arr) {
    return Math.min(...arr); // استخدام spread syntax لإيجاد أصغر قيمة
    // تحويل المصفوفة إلى عناصر مفردة:
}

console.log(findSmallest([30, 45, 60, 7]),"1.Create a function that will display the smallest value in the array. "); 


// 2.Function that will return your string in Alphabetical order 
// ترتيب الحروف الأبجدية في سلسلة نصية:


// تستخدم split('') لتقسيم السلسلة النصية إلى عناصر فردية، حيث كل حرف يصبح عنصرًا في المصفوفة.


// تستخدم sort() لترتيب عناصر المصفوفة بترتيب أبجدي.

// join('')
// الهدف: تحويل المصفوفة المرتبة مرة أخرى إلى سلسلة نصية.

function AlphabeticalOrder(str) {
    return str.split('').sort().join('');
}

console.log(AlphabeticalOrder('hello'),"2.Function that will return your string in Alphabetical order");


// 3. Return how many words was given 

function countWords(str) {
    return str.split(' ').length;
}

console.log(countWords('hello from CodingAcademy!'),"3. Return how many words was given ");


// 4.Create function to Multiply all elements in an array by it's length 



// map() هي دالة مدمجة في JavaScript تُستخدم لإنشاء مصفوفة جديدة عن طريق تطبيق دالة معينة على كل عنصر من عناصر المصفوفة الأصلية.
// تأخذ map() دالة كمعامل، وتقوم بتطبيق هذه الدالة على كل عنصر في arr، ثم تُرجع مصفوفة جديدة تحتوي على النتائج.
// 2. num => num * length
// الهدف: تعريف دالة تستخدم لضرب كل عنصر في المصفوفة بـ length.
// كيف يعمل:
// هذه دالة سهمية (arrow function) تأخذ وسيطًا واحدًا num، والذي يمثل كل عنصر من عناصر المصفوفة أثناء تطبيق map().
// num * length تعني أنك تأخذ القيمة الحالية (num) وتضربها في length (الذي يمثل طول المصفوفة الأصلية).



function MultiplyByLength(arr) {
    let length = arr.length;
    return arr.map(num => num * length);
}

console.log(MultiplyByLength([4, 2, 5]),"4.Create function to Multiply all elements in an array by it's length ");


// 5. Create a function that will repeat each string character two times 

function doubleChar(str) {
    return str.split('').map(char => char + char).join('');
}

console.log(doubleChar('Coding'),"5. Create a function that will repeat each string character two times ");

