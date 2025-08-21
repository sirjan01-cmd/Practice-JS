// alert("Saying hi from different file");
/*
let a = 10; // set a value to 10
console.log(a);
// prompt ('Hi how are you?'); similar to alert, but takes input of the user
console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));
*/

// const { use } = require("react");

// const { use } = require("react");

// const { use } = require("react");

/*
This is a string using backticks 

let language = "Javascript";
let message = `let's learn ${language}`;
console.log(message);
*/

/*
Type of string using backlash 

let str = "Hello, what's your name? Is it \"Mike\"?";
console.log(str);
let str2 = 'Hello, what\'s your name? Is it "Mike"?';
console.log(str2);
*/

/*
type of string using \nline and \\

let str3 = "New \nline.";
let str4 = "I'm containing a backlash: \\!";
console.log(str3);
console.log(str4);
*/

/*
sample of number data type

let intNr = 1;
let decNR = 1.5;
let expNr = 1.4e15;
let octNr = 0o10;
let hexNr = 0x9E8;
let biNr = 0b101;
*/

/*
learning to used typeof 

testVariable =1;
variableTypeTest1 = typeof testVariable;
variableTypeTest2 = typeof(testVariable);
console.log(variableTypeTest1);
console.log(variableTypeTest2);

let str = "Hello";
let nr = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol("unique");
let undef =  undefined;
let unknown = null;

console.log("str", typeof str);
console.log("nr", typeof nr);
console.log("bigNr", typeof bigNr);
console.log("bool", typeof bool);
console.log("sym", typeof sym);
console.log("undef", typeof undef);
console.log("unknown", typeof unknown);
*/

/*
convertion of string to number, number to string variable to boolean

let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);

let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr, typeof strToNr);

let strToBool = "any string will return true"
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);
*/

/*
let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr);

let strToNr = "";
strToNr = Number(strToNr);
console.log("empty string", strToNr, typeof strToNr);

let strToNr2 = "hello";
strToNr2 = Number(strToNr2);
console.log(strToNr2, typeof strToNr2);

let strToBool2 = "false";
strToBool2 = Boolean(strToBool2);
console.log(strToBool2, typeof strToBool2);

let strToBool = "";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);
*/

/*
let nr1 = 2;
let nr2 = "2"
console.log(nr1 + Number(nr2));
*/

/*
let str1 = 'Laurence';
let str2 = "Svekis"
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log(str1, typeof str1);
console.log(str2, typeof str2);
console.log(val1, typeof val1);
console.log(val2, typeof val2);
console.log(myNum, typeof myNum);
*/

/*
let nr1 = 12;
let nr2 = 14;
let result1 = nr1 + nr2;
console.log(result1)

let str1 = "hello ";
let str2 = "addition"
let result2 = str1 + str2;
console.log(result2);
*/

/*
let name = "Sirach";
let age = 32;
let message = `Hello, My name is ${name}, I'm 32 years old and I can code Javascript: true`;
console.log(message);
console.log(name, age, message);
*/

/*
let nr1 = 20;
let nr2 = 4;
let str1 = "Hi"
let nr3 = 3;
let result1 = nr1 - nr2;
let result2 = str1 - nr3;
console.log(result1, result2);

let nr4 = 20;
let nr5 = 4;
let str2 = "Hi"
let nr6 = 3;
let result3 = nr4 * nr5;
let result4 = str2 * nr6;
console.log(result3, result4);

let nr7 = 30;
let nr8 = 5;
let result5 = nr7/nr8;
console.log(result5);
*/

/*
let nr1 = 2;
let nr2 = 3;
let result1 = nr1 ** nr2;
console.log(result1);
*/
/*
let nr1 = 10;
let nr2 = 3;
let result1 = nr1 % nr2;
console.log(`${nr1} % ${nr2} = ${result1}`);
*/

/*
let nr1 = 4;
nr1++;
console.log(nr1);

let nr2 = 4;
nr2--;
console.log(nr2);

let nr = 2;
console.log(nr++);
console.log(nr);
*/

/*
let nr = 2;
console.log(++nr);
*/

/*
let nr1 = 4;
let nr2 = 5;
let nr3 = 2;
console.log(nr1++ + ++nr2 * nr3++);
*/

