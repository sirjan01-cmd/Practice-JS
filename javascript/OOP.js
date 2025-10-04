/*
let dog = {
  dogName: "snowie",
  weight: 6.2,
  breed: "japanese spitz"
};

class ClassName {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }
}

let obj = new ClassName("agr1", "agr2");

function Dog(dogName, weight, color, breed) {
  this.dogName = dogName;
  this.weight = weight;
  this.color = color;
  this.breed = breed;
}

let dog1 = new Dog("habi", 7.0, "brown and white", "shih tzu");

class Dog4 {
  constructor(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
  }
}

let dog2 = new Dog("kali", 6.1, "white", "shih tzu");

console.log(dog.dogName, dog1.dogName, dog2.dogName, "are all dogs", dog.breed, dog1.breed, dog2.breed, "with different breeds", "they also weigh differently", dog.weight, dog1.weight, dog2.weight, "and have different colors", dog.color, dog1.color, dog2.color);

class Person {
  constructor(firstName, lastName = "Smith") {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

let person1 = new Person("Sirach", "De Guzman");
console.log("Hello my name is", person1.firstName, "What is your name?");

person1.firstName = "Janine";
console.log("Hello my name is", person1.firstName, "What is your name?");

class Person2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greet() {
    console.log("Hello", this.firstName, this.lastName);
  }
}

let person2 = new Person2("Alice", "Johnson");
let person3 = new Person2("Bob", "Brown");
person2.greet();
person3.greet();

console.log(person1.getFullName());

class Person4 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greet() {
    console.log("Hello");
  }
  compliment(object, name) {
    return "That's a nice " + object + " " + name + ", I like its simplicity.";
  }
};

let person4 = new Person4();
let compliment = person4.compliment("shirt", "Janine");
console.log(compliment);

class Person5 {
  #firstname;
  #lastname;
  constructor(firstname, lastname) {
    if(firstname.startsWith("M")) {
      this.#firstname = firstname;
  } else {
      this.#firstname = "M" + firstname;
  }
  this.#lastname = lastname;
}
}

let person5 = new Person5("Alice", "Mannie");
console.log(person5);

class Person6 {
  #firstname;
  #lastname;
  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }
  get firstname() {
    return this.#firstname;
  }
  set firstname(firstname) {
    this.#firstname = firstname;
  }
  get lastname() {
    return this.#lastname;
  }
  set lastname(lastname) {
    this.#lastname = lastname;
  }
  set firstname(firstname) {
    if(firstname.startsWith("M")) {
      this.#firstname = firstname;
  } else {
      this.#firstname = "M" + firstname;
  }
}
}

let person6 = new Person6("Alice", "Johnson");
console.log(person6.firstname);
person6.firstname = "Janine";
console.log(person6.firstname);

class Vehicle {
  constructor(color, currentSpeed, maxSpeed) {
    this.color = color;
    this.currentSpeed = currentSpeed;
    this.maxSpeed = maxSpeed;
  }
  move() {
    console.log("moving at", this.currentSpeed);
  }
  accelarate(amount) {
    this.currentSpeed += amount;
  }
}

class Motorcycle extends Vehicle {
  constructor(color, currentSpeed, maxSpeed, fuel) {
    super(color, currentSpeed, maxSpeed);
    this.fuel = fuel;
  }
  doWheelie() {
    console.log("Driving on one wheel!");
  }
}

let motor = new Motorcycle("black", 0, 250, "gasoline");
console.log(motor.color);
motor.accelarate(50);
motor.move();

class Person7 {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  greet() {
    console.log("Hi there!");
  }
}

Person7.prototype.introduce = function() {
  console.log("Hello, my name is", this.firstname);
};

Person7.prototype.favoriteColor = "blue";

let person7 = new Person7("Alice", "Johnson");
console.log(person7.favoriteColor);
person7.introduce();
person7.greet();

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a noise.");
  }
}

Animal.prototype.eat = function() {
  console.log(this.name + " is eating.");
}

let animal = new Animal("Dog");
console.log(animal.name);
animal.speak();
animal.eat();
/*
class TrackEmployeesRecord {
  constructor(firstname, lastname, yearsOfService) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.yearsOfService = yearsOfService;
}
}

let employee1 = new TrackEmployeesRecord("Alice", "Johnson", 5);
console.log(employee1.firstname, employee1.lastname, "has been working for", employee1.yearsOfService, "years.");

let employee2 = new TrackEmployeesRecord("Bob", "Brown", 3);
console.log(employee2.firstname, employee2.lastname, "has been working for", employee2.yearsOfService, "years."); 

let employeeRecord = [];
employeeRecord.push(employee1);
employeeRecord.push(employee2);

console.log(employeeRecord);

TrackEmployeesRecord.prototype.returnFullName = function() {
  return this.firstname + " " + this.lastname;
};
console.log(employee1.returnFullName(), "is an employee for 5 years.");
console.log(employee2.returnFullName(), "is an employee for 3 years.");

class MenuPrice {
  constructor(item, price, itemSold) {
    this.item = item;
    this.price = price;
    this.itemSold = itemSold;
  }
}

let menu1 = new MenuPrice("Burger", 150, 20);
let menu2 = new MenuPrice("Fries", 80, 30);
let menu3 = new MenuPrice("Soda", 50, 25);

MenuPrice.prototype.totalCostPerItem = function() {
  return this.price * this.itemSold;
};
console.log("Total cost of", menu1.item, "is", menu1.totalCostPerItem());
console.log("Total cost of", menu2.item, "is", menu2.totalCostPerItem());
console.log("Total cost of", menu3.item, "is", menu3.totalCostPerItem());
*/

/*
class Employee {
  constructor(firstname, lastname, position, yearsOfService) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.position = position;
    this.yearsOfService = yearsOfService;
  }
  introduce() {
    console.log("Hello, my name is", this.firstname, this.lastname + ".", "I am a", this.position + ".", "I have been working here for", this.yearsOfService, "years.");
  }
}

let employee1 = new Employee("Alice", "Johnson", "Agent", 5);
let employee2 = new Employee("Bob", "Brown", "Supervisor", 3);
employee1.introduce();
employee2.introduce();

class Manager extends Employee {
  constructor(firstname, lastname, position, yearsOfService, department) {
    super(firstname, lastname, position, yearsOfService);
    this.department = department;
  }

  introduce() {
    super.introduce();
    console.log("I manage the", this.department + " department.");
  }
}

let manager1 = new Manager("Charlie", "Davis", "Manager", 8, "Sales");
manager1.introduce();

Employee.prototype.getFullName = function() {
  return this.firstname + " " + this.lastname;
};
console.log(employee1.getFullName());
console.log(manager1.getFullName());
console.log(employee2.getFullName());
*/

// Page 167