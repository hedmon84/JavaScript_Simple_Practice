// comments /**/

/****
 Code OUTPUT

 \' single quote
 \" double quote
 \\ blackslash
 \n newline
 \r carriage return
 \t tab
 \b backspace
 \f form feed
 
****/

/*Data Types:
undefined, null, boolean, string, symbol, number and object
*/

var myName = "Hedmon";

myName = 8;

let outName = "freeCodeCamp";

const pi = 3.14;

// Storing Values wirh Assigment Operators

// var a;
// var b = 2;
// console.log(a);
// a = 7;

// b = a;

// console.log(a);

// Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a";

// Do not Change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";
// console.log(a);
// console.log(b);
// console.log(c);

// Case Sensitivity in Variables
// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assigments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// length of a string

var strinlenght = 0;
var myName = "hedmon";

strinlenght = myName.length;

//console.log(strinlenght);

//Bracket Notation to Find First Character in String
var firstLetterOfFirstName = "";
var firstName = "Ada";
firstLetterOfFirstName = firstName[0];

// console.log(firstLetterOfFirstName);

//String Immutability

var myStr = "jello word";
// console.log(myStr);
myStr = "Hello word";
// console.log(myStr);

//Bracket Notation to Find NTH last Character in String
var lastName = "Adah";
var lastLetterOfFirstName = lastName[lastName.length - 1];
// console.log(lastLetterOfFirstName);

// Word Blanks function

function WordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result +=
    "The " +
    myAdjective +
    " " +
    myNoun +
    " " +
    myVerb +
    " to the store " +
    myAdverb;
  return result;
}

// console.log(WordBlanks("dog", "big", "ran", "quickly"));
// console.log(WordBlanks("bike", "slow", "flew", "slowly"));

//Store Multiple Values with Arrays

var ourArray = ["John", 23];

// console.log(ourArray);

//Nested Array
var ourArray = [
  ["the universe", 42],
  ["everything", 101010],
];
// console.log(ourArray[0]);

//Access Array Data With Indexes
// var ourArray = [50, 60, 70];
// var ourData = ourArray[0];
// console.log(ourData);

//Modify Array Data with Indexes
var ourArray = [50, 60, 70];
ourArray[1] = 40;
// console.log(ourArray);

//Access Multi-Dimensional Arrays with Indexes
var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
var myData = myArray[2][1];
// console.log(myData);

//Manipulate Arrays With Push()
// var ourArray = ["Stimpson", "j", "cat"];
// console.log(ourArray);
// ourArray.push(["hapy", "joy"]);
// console.log(ourArray);

//Manipulate Arrays With Pop()
var ourArray = [1, 2, 3];
var removeOurArray = ourArray.pop();
// console.log(ourArray);

//Manipulate Arrays with Shift()
var ourArray = ["Stimpson", "j", ["cat"]];
var removeOurArray = ourArray.shift();
// console.log(removeOurArray);

//Manipulate Arrays with unShift() // add elment at the beginning of the array

var ourArray = ["Stimpson", "j", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
// console.log(ourArray);

//Shoppin List

var myList = [
  ["cereal", 3],
  ["milk", 2],
  ["bananas", 3],
  ["juice", 2],
  ["eggs", 12],
];

// console.log(myList);

// Write Reusable Code With Functions

function ourReusableFunction() {
  console.log("Heyya, World");
}

// ourReusableFunction();

// Passing Values to Functions with Arguments

function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}

// ourFunctionWithArgs(10, 5);

//Global Scope and Functions
// if you dont use var the variable in a function becomes global

var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal + "\n";
  }

  if (typeof oopsGlobal != "undefined") {
    output += "oopsGlobal: " + oopsGlobal;
  }

  console.log(output);
}

// fun1();
// fun2();

//Local Scope and Functions
function myLocalScope() {
  var myVar = 5;
  console.log(myVar);
}

// myLocalScope();

// console.log(myVar); error

//Global vs. Local Scope in Functions

var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}

// console.log(myOutfit());
// console.log(outerWear);

//Return a Value from a Function with Return

function minusSeven(num) {
  return num - 7;
}

// console.log(minusSeven(10));

//Understanding Undefined Valie Returned From a Function

var sum = 0;
function addThree() {
  sum = sum + 3;
}

// addThree();
// console.log(sum);