/*
function calculateHypotenuse(a, b) {
  const c = Math.sqrt(a ** 2 + b ** 2);
  return c;
}

const sideaA = 5;
const sideB = 12;

const hypotenuse =  calculateHypotenuse(sideaA, sideB);
console.log("The hypotenuse is:", hypotenuse);
*/

/*
let a = 4;
let b = 3;
let c = 2;
console.log(b += a);
console.log(a /= c);
*/

/*
let x = 5;
let y = 6;
console.log(y > x);
console.log(x > y);
console.log(y > y);
console.log(y >= y);
console.log(y < x);
console.log(x < y);
console.log(y < y);
console.log(y <= y);
*/

/*
let x = 1;
let y = 2;
let z = 3;
console.log(x < y && y < z);

console.log(x > y && y < z);

console.log(x > y || y < z);
*/

/*
let x =  false;
console.log(!x);
*/

/*
negating boolean

let x = 1;
let y = 2;
console.log(!(x < y));
*/

/*
creating BMI

const inches = 65;
const pounds =  180;

const inchToCm = 2.54;
const poundsToKilo = 2.2046;

const heightInCm = inches * inchToCm;
const heightInMeters = heightInCm / 100;

const weightInKilos = pounds / poundsToKilo;

const bmi = weightInKilos / (heightInMeters ** 2);

console.log(`Height in meters: ${heightInMeters.toFixed(2)} m`);
console.log(`Weight in kilos: ${weightInKilos.toFixed(2)} kg`);
console.log(`BMI: ${bmi.toFixed(2)}`);
*/

/*
let rain = true;
  if(rain){
    console.log("** Taking my umbrella when I need to go outside **");
  } else {
    console.log("** I can leave my umbrella at home **")
  };

 let age = (20); 
  if(age < 18) {
  console.log("We're Sorry, but you can't get in under 18");
  } else {
    console.log("welcome!");
  };
*/

/*
const gamingAge = (21);

  if(gamingAge < 21) {
    console.log("You're not allowed to play.");
  } else {
    console.log("Have fun playing!")
  } if (gamingAge != 21) {
    console.log("You're not allowed to play.");
  } else {
    console.log("Have fun playing!")
  }
*/

/*
let age = 10;
let cost = 0;
let message;
  if (age < 3){
    cost = 0;
    message = "Access is free under three";
  } else if (age >= 3 && age < 12) {
    cost = 5;
    message = "With the child discount, the fee is $5";
  } else if (age >= 12 && age < 65) {
    cost = 10;
    message = "A regular ticket costs $10";
  } else {
    cost =7;
    message = "A ticket is $7";
  }
  console.log(message);
  console.log("Your total cost "+cost);
*/

/*
let age = Number(prompt("Enter your age"));
  if (isNaN(age)) {
    console.log("Drunk already? please enter a valid number");
  }
  if (age >= 21) {
    console.log("You're allowed to enter, and get drunk!");
  } else if (age >= 19) {
    console.log("Have fun without alcohol! hahahah!");
  } else if (age < 19) {
    console.log("Go home and drink your milk kid!");
  }

let access = age < 18? "denied" : "allowed";
  age < 18 ? console.log("denied") : console.log("allowed");
*/

/*
let driversLicense = true;

let validId = driversLicense ? "allowed access" : "denied access";
console.log(validId);
*/

/*
let driversLicense = true;
prompt("Enter you ID");

let access = driversLicense ? "You may enter" : "Provide a valid ID";
console.log(access);
*/

/*
let validId = ["Driver's license", "Passport", "National id","Seaman's book"];
  let id = prompt("Enter your ID").toLowerCase().replace(/'/g, "");
  let normalizedIds = validId.map(item => item.toLowerCase().replace(/'/g, ""));
  let access = normalizedIds.includes(id) ? "You may enter" : "Provide a valid ID";
  console.log(access);
*/

/*
let activity = "Breakfast";

if(activity === "Get up") {
  console.log("It is 6:30AM");
} else if(activity === "Breakfast") {
  console.log("It is 7:00AM");
} else if(activity === "Drive to work") {
  console.log("It is 8:00AM");
} else if(activity === "Lunch") {
  console.log("It is 12:00PM");
} else if(activity === "Drive home") {
  console.log("It is 5:00PM");
} else if(activity === "Dinner") {
  console.log("It is 7:00PM");
}
*/

