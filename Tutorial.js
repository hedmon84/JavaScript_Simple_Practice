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
var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
};

ourDog.name = "Happy Camper";

// console.log(ourDog.name);

//Add New Properties to an Object

var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
};

ourDog.bark = "bow-wow"; // add new propertie

// console.log(ourDog);

//Delete Properties From an Object

var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
};

delete ourDog.bark;

// console.log(ourDog);

//Using Objects for Lookups

function phoneticLookup(val) {
  var result = "";

  var Lookup = {
    alpha: "adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  result = Lookup[val];

  return result;
}

// console.log(phoneticLookup("bravo"));

//Testing Objects For Properties

var myObj = {
  gift: "Pony",
  pet: "Kitten",
  bed: "Sleigh",
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}

// console.log(checkObj("gift"));

//Manipulating Complex Objects

var myMusic = [
  {
    artist: "Billy joel",
    title: "Piano man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Beau Carnes",
    title: "Cereal Man",
    release_year: 2003,
    formats: ["Youtube"],
    gold: true,
  },
];

// console.log(myMusic[1]);

//Accessing Nested Objects

var myStorage = {
  car: {
    inside: {
      glove_box: "maps",
      passenger_seat: "Crumbs",
    },
    Outside: {
      trunk: "jack",
    },
  },
};

var gloveBoxContents = myStorage.car.inside.glove_box;

// console.log(gloveBoxContents);

//Accessing Nested Arrays

var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },

  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

var secondTree = myPlants[1].list[1];

// console.log(secondTree);

//Record Collection

var collection = {
  2548: {
    album: "Slippery When wet",
    artist: "Bon Jovi",
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },

  5439: {
    album: "ABBA Gold",
  },
};

// keep a copy of the collection for test
var collectionCopy = JSON.parse(JSON.stringify(collection)); // create a copy of the object

// update
function updateRecords(id, prop, value) {
  if (value == "") {
    delete collection[id][prop];
  } else if (collection[id]) {
    console.log("ID on the objecto collection");
    if (prop === "tracks") {
      collection[id][prop] = collection[id][prop] || [];
      collection[id][prop].push(value);
    } else {
      collection[id][prop] = value;
    }
  } else {
    console.log(" Error No ID Found");
  }

  return collection;
}

//console.log(collection[1245].artist);
// console.log(updateRecords(5439, "tracks", ""));

//Iterate with Loops

var myArray = [];
var i = 0;
while (i < 5) {
  myArray.push(i); // its the same as myAssay[i] = i;
  i++;
}

// console.log(myArray);

//Iterate with For Loops
var myArray = [];
var i = 0;
for (var i = 0; i < 5; i++) {
  myArray.push(i);
}

// console.log(myArray);

//Iterate Odd Numbers with a for Loop

var ourArray = [];

// for (var i = 0; i < 10; i += 2) {
//   ourArray.push(i);
// }

// console.log(ourArray);

//odds
for (var i = 1; i < 10; i += 2) {
  ourArray.push(i);
}

// console.log(ourArray);

//Count BackWards with a for Loop

var myArray = [];
for (var i = 10; i > 0; i -= 2) {
  myArray.push(i);
}

// console.log(myArray);

//Iterate Through an Array with a For Loop

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// console.log(ourTotal);

//Nesting For Loops

function multiplyAll(arr) {
  var product = 1;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
}

var product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

// console.log(product);

//Iterate with Do..while Loops

var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5);

// console.log(i, myArray);

//Profile Lookup

var contacts = [
  {
    firstName: "Akira",
    lastName: "latine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["IntriGuing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "vos",
    number: "Unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function loopUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      console.log("*contact Found*");
      return contacts[i][prop] || "*Prop Not Found*";
    }
  }

  return "no sush contact";
}

// console.log(loopUpProfile("Sherlock", "likes"));

//Generate Random Fractions

function randomFraction() {
  return Math.random();
}

// console.log(randomFraction());

//Generate Random Whole Numbers

function randomWholeNum() {
  return Math.floor(Math.random() * 100);
}

// console.log(randomWholeNum());

//Generate Random Whole Numbers Within a Range

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15);

// console.log(myRandom);

//Use The parseInt Function

//Convert to Int
function convertToInterger(str) {
  return parseInt(str);
}

// console.log(convertToInterger("56"));

//Use the parseInt Function with a Radix
// binary conversion
function convertToInterger(str) {
  return parseInt(str, 2);
}

// console.log(convertToInterger("10011"));

//Use the Conditional (Ternary) Operator

function checkEqual(a, b) {
  // condition ? statement-if-true : statement-if-false

  return a === b ? true : false;

  // if (a === b) {
  //   return true;
  // } else {
  //   return false;
  // }
}

// console.log(checkEqual(1, 1));

//Use Multiple Conditional (Ternary) Operators

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

// console.log(checkSign(0));

//Differences Between the var and let Keywords

let catName = "Quincy";
let quote;

catName = "Beau";

function catTalk() {
  "Use Strict";

  catName = "Oliver";
  return (quote = catName + "Says Meow!");
}

// console.log(catTalk());

//Compare Scope of the Var and let Keywords

function checkScope() {
  "use strict";

  let i = "function scope";

  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }

  console.log("Function scope i is: ", i);
  return i;
}

// checkScope();

//Declare a Read-Only Variable with the const keyword

function printManyTimes(str) {
  "use strict";

  const SENTENCE = str + "is cool!";

  // sentence = str + "is amazing!";

  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }
}
// printManyTimes("freeCodeCamp");

//Mutate an Array Declared with const

const s = [5, 7, 2];

