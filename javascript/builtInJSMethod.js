/*
let s = "Hello"
console.log(
  s.concat(" there!")
  .toUpperCase()
  .replace("THERE", "you")
  .concat(" You're amazing")
);

let x = 7;
console.log(Number.isNaN(x));
console.log(isNaN(x));

let uri = "https://www.example.com/submit?name=janine vizcarra";
let encoded_uri = encodeURI(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURI(encoded_uri);
console.log("Decoded:", decoded_uri);

let encodedStr = "How's%20it%20going%3F";
let normalStr = "How's it going";

console.log("Decoded string:", decodeURIComponent(encodedStr));
console.log("Encoded string:", encodeURIComponent(normalStr));

let webURI = "http://www.basescript.com?data=Hello World";

console.log("Encoded web URI:", encodeURIComponent(webURI));
*/

let str_int = "6";
let int_int = parseInt(str_int);
console.log("Type of ", int_int, " is ", typeof int_int);

let str_float = "7.6";
let int_float = parseInt(str_float);
console.log("Type of ", int_float, " is ", typeof int_float);

let str_binary = "0b101";
let int_binary = parseInt(str_binary);
console.log("Type of ", int_binary, " is ", typeof int_binary);


let uri = "https://www.JanineVizcarra.com/submit?name=janine vizcarra";
let encoded_uri = encodeURI(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURI(encoded_uri);
console.log("Decoded:", decoded_uri);

let arr = ["grapefruit", 4, "hello", 5.6, true];

function printStuff(element, index) {
  console.log("Printing stuff:", element, "on array position", index);
}
arr.forEach(printStuff);

let arr1 = ["squirrel", 5, "Tjed", new Date(), true];
function checkString(element, index) {
  return typeof element === "string";
}

let filteredArr = arr1.filter(checkString);
console.log(filteredArr);

console.log(arr1.every(checkString));

arr.copyWithin(0, 3);
console.log(arr);

let nameOfPeople = [
  "Laurence", "Mike", "Larry", "Kim", "Joanne", 
  "Laurence", "Mike", "Laurence", "Mike", 
  "Laurence", "Mike"
];

let filteredNames = nameOfPeople.filter(function(value, index, array) {
  console.log("Index:", index, "Value:", value, "First occurrence:", array.indexOf(value));
  return array.indexOf(value) === index;
});

console.log("Filtered unique names:", filteredNames);

let arrOfNumbers = [1, 2, 3, 4, 5];
let mappedArr = arrOfNumbers.map(function(value) {
  return value * 2;
});
console.log("Mapped array (values doubled):", mappedArr);

let mappedArrArrow = arrOfNumbers.map(value => value * 2);
console.log("Mapped array (arrow function):", mappedArrArrow);

let nameOfPeople1 = [
  "Laurence", "Mike", "Larry", "Kim", "Joanne",
  "Laurence", "Mike", "Laurence", "Mike"
];

let uniqueNames1 = [...new Set(nameOfPeople1)];

console.log(uniqueNames1);
// ➝ [ 'Laurence', 'Mike', 'Larry', 'Kim', 'Joanne' ]

let s1 = "Hello ";
let s2 = "Javascript";
let result = s1.concat(s2);
console.log(result); // ➝ Hello Javascript

let arr_result = result.split(" ");
console.log(arr_result); // ➝ [ 'Hello', 'Javascript' ]


let favoriteGames = "Dota 2, Call of duty, Assassin's Creed, Far Cry";
let gamesArray = favoriteGames.split(", ");
console.log(gamesArray);
// ➝ [ 'Dota 2', 'Call of duty', "Assassin's Creed", 'Far Cry' ]

let gamesArray1 = gamesArray.join("|");
console.log(gamesArray1);
// ➝ Dota 2|Call of duty|Assassin's Creed|Far Cry

let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
let index_re = poem.indexOf("re");
console.log(index_re);

let searchStr = "When I see my fellow, I say hello";
let pos = searchStr.search("lo");
console.log(pos);

let notFound = searchStr.search("JavaScript");
console.log(notFound);

let pos1 = poem.charAt(10);
console.log(pos1);

let pos2 = poem.charAt(1000);
console.log(pos2);

let str = "Create a substring";
let substr1 = str.slice(5);
let substr2 = str.slice(0,3);
console.log("1:", substr1);
console.log("2:", substr2);

let hi = "Hi buddy";
let new_hi = hi.replace("buddy", "Pascal");
console.log(new_hi);

let s3 = "hello hello";
let new_s3 = s3.replace("hello", "How are you?");
console.log(new_s3);
let new_s4 = s3.replaceAll("hello", "How are you?");
console.log(new_s4);

let caps = "JAVASCRIPT";
let fixed_caps = caps.toLowerCase();
let first_capital = fixed_caps.charAt(0).toUpperCase().concat(fixed_caps.slice(1));
console.log(first_capital);

let message = "hEllo wOrLd, i'M cuRrently lEaRning javaScript";
let lower_message = str => str.toLowerCase();
console.log(lower_message(message));
let message1 = [];
message1 = lower_message(message).split(" ");
console.log(message1);
message1.forEach((element, index) => {
  message1[index] = element.charAt(0).toUpperCase() + element.slice(1).toUpperCase();
});
console.log(message1.join(" "));

const capitalizeWords = str =>
  str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toUpperCase())
    .join(" ");