/*
let activity = "Get up";
switch(activity) {
  case "Get up":
    console.log("It is 6:30AM");
    break;
  case "Breakfast":
    console.log("It is 7:00Am");
    break;
  case "Drive to work":
    console.log("It is 8:00AM");
    break;
  case "Lunch":
    console.log("It is 12:00PM");
    break;
  case "Drive home":
    console.log("It is 5:00PM");
    break;
  case "Dinner":
    console.log("It is 6:30PM");
    break;
  default:
    console.log("I cannot determin the current time")
    break;
}
*/

/*
let randomNumber = Math.floor(Math.random() * 6);
let userQuestions = prompt("Enter your questions");
let answer = "";

switch(randomNumber) {
  case 0:
    answer = "Yeah, You're doing great!";
    break;

  case 1:
   answer ="Don't worry about a thing";
   break;

  case 2: 
    answer = "Tomorrow you'll be better";
    break;
  
  case 3: 
    answer = "Problems are created to teach us a lesson";
    break;

  case 4: 
    answer = "Believe in yourself";
    break;

  default:
    answer = "You are the best!";
    break;
}

console.log("You asked: " + userQuestions);
console.log("Magic 8 Ball says: " + answer);
*/

/*
let grade = "";

switch(grade) {
  case "F":
  case "D":
    console.log("You have failed");
    break;
  case "C":
  case "B":
    console.log("You have passed");
    break;
  case "A":
    console.log("excellent work genius!")
    break;
  default:
    console.log("You have not entered a valid grade");
}
*/

/*
let userInput = prompt ("Enter a number between (0 to 10)");
let inputNumber = parseInt(userInput);
let myPrize = "";
let notValid = "not a valid number";

if (isNaN(inputNumber) || inputNumber < 0 || inputNumber > 10) {
  console.log(`${userInput}: Is ${notValid}`);
} else {

switch(inputNumber) {
  case 0:
    myPrize = "Try again";
  break;

  case 1:
    myPrize = "You won two ballpen";
    break;
  
  case 2:
    myPrize = "You won a rim of paper";
    break;

  case 3:
    myPrize = "You won a sign pen";
    break;
  
  case 4:
    myPrize = "You won a set of colored pen";
    break;
  
  case 5:
    myPrize = "You won a set of colored pencil";
    break;

  case 6:
    myPrize = "You won a set of colored crayon";
    break;

  case 7:
    myPrize = "You won a set of colored chalk";
    break;

  case 8:
    myPrize = "You won a set of colored marker";
    break;
  
  case 9:
    myPrize = "You won a set of colored highlighter";
    break;

  case 10:
    myPrize = "You won a set of colored paint";
    break;
  
  default:
    notValid = "Not a valid number";
    break;
}
 console.log(`🎉 Congratulations! You picked ${inputNumber}!: ${myPrize}`);
}
*/

/*
let userInput = prompt("Enter a number");
let number = 5;
let message = "";
let inputNumber = Number(userInput);
if (isNaN(inputNumber)) {
    console.log("Please enter a valid number");
  } else {

  switch(inputNumber) {
    case 0:
      message = "0 is less than 5";
      break;
    case 1:
      message = "1 is less than 5";
      break;
    case 2:
      message = "2 is less than 5";
      break;
    case 3:
      message = "3 is less than 5";
      break;
    case 4:
      message = "4 is less than 5";
      break;
    case 5:
      message = "5 is equal to 5";
      break;
    case 6:
      message = "6 is greater than 5";
      break;
    case 7:
      message = "7 is greater than 5";
      break;
    case 8:
      message = "8 is greater than 5";
      break;
    case 9:
      message = "9 is greater than 5";
      break;
    case 10:
      message = "10 is greater than 5";
      break;
    default:
      if (inputNumber < number) {
        message = inputNumber + " is less than 5";
      } else if (inputNumber > number) {
        message = inputNumber + " is greater than 5";
      } else if (inputNumber === number) {
        message = inputNumber + " is equal to 5"
      }
      break;
  }
  console.log(message);
}
*/

