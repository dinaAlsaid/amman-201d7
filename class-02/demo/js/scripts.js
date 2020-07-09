"use strict";

var carModel = 'Dodge'; // string - text variable
var carModelYear = 1968; // Numeric
var availableInJordan = true; // true or false
// int numbers 1, 2, 3, 4, 5
// double/ float fraction numbers 1.2, 0.5 

console.log('Type of carModel model variable is ' + typeof (carModel));
console.log('Type of carModelYear variable is ' + typeof (carModelYear));
console.log('Type of my availableInJordan variable is ' + typeof (availableInJordan));

var answer1 = confirm('Is Dodge an American car?');

console.log('User answer was ' + answer1);

// conditional statment 

if (answer1) {
    console.log('Correct Answer');
} else {
    console.log('Wrong answer');
}

console.log('our code continues');

// Logical Operators:

// AND = &&
// OR = ||
// NOT = !

var firstBoolean = true;
var secondBoolean = false;
var thirdBoolean = true;

// if (firstBoolean && secondBoolean){
//     console.log("And operator worked");
// } 

// if (secondBoolean || thirdBoolean){
//     console.log("OR operator worked");
// }

// if(!thirdBoolean){
//     console.log("Not operator worked");
// }

if (firstBoolean && secondBoolean) {
    // if true and false
    console.log("And operator worked");
} else if (secondBoolean || !thirdBoolean) {
    // else if false or (not true = false)
    console.log("OR operator worked");
} else if (thirdBoolean) {
    console.log("Not operator worked");
} else {
    console.log("Nothing is true")
}


// Conditional operations
// ==
// ===
// !=
// !==
// < 
// >
// <=
// >=

// var numberOne = 1;

// if (numberOne === '1'){
//     console.log('Correct');
// } else {
//     console.log('wrong')
// }

var myNumber = 26;
console.log(myNumber > 30);
if (myNumber > 30) {
    console.log("your number is larger than 30");
} else {
    console.log('your number is not larger than 30');
}

console.log(myNumber < 30);
if (myNumber < 30) {
    console.log("your number is less than 30");
} else {
    console.log('your number is not less than 30');
}


// even numbers: // 2, 4 , 6, 8 , 10 ...etc
// odd numbers: // 1, 3 ,5, 7 , 9 ..etc
// 
var mySecondNumber = 35;
if (mySecondNumber % 2 === 0) {
    console.log('This Number is even');
} else {
    console.log('This number is odd');
}

var myThirdNumber = -3;

if (myThirdNumber < 0) {
    console.log("it is negative");
} else {
    console.log("it is positive")
}

var favCar = prompt('What is your favorite car?');

// favCar.toLocaleUpperCase();
switch (favCar.toLocaleLowerCase()) {
    case 'dodge':
    case 'jeep':
        console.log('Your favorite car is an american car');
        break;
    case 'bmw':
        console.log('Your favorite car is an european car');
        break;
    case 'mitsubishi':
        console.log('Your favorite car is a japanses car');
        break;
    default:
        console.log('Default statment');
        break;
}