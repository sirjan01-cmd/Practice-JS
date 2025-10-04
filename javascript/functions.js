/*
function greeter(name) {

  console.log("Hello, " + name + "!");
}

greeter(prompt("Enter your name:"));
*/

/*
let varContainingFunction = function() {
  let varInFunction = "I'm in function.";
  console.log("Hi there", varInFunction);
};

varContainingFunction();
*/

/*
function addNumbers(a, b) {
  return a + b;
};

let result1 = addNumbers(10, 20);
console.log(result1);
console.log(result1 * 2);

addNumbers(10, 20);

let arr2 = ["You're funny", "You're amazing", "You're going to do great things", "You're awesome", "You're a great friend", "You're a superstar"];
function promptUser() {
  let enterName = prompt("Enter your name:");
  let randomValue = Math.floor(Math.random() * arr2.length);
  console.log(enterName + ", " + arr2[randomValue]);
}

promptUser();
*/

/*
function tester(para1, para2) {
  return para1 + para2;
}
const arg1 = "argument 1";
const arg2 = "argument 2";
tester(arg1, arg2);

function myFunc(param1, param2) {
  return param1 + param2;
}

function addTwoNumbers(x, y) {
  console.log(x + y);
}

myFunc("arg1", "arg2");

addTwoNumbers(3, 4);
addTwoNumbers(12, -90);
*/

/*
let num1 = 10;
let num2 = 20;
let operator = "+";

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}
calculator(num1, num2, operator);
console.log(calculator(num1, num2, operator)); 
console.log(calculator(num1, num2, "*"));
*/

/*
function addTwoNumbers(x = 2, y = 3) {
  console.log(x + y);
} 

addTwoNumbers();
addTwoNumbers(6, 6);
addTwoNumbers(10);

function doingStuff(x) {
  console.log(x);
}

let doingArrowStuff = x => console.log(x);

doingArrowStuff("Hello from arrow function");

let addTwoNumbers1 = (x, y) => console.log(x + y);

addTwoNumbers1(5, 10);
addTwoNumbers1(20, 30);
*/

/*
let sayHello = () => console.log("Hello");

sayHello();

let calculate1 = [];

function returnValue(param1, param2) {
  return param1 + param2;
}

for (let i = 1; i <= 10; i++) {
  calculate1.push(returnValue(i, i * 5));
}

console.log(calculate1);
*/

/*
let addTwoNumbers = (x, y) => x + y;
let result = addTwoNumbers(12, 15);
console.log(result);

function testAvailability(x) {
  console.log("Available:", x);
}
*/

/*
testAvailability("Hi!")
console.log("Not available here:", x);
*/

/*
function testAvailability(x) {
  let y = "I'll return";
  console.log("Available here:", x);
  return y;
}

let z = testAvailability();
console.log("Outside the function:", z);
console.log("Not available here:", y);
*/

/*
function doingStuff() {
  if (true) {
    var x = "local";
  }
  console.log(x);
}

doingStuff();
*/

/*
let globalVar ="Accessible everywhere!";
console.log("Outsied function:", globalVar);

function creatingNewScope(x) {
  console.log("Access to global vars inside function.", globalVar);
}

creatingNewScope("some parameter");

console.log("Still available:", globalVar);
*/

/*
function confuseReader() {
  x = "Guess my scope...";
  console.log("Inside function:", x);
}

confuseReader();
console.log("Outside function:", x);
*/

/*
(function (){
  console.log("This is an IIFE");
}) (); 

(() => {
  console.log("run right away");
})();

let variable = 1000;
(() => {
  let variable = 2000;
  console.log("Inside IIFE:", variable);
}) ();
console.log("Outside IIFE:", variable);

let result = (() => {
  let variable = 3000;
  return variable;
}) ();
console.log("Result variable:", result)
console.log("Globale variable:", variable);

(function(newValue) {
  let variable = newValue;
  console.log("Anonymous Function says: " + variable);
}) (5000);
*/
/*
function getRecursive(nr) {
  console.log(nr);
  getRecursive(--nr);
}

getRecursive(3);
*/

/*
function getRecursive(nr) {
  console.log(nr);
  if (nr > 0) {
    getRecursive(--nr);
  }
}
getRecursive(3);

function logRecursive(nr) {
  console.log("Started function:", nr);
  if (nr > 0) {
    logRecursive(nr - 1);
  } else {
    console.log("done with recursion");
  }
  console.log("Ended function:", nr);
}

logRecursive(3);
*/

/*
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(8));
*/

/*
function doOuterFuntionStuff(nr) {
  console.log("Outer function");
  doInnerFunctionStuff(nr);
  function doInnerFunctionStuff(x) {
    console.log(x + 7);
    console.log("I can access outer function stuff:", nr);
  }
}

doOuterFuntionStuff(2);
*/

/*
let value = 10;

function countDown(value) {
  console.log(value);
  if (value > 0) {
    countDown(value - 1);
  }
}
countDown(value);
*/