/*
let friend = ["arvin", "kenneth", "kyle", "jay ar", "jerome", "tope"];
let myFriend = prompt("Enter your friend's name").toLowerCase();

switch(myFriend) {
  case "arvin":
    console.log("Is a friend of mine");
    break;
  case "kenneth":
    console.log("Is a friend of mine");
    break;
  case "kyle":
    console.log("Is a friend of mine");
    break;
  case "jay ar":
    console.log("Is a friend of mine");
    break;
  case "jerome":
    console.log("Is a friend of mine");
    break;
  case "tope":
    console.log("Is a friend of mine");
    break;

  default:
    console.log("Is not a friend of mine");
    break;
}
*/

/*
a short and clean way to check if a name is in the array of friends

let friends = ["arvin", "kenneth", "kyle", "jay ar", "jerome", "tope"];
let myFriend = prompt("Enter your friend's name").toLowerCase();

if (friends.includes(myFriend)) {
  console.log("Is a friend of mine");
} else {
  console.log("Is not a friend of mine");
}
*/

/*
let arr = ["Rock", "Paper", "Scissors"];
let playerChoice = Math.floor(Math.random() * 3);
let computerChoice = Math.floor(Math.random() * 3);

console.log("Player choice:", arr[playerChoice]);
console.log("Computer choice:", arr[computerChoice]);

if (playerChoice === computerChoice) {
  console.log("It's a tie!");
} else if (
  (playerChoice === 0 && computerChoice === 2) || // Rock beats Scissors
  (playerChoice === 1 && computerChoice === 0) || // Paper beats Rock
  (playerChoice === 2 && computerChoice === 1)  // Scissors beats Paper
 ) {
  console.log("Player wins!");
} else {
  console.log("Computer wins!");
}
*/

/*
const userName = ["Mike", "John", "Larry"];
const userInput = "John";
let htmlOutput = "";
if (userName.indexOf(userInput) > -1) {
  htmlOutput = "Welcome, that is a user";
} else {
  htmlOutput = "Denied, not a user";
}
console.log(htmlOutput + ": " + userInput);

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

let someArray = ["Tennis ball", "Football", "Basketball", "Baseball", "Volleyball"];
let notFound = true;

while (notFound && someArray.length > 0) {
  if (someArray[0] === "Volleyball") {
    console.log("Found the ball!");
    notFound = false;
  } else {
    someArray.shift();
  }
}
*/

/*
let nr1 = 0;
let nr2 = 1;
let temp;

fibonacciArray = [];

while (fibonacciArray.length , 25) {
  fibonacciArray.push(nr1);
  temp = nr1 + nr2;
  nr1 = nr2;
  nr2 = temp;
}
*/

/*
let maxNumber = 35;
let randomNumbers = Math.floor(Math.random() * (maxNumber + 1));
console.log("Random number is: " + randomNumbers);
let userGuess = Number(prompt("Guess a number between 0 and " + maxNumber));

while (userGuess !== randomNumbers) {
  if (userGuess < randomNumbers) {
    userGuess = Number(prompt("Your guess is too low. Try again:"));  
  } else {
    userGuess = Number(prompt("Your guess is too high. Try again:"));
  } 
}
*/

/*
let gasEmpty = true;
  if (gasEmpty) {
    console.log("Gas tank is thirsty, fill it up!");
  } else {
    console.log("Don't worry, just drive");
  }

let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
  }
  
let nr1 = 0;
let nr2 = 1;
let temp;
fibonacciArray = [];

while (fibonacciArray.length < 25) {
  fibonacciArray.push(nr1);
  temp = nr1 + nr2;
  nr1 = nr2;
  nr2 = temp;
}

console.log(fibonacciArray);
console.log(nr1, nr2, temp);

let maxNumber = 30;
let randomNumbers = Math.floor(Math.random() * (maxNumber + 1));
  console.log("Random number is: " + randomNumbers);
let userGuess = Number(prompt("Guess a number between 0 and " + maxNumber));
while (userGuess !== randomNumbers) {
  if (userGuess < randomNumbers) {
    userGuess = Number(prompt("Your guess is too low. Try again"));
  } else if (userGuess > randomNumbers) {
    userGuess = Number(prompt("Your guess is too high. Try again"));
  }
}

alert("You guessed it right");
*/

