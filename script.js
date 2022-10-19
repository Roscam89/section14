'use strict';

const Person = function (firstName, birthYear, job) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.job = job;
};

const max = new Person('Maxim', 1989, 'truck driver');
//console.log(max);
//console.log(max instanceof Person);

//=============Prototypes===========//
// console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};
// max.calcAge();

// console.log(max.__proto__);
// console.log(max.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(max));
// console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
//console.log(max.hasOwnProperty('firstName'));
//console.log(max.hasOwnProperty('species'));

const arr = [3, 6, 6, 5, 6, 9, 9];

Array.prototype.unique = function () {
  return [...new Set(this)];
};
// console.log(arr.unique());

//------------------------------------------------

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
// console.log(mercedes);

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();
