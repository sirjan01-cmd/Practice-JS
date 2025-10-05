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

// Page 190