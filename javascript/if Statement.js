/*
let products = [
  {name: "iPhone", price: 45000, instock: true },
  {name: "USB Cable", price: 250, instock: false },
  {name: "Laptop", price: 75000, instock: true },
  {name: "Headphones", price: 1500, instock: true },
  {name: "Smartwatch", price: 3000, instock: false }
]

let customerOrder = prompt("Enter the product name you want to order:").trim();
let orderedProduct = products.find(product => product.name.toLowerCase() === customerOrder.toLowerCase());

if (orderedProduct) {
  if (orderedProduct.instock) {
    console.log(`The product ${orderedProduct.name} is available for order. price starts at ${orderedProduct.price} pesos.`);
  } else {
    console.log(`Sorry, the product "${orderedProduct.name}" is currently out of stock.`);
  }
} else {
  console.log(`Sorry, we couldn't find the product "${customerOrder}".`);
}
*/

/*
let checkOutTime = "12:00";
console.log(checkOutTime);
if (checkOutTime === "12:00") {
  console.log("Your checkout time is set for 12:00 PM.");
} else if (checkOutTime !== "12:00") {
  console.log("Your checkout time is not set for 12:00 PM.");
}

let age = parseInt(prompt("Enter your age:"), 10);
if (isNaN(age)) {
  console.log("Please enter a valid age.");
} else if (age >= 21) {
  console.log("Have a drink on us!");
} else if (age >= 19) {
  console.log("You can have a soft drink, cheeseburger and fries.");
} else {
  console.log("Go home kid, eat cookies and drink some milk.");
};
*/
/*
let age1 = parseInt(prompt("Enter your age:"), 10);
let message = isNaN(age1)
 ? "Please enter a valid age." 
 : age1 >= 18
   ? "You're allowed to enter"
    : "Sorry, you're not allowed to enter.";
console.log(message);
*/

/*
let favoriteColor = prompt("What's your favorite color?").trim().toLowerCase();

if (favoriteColor === "blue") {
  console.log("Nice choice!")
} else {
  console.log("That's a nice color too.");
};

let age2 = parseInt(prompt("Enter your age:"), 10);
if (isNaN(age2)) {
  console.log("Please enter a valid age.");
} else if (age2 >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
*/

/*
let usersGrade =  parseInt(prompt("Enter your grade:"), 10);
if (isNaN(usersGrade)) {
  console.log("Please enter a valid grade.");
} else if (usersGrade >= 90) {
  console.log("A")
} else if (usersGrade >= 80 && usersGrade < 90) {
  console.log("B")
} else if (usersGrade >= 70 && usersGrade < 80) {
  console.log("C")
} else {
  console.log("Fail")
}
*/
/*
let day = prompt("Enter a day of the week:").trim().toLowerCase();
let temperature = parseFloat(prompt("What's the temperature today?"));
let allDay = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

if (!allDay.includes(day)) {
  console.log("Please enter a valid day.");
} else if (isNaN(temperature)) {
  console.log("Please enter a valid temperature.");
} else if (temperature >= 30) {
  console.log(`It's a hot ${day}. Stay hydrated, and wear light clothing.`);
} else if (temperature >= 20 && temperature < 30) {
  console.log(`It's a nice ${day}. Enjoy your day!`);
} else {
  console.log(`It's a cool ${day}. Don't forget to wear a jacket.`);
}
*/

/*
let userName = prompt("Enter your username:").trim();
let password = prompt("Enter your password:").trim();

if (userName === "admin" && password === "1234") {
  console.log("Login successful!");
} else {
  console.log("Invalid username or password.");
}
*/

/*
let age = parseFloat(prompt("Enter your age:"));
let citizenship = prompt("Enter your citizenship:").trim().toLowerCase();

if (isNaN(age)) {
  console.log("Please enter a valid age.");
} else if (age >= 18 && citizenship === "filipino") {
  console.log(`You're ${age} and a ${citizenship} citizen. You are eligible to vote.`);
} else if(age < 18) {
  console.log(`You're ${age}, you're not eligible to vote yet.`);
} else {
  console.log(`You're ${citizenship}, you are not eligible to vote.`);
}
*/

