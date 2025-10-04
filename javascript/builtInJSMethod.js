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


// Page 167