/*
function doingStuffAnonymous() {
  console.log("Not so secret though");
}
doingStuffAnonymous();

let functionVariable = function () {
  console.log("Anonymous function without a name");
};
functionVariable();

let otherFunctionVariable = function () {
  console.log("Named function expression");
};

otherFunctionVariable();

function otherVariable() {
console.log("This is a named function");
}

otherVariable();

function doFlexibleStuff(executeStuff) {
  executeStuff();
  console.log("Inside doFlexibleStuffFunction");
}

doFlexibleStuff(functionVariable);
doFlexibleStuff(doingStuffAnonymous);
doFlexibleStuff(otherFunctionVariable);
doFlexibleStuff(otherVariable);

let youGotThis = function() {
  console.log("You're doing really well, keep coding!");
};

setTimeout(youGotThis, 1000);

function recursive(nr) {
  console.log(nr);
  if (nr > 10) {
    recursive(nr - 1);
  }
}
recursive(20);

let numbers = (param1, param2) => [param1, param2];
console.log(numbers(5, 10));
(function (num) {
  console.log("insert number:", num);
})(3);
*/
/*
function greeting(name = "User") {
  let inputName = prompt("Enter your name")
  console.log("Hello, " + (inputName || name) + "!");
}

greeting();

let cart = [];

function addToCartItem(item = "Unknown Item", _quantity = 1, _price = 0) {
let enteredItem = prompt("Enter item details (format: name, quantity: x, price: $y)");

  if (enteredItem) {
    cart.push(enteredItem);
    console.log("Current cart contents:", cart);
  } else {
    cart.push(`${item}, quantity: ${_quantity}, price: $${_price}`);
  }
}
addToCartItem();

function calculateTotalPrice(cart) {
  let total = 0;

  for (let item of cart) {
    let itemDetails = item.split(",");
    console.log("Item details:", itemDetails);

    if (itemDetails.length >= 3) {
      let pricePart = itemDetails[2].split(":")[1];
      let price = parseFloat(pricePart.replace("$", ""));
      let quantity = parseInt(itemDetails[1].split(": ")[1]);
      total += price * quantity;
    } else {
      console.log("Total price:", total);
      return total;
    }
  }
}
*/

/*
let enterName = prompt("Enter your name:");
console.log("Hello, " + (enterName || "User") + "!");

let yearsBeforeTurning65 = (age) => 65 - age;

let enteredAge = parseInt(prompt("Enter your age:"));
console.log("Years before turning 65:", yearsBeforeTurning65(enteredAge));

if (isNaN(enteredAge) || enteredAge < 0) {
  console.log("Please enter a valid age.");
} else  if (enteredAge < 18) {
  console.log("You are a minor.");
} else if (enteredAge >= 18 && enteredAge < 60) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior citizen.");
}

let arrOfFaveFoods = ["pizza", "sushi", "chocolate", "pasta", "ice cream"];
let promptFood = prompt("Enter your favorite food:");
let found = false;

for (let food of arrOfFaveFoods) {
  if (promptFood === food) {
    console.log("Great choice! " + promptFood + " is one of my favorites too!");
    found = true;
    break;
  }
}

if (!found) {
  console.log("Interesting choice! I haven't tried " + promptFood + " before.");
}

let userProfile = {
  name: "Alice",
  age: 30,
  favoriteHobbies: ["reading", "traveling", "coding"],
  isStudent: false
}

console.log(userProfile.name);
console.log(userProfile.age);
console.log(userProfile.favoriteHobbies);
console.log(userProfile.isStudent);

function greetUser(name = "User") {
  let enteredName = prompt("Enter your name:");
  console.log("Hello, " + (enteredName || name) + "!");
}

greetUser();

function addNumbers(a, b) {
  return a + b;
}

let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
console.log("The sum is: " + addNumbers(num1, num2));
addNumbers(num1, num2);

let cartList = [
  {item: "laptop", quantity: 2, price: 10},
  {item: "phone", quantity: 1, price: 20},
  {item: "tablet", quantity: 3, price: 5},
  {item: "headphones", quantity: 2, price: 15},
  {item: "charger", quantity: 1, price: 30},
  {item: "mouse", quantity: 4, price: 8}
];

function calculateTotal(cartList) {
  let total = 0;
  for (let product of cartList) {
    total += product.price * product.quantity;
  }
  return total;
}

let totalPrice = calculateTotal(cartList);
console.log("Total price of items in cart: $" + totalPrice);  
if (totalPrice >= 100) {
  console.log("You qualify for free shipping!");
} else {
  console.log("Add more items to your cart to qualify for free shipping.");
}
calculateTotal(cartList);

function applyDiscount(total, callback) {
  let discounted = callback(total);
  console.log("Total after discount: $" + discounted);
  return discounted;
}

applyDiscount(totalPrice, (t) => t * 0.9); // 10% discount

*/

// continue to page 150
