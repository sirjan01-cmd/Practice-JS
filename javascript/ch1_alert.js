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
Creating an array

let arr = ["Hi there", 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);

Improper way of adding values in an array
cars = ["Toyota", "Renault", "Volkswagen"];
cars[0] = "Tesla"
cars[3] = "Kia"
cars[-1] = "Fiat"
console.log(cars[0]);
console.log(cars[3])
console.log(cars[-1]);
*/

/*
colors = ["black", "orange", "pink"];
booleans = [true, false, false,true];
emptyArray = [];

console.log("Length of colors:", colors.length);
console.log("Length of booleans:", booleans.length);
console.log("Length of empty array:", emptyArray.length);

numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers.length);
console.log("numbers", numbers);

improper way of adding elements using new indices

shoppingList = ["Milk", "Bread", "Apples"]
console.log(shoppingList);
shoppingList[1] = "Bananas"
console.log(shoppingList[1]);
console.log(shoppingList);
*/

/*

favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");
let lengthofFavoriteFruits = favoriteFruits.push("lime")
console.log(favoriteFruits);

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);

arrOfShapes.splice(2, 12, "square", "trapezoid");
console.log(arrOfShapes);

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);

let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);

arr8.pop();
arr8.shift();
arr8.splice(1, 3);
delete arr8[0];

arr8 = [2, 6, 7, 8];
let findValue = arr8.find(function(e) {
  return e === 6});
let findValue2 = arr8.find(e => e === 10);
  console.log(findValue, findValue2);

  arr8 = [2, 6, 7, 8];
    let findIndex = arr8.indexOf(6);
    let findIndex2 = arr8.indexOf(10);
    console.log(findIndex, findIndex2);

let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");

let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
  names.sort();
  console.log(names);
  names.reverse();
  console.log(names);

let ages = [18, 72, 33, 56, 40];
  ages.sort();
  console.log(ages);
  ages.reverse();
  console.log(ages);
  */
  
  /*
  shoppingList = ["Milk", "Bread", "Apples"];
    console.log(shoppingList);
  shoppingList.push("Bananas");
   let lengthOfShoppingList = shoppingList.push("Eggs");
   console.log(shoppingList);
  shoppingList.splice(1, 1)
    console.log(shoppingList);
  shoppingList.sort();
    console.log(shoppingList);
   let findIndex = shoppingList.indexOf("eggs");
    console.log(findIndex);

 shoppingList.splice(2, 0, "Carrots", "Lettuce");
  console.log(shoppingList);
  lengthOfShoppingList = shoppingList.push("Juice", "Pop")
  console.log(shoppingList);
  */

/*
let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];

let arrOfArrays = [someValues1, someValues2, someValues3]
let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arrOfArrays);
console.log(arrOfArrays2);

let value1 = arrOfArrays[0][1];

let someValues4 = [1, 2, 3];
let arrOfArrays4 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

let value2 = arrOfArrays4 [1][1];
  console.log(value2);
*/

/*
let arr = [0, 1, 2]
  console.log(typeof arr);

let dog = {
  dogName: "Javascript",
  weight: 2.4,
  color: "brown",
  breed: "chihuahua",
  age: 3,
  burglarBiter: true
};

let dogColor1 = dog["color"];
let dogColor2 = dog.color;

dog["color"] = "blue";
dog.weight = 2.3;

console.log(dog);

let variable = "age";
console.log(dog[variable]);

variable = "breed";
console.log(dog[variable]);

dog[variable] = "dachshund"
console.log(dog["breed"]);
*/

/*
let myCar = {
  Maker: "Suzuki",
  Model: "Suzuki Swift",
  Color: "Metallic Gray",
  Year: 2021,
  Engine: 1.2,
  headTurner: true
};

myCar["Color"] = "white";
console.log(myCar["Color"]);

myCar["Price"] = 500000;
myCar["For sale"] = "This car is for sale"
console.log(myCar["Price"]);
console.log(myCar["For sale"]);
console.log(myCar["Maker"]);
console.log(myCar["Model"]);
console.log(myCar);
*/

/*
let company = {
  companyName: "Healthy Candy",
  activity: "Food manufacturing",
  address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
  },
  yearOfEstablisment: 2021
};

company.address.zipcode = "33117";
company["address"]["number"] = "100";

company = {
  companyName: "Healthy Candy",
  activities: ["food manufacturing", "improving kids' health", 
    "manufacturing toys"],
  address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
  },
  yearOfEstablisment: 2021
};

let activity = company.activities[1];

let addresses = [{
  street: "2nd street",
  number: "123",
  zipcode: "33116",
  city: "Miami",
  state: "Florida"
},
{
  street: "1st West avenue",
  number: "5",
  zipcode: "75001",
  city: "Addison",
  state: "Texas"
}];

// let streetName = addresses[0].street;

company = {
  companyName: "Healthy Candy",
  activities: ["food manufacturing", "improving kids' health",
  "manufacturing toys"],
  addresses: [{
  street: "2nd street",
  number: "123",
  zipcode: "33116",
  city: "Miami",
  state: "Florida"
},
{
  street: "1st West avenue",
  number: "5",
  zipcode: "75001",
  city: "Addison",
  state: "Texas"
}],
  yearOfEstablisment: 2021
};

let streetName = addresses[0].street;

console.log(company);
*/

/*
let people = {
  friends: []
};

let friend1 = {
  name: "Arvin",
  lastName: "Ilustrisimo",
  idValue: "Loyal"
};

let friend2 = {
  name: "Kenneth",
  lastName: "Jalao",
  idValue: "Loyal"
};

let friend3 = {
  name: "Kyle",
  lastName: "Galvez",
  idValue: "Loyal"
};

arrOfFriends = [friend1, friend2, friend3];
console.log(arrOfFriends);

arrOfFriends.push(
 {
    name: "Jay Ar",
    lastName: "Unknown",
    idValue: "Loyal"
  },
  {
    name: "Jerome",
    lastName: "Tuclaud",
    idValue: "Loyal"
  }
);

people.friends = arrOfFriends;

console.log(arrOfFriends);
console.log(people);
*/

/*
const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
  {test: 'one', score: 55}, ['one','two']];
  console.log(theList);
  theList.shift();
  theList.pop();
  console.log(theList);
  theList.splice(0, 0, "FIRST");
  console.log(theList);
  theList.splice(4, 5, "Hello World");
  console.log(theList);
  theList.splice(2, 2, "MIDDLE");
  console.log(theList);
  theList.push("LAST");
  console.log(theList);
*/

/*
let storeItems = ["Shampoo", "Soap", "Conditioner"];
 let storeItem1 = {
  name: "Shampoo",
  brand: "Dove",
  cost: "$5"
 };

 let storeItem2 = {
  name: "Soap",
  brand: "Safeguard",
  cost: "$2"
 };

 let storeItem3 = {
  name: "Conditioner",
  brand: "Dove",
  cost: "$4"
 };

 console.log(storeItem1, storeItem2, storeItem3);

 storeItems = [storeItem1, storeItem2, storeItem3];

 console.log(storeItems);

 let item3 = storeItems[2];

 console.log(item3);

 storeItem1["brand"] = "Clear";

 console.log(storeItem1);
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