let message2 = "thIs will be capiTalized for each word";
console.log(capitalizeWords(message2));
// 👉 Output: "This Will Be Capitalized For Each Word"

let x = 34;
console.log(isNaN(x));
console.log(!isNaN(x));
let str2 = "hi";
console.log(isNaN(str));

let y = 3;
let str1 = "finite";
console.log(isFinite(y));
console.log(isFinite(str1));
console.log(isFinite(Infinity))
console.log(isFinite(10 / 0))

let str3 = "integer";
console.log(Number.isInteger(y));
console.log(Number.isInteger(str3));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(2.4));

let z = 1.23456;
let newZ = z.toFixed(2);
let newZ1 = z.toFixed(3);
let newZ2 = z.toPrecision(2);
console.log(newZ, newZ1,newZ2);

let highest = Math.max(2, 56, 12, 1, 233, 4);
console.log(highest);

let lowest = Math.min(2, 56, 12, 1, 233, 4);
console.log(lowest);

let result1 = Math.sqrt(64);
console.log(result1);

let result2 = Math.pow(5, 3);
console.log(result2);

let x1 = 6.78;
let y1 = 5.34;
console.log("X:", x1, "becomes", Math.round(x1));
console.log("Y:", y1, "becomes", Math.round(y1));

let negativeX = -x1;
let negativeY = -y1;
console.log("negativeX:", negativeX, "becomes", Math.ceil(negativeX));
console.log("negativeY:", negativeY, "becomes", Math.ceil(negativeY));

console.log("X:", x1, "becomes", Math.floor(x1));
console.log("Y:", y1, "becomes", Math.floor(y1));

console.log("negativeX:", negativeX, "becomes", Math.floor(negativeX));
console.log("negativeY:", negativeY, "becomes", Math.floor(negativeY));

console.log("X:", x1, "becomes", Math.trunc(x1));
console.log("Y:", y1, "becomes", Math.trunc(y1));

let x2 = 2;
let exp = Math.exp(x2);
console.log("Exp:", exp);
let log = Math.log(exp);
console.log("Log:", log);

let currentDateTime = new Date();
console.log(currentDateTime);

let now2 = Date.now();
console.log(now2);

let milliDate = new Date(1000);
console.log(milliDate);

let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
console.log(stringDate);

let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
console.log(specificDate);

let d = new Date();
console.log("Day of week:", d.getDay());
console.log("Day of month:", d.getDate());
console.log("Month:", d.getMonth());
console.log("Year:", d.getFullYear());
console.log("Seconds:", d.getSeconds());
console.log("Milliseconds:", d.getMilliseconds());
console.log("Time:", d.getTime());

d.setFullYear(2010);
console.log(d);

d.setMonth(9);
console.log(d);

d.setHours(10);
console.log(d);

d.setTime(1622889770682);
console.log(d);

let d1 = Date.parse("June 5, 2021");
console.log(d1);

let d2 = Date.parse("6/5/2021");
console.log(d2);

console.log(d.toDateString());

console.log(d.toLocaleDateString());
let myDate = new Date(2025, 9, 4); // October 4, 2025
let months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let day = myDate.getDate();
let year = myDate.getFullYear();
let monthIndex = myDate.getMonth();
let monthName = months[monthIndex];

console.log(`${monthName} ${day}, ${year}`);
// Output: October 4, 2025

let word = "JavaScript";

function scrambleWord(str) {
  let originalLength = str.length;
  let scrambled = "";

  for (let i = 0; i < originalLength; i++) {
    let randomIndex = Math.floor(Math.random() * str.length);
    scrambled += str[randomIndex];
    str = str.slice(0, randomIndex) + str.slice(randomIndex + 1);
    console.log(`Scrambled: ${scrambled}, Remaining: ${str}`);
  }

  return scrambled;
}

let result3 = scrambleWord(word);
console.log(`Original word: ${word}`);
console.log(`Scrambled word: ${result}`);



// Page 201
// return to page 201