/*
let product = [
  {name: "Laptop", price: 75000, instock: true },
  {name: "Smartphone", price: 45000, instock: false },
  {name: "Tablet", price: 30000, instock: true },
  {name: "Headphones", price: 1500, instock: true },
  {name: "Smartwatch", price: 3000, instock: false },
  {name: "Charger", price: 1000, instock: true },
  {name: "Bluetooth Speaker", price: 2500, instock: true },
  {name: "External Hard Drive", price: 5000, instock: false },
  {name: "Webcam", price: 2000, instock: true },
  {name: "Microphone", price: 3000, instock: true },
  {name: "Portable SSD", price: 8000, instock: false },
  {name: "Gaming Mouse", price: 2500, instock: true },
  {name: "Mechanical Keyboard", price: 4500, instock: false },
  {name: "Gaming Chair", price: 12000, instock: true }
];

let selectedProducts = prompt("Enter the names of the products you want to buy (comma-separated):").trim().toLowerCase().split(",");
let funds = parseFloat(prompt("Enter your available funds:"));

let totalCost = 0;
let discount = 0.10
let purchasedItems = [];
let unavailableProducts = [];

if (isNaN(funds) || funds < 0) {
  console.log("Please enter a valid amount of funds.");
} else {
  for (let productName of selectedProducts) {
    productName = productName.trim();
    let item = product.find(p => p.name.toLowerCase() === productName);
    if (item) {
      if (item.instock) {
        totalCost += item.price;
        purchasedItems.push(item.name);
      } else {
        unavailableProducts.push(item.name);
      }
    } else {
      console.log(` "${productName}" is not in our catalog.`);
    }
  }

  if (unavailableProducts.length > 0) {
    console.log(`The following products are unavailable: ${unavailableProducts.join(", ")}`);
  }

  if (purchasedItems.length >= 3) {
    console.log("You qualified for a 10% discount");
    totalCost = totalCost * (1 -discount);
  } 

  if (totalCost > funds) {
    console.log(`Your total is ${totalCost}, but you only have ${funds}. Please add more funds to complete the purchase.`);
  } else if (totalCost === 0) {
    console.log("You didn't select any available products.");
  } else {
    console.log(`Your total is ${totalCost}. Thank you for your purchase!`);
  }

};

*/

/*
let randomNumber = Math.random();
randomNumber = randomNumber * 10;
randomNumber = Math.floor(randomNumber);

let userChoice = parseFloat(prompt("Enter a number between 0 and 9:"));

switch (randomNumber) {
  case 0:
    console.log("You will have great day ahead");
    break;
  case 1:
    console.log("Something beautiful will come tomorrow");
    break;
  case 2:
    console.log("Take a deep breath, tomorrow is another day");
    break;
  case 3:
    console.log("Keep pushing forward, success is near");
    break;
  case 4:
    console.log("Embrace the challenges, they will make you stronger");
    break;
  case 5:
    console.log("Believe in yourself, you are capable of amazing things");
    break;
  case 6:
    console.log("Tomorrow is a new opportunity to shine");
    break;
  case 7:
    console.log("Stay positive, good things are coming your way");
    break;
  case 8:
    console.log("You have the power to create your own happiness");
    break;
  case 9:
    console.log("Believe in your dreams, they are worth pursuing");
    break;
  default:
    console.log("You're confused, but that's okay! Try again.");
}

let random = Math.floor(Math.random() * 6);
let userInput = prompt("Enter your question")

switch (random) {
  case 0:
    console.log("Yes");
    break;
  case 1:
    console.log("No");
    break;
  case 2:
    console.log("Maybe");
    break;
  case 3:
    console.log("Ask again later");
    break;
  case 4:
    console.log("Definitely");
    break;
  case 5:
    console.log("I wouldn't count on it");
    break;
  default:
    console.log("unknown");
};
*/

let i = 0;
while (i <= 5) {
  console.log("This is iteration number " + i);
  i++;
}

let someArray = ["Mike", "Sarah", "Jessica", "Tom", "Emily", "David"];
let notFound = true;

while (notFound && someArray.length > 0) {
  let name = someArray.shift();
  if (name === "Jessica") {
    console.log("Found Jessica!");
    notFound = false;
  } else {
    someArray.shift();
    console.log("Not Jessica, checking next name...");
  }
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

let guessedNumber = 10;
let randomNumber1 = Math.floor(Math.random() * 11);
let isCorrect = false;

while (!isCorrect) {
  if (guessedNumber === randomNumber1) {
    console.log("Congratulations! You guessed the number correctly.");
    isCorrect = true;
  } else if (guessedNumber < randomNumber1) {
    console.log("Your guess is too low. Try again.");
    guessedNumber = parseInt(prompt("Enter a new guess:"), 10);
  } else {
    console.log("Your guess is too high. Try again.");
    guessedNumber = parseInt(prompt("Enter a new guess:"), 10);
  }
}

// page 89