//Assignment with a Returned Value

var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// console.log(changed);

//Stand in Line

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

// console.log("Before: " + JSON.stringify(testArr)); // JSON.stringify() "convert a array to a string"
// console.log(nextInLine(testArr, 6));
// console.log("Before: " + JSON.stringify(testArr));

// Boolean Values

function welcomeToBooleans() {
  return false;
}

//Use Conditional Logic with If Statements

function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }

  return "No, It's false";
}

// console.log(ourTrueOrFalse(true));

//Comparison with the Equality Operator

function testEqual(val) {
  if (val == 3) {
    return "Equal";
  }

  return "No Equal";
}

// console.log(testEqual("3"));

//Comparison with the Strict Equality Operator

/*
3 == 3

3 === '3'   tree === do not convert de char to int so 3 === '3' is false

*/

//Practice Comparing Different Values

function CompareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }

  return "No Equal";
}

// console.log(CompareEquality("3", 3));

//Comparison whit the Inequality Operator

function testNotEqual(val) {
  if (val != 99) {
    // Comparison with the Strict Inequality Operator !==

    return "not equal";
  }

  return " Equal";
}

// console.log(testNotEqual(99));

//Comparison with the Logical And Operator grater

function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}

// console.log(testGreaterThan(101));

//Comparison with the Logical And Operator less

function testLessThan(val) {
  if (val < 25) {
    return "under 25";
  }

  if (val < 55) {
    return "under 55";
  }

  return "55 or over";
}

// console.log(testLessThan(40));

//Comparison with the Logical And Operator

function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "yes";
  }

  return "No";
}

// console.log(testLogicalAnd(51));

//Comparison with the Logical Or Operator

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outsie";
  }

  return "Inside";
}

// console.log(testLogicalOr(21));

// Else Statements

function testElse(val) {
  var result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  return result;
}

// console.log(testElse(6));

// Else If Statements

function tetstElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else return "Between 5 and 10";
}

// console.log(tetstElseIf(11));

//Chaining If Else Statements

function testChaining(val) {
  if (val < 5) return "Tiny";
  else if (val < 10) return "Small";
  else if (val < 15) return "Medium";
  else if (val < 20) return "Large";
  else return "Huge";
}

// console.log(testChaining(20));

//Golf Code

var names = [
  "Hole-In-One!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go home",
];

function golfScore(par, strokes) {
  if (strokes == 1) return names[0];
  else if (strokes <= par - 2) return names[1];
  else if (strokes == par - 1) return names[2];
  else if (strokes == par) return names[3];
  else if (strokes == par + 1) return names[4];
  else if (strokes == par + 2) return names[5];
  else if (strokes == par + 3) return names[6];
}

// console.log(golfScore(5, 8));

//Switch Statements

function caseSwitch(val) {
  var answer = "";

  switch (val) {
    case 1:
      answer = "alpha ";

      break;
    case 2:
      answer = "beta ";

      break;
    case 3:
      answer = "gamma ";

      break;
    case 4:
      answer = "delta ";

      break;

    default:
      answer = "Anything else";
      break;
  }

  return answer;
}

// console.log(caseSwitch(4));

//Multiple Identical Options in Switch Statements

function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "high";
      break;

    default:
      break;
  }

  return answer;
}

// console.log(sequentialSizes(9));

//Returning Boolean Values From Functions

function isLess(a, b) {
  return a < b;
}

// console.log(isLess(10, 15));

//Returning Early Pattern from Functions

function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// console.log(abTest(2, 2));

//Counting Cards

var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  var holdbet = "Hold";
  if (count > 0) {
    holdbet = "Bet";
  }
  return count + " " + holdbet;
}
// console.log(cc(2));
// console.log(cc("K"));
// console.log(cc(10));
// console.log(cc("A"));
// console.log(cc("J"));

//Build JavaScript Objects

var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["Everything!"],
};

var dogsName = ourDog.name;

// console.log(dogsName);

//Accessing Object Properties with Bracket Notation

var testObj = {
  "an antree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

var entreeValue = testObj["an antree"];
var drinkValue = testObj["my side"];

// console.log(entreeValue);

//Accessing Object Properties with Variables

var testObj2 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

var playerNumber = 16;
var player = testObj2[playerNumber];

// console.log(player);

//Updating Object Properties
