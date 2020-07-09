'use strict';
/////////////////////////////////////
// Problem 1 (this is your demo that we'll solve in class)

// Write your code here
function sum(a, b) { 

    var sum1= a+b;
    var returnArray=[sum1, "The sum of "+a+" and "+b+" is "+sum1+"."];
    return returnArray;

}

// Here is the test for sum(); uncomment it to run it
// testSum(4, 7);

// Problem 2

// Write your code here
function multiply(a, b) { //eslint-disable-line
    var product= a*b;
    var returnArray=[product, "The product of "+a+" and "+b+" is "+product+"."];
    return returnArray;


}

// Here is the test for multiply(); uncomment it to run it
// testMultiply(5,9);

// Problem 3
// Write your code here
function sumAndMultiply(a, b, c) { 
    var sum1 = a+b+c;
    var product = a*b*c;
    var returnArray =[sum1,product,a+" and "+b+" and "+c+" sum to "+sum1+"." , "The product of "+a+" and "+b+" and "+c+" is "+product+"."]
    return returnArray;
}

// Here is the test for sumAndMultiply(); uncomment it to run it
// testSumAndMultiply(4,7,5);

// Problem 4

// Write your code here
var testArray = [2, 3, 4]; 

function sumArray(sumArr) { 
    var sum1 = 0;
    for (var i=0; i < sumArr.length ; i++ ){
        sum1 = sum( sum1, sumArr[i])[0];
    }

    var sumString="";
    for (var c=0; c < sumArr.length ; c++ ){
        sumString = sumString + sumArr[c];

        if(c !== sumArr.length-1){
            sumString+=",";
        }


    }

    var returnArray = [sum1 , sumString+' was passed in as an array of numbers, and '+sum1+' is their sum.'];
    return returnArray;
}

// Here is the test for sumArray(); uncomment it to run it

// testSumArray(testArray);

// Problem 5

// Write your code here
function multiplyArray(multArr) { 
    var product = 1;
    for (var i=0; i < multArr.length ; i++ ){
        product = multiply( product, multArr[i])[0];
    }
    
    var multString="";
    for (var c=0; c < multArr.length ; c++ ){
        multString = multString + multArr[c];

        if(c !== multArr.length-1){
            multString+=",";
        }


    }

    var returnArray = [product , "The numbers "+multString+" have a product of "+product+"."];
    return returnArray;


}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyArray(testArray);


//* STRETCH GOAL: Problem 6

// Write your code here
var testDynamicArray = [1,2,3,4,5]; 

function multiplyAnyArray(dynamicArray) { 
    var product = 1;
    for (var i=0; i < dynamicArray.length ; i++ ){
        product = multiply( product, dynamicArray[i])[0];
    }
    
    var multString="";
    for (var c=0; c < dynamicArray.length ; c++ ){
        multString = multString + dynamicArray[c];

        if(c !== dynamicArray.length-1){
            multString+=",";
        }

    }
    var returnArray = [product , "The numbers "+multString+" have a product of "+product+"."];
    return returnArray;
}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

