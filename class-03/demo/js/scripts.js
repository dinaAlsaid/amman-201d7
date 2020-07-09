'use strict';

// loops -> a control structure or statment = used to repate a given section of code

// for (var counter = 0; counter <= 10; counter++) {
//     // the counter as long as it is less than 10 loop and add to it

//     // var counter: indecator or a counter
//     // condtition that checks 
//     // counter++
//     // counter = counter + 1;

//     console.log('Our counter is at: '+counter);    
//     // if (counter === 5){
//     //     console.log('5 has been found lets stop!')
//     //     break;
//     // }
// }

// var myArray = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
// console.log(myArray);
// console.log(myArray[2]); // the value from the array from the index that is number 2


// var myStringArray = ['Hamza','Marah', 'DIna', 'Ahmad'];

// console.log(myStringArray);
// console.log(myStringArray[0]); // the value from the array from the index that is number 0
// console.log(myStringArray[2]); // the value from the array from the index that is number 2
// // var dualArray = [1,2,3,'Hamza', 'Ahamd'];
// // console.log(typeof(myArray));

// // 0 1 2 3 
// for (var index = 0; index < myArray.length; index++) {
//     // translates to index = 1 + index
//     // index = 1 + 0 = 1
//     // index = 1 + 1 = 2
//     // index = 1 + 2 = 3
//     // index = 1 + 2 = 3
//     console.log(myArray[index]);
// }

// while 

// var counter = 1;
// while (counter <= 10) {
//     console.log(counter);
//     // counter ++;
//     counter = counter + 1;
// }

// var isNotCorrect = true;
// while (isNotCorrect) {
//     var answer = prompt('What is my name').toLowerCase();

//     if (answer === 'tamim'){
//         isNotCorrect = false;
//         break;
//     }

// }


// do while 


// do {
//     var number = prompt('Enter an Odd number');

// } while (number % 2 === 0);

// var aFalseValue = false

// do {
//     alert('The code executes at least once');
// } while (aFalseValue);


// false values
// var falseVariable; // undefined variable
// var falseVariable = 0; // false
// var falseVariable = ''; // false
// var falseVariable = 10/'a' // Nan  not a number false value
// var falseVariable = false 
// var falseVariable = null 
// if(falseVariable){
//     console.log('its not empty');
// } else {
//     console.log('false value');
// }


// true truth values
// var truthVariable = true; 
// var truthVariable = 13; // defined variable
// var truthVariable = '   '; // not an empty string // white space is concidered a charachter
// var truthVariable = 10/5; // 


// if(truthVariable){
//     console.log('its not empty');
// } else {
//     console.log('it is undefined ');
// }


// array elements sum
// var sum=0;  // defined a variable and initialized it
// var myArray = [12, 13, 5, 3, 8];
// for(var i=0; i < myArray.length; i++){
//     sum = sum + myArray[i];
//     console.log(sum);
// }
// console.log('Final Sum '+ sum);

// bayan and salsabeel's answer
// index = index +2 
// index +=2;
// var myArray = [12, 13, 5, 3, 8];
// for (var index = 0; index < myArray.length; index=index+2) {
//     console.log(myArray[index]);
// }

// Mohd al fhaom and osama's answer
/**
 * index = 0 at index 0 the value is 12
 * logs array[0] will log 12
 * index = 0 + 1 = 1
 * index = 1 + 1 = 2 
 * logs array[2] = 5
 * index = 2 + 1 = 3 
 * index = 3 + 1 = 4
 * log array[4] = 8
 */
// var myArray = [12, 13, 5, 3, 8, 10, 20];
// for (var index = 0; index < myArray.length; index++) {
//     console.log(myArray[index]);
//     index = index + 1;
// }




// var hamzasArr = ['a','b','c'];
// console.log(hamzasArr);
// for (var index = 0; index < hamzasArr.length; index++) {
//     if (hamzasArr[index] ==='a') {
//         console.log(hamzasArr[index]);
//     }    
// }

// console.log(hamzasArr[0]);
// console.log(hamzasArr[1]);
// console.log(hamzasArr[2]);