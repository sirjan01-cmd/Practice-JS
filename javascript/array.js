// Creating an array

/*
let arr = ["Hi there", 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);
*/
// Accessing array elements

// Improper way of adding values in an array
/*
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
*/

// improper way of adding elements using new indices
/*
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
*/

/*
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
*/

/*
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
   let findIndex1 = shoppingList.indexOf("eggs");
    console.log(findIndex1);

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
let fruits = ["apple", "banana", "orange"];
  console.log(fruits);
  fruits.splice(1, 1, "mango");
  console.log(fruits);
  fruits.push("grape");
  console.log(fruits);
  fruits.shift();
  console.log(fruits);
  fruits.includes("apple");
  console.log(fruits.includes("apple"));
*/

/*
let numbers1 = [10, 25, 30, 5, 60, 15];
  console.log(numbers1);
  numbers1.filter(num => num > 20);
  console.log(numbers1.filter(num => num > 20));
  numbers1.map(num => num * 2);
  console.log(numbers1.map(num => num * 2));
  numbers1.find(num => num > 50);
  console.log(numbers1.find(num => num > 50));
  numbers1.indexOf(60);
  console.log(numbers1.indexOf(60));
  numbers1.slice(0, 3);
  console.log(numbers1.slice(0, 3));
  numbers1.splice(2, 2, 99);
  console.log(numbers1);

let students = [
  {name: "Anna", score: 58},
  {name: "Ben", score: 92},
  {name: "Charlie", score: 75},
  {name: "Dan", score: 60}
];
  console.log(students);
  students.filter(students => students.score > 80);
  console.log(students.filter(students => students.score > 80));
  students.map(students => students.name);
  console.log(students.map(students => students.name));
  students.some(students => students.score < 65);
  console.log(students.some(students => students.score < 65));
  students.every(students => students.score >= 60);
  console.log(students.every(students => students.score >= 60));

let students1 = [
  { name: "Anna", score: 92, passed: true },
  { name: "Ben", score: 55, passed: false },
  { name: "Charlie", score: 75, passed: true },
  { name: "Daisy", score: 60, passed: true },
  { name: "Ethan", score: 45, passed: false }
];
  
let passedStudents = students1

  .filter(student => student.passed)
  .map(student => {
    return { name: student.name, score: student.score };
  });
  passedStudents.sort((a, b) => b.score - a.score);
  console.log(passedStudents);

passedStudents.forEach(student => {
    console.log(`${student.name} has a score of ${student.score}, You are an honor student!`);
  });

  let honorStudent = passedStudents.find(student => student.score > 90);
  if (honorStudent) {
    console.log(`${honorStudent.name} is an honor student with a score of ${honorStudent.score}!`);
  }
  */
// Array methods: filter, map, find, forEach, sort

/*
  let products = [
    {name: "iPhone", price: 45000, instock: true },
    {name: "USB Cable", price: 250, instock: false },
    {name: "Keyboard", price: 1800, instock: true },
    {name: "Mouse", price: 1200, instock: true },
    {name: "Monitor", price: 12000, instock: false }
  ];

  let inStockProducts = products
    .filter(product => product.instock)
    .map(product => {
      return { name: product.name, price: product.price };
    });
    inStockProducts.sort((a, b) => a.price - b.price);
    console.log(inStockProducts);
    inStockProducts.find(product => product.price > 1000);
    console.log(inStockProducts.find(product => product.price > 1000));
    inStockProducts.forEach(product => {
      console.log(`${product.name} is available, current price is ${product.price}.`);
    });
  */

/*
 let a = 25;
 let b = 10;
 let c = 15;

 console.log(b + a);
 console.log(a / c);
 console.log(c % b);
console.log(a, b, c);

let miles = 130;
let kilometers = miles * 1.60934;
console.log(`The distance of ${miles} miles is equal to ${kilometers.toFixed(4)} kilometers.`);
*/

