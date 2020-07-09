'use strict';
// function : consists of bunch of code written that will execute when you call it


// declaration functions

var staticName = 'Marah';
var numbervalue = 12;
var two = 'the value of variable is two';

function helloUserName(name){
    // do a check if the user input is a string and not a number
    if (typeof(name) === 'string'){
        console.log('Hello '+name+' to my code!');
    } else {
        alert('please enter your name!');
    }
}

function helloWorld(){
    console.log('Hello World');
}

function customAlert(name){
    alert('please try again '+ name);
}

function miltiplication(numOne, numTwo){
    return numOne*numTwo;
}

function checkName(name){

    // while loop
    // while (name !== 'tamim') {
    //     alert('your name is wrong');
    //     name = prompt('Please enter your name');
    // }
    // for loop

    var correct = false;
    var arrayOfUsers = ['Bayan', 'Hamza', 'Abdallah', 'Ahmad']; 
    for (var trails = 1; trails < 3; trails++) { //  loop for the number of trials 
        for (var index = 0; index < arrayOfUsers.length; index++) { // loop the array
            if (name == arrayOfUsers[index]) {
                correct = true;
                break;
            }            
        }
        if (correct) {
            alert('You name is on the list');
            break;
        } else {
            alert('you name is not on the list please try again');
        }
        name = prompt('Please enter your name');
    }
}

// alert('Alert Me!');
// call (invoke) the function of hello world  
// helloWorld();
// invoking the function 
// helloUserName(userName);


// Anonymous function - Expression Functions

var sumFunction = function(numOne, numTwo){
    var one = 'the value of this variable is one';
    console.log(two);
    console.log('Anonymous function');
    return numOne+numTwo;
}
// console.log(one);
// console.log(sumFunction(2,2));

// var total =  miltiplication(2,2);
// console.log(total);

var userName = prompt('Please enter your name');
checkName(userName);