/*
let number;
do {
  number = prompt("Please enter a number between 0 and 100: ");
} while (!(number >= 0 && number < 100));
*/

/*
let counter = 0;
let step = 5;
  do {
    console.log(counter);
    counter+= step;
  } while (counter <= 100);

for (let i = 0; i < 10; i++) {
  console.log(i);
}
*/

/*
let arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(i);
  console.log(arr);
}

let arr1 = [];
for (let i = 0; i < 100; i = i + 2) {
  arr1.push(i);
  console.log(arr1);
}
*/

/*
let myWork = [];
for (let lesson = 1; lesson <= 10; lesson++) {
  let tempLesson = {
    name: `Lesson ${lesson}`,
    status: lesson % 2 === 0 ? true : false
  };

  myWork.push(tempLesson);
}
console.log(myWork);
*/

/*
let arrOfArrays = [];
for (let i = 0; i < 3; i++){
  arrOfArrays.push([]);
   for (let j = 0; j < 7; j++) {
  arrOfArrays[i].push(j);
  }
}
console.log(arrOfArrays);
console.table(arrOfArrays);
*/

/*
let myTable = []; // 1. Create an empty array

// Set number of rows and columns
let numRows = 5;
let numCols = 6;

// Set a counter variable
let counter = 0;

  // Outer loop for rows
  for (let row = 0; row < numRows; row++) {
    // Create a temporary array for the current row
    let tempTable = [];
    for (let col = 0; col < numCols; col++) {
      // Increment counter
      counter++;
      // Push the counter value into the tempTable (current row)
      tempTable.push(counter); // counter value
    }
    // Push the row into the final table console
    myTable.push(tempTable);
  }
  // Output the final table in the console
  console.table(myTable);
*/

/*
  let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
  for (let i = 0; i < names.length; i ++) {
    if(names[i].startsWith("M")) {
      delete names[i];
    }
    names[i] = "hello " + names[i];
  }
  console.log(names);

  let peoplesName = ["Chantal", "John", "Maxime"];
  let data = {
    Age: [25, 26, 27],
    Gender: ["Female", "Female", "Male"],
    Height: ["5'9\"", "5'5\"", "5'10\""],
    Weight: ["60kl", "55kl", "65kl"]
  };

  let table = [];
  let headerRow = ['Name'];
  headerRow.push(...peoplesName);
  table.push(headerRow);

  for (let category in data) {
    let row = [category];
    row.push(...data[category]);
    table.push(row);
  }

  console.table(table);

let gridArray = [];
let counter = 0;
let row = [];
let totalCells = 64;
let numCols = 8;

for (let i = 0; i <= totalCells; i++) {
  if (counter % numCols === 0) {
  if (row.length > 0) {
    gridArray.push(row);
  }
    row = [];
  }
  if (i < totalCells) {
    row.push(counter);
    counter++;
  }
  if (row.length > 0){
    gridArray.push(row);
  }
}
console.table(gridArray);
*/

/*
This the different syntax of loops for review if ever confuse

// For loop that counts from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// For loop that loops through an array (not nested)
let jsLoops = ["for loop", "while loop", "do while loop"];
for (let i = 0; i < jsLoops.length; i++) {
  console.log(jsLoops[i]);
}

// Two separate for loops (not nested)
for (let i = 1; i <= 5; i++) {
  console.log(i);
} 

for (let j = 1; j <= 3; j++) {
  console.log(j);
}

// nested loops
for (let i = 1; i <= 5; i++) {
  console.log(i);
  for (let j = 1; j <= 3; j++) {
    console.log ("Inner loop " + j)
  }
}

// while loop syntax
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// do while loop
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

// break / continue
for (let i = 1; i <= 5; i++) {
  if (i == 3) {
      break; // Exit the loop completely when i is 3
  }
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i == 3) {
      continue; // Skip this iteration when i is 3
  }
  console.log(i);
}
*/

/*
// for of loop syntax
let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let name of names) {
  console.log(name);
}
*/