function editIntPlace() {
  "use strict"; // catch coding mistakes

  //s = [2, 5, 7];
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}

// editIntPlace();

// console.log(s);

//Prevent Object Mutation

function freezeObject() {
  const MATH_CONSTANT = {
    PI: 3.14,
  };

  Object.freeze(MATH_CONSTANT);

  try {
    MATH_CONSTANT.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANT.PI;
}

// const PI = freezeObject();

// console.log(PI);

//Use Arrows Functions to write Concise Anonymous Functions

//Anonymous Function doesnt have a name they assign the return to a variable
var magic = function () {
  return new Date();
};

//Anonymous function to arrow functiom

// var magic = () => {
//   return new Date();
// };

// //arrow function shortcut
// const magic = () => new Date();

// Write Arrow Functions with Parameters

//Anonymous function
// var myContact = function (arr1, arr2) {
//   return arr1.concat(arr2);
// };

//Arrow Function
//concat to concatenar
var myContact = (arr1, arr2) => arr1.concat(arr2);

// console.log(myContact([1, 2], [3, 4, 5]));

//Write Higher Order Arrow Functions map, filter and reduce

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = arr => {
  const squaredIntergers = arr
    .filter(num => Number.isInteger(num) && num > 0)
    .map(x => x * x);
  return squaredIntergers;
};

const squaredIntergers = squareList(realNumberArray);
// console.log(squaredIntergers);

//Write Higher Order Arrow Functions

const increment = (function () {
  return function increment(number, value = 1) {
    return number + value;
  };
})();

// console.log(increment(5, 2));
// console.log(increment(5));

//Use the rest Operator with Function Parameters

const sums = (function () {
  return function sums(...args) {
    // const args = [x, y, z]; its the same ...args
    return args.reduce((a, b) => a + b, 0); //sume all
  };
})();

// console.log(sums(1, 2, 3, 5));

//Use the Spread Operator to Evalute Arrays In-Place

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

(function () {
  arr2 = [...arr1];
  arr1[0] = "potato";
})();

// console.log(arr2);

//Use Destructive Assigment to Assign Variables from Objects
var voxel = { x: 3.6, y: 7.4, z: 6.54 };

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const { x: aaa, y: bbb, z: ccc } = voxel; // a = 3.6, b = 7.4, c 6.54

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79,
};

function getTempOfTmrw(AVG_TEMPERATURES) {
  "use strict";

  const { tomorrow: getTempOfTomorrow } = AVG_TEMPERATURES; // pass the value of the object to  getTempOfTomorrow

  return getTempOfTomorrow;
}

// console.log(getTempOfTmrw(AVG_TEMPERATURES));

//Destructuring Assigment with Nested Object

const LOCAL_FORECAST = {
  today: { min: 73.3, max: 84.6 },
  tomorrow: { min: 73.3, max: 84.6 },
};

function getMaxOFTmrw(forecast) {
  "use strict";

  const {
    today: { max: maxOfTomorrow },
  } = forecast;

  return maxOfTomorrow;
}

// console.log(getMaxOFTmrw(LOCAL_FORECAST));

//Use Destructuring Assigment tp Assign Variables From Arrays
const [zz, xx, , yy] = [1, 2, 3, 4, 5, 6];

// console.log(zz, xx, yy);

let n = 8,
  v = 6;

(() => {
  "use strict";
  [n, v] = [v, n];
})();

// console.log(n);
// console.log(v);

//Use Destructuring Assigment with the Rest Operator

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
  const [, , ...arr] = list;

  return arr;
}

const arr = removeFirstTwo(source);
// console.log(arr);
// console.log(source);

//Use Destructuring Assigment to Pass an Object as a Functions Parameters

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const half = (function () {
  return function half({ max, min }) {
    //use {} inside just for call the parameters we need
    return (max + min) / 2.0;
  };
})();

// console.log(stats);
// console.log(half(stats));

//Create Strings using Template Literals

const person = {
  name: "Zodiac Hasbro",
  age: 56,
};

//Template Literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}! 
I am  ${person.age} years old.`;

// console.log(greeting);

//Coding challenge

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dub-keys"],
};

function makeList(arrs) {
  const resultDisplayArray = [];

  for (let i = 0; i < arrs.length; i++) {
    resultDisplayArray.push(`<li class="text-warning> ${arrs[i]} </li>`);
  }
  return resultDisplayArray;
}

const resultDosplayArray = makeList(result.failure);

// console.log(resultDosplayArray);

//Write Concise Object Literal Declarations Using  Simple Fields

const createPerson = (name, age, gender) => ({ name, age, gender });
// console.log(createPerson("zodiac Hasbro", 56, ",male"));

//write Concise Declarative Functions

const bicycle = {
  gear: 2,
  setgear(newGear) {
    "use strict";
    this.gear = newGear;
  },
};

bicycle.setgear(3);
// console.log(bicycle.gear);

//Use class Syntax to Define a Constructor Function
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}

var zeus = new SpaceShuttle("Jupiter");
var zeus = new SpaceShuttle("venus");
// console.log(zeus.targetPlanet);

//Use getters and setters to Control Access to an Object  and acces to private variables
class Book {
  constructor(author) {
    this._author = author;
  }

  //getter

  get writer() {
    return this._author;
  }

  //setter

  set writer(updateAuthor) {
    this._author = updateAuthor;
  }
}

//challenge
function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = 5 / 9 + (temp - 32);
    }

    get temperature() {
      return this._temp;
    }

    set temperature(updatedTemp) {
      this._temp = updatedTemp;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

// console.log(temp);

//Understand the Differences Between import and Require
//check files index.js and index.html
