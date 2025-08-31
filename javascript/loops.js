/*
let counter = 0;
counter++;
while (counter < 100) {
  console.log("This is iteration number " + counter);
  counter++;
}

console.log(counter);
*/

/*
let questions = [
  "What is the capital of France?",
  "What is 2 + 2?",
  "What is the largest planet in our solar system?",
  "What is the boiling point of water?",
  "What is the chemical symbol for gold?"
];

let answers = ["Paris", "4", "Jupiter", "100°C", "Au"];

while (true) {

  let askUser = prompt("Do you want to play? (yes/no)").toLowerCase();

    if (askUser === "no") {
      console.log("Thank you for playing!");
      break;
    }

  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i]).trim();

    if (userAnswer.toLowerCase() === answers[i].toLowerCase()) {
      console.log("Correct!");
      score++;
    } else {
      console.log(`Incorrect. The correct answer is ${answers[i]}.`);
    }
  }
  console.log(`Your total score is ${score} out of ${questions.length}.`);
}
*/

/*
let shoppingList = [];

while (true) {
  let action = prompt("See options: add / view / remove / exit").toLowerCase().trim();

  if (action === "add") {
    let item = prompt("Enter the item to add:").trim();

    if (item) {
      shoppingList.push(item);
      console.log(`${item} added to your shopping list.`);
    } else {
      console.log("Item cannot be empty.");
    }

  } else if (action === "view") {
    if (shoppingList.length === 0) {
      console.log("Your shopping list is empty.");
    } else {
      console.log("Your shopping list:");
      for (let i = 0; i < shoppingList.length; i++) {
        console.log(`- ${shoppingList[i]}`);
      }
    }

  } else if (action === "remove") {
    let itemToRemove = prompt("Enter the item to remove:").trim();
    let index = shoppingList.indexOf(itemToRemove);

    if (index !== -1) {
      shoppingList.splice(index, 1);
      console.log(`${itemToRemove} removed from your shopping list.`);
    } else {
      console.log(`${itemToRemove} not found in your shopping list.`);
    }
  } else if (action === "exit") {
    console.log("Exiting the shopping list manager. Goodbye!");
    break;

  } else {
    console.log("Action not recognized. Please try again.");
  }
}
*/

/*
let password = "Yourdoinggreat"

do {
  let userInput = prompt("Enter the password: ");
  if (userInput === password) {
    console.log("Access granted.");
    break;
  } else {
    console.log("Incorrect password. Please try again.");
  }
} while (true);
*/

/*
for (let i = 0; i <= 10; i++) {
  console.log("This is iteration number " + i);
}

let myWork = [];

for (let i = 1; i <= 10; i++) {
  myWork.push({ 
    name: `lesson ${i}`, 
    status: i % 2 !== 0 ? "completed" : "pending"
  });
}
console.log(myWork);
*/

/*
let array = [];        // main grid
let value = 64;        // number of cells
let counter = 0;       // main counter
let tempRow = [];      // row array

for (let i = 1; i <= value; i++) {
  // push the counter into the current row
  tempRow.push(counter++);

  // when divisible by 8, the row is complete
  if (i % 8 === 0) {
    array.push(tempRow);   // push the row to the main array
    tempRow = [];          // reset for the next row
  }
}

// no need for extra checks — the loop already takes care of pushing rows


console.table(array);
*/

/*
let array1 = [];

for (let i = 0; i < 10; i++) {
  array1.push(i);
}
console.log(array1);
for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
} for (let i of array1) {
  console.log(i);
}
*/

/*
let shampoo = {
  brand: "BrandName",
  volume: "500ml",
  price: 10.99,
  ingredients: ["Water", "Sodium Laureth Sulfate", "Cocamidopropyl Betaine"],
  isAvailable: true
}
for (let prop in shampoo) {
  console.log(shampoo[prop]);
}
*/

/*
let count = 0;
while (count <= 20) {
  console.log("Count is: " + count);
  count += 2;
}
*/

/*
let password = "Dontgiveup"
let attempt = 3;

do {
  let userInput = prompt("Enter the password: ");
  attempt--;

  if (userInput === password) {
    console.log("Access granted.");
    break;
  } else if (attempt === 0) {
    console.log("No more attempts left. Access denied.");
    break;
  } else {
    console.log("Incorrect password. Please try again.");
  }
} while (attempt > 0);
console.log("Attempts left: " + attempt);
*/

/*
let multiplicationTable = [];

for (let i = 1; i <= 10; i++) {
  multiplicationTable.push(i * 5);
}

console.log("Multiplication table (x5): " + multiplicationTable.join(", "));

let fruits = ["apple", "banana", "cherry", "mango"];

for (let fruit of fruits) {
  console.log(fruit.toUpperCase());
}

let person1 = { name: "Janine", age: 30, job: "VA" };

for (let key in person1) {
  console.log(key + ": " + person1[key]);
}
*/

/*
let students = [
  { name: "Janine", age: 20, grades: [85, 90, 78] },
  { name: "Kyle", age: 22, grades: [88, 76, 95] },
  { name: "Arvin", age: 19, grades: [70, 60, 80] }
];

for (let i = 0; i < students.length; i++) {
  console.log(`Name: ${students[i].name}, Age: ${students[i].age}`);
}

let grades = [students[0].grades, students[1].grades, students[2].grades];

for (let i = 0; i < grades.length; i++) {
  let total = 0;
  for (let j = 0; j < grades[i].length; j++) {
    total += grades[i][j];
  }
  let average = total / grades[i].length;
  if (average >= 75) {
    console.log(`Student ${students[i].name} has passed with an average of ${average.toFixed(2)}`);
  }
  console.log(`Student ${students[i].name} has an average of ${average.toFixed(2)}`);
  for (let prop in students[i]) {
    console.log(prop + ": " + students[i][prop]);
  }
}
*/
/*
let students = [
  { name: "Janine", age: 20, grades: [85, 90, 78] },
  { name: "Kyle", age: 22, grades: [88, 76, 95] },
  { name: "Arvin", age: 19, grades: [70, 60, 80] }
];

for (let i = 0; i < students.length; i++) {   // 1️⃣ error dito

  let total = 0;
  for (let j = 0; j < students[i].grades.length; j++) {
    total += students[i].grades[j];
  }

  let average = total / students[i].grades.length;   // 2️⃣ error dito

  if (average > 75) {
    console.log(`${students[i].name} passed with average: ${average}`);
  } else {
    console.log(`${students[i].name} failed with average: ${average}`);
  }

  for (let char of students[i].grades) {   // 3️⃣ error dito
    total += char;
    console.log(char);
  }
}
*/

/*
let grades = [85, 40, 90, 55, 78];
let total = 0;
let count = 0;

for (let i = 0; i < grades.length; i++) {
  if (grades[i] < 50) {
    continue; // Skip grades below 50
  }
  total += grades[i];
  count++;

}

let average = total / count;
console.log("Average grade (passing): " + average);
*/

// while loop, do while loop, for loop,two ways to loop over arrays and objects for in and for of, used break and continue