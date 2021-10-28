console.log(2===2);
console.log(2===3);

var input = prompt("Please enter a number: ");

if (input === '0') {
    console.log("Hello");
    console.log("You entered 0");
} else if (input > 0) {
    console.log("You entered a positive number");
}

var num1;
var input2 = prompt("Please enter a letter: ");
num1 = (input2 === 'A'? 12 : 13);
console.log(num1);

console.log(input2 === 'A' ? "This is task 1" : "This is task 2");

var grade = prompt("Enter your grade: ");
switch (grade) {
    case "A+":
    case "A":
        console.log("Distinction");
        break;
    case "B":
        console.log("B Grade");
        break;
    case "C":
        console.log("C Grade");
        break;
    default:
        console.log("Fail");
        break;
}

var marks = prompt("Please enter your marks: ");

switch (true) {
    case marks >= 75:
        console.log("Distinction");
        break;
    case marks >= 65:
        console.log("Good");
        break;
    case marks >= 50:
        console.log("Pass");
        break;
    default:
        console.log("Fail");
        break;
}

var myNumbers = [10, 20, 30, 40, 50];
var j;
for (j = 0; j < myNumbers.length; j++) {
    console.log(myNumbers[j]);
}

var counter = 5;
while (counter > 0) {
    console.log("Counter = " + counter);
    counter = counter - 1;
}

var counter = 100;
do {
    console.log("Counter = " + counter);
    counter++;
} while (counter<0);

var j = 0;
var i;
for (i = 0; i < 5; ++i) {
    j = j + 2;
    console.log('i = ' + i + ', j = ' + j);
    if (j === 6)
        break;
}

var j = 0;
var i;
for (i = 0; i < 4; ++i) {
    j = j + 2;
    console.log('\ni = ' + i + ', j = ' + j);
    if (j === 6)
        continue;
    console.log("Everything from here is skipped when j = 6");
    console.log("Including this statement...");
    console.log("and this statement...");
}

try {
    display("My name is Jamie");
} catch (err) {
    console.log(err.name + ": " + err.message);
} finally {
    console.log("The finally block is always executed");
}

console.log("Program proceeds after try...catch...finally block");


var num = 1.23456;

try {
    //eval('5 * ');
    //console.log(num.toFixed(101));
    //console.log(x + y);
    //console.log(num.toUpperCase());
    //console.log(decodeURI('http://www.example.com/hello%2world.html'));
} catch (err) {
    if (err instanceof SyntaxError) {
        console.log("Syntax Error");
    } else if (err instanceof EvalError) {
        console.log("Eval Error");
    } else if (err instanceof RangeError) {
        console.log("Range Error");
    } else if (err instanceof ReferenceError) {
        console.log("Reference Error");
    } else if (err instanceof TypeError) {
        console.log("Type Error");
    } else if (err instanceof URIError) {
        console.log("URI Error");
    } else
        console.log("Unknown Error");
}
