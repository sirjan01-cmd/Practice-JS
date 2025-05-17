// alert("Saying hi from different file");
/*
let a = 10; // set a value to 10
console.log(a);
// prompt ('Hi how are you?'); similar to alert, but takes input of the user
console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));
*/

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