/*
let arr = [];
let i = 0;
  while (i < 10) {
    arr.push(i);
    i++;
  }
    console.log("Full array:", arr);

  for (let i = 0; i < arr.length; i++) {
    console.log("For loop index value: ", arr[i]);
  }

  for (let value of arr){
    console.log("For-of value: ", value);
  }

let carBrands = ["Suzuki", "Honda", "Toyota", "Mazda", "Subaru"];
for (let brand of carBrands) {
  console.log("Car brand:", brand);
}
*/

/*
// syntax for for in loop
let car = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
  color: "Black",
};

for (let prop in car) {
  console.log(car[prop]);
}
*/

/*
let numbers = [];
let i = 1;
  while (i <= 10) {
  numbers.push(i);
  i++;
  }
  console.log(numbers);

  for (let num of numbers) {
    if (num % 2 === 0) {
      console.log(num + " is even");
    } else {
      console.log(num + " is odd");
    }
  }
  */

  /*
  let number = [];
  let i = 1;
    while (i <= 50) {
      number.push(i);
      i++;
    }
      console.log(number);
  for (let num of number) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log(num + " is a multiple of both 3 and 5")
    } else if (num % 3 === 0) {
      console.log(num + " is a multiple of 3");
    } else if (num % 5 === 0) {
    console.log(num + " is a multiple of 5");
    } else {
      console.log(num + " is not a multiple of both 3 and 5");
    }
  }
  */

  /*
  let carMaker = {
    Maker: "Suzuki",
    Established: 1909,
    Manufacturing: "Vehicles",
  };

  for (let prop in carMaker) {
    console.log(carMaker[prop]);
  }

  carMaker = ["Suzuki", 1909, "Vehicles"];
    for (let i = 0; i < carMaker.length; i++) {
      console.log(carMaker[i]);
    }
  */
/*
let car = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
  color: "Black",
};

let keys = Object.keys(car);
  for (let i = 0; i < keys.length; i++) {
      console.log(keys[i]);
  }

let values = Object.values(car);
  for (let i = 0; i < values.length; i++) {
      console.log(values[i]);
  }

let entries = Object.entries(car);
  for (let i = 0; i < entries.length; i++) {
      console.log(`${entries[i][0]}: ${entries[i][1]}`);
  }
*/

/*
let arrKeys = Object.keys(car);
  console.log(arrKeys);
*/

/*
for (let key of Object.keys(car)) {
  console.log(key);
} for (let key of Object.values(car)) {
  console.log(key);
}

let arrKeys = Object.keys(car);
for (let i = 0; i < arrKeys.length; i++) {
  console.log(arrKeys[i] + ":" + car [arrKeys[i]]);
}

let arrEntries = Object.entries(car);
  console.log(arrEntries);

for (const [key, value] of Object.entries(car)) {
  console.log(key, ":", value);
}

let cars = [
  {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
  },
  {
    model: "Picanto",
    make: "Kia",
    year: 2020,
    color: "red",
  },
  {
    model: "Peugot",
    make: "208",
    year: 2021,
    color: "black",
  },
  {
    model: "Fiat",
    maker: "Punto",
    year:  2020,
    color: "black",
  }
];

for (let i = 0; i < cars.length; i++) {
  if (cars[i].year >= 2020) {
    if (cars[i].color === "black") {
      console.log("I have found my new car:", cars[i]);
      break;
    }
  }
}
*/

/*
for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i === 4) {
    break;
  }
}
let superLongArray = 0;

while (true) {
  if (superLongArray[0] != 42 && superLongArray.length > 0) {
    superLongArray.shift();
  } else {
    console.log("Not found 42!");
    break;
  }
}

while (superLongArray.length > 0 && notFound) {
  if (superLongArray[0] != 42) {
    superLongArray.shift();
  } else {
    console.log("Found 42!");
    notFound = false;
  }
}
  */

/*

for (let car of cars) {
  if (car.color !== "black") {
    continue;
  } if (car.year >= 2020) {
    console.log("We could get this one", car)
  }
}
*/

/*
let i = 1;
while (i < 50) {
  i++;
  if ((i - 1) % 2 === 0) {
    console.log(i-1);
  }
}

for (let i = 1; i < 50; i = i + 2) {
  console.log(i);
}

let output = "";
let skipNumber = 4;

for (let i = 1; i <= 10; i++) {
  if (i === skipNumber) {
    continue;
  }
  output += i;
} 
console.log("Using continue", output);

output = ""

for (let i = 1; i <= 10; i++) {
  if (i === skipNumber){
    break;
  }
  output += i;
}
console.log("Using break", output);
*/

