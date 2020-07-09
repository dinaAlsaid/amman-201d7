# Future Goals
 
 - Css can be a bit tricky to get used to 
 - That's why We need to practice!
 - [CSS Diner](https://flukeout.github.io/) is your way to go!
 
 ___


# Reset CSS

[Reset CSS](https://meyerweb.com/eric/tools/css/reset/)

A CSS Reset (or “Reset CSS”) is a short, often compressed (minified) set of CSS rules that resets the styling of all HTML elements to a consistent baseline.

In case you didn’t know, every browser has its own default ‘user agent’ stylesheet, that it uses to make unstyled websites appear more legible. For example, most browsers by default make links blue and visited links purple, give tables a certain amount of border and padding, apply variable font-sizes to H1, H2, H3 etc. and a certain amount of padding to almost everything. Ever wondered why Submit buttons look different in every browser?

Obviously this creates a certain amount of headaches for CSS authors, who can’t work out how to make their websites look the same in every browser.

Using a CSS Reset, CSS authors can force every browser to have all its styles reset to null, thus avoiding cross-browser differences as much as possible
___

# Javascript

- __Strict Mode__
  - Defines that JavaScript code should be executed in __"strict mode"__.
  - The purpose of ```use strict``` is to indicate that the code should be executed in __"strict mode"__.
  - With strict mode, you can not, for example, use undeclared variables.
  - its a less forgiven way of using the javascript language that its usual more forgiving nature.
  - Strict mode helps you to write cleaner code, like, for example, _preventing you from using undeclared variables_.

  - Strict mode is declared by adding ```"use strict";``` to the beginning of a script or a function.

  - Strict mode makes it easier to write "secure" JavaScript.

- __JavaScript Variable Types__
    - String : ```var carModel = 'Cadillac';  //string - text ```
    - Numeric : ```var carModelYear = 2015;    //Numeric```
    - Boolean :```var availableInJordan = true;  //true / false```

- __typeof()__ or __typeof__
    - It a built in the browser javascript operator that finds the type of a variable and returns a string with the type of the variable you gave it.

- __confirm()__
    - The ```confirm()``` method displays a dialog box with a specified message, along with an OK and a Cancel button.

    - Returns a boolean; ```true``` or ```false``` based on the user input of that box.

- __Conditional Statements__
    - __``Conditional statements``__ are used to perform different actions based on __``different conditions``__.
    - In JavaScript we have the following conditional statements:
        - Use ```if``` to specify a block of code to be executed, _if a specified condition is true_
        - Use `else` to specify a block of code to be executed, _if the same condition is false_
        - Use `else if `to specify a new condition to test, _if the first condition is false_
        - Use switch to specify many alternative blocks of code to be executed
- __Logicall Operators__
    - A logical operator is a symbol or word used to connect two or more expressions such that the value of the compound expression produced depends only on that of the original expressions and on the meaning of the operator.
    - Common logical operators include:
        - `AND` in Javascript `&&`
        - `OR` in javasctip `||`
        - `NOT` in javascript `!`
        - `==` 
        - `===`
        - `<` 
        - `>`
        - `<=` 
        - `>=`
    - And:
        - it only evaluates to true, when both (all) operands are true 
    - OR:
        - At least, one operand should be true so that it evaluates to True
    - Not:
        - Negates
    
    - ==:
        - equal comparesion, not strict
    - ===: 
        - equal comparesion, strict
    - `>` :
        - larger than 
    - `<` :
        - less then
    - `>=`:
        - larger than or equal to
    - `<=`:
        - less than or equal to 
    
    ___
    ## Note:
    - = is used for assigning values to a variable in JavaScript.
    - == is used for comparison between two variables irrespective of the datatype of variable.
    - === is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.
    ___
     - Logical and (`&&`) (truth) Table:

        |   x   |   y   | x and y |
        |:-----:|:-----:|:-------:|
        | false | false |  false  |
        | false |  true |  false  |
        |  true | false |  false  |
        |  true |  true |   true  |

    - Logical or (`||`) (truth) Table:

        |   x   |   y   | x and y |
        |:-----:|:-----:|:-------:|
        | false | false |  false  |
        | false |  true |  true   |
        |  true | false |  true   |
        |  true |  true |   true  |
    
    - Logical not (`!`) (truth) Table:
        | x     | not x |
        |-------|-------|
        | false | true  |
        | true  | false |

__SWITCH STATEMENT__

- The switch statement is used to perform different actions based on different conditions.

    ``
    switch(expression) {
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    default:
        // code block
    }
``
- How it works: 

    - The switch expression is evaluated once.
    - The value of the expression is compared with the values of each case.
    - If there is a match, the associated block of code is executed.
    - If there is no match, the default code block is executed.
    - When JavaScript reaches a break keyword, it breaks out of the switch block.
    - This will stop the execution of inside the block.
    - The `default` keyword specifies the code to run if there is no case match.

    - ___Note:___ its usually good to lowercase your input so you can garantee that you will always have or at least have a matching case 
        - ```yourVariable.toLowerCase()``` applied to strings
