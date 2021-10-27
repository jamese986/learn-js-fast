//Declaring userAge
var userAge = 23;
console.log(userAge);

//Updating userAge
userAge = 33;
console.log(userAge);

var num1 = 5;
console.log(num1 + 10);

var string1 = '5';
console.log(string1 + 10);

var a = 5;
var b = 10;

console.log(a>b);
console.log(b>a);

var userInfo = ["Peter, 21, 1201"];
userInfo[0] = "John";
console.log(userInfo);

var demoArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("demoArray = " + demoArray);
console.log('\n');
console.log(demoArray.length);

demoArray.length = 13;
console.log('\n');
console.log(demoArray.length);
console.log("demoArray = " + demoArray);

demoArray.length = 9;
console.log("\ndemoArray = " + demoArray);

var newLength = demoArray.push("New Item");
console.log("\nNew Length = " + newLength);
console.log("demoArray = " + demoArray);

var itemPopped = demoArray.pop();
console.log("\nitemPopped = " + itemPopped);
console.log("demoArray = " + demoArray);

var newLength = demoArray.unshift("Front Item");
console.log("\nNew Length = " + newLength);
console.log("demoArray = " + demoArray);

var itemShifted = demoArray.shift();
console.log("\nItem Shifted = " + itemShifted);
console.log("demoArray = " + demoArray);

var itemsRemoved = demoArray.splice(1, 2);
console.log("\nitemsRemoved = " + itemsRemoved);
console.log("demoArray = " + demoArray);

var secondDemoArray;
secondDemoArray = demoArray.slice(2, 6);
console.log("\ndemoArray = " + demoArray);
console.log("secondDemoArray = " + secondDemoArray);

console.log("\n");
console.log(demoArray.indexOf(50));
console.log(demoArray.indexOf(21));

var thirdDemoArray = [5, 1, 14, 100, 10, 19];
console.log("\nBefore sorting = " + thirdDemoArray);
thirdDemoArray.sort();
console.log("After sorting = " + thirdDemoArray);

thirdDemoArray.sort(function(a, b){return a - b});
console.log("\nSorting in ascending order = " + thirdDemoArray);
thirdDemoArray.sort(function(a, b){return b - a});
console.log("Sorting in descending order = " + thirdDemoArray);

// 3.4 Operators

var x = 5, y = 10;
console.log("x = " + x + ", y = " + y);

var p = 5, q = 2;

//Addition
console.log(p+q);
//You’ll get 7 as the output

//Subtraction
console.log(p-q);
//You’ll get 3 as the output

//Multiplication
console.log(p*q);
//You’ll get 10 as the output

//Division
console.log(p/q);
//You’ll get 2.5 as the output

//Remainder: gives the remainder when p is divided by q
console.log(p%q);
//You’ll get 1 as the output because 5 divided by 2 gives a remainder of 1

//Exponent: gives the value of p raised to the power of q
console.log(p**q);
//You’ll get 25 as the output because 5 to the power of 2 is 25