/*
let groups = [
  ["Martin", "Daniel","Keith"],
  ["Margot", "Marina", "Ali"],
  ["Helen", "Jonah", "Sambikos"],
];

for (let i = 0; i < groups.length; i++) {
  let matches = 0;

for (let j = 0; j < groups[i].length; j++) {
    if(groups[i][j].startsWith("M")) {
      matches++;
    } else {
      continue;
    }
    if (matches === 2) {
      console.log("Found a group with two names starting with an M");
      console.log(groups[i]);
      break;
    }
  }
}

for (let group of groups) {
  for (let member of group) {
    if (member.startsWith("M")) {
      console.log("Found one starting with M", member);
      break;
    }
  }
}

outer:
for (let group of groups) {
  inner:
  for (let member of group) {
    if (member.startsWith("M")) {
      console.log("found one starting with M: ", member);
      break outer;
    }
  }
}
  */

/*
let multiplicationTable = [];
let size = 10;

for (let row = 1; row <= size; row++) {
  let tempRow = [];
  for (let col = 1; col <= size; col++) {
    tempRow.push(row * col);
  }
  multiplicationTable.push(tempRow)
}

console.log(multiplicationTable);
*/

/*
let board = [];
let size = 8;

 for (let row = 1; row <= size; row++) {
  let tempRow = [];
  for (col = 1; col <= size; col++) {
    if ((row + col) % 2 === 0) {
      tempRow.push("white");
    } else {
      tempRow.push("black");
    }
  }
  board.push(tempRow);
 }

 console.log(board);
*/

/*
let size = 5;
let table = [];

for (let row = 1; row <= size; row++) {
  let tempRow = [];
  for (let col = 1; col <= size; col++) {
    tempRow.push(row * col);
  }
  table.push(tempRow);
}

console.log(table);
*/

/*
const myArray = [1, 5, 7];
for (el in myArray) {
  console.log(Number(el));
  el = Number(el) + 5;
  console.log(el);
}
console.log(myArray);

let multiplicationTable = [];
let size = 10;

 function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) return false;
      }
       return true;
    } 
    
    for (let row = 1; row <= size; row++) {
  let tempRow = [];
  for (let col = 1; col <= size; col++) {
    let result = row * col;
    if (isPrime(result)) {
      tempRow.push(`${result}*`);
    } else {
      tempRow.push(result);
    }
  }
  multiplicationTable.push(tempRow)
}

console.log(multiplicationTable);
*/

/*
function sayHello() {
  let you = prompt("What's your name?");
  console.log("Hello " + you + "!");
}

sayHello();
*/

let varContainingFunction = function() {
    let varInfunction = "I'm in a function"
    console.log("hi there", varInfunction);
};

varContainingFunction();

/*
function askUser(nationality, country) {
  console.log("Hello I'm a " + nationality);
  console.log("I'm from the " + country);
};


askUser("Filipino", "Philippines");
*/

/*
let askUser = function() {
  let userNationality = "I'm a Filipino, "
  let userCountry = "I live in the Philippines"
  console.log("Hi there " + userNationality + userCountry);
};

askUser();
*/

/*
// 1. Create a function with two parameters and return their sum
function addNumbers(num1, num2) {
  return num1 + num2;
}

// 2. Set up two variables
let a = 5;
let b = 7;

// 3. Use the function on the two variables and output the result
console.log("First result:", addNumbers(a, b));

// 4. Call the function again with two more numbers
console.log("Second result:", addNumbers(10, 15));
*/

/*
function multiplyNumbers(numA, numB) {
  return numA * numB;
}

let a = 10;
let b = 5;

console.log("Result 1", multiplyNumbers(a, b));
console.log("Result 2", multiplyNumbers(5, 5));

function calculateTotalPrice(price = 25, taxRate = 0.1) {
  return price + (price * taxRate);
}

let price = 15;
let tax = 0.1;
  console.log("Total price: ", calculateTotalPrice(price, tax));
  console.log("Total price: ", calculateTotalPrice(25, 0.1));

let array = ["Thoughtful", "Kind", "Lovable"];
function sayHi() {
  let computerAsk = prompt("What's your name");
  let array1 = Math.floor(Math.random() * array.length);
  let randomValue = array[array1];
  console.log("Hi " + computerAsk + " you are " + randomValue);
}

sayHi();
*/

