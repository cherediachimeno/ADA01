/** Helper function code */
function problemNumber(number) {
  const problem = "\n%cProblem %d:";
  const cssRules = "color: blue; font-weight: bold";
  console.log(problem, cssRules, number);
}

// Your exercise begins here:

/*
1)
Finish this code so that getDrink is true
when thirsty is true, and getDrink is false
when thirsty is false.

hint to test the code:
console.log(thirsty, " should equal ", getDrink);
*/
problemNumber(1);
const thirsty = true;
let getDrink = null;

if (thirsty === false) {
  getDrink = false;
} else {
  getDrink = true;
}

console.log(thirsty, " should equal ", getDrink);

/*
2)
Change the light variable to "red", then "green",
then "yellow" and see what prints. Now change the
light variable to "purple". What happens?
Change the code so that only "green" says "Go." and 
random words says "Light malfunction". Red should still say 
"Stop!" and yellow should still say "Wait..." after your changes

Hint to test output:
console.log("light is ", light, " so car should ", driveCar);

problemNumber(2);
const light = "f";
let driveCar = null;
if (light === "red") {
  driveCar = "Stop!";
} else if (light === "yellow") {
  driveCar = "Wait...";
} else  if (light === "green") {
  driveCar = "Go.";
} else{
  driveCar = "Light malfunction";
}

console.log("light is ", light, " so car should ", driveCar);

3)
Write the code for this situation:
If the temperature is colder than
15 degrees, the person should put
a sweater.
*/
problemNumber(3);

let t = 13;

/*
if (t < 15 ){
  console.log("Put a sweater on, please.");
}
*/
console.log(t < 15 ? "Put a sweater on, please." : null);

/*
4)
Define a number and check if it odd or even.
*/
problemNumber(4);

let num = 4;

console.log(num % 2 === 0 ? "Even number" : "Odd number");

/*
if (num % 2 === 0){
  console.log("Even number");
} else {
  console.log("Odd number");
}
*/

/*
5)
Write the code for this situation:
If the person is vegan, their dietary
restrictions are "no meat or dairy".
If the person is vegetarian, their
dietary restrictions are "no meat".
If the person is neither, their 
dietary restrictions are nothing (null).
*/
problemNumber(5);

const person = "f";
diet = null;

if (person === "vegan") {
  diet = "no meat or dairy";
} else if (person === "vegetarian") {
  diet = "no meat";
} else {
  diet = null;
}

console.log("Person is " + person + ", so dietary restrictions are: " + diet);

/*
6)
Debug the code below. You will need
to change the values of x, y, and z
to figure out where the error is!

text output:
console.log(answer);
*/
problemNumber(6);

const x = 2;
const y = 1;
const z = 3;
var answer = "null";

if (x === z) {
  if (x === y) {
    answer = "all are equal";
  } else {
    answer = "x and z are equal";
  }
} else if (x === y) {
  answer = "x and y are equal";
} else if (y === z) {
  answer = "y and z are equal";
} else {
  answer = "all are different";
}

console.log(answer);

/*
7)
Finish this code! Remove "true" as the
conditional statements and use the
variables eatsMeat and eatsDairy, as
well as the following: &&  !

text output:
console.log(diet);
*/
problemNumber(7);

const eatsMeat = false;
const eatsDairy = true;
var diet = null;

if (!eatsMeat && !eatsDairy) {
  diet = "vegan";
} else if (!eatsMeat) {
  diet = "vegetarian";
} else {
  diet = "no dietary restrictions";
}

console.log(diet);

/*
8)
Write code for the following situation:
Sofia can drive manual and automatic cars.
Diego only knows how to drive automatic.
Sofia prefers to drive long distances (> 10 km).
Diego prefers to drive short distances.

text output:
console.log("The car is ", car, " and the distance is ", distance, "km, so the driver is: ", driver);
*/
problemNumber(8);

const car = "automatic";
let driver = null;
const distance = 12;

if (distance < 10 && car == "automatic") {
  driver = "Diego";
} else if (distance >= 10) {
  driver = "Sofia";
}

console.log(
  "The car is ",
  car,
  " and the distance is ",
  distance,
  "km, so the driver is: ",
  driver
);

/*
9)
Finish the code below. Update "canVote" to the following:
- "Input is not a number" if age is not a number
(use "typeof" to do this check - see the MDN docs for info)
- "Legal voting age" if age is at least 18
- "Too young" if younger than 18

text output:
*/
problemNumber(9);

const age = 16;
canVote = null;

if (typeof age !== "number") {
  canVote = "Input is not a number";
} else {
  if (age >= 18) {
    canVote = "Legal voting age";
  } else {
    canVote = "Too young";
  }
}

//canVote = age >= 18? "Legal voting age": "Too young";

canVote =
  typeof age === "number"
    ? age >= 18
      ? (canVote = "Legal voting age")
      : "Too young"
    : "Input is not a number";

console.log(canVote);

/*
10)
Get rid of the nested conditionals in
the code below by considering order of
operations. Also, add in a condition for
temperature between 15 & 30 degrees
(should be "warm")

text output:
console.log("The temp is ", temp, ", so the weather is ", weather);
*/
problemNumber(10);

var temp = 35;

if (temp < 0) {
  weather = "freezing";
} else if (temp < 15) {
  weather = "chilly";
} else if (temp < 30) {
  weather = "warm";
} else {
  weather = "hot";
}

console.log("The temp is ", temp, ", so the weather is ", weather);

/*
11)
Comment out all of your previous code.
Rewrite problem 3 and 4 using ternary operators.
Rewrite also problem 9 using ternary operators. Do it for these 2 scenarios:
a) you can asume the type of 'age' will be a number, so you don't need to check it.
b) check the type of 'age', as stated in the original problem. You will need to
stack two ternary operators in this case. In your opinion, is this code cleaner
than you original answer on problem 9?
*/
problemNumber(11);

// Problem 3:
// console.log(t < 15 ? "Put a sweater on, please." : null);

// Problem 4:
// console.log(num % 2 === 0 ? "Even number" : "Odd number");

// Problem 9:
// canVote =
//   typeof age === "number"
//     ? age >= 18
//       ? (canVote = "Legal voting age")
//       : "Too young"
//     : "Input is not a number";