/*
let inches = prompt("Enter your height in inches:");
let kilos = prompt("Enter your weight in kilos:");

inches = Number(inches);
kilos = Number(kilos);

let oneInch = 2.54;
let oneKilo = 2.20462;

let BMI = kilos / ((inches * oneInch) / 100) ** 2;
console.log(`Your BMI is ${BMI.toFixed(2)}.`);
*/
/*
let faveFruits = ["apple", "banana", "orange"];
faveFruits.splice(1, 2, "kiwi", "mango");
console.log(faveFruits);
let faveFruits2 = faveFruits.concat(["grape", "pear"]);
console.log(faveFruits2);
let faveFruits3 = faveFruits2.concat("peach", "plum");
console.log(faveFruits3);
faveFruits3.splice(1, 3);
console.log(faveFruits3);
delete faveFruits3[1];
console.log(faveFruits3);
faveFruits3.splice(1, 0,"watermelon");
console.log(faveFruits3);

let findFaveFruit = faveFruits3.find(function(fruit) {return fruit === "apple"});
console.log(findFaveFruit);

let findFaveFruit2 = faveFruits3.indexOf("watermelon", 0);
console.log(findFaveFruit2);

faveFruits3.sort();
console.log(faveFruits3);
faveFruits3.reverse();
console.log(faveFruits3);
*/

/*
let faveFruits = ["apple", "banana", "orange"];
let faveFruits1 = ["kiwi", "mango", "grape", "pear"];
let faveFruits2 = ["peach", "plum", "watermelon"];

let allFaveFruits = [faveFruits, faveFruits1, faveFruits2];
console.log(allFaveFruits);

let value1 = allFaveFruits[2][1];
console.log(value1);

allFaveFruits = [faveFruits, faveFruits, faveFruits];
console.log(allFaveFruits);

let faveMovies = [["Pursuit to happyness", "Avengers"], ["Thor", "Captain America"]];
console.log(faveMovies[0][1]);
faveMovies[0][1] = "Iron Man";
console.log(faveMovies[0][1]);
console.log(faveMovies);
let flatfaveMovies = faveMovies.flat();
console.log(flatfaveMovies);
*/

/*
const constant = ["can change values"];
constant[0] = "can't change the array itself";
console.log(constant[0]);

constant = ["This will cause an error"];

console.log(constant);
*/

/*
let person = {
  name: "Janine Vizcarra",
  age: 30,
  height: 5.3,
  weight: 85,
  occupation: "Virtual Assistant",
  hobbies: ["eating", "cooking"],
};
console.log(person.name);

// updating object properties
person["age"] = 32;
person["weight"] = 80;
console.log(person);

// other way of updating object properties
person.age = 33;
person.weight = 78;
console.log(person);

person["occupation"] = "Virtual Assistant";

let variable = "occupation";
console.log(person[variable]);

person[variable] = "Senior Virtual Assistant";
console.log(person[variable]);
console.log(person);

variable = "weight";
console.log(person[variable]);
person[variable] = 75;
console.log(person[variable]);
console.log(person);
*/

/*
let people = {
  friends: [
    {
      name: "Arvin",
      lastName: "Ilustrisimo",
      idValue: "Loyal"
    },
    {
      name: "Kenneth",
      lastName: "Jalao",
      idValue: "Loyal"
    },
    {
      name: "Kyle",
      lastName: "Galvez",
      idValue: "Loyal"
    }
  ]
};
console.log(people.friends[0].lastName);
console.log(people.friends[1].name);
console.log(people.friends[2].idValue);

const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
  {test: 'one', score: 55}, ['one','two']];

  theList.shift();
  theList.pop();
  theList.splice(0, 0, "FIRST");
  console.log(theList);
  theList.splice(4, 5, "Hello World");
  console.log(theList);
  theList.splice(2, 2, "MIDDLE");
  console.log(theList);
  theList.push("LAST");
  console.log(theList);

  let storeItems = ["Shampoo", "Soap", "Conditioner"];
  let storeItem1 = {  
    name: "Shampoo",
    brand: "Dove",
    cost: "$5"
  };

  let storeItem2 = {
    name: "Soap",
    brand: "Lux",
    cost: "$3"
  };

  let storeItem3 = {
    name: "Conditioner",
    brand: "Pantene",
    cost: "$7"
  };

  storeItems = [storeItem1, storeItem2, storeItem3];
  console.log(storeItems);
  let item3 = storeItems[2];
  console.log(item3);
  */
 
/*
  let weather = prompt("Enter the weather condition (sunny, rainy, cloudy):", "");
  weather = weather.toLowerCase();

  if (weather === 'sunny') {
    console.log("You should wear sunglasses and sunscreen.");
  } else if (weather === 'rainy') {
    console.log("You should take an umbrella.");
  } else if (weather === 'cloudy') {
    console.log("You might want to wear a light jacket.");
  }

  console.log(weather);
*/

  //  continue to page 71