/*
function tester(para1, para2) {
  return para1 + " " + para2;
}

const arg1 = "argument 1";
const arg2 = "argument 2"
tester(arg1, arg2);

function myFunc(param1, param2) {
}

function addTwoNumbers(x, y) {
  console.log(x + y);
}

myFunc("arg1", "arg2");

console.log("this is an argument");
prompt("argument here too");

let arr = [];
arr.push("argument")

addTwoNumbers(3, 4);
addTwoNumbers(12, -90);
*/
/*
let num1 = 10;
let num2 = 15;
let operator = "add"

function calcNumber(num1, num2, operator) {
  if (operator === "add") {
      return num1 + num2;
  } else if (operator === "subtract") {
      return num1 - num2; 
  } else {
    return num1 + num2;
  }
}
 console.log("Result is ", calcNumber(num1, num2, operator));

 operator = "subtract";
 console.log("Result is ", calcNumber(num1, num2, operator));
*/

let num1 = 5;
let num2 = 10;
let operator = "add";


function calcNumbers(num1, num2, operator = "add") {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Invalid number";
  } if (num2 === 0) {
    return "Cannot divide to zero"
  }
   let result;
  switch(operator) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "division":
      result = num1 / num2;
      break;
    default:
      result = num1 + num2;
  }
  if (result >= 100) {
    return "Result is too big"
  } else {
    return result;
  }
}

console.log("This is the result: ", calcNumbers(50, 5, "add"));
console.log("This is the result: ", calcNumbers(10, 5, "subtract"));
console.log("This is the result: ", calcNumbers(40, 2, "multiply"));
console.log("This is the result: ", calcNumbers(40, 2, "division"));
console.log("This is the result: ", calcNumbers(40, "Ten", "add"));
console.log("This is the result: ", calcNumbers(40, 0, "division"));
console.log("This is the result: ", calcNumbers(40, 5, "multiply"));

function doingStuff(x) {
  console.log(x);
}

/*
let doingArrowStuff = x => console.log(x)

doingArrowStuff("Great!");

let addTwoNumbers = (x, y) => console.log(x, y);

addTwoNumbers(15, 25);
*/

/*
const arr = ["squirrel", "alpaca", "buddy"];
arr.forEach(e => console.log(e));

let spread = ["so", "much", "fun"];
let message = ["Javascript", "is", ...spread, "and", "very", "powerful"];
console.log(message);

function addTwoNumbers(x, y) {
  return x + y;
}

let result1 = addTwoNumbers(4, 5);
console.log(result1);
*/

/*
function addFourNumbers(w, x, y, z) {
  console.log(w + x + y + z);
}

let arr2 = [5, 9];
let arr3 = [6, 7];
addFourNumbers(...arr2, ...arr3)

//function someFunction(param1, param2) {
function someFunction(param1, ...param2) {
  console.log(param1, param2);
}
*/

/*
let favoriteSubject = prompt("What is your favorite subject?");
let result = addTwoNumbers(4, 5);
console.log(result);
*/

/*
let resultsArr = [];
for (let i = 0; i < 10; i ++) {
  let result1 = addTwoNumbers(i, 2*i);
  resultsArr.push(result1);
}

console.log(resultsArr);
*/
/*
function guessLuckyNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

let i = 1;
const lucky = guessLuckyNumber();

while (i <= 10) {
  let pickNumber = parseInt(prompt("Enter a number between 0 and 10:"));
  
  if (pickNumber === lucky) {
    console.log("Congratulations! You guessed the lucky number.");
    break;
  } else {
    console.log("Wrong guess. Try again.");
  }

  i++;
}

if (i > 10) {
  console.log("Sorry, you've used all your guesses. The lucky number was: " + lucky);
}
*/

let addTwoNumbers = (x, y) => x + y;
let result = addTwoNumbers(12, 15);
console.log(result);