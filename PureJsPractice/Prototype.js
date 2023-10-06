// // Create a constructor function for a "Person" object
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// // Add a method to the prototype of the "Person" constructor
// Person.prototype.getFullName = function () {
//   return this.firstName + " " + this.lastName;
// };

// // Create instances of the "Person" object
// var person1 = new Person("John", "Doe");
// var person2 = new Person("Jane", "Smith");

// // Call the method from the prototype
// console.log(person1.getFullName()); // Output: "John Doe"
// console.log(person2.getFullName()); // Output: "Jane Smith"

const Person = {
  name: "Yogesh",
  city: "Amravati",
  getDetails: function () {
    console.log(this.name + " " + this.city);
  },
};

const person2 = {
  name: "Shubham",
};

person2.__proto__ = Person;

console.log(person2.name);
console.log(person2.city);
console.log(person2.getDetails());
// console.log